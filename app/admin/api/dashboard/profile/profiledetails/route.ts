import { NextRequest, NextResponse } from "next/server";
import { getSesstion, logIt } from "../../../utils";
import { userCollection } from "@/models/Users";
import { UserInterface } from "@/lib/features/profile/profileSlice";


export async function GET(_request: NextRequest) {
    try {

        const session = await getSesstion();

        const admin = await userCollection.findById(session.user.userId);


        if(admin) delete admin.password;

        return NextResponse.json({
            isSuccessful: true,
            details: admin
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

export async function PUT(request: NextRequest) {
    try {
        
        const session = await getSesstion();

        const {fullName, email, phoneNumber}: UserInterface = await request.json();

        const admin = await userCollection.findById(session?.user!!.userId);

        if (!admin) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Accountt not found."
            }, {
                status: 404
            });
        }


        const record = await userCollection.findByIdAndUpdate(admin?._id as string, {
            fullName, email, phoneNumber
        });

        return NextResponse.json({
            isSuccessful: true,
            message: "Profile updated Successfully",
            details: record
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