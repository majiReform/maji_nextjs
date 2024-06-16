import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./app/admin/api/utils";

export async function middleware(request: NextRequest) {
    let cookie = request.cookies.get("session");

    if (!cookie) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return await updateSession(request);


}


export const config = {
    matcher: [
        '/admin/dashboard/:path*'
    ]
}

