import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const requestHeaders = new Headers(req.headers);
  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token.api_token}`);
  }
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:slug*",
};
