import { NextRequest, NextResponse } from "next/server";

// This middleware will redirect users to the /home page when they access the root (/) or login (/login) or signup (/signup) pages.
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/" || path === "/login" || path === "/signup";

  if (isPublicPath) {
    const token = request.cookies.get("token");
    if (token) {
      // If the user is already logged in, redirect them to the /profile page.
      return NextResponse.redirect(new URL("/profile", request.url));
    }
  }

  if (!isPublicPath) {
    const token = request.cookies.get("token");
    if (!token) {
      // If the user is not logged in, redirect them to the /login page.
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// The config object specifies the paths that this middleware should apply to.
export const config = {
  matcher: ["/", "/login", "/signup"],
};
