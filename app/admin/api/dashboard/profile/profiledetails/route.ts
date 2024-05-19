import { NextRequest, NextResponse } from "next/server";
import { getSesstion, logIt } from "../../../utils";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import { UserInterface, userCollection } from "@/models/Users";
import { ObjectId } from "mongodb";


export async function GET(request: NextRequest) {
    try {

        const session = await getSesstion();

        const admin = await userCollection.findOne({_id: new ObjectId(session.user.userId)});


        if(admin) delete admin.password;

        return NextResponse.json({
            isSuccessful: true,
            adminDetails: admin
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

        const admin = await userCollection.findOne({_id: new ObjectId(session?.user!!.userId)});

        if (!admin) {
            return NextResponse.json({
                isSuccessful: false,
                message: "Accountt not found."
            }, {
                status: 404
            });
        }


        await userCollection.findByIdAndUpdate(admin?._id as string, {
            fullName, email, phoneNumber
        });

        return NextResponse.json({
            isSuccessful: true,
            message: "Profile updated Successfully"
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