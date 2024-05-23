import { userCollection } from "models/Users";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { fullName, email, phoneNumber, password } = await request.json();

        const admin = await userCollection.findOne({ email });

        if (admin) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Admin already exist"
            }, {
                status: 409
            });
        }

        const hashedPassword = bcrypt.hashSync(password as string, bcrypt.genSaltSync(10));

        await userCollection.create({ fullName, email, phoneNumber, password: hashedPassword });

        return NextResponse.json({
            isSuccessful: true,
            res: "Registered"
        }, {
            status: 201
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            isSuccessful: false,
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}