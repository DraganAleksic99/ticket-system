import { NextRequest, NextResponse } from "next/server";
import { Params } from "next/dist/server/request/params";
import { buildUrl } from "@/app/utils/url-helpers";
import { sendOTPLink } from "@/app/utils/send-otp-link";

export async function POST(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { tenant } = await params;
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const type = formData.get("type") === "recovery" ? "recovery" : "magiclink";

  const errorUrl = buildUrl(`/error?type=${type}`, tenant as string, request);
  const thanksUrl = buildUrl("/magic-thanks", tenant as string, request);

  const otpSuccess = await sendOTPLink(email, type, tenant as string, request);
  if (!otpSuccess) {
    return NextResponse.redirect(errorUrl, 302);
  } else {
    return NextResponse.redirect(thanksUrl, 302);
  }
}
