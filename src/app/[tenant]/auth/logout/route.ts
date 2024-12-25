import { NextRequest, NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/app/supabase-utils/cookies-util-client";
import { buildUrl } from "@/app/utils/url-helpers";
import { Params } from "next/dist/server/request/params";

export async function GET(request: NextRequest, { params }: { params: Params}) {
  const { tenant } = await params;
  const supabase = await getSupabaseCookiesUtilClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(buildUrl("/", tenant as string, request));
}
