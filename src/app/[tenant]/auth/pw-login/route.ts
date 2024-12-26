import { NextRequest, NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";
import { Params } from "next/dist/server/request/params";
import { buildUrl } from "@/app/utils/url-helpers";

export async function POST(request: NextRequest, { params }: { params: Params} ) {
  const { tenant } = await params;
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await getSupabaseCookiesUtilClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email ,
    password,
  });

  const userData = data?.user;
  
  if (error || !userData || !userData.app_metadata?.tenants.includes(tenant)) {
    await supabase.auth.signOut();
    return NextResponse.redirect(
      buildUrl("/error?type=login-failed", tenant as string, request),
      { status: 302 }
    );
  }
  return NextResponse.redirect(buildUrl("/tickets", tenant as string, request), {
    status: 302,
  });
}
