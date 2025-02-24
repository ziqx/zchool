import { NextRequest, NextResponse } from "next/server";
import { ZiqxAuth } from "ziqx";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  // If the code is missing, redirect the user to the login page
  if (!code) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const auth = new ZiqxAuth();
  // validate the code
  const isValidatedToken = (await auth.strictValidate(code));
  // If the code is valid, redirect the user to the admin page and set the admin_token cookie
  if (isValidatedToken) {
    const response = NextResponse.redirect(new URL("/admin", req.url));
    // set the admin_token cookie
    response.cookies.set("admin_token", code, {
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return response;
  }
  // If the code is not valid, redirect the user to the auth page
  return NextResponse.redirect(new URL("/login", req.url));
}
