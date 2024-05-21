import { userCollection } from "@/models/Users";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { encrypt, logIt } from "../utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    try {

        const admin = await userCollection.findOne({ email });

        console.log(admin);

        if (!admin) {
            return NextResponse.json({
                isSuccessful: false,
                message: "No user found"
            }, {
                status: 404
            });
        }

        const passwordsMatch = bcrypt.compareSync(password, admin!!.password as string);

        if (!passwordsMatch) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Passwords don't match"
            }, {
                status: 400
            });
        }


        const session = await encrypt({
            user: {
                fullName: admin.fullName,
                userId: admin!!._id as string,
                email: admin.email,
                role: "admin"
            }
        });

        console.log("Ses", session, "ses");

        cookies().set("session", session, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60
        });

        return NextResponse.json({
            isSuccessful: true,
            message: "Loggedin successfully!"
        }, {
            status: 200
        });


    } catch (error) {
        logIt({ value: error, level: "error" });
        return NextResponse.json({
            isSuccessful: false,
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}