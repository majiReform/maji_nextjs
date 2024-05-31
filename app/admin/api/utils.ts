import { NextRequest, NextResponse } from "next/server";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.AUTH_KEY;

export async function encrypt(payload: JWTPayload) {
    return await new SignJWT(payload)
    .setProtectedHeader({axl: "HS256"})
    .setIssuedAt()
    .setExpirationTime("1 hour from now")
    .sign(new TextEncoder().encode(secretKey));
}


export async function decypt(jwtValue: string) {
    const { payload } = await jwtVerify(jwtValue, new TextEncoder().encode(secretKey), {
        algorithms: ["HS256"]
    });

    return payload;
}

export function getSesstion(): any {
    const session = cookies().get("session")?.value;

    if(!session) return null;
    return decypt(session);
}

export async function updateSession(request: NextRequest) {

    try {
        
        const session = request.cookies.get("session");

        const decryptedPayload = await decypt(session!!.value);
    
        const res = NextResponse.next();
        res.cookies.set({
            name: "session",
            value: await encrypt(decryptedPayload),
            httpOnly: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60
        });
    
        return res;

    } catch (error: any) {
        return NextResponse.redirect(new URL(`/admin/login?reason=${error.name == "JWTExpired" ? "sessionexpired" : "error"}`, request.url));
    }


}

interface LogItInterface {
    value: any | any[]
    level: "information" | "error"
}

export async function logIt(val: LogItInterface) {
    if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "test") {
        console.log(`\n(${val.level.toLocaleUpperCase()}):`, val.value, "\n");
    } else {
        console.log(`\n(${val.level.toLocaleUpperCase()}):`, "Internal server error.\n");
    }
}
