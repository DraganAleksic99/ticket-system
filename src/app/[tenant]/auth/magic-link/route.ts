import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSupabaseAdminClient } from "@/app/supabase-utils/admin-client";
import { Params } from "next/dist/server/request/params";
import { buildUrl } from "@/app/utils/url-helpers";

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { tenant } = await params;
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const type = formData.get("type") === "recovery" ? "recovery" : "magiclink";
  const supabaseAdmin = getSupabaseAdminClient();

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type,
    }
  );

  if (error) {
    return NextResponse.redirect(
      buildUrl("/error?type=magiclink", tenant as string, request),
      302
    );
  }

  const hashed_token = linkData.properties?.hashed_token;

  const constructedLink = buildUrl(
    `/auth/verify?hashed_token=${hashed_token}&type=${type}`,
    tenant as string,
    request
  );

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });

  const initialSentence =
    type === "recovery"
      ? "Hi there, you requested a password change!"
      : "Hi there, this is a custom magic link email!";

  const secondSentenceEnding = type === "recovery" ? "change it" : "log in";

  await transporter.sendMail({
    from: "Your Company <your@mail.whatever>",
    to: email,
    subject: "Magic Link",
    html: `
    <h1>${initialSentence}</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> to ${secondSentenceEnding}.</p>
    `,
  });

  const thanksUrl = buildUrl("/magic-thanks", tenant as string, request);
  return NextResponse.redirect(thanksUrl, 302);
}
