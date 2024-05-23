import { NextRequest, NextResponse } from "next/server";
import { getSesstion, logIt } from "../../../utils";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { userCollection } from "@/models/Users";
import { ObjectId } from "mongodb";

export async function PUT(request: NextRequest) {
    try {

        const session = await getSesstion();

        const {currentPassword, newPassword} = await request.json();

        const admin = await userCollection.findById(session?.user!!.userId);

        if (!admin) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Account not found."
            }, {
                status: 404
            });
        }

        const doPasswordsMatch = compareSync(currentPassword, admin.password as string);

        if (!doPasswordsMatch) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Invalid password"
            }, {
                status: 400
            });
        }

        if (currentPassword == newPassword) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Old password can't be same as new password"
            }, {
                status: 409
            });
        }

        const hashedPassword = hashSync(newPassword, genSaltSync(10));

        await userCollection.findByIdAndUpdate(admin?._id as string, {password: hashedPassword});

        return NextResponse.json({
            isSuccessful: true,
            message: "Password changed Successfully"
        }, {
            status: 200
        });

    } catch (error) {
        logIt({value: error, level: "error"});
        return NextResponse.json({
            isSuccessful: false,
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}