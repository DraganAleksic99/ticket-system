import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./app/supabase-utils/req-res-client";

export async function middleware(request: NextRequest) {
  const { supabaseClient, response } = getSupabaseReqResClient({ request });
  const session = await supabaseClient.auth.getSession();

  const requestedPath = request.nextUrl.pathname;
  const user = session.data?.session?.user;

  const [tenant, ...restOfPath] = requestedPath.substr(1).split("/");
  const applicationPath = "/" + restOfPath.join("/");

  if (!/[a-z0-9-_]+/.test(tenant)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  if (applicationPath.startsWith("/tickets")) {
    if (!user) {
      return NextResponse.redirect(new URL(`/${tenant}`, request.url));
    } else if (!user.app_metadata.tenants?.includes(tenant)) {
      return NextResponse.rewrite(new URL("/not-found", request.url));
    }
  } else if (applicationPath === "/") {
    if (user) {
      return NextResponse.redirect(new URL(`/${tenant}/tickets`, request.url));
    }
  }

  return response.value;
}

// exclude middleware for static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
