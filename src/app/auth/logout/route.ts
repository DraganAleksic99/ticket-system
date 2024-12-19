import { NextRequest, NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";

export async function GET(request: NextRequest) {
  const supabase = await getSupabaseCookiesUtilClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/", request.url));
}
