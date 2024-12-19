import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./app/supabase-utils/req-res-client";

export async function middleware(request: NextRequest) {
  const { supabaseClient, response } = getSupabaseReqResClient({ request });
  const session = await supabaseClient.auth.getSession();

  const requestedPath = request.nextUrl.pathname;
  const user = session.data?.session?.user;

  if (requestedPath.startsWith("/tickets")) {
    if (!user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else if (requestedPath === "/") {
    if (user) {
      return NextResponse.redirect(new URL("/tickets", request.url));
    }
  }

  return response.value;
}

// exclude middleware for static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
