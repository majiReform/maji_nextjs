import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const cookie = request.cookies.get("session");

    if (!cookie) {
        return NextResponse.json({
            isSuccessful: true,
            message: "Already logged out"
        }, {
            status: 200
        });
    }

    cookies().delete("session");

    return NextResponse.json({
        isSuccessful: true,
        message: "Logged out successfully!"
    }, {
        status: 200
    });

}