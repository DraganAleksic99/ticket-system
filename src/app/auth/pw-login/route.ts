import { NextRequest, NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await getSupabaseCookiesUtilClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email ,
    password,
  });

  const userData = data?.user;
  
  if (error || !userData) {
    return NextResponse.redirect(
      new URL("/error?type=login-failed", request.url),
      { status: 302 }
    );
  }
  return NextResponse.redirect(new URL("/tickets", request.url), {
    status: 302,
  });
}
