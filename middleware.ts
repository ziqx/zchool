import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ZiqxAuth } from "ziqx";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value ?? null;

  const auth = new ZiqxAuth();
  const isValidatedToken = token && auth.isTokenValid(token);

  if (!isValidatedToken) {
    return NextResponse.redirect(new URL("/admin-auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
