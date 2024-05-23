import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../../utils";
import { videosCollection } from "models/Videos";

interface ParamsInterface {
    params: {
        id: string
    }
}

export async function GET(_request: NextRequest, {params}: ParamsInterface) {
    try {
        
        const id = params.id;

        const video = await videosCollection.findById(id);

        return NextResponse.json({
            isSuccessful: true,
            video
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



export async function DELETE(_request: NextRequest, {params}: ParamsInterface) {
    
    try {
        const id = params.id;

        const deletedVideo = await videosCollection.findByIdAndDelete(id);

        return NextResponse.json({
            isSuccessful: true,
            deletedVideo,
            deletedId: id
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

