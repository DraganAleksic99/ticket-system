import { NextRequest } from "next/server";

export function urlPath(applicationPath: string, tenant: string) {
  return `/${tenant}${applicationPath}`;
}

export function buildUrl(applicationPath: string, tenant: string, request: NextRequest) {
  return new URL(urlPath(applicationPath, tenant), request.url);
}
