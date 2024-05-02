import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  console.log("Middleware executed.");

  const authToken = request.cookies.get("authToken")?.value;

  const loggedInUserNotAccessPath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (request.nextUrl.pathname === "/api/login") {
    return;
  }
  if (loggedInUserNotAccessPath) {
    //accessing not secured route
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    //accessing secured route
    if (!authToken)
      return NextResponse.redirect(new URL("/login", request.url));
  }
}

//the middleware will run for the below urls
export const config = {
  //   matcher: "/add-task",
  //   matcher: "/api/:path*", //for all the api path the middleware will run

  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
