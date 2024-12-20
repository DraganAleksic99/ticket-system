import { NextRequest, NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");
  const supabase = await getSupabaseCookiesUtilClient();

  const { error } = await supabase.auth.verifyOtp({
    type: "magiclink",
    token_hash: hashed_token as string,
  });

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=invalid_magiclink", request.url)
    );
  } else {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }
}
