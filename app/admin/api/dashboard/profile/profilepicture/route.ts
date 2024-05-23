import { NextRequest, NextResponse } from "next/server";
import { getSesstion, logIt } from "../../../utils";
import { userCollection } from "../../../../../../models/Users";

export async function PUT(request: NextRequest) {
    try {

        const session = await getSesstion();
        
        const { newProfilePicture } = await request.json();

        await userCollection.findByIdAndUpdate(session!!.user!!.userId, {
            profilePicture: newProfilePicture
        });

        return NextResponse.json({
            isSuccessful: true,
            message: "Profile changed successfully",
            newProfilePicture
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