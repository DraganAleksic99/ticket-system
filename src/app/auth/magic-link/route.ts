import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSupabaseAdminClient } from "@/app/supabase-utils/admin-client";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  const supabaseAdmin = getSupabaseAdminClient();

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type: "magiclink",
    }
  );

  const hashed_token = linkData.properties?.hashed_token;

  const constructedLink = new URL(
    `/auth/verify?hashed_token=${hashed_token}`,
    request.url
  );

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });

  await transporter.sendMail({
    from: "Your Company <your@mail.whatever>",
    to: email,
    subject: "Magic Link",
    html: `
      <h1>Hi there, this is a custom magic link email!</h1>
      <p>Click <a href="${constructedLink.toString()}">here</a> to log
      in.</p>
    `,
  });

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      302
    );
  }

  const thanksUrl = new URL("/magic-thanks", request.url);
  return NextResponse.redirect(thanksUrl, 302);
}
