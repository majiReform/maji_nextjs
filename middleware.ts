import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/admin/api/utils";

export async function middleware(request: NextRequest) {
    let cookie = request.cookies.get("session");

    console.log("Za cookie", cookie, "ends here");
    
    if(!cookie) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return await updateSession(request);

    // return NextResponse.next();

}


export const config = {
    matcher: [
        '/admin/dashboard/:path*',
        '/admin/api/((?!login|logout).*)'
    ]
}

