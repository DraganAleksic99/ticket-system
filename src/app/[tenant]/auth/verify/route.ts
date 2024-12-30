import { NextRequest, NextResponse } from "next/server";
import { MobileOtpType, EmailOtpType } from "@supabase/supabase-js";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";
import { Params } from "next/dist/server/request/params";
import { buildUrl } from "@/app/utils/url-helpers";

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { tenant } = await params;
  const supabase = await getSupabaseCookiesUtilClient();
  const { searchParams } = new URL(request.url);
  
  const hashed_token = searchParams.get("hashed_token");
  const isRecovery = searchParams.get("type") === "recovery";
  const isSignUp = searchParams.get("type") === "signup";

  let verifyType:  MobileOtpType | EmailOtpType = "magiclink";

  if (isRecovery) verifyType = "recovery";
  else if (isSignUp) verifyType = "signup";

  const { error } = await supabase.auth.verifyOtp({
    type: verifyType,
    token_hash: hashed_token as string,
  });

  if (error) {
    return NextResponse.redirect(
      buildUrl("/error?type=invalid_magiclink", tenant as string, request)
    );
  } else {
    if (isRecovery) {
      return NextResponse.redirect(
        buildUrl("/tickets/change-password", tenant as string,  request)
      );
    } else {
      return NextResponse.redirect(buildUrl("/tickets", tenant as string, request));
    }
  }
}
