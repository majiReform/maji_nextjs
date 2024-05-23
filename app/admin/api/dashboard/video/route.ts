import { thematicAreaCollection } from "../../../../../models/ThematicArea";
import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../utils";
import { VideoInterface } from "@/lib/features/videos/videosSlice";
import { videosCollection } from "../../../../../models/Videos";

export async function POST(request: NextRequest) {
    try {
        
        const {
            title,
            details,
            youtubeURL
        }: VideoInterface = await request.json();

        const videoId = await videosCollection.create({
            title, details, youtubeURL
        });

        return NextResponse.json({
            isSuccessful: true,
            addedDetails: videoId
        }, {
            status: 201
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

export async function GET(request: NextRequest) {
    try {
        
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page");
        const limit = searchParams.get("limit");

        const videos = await videosCollection.paginate({}, parseInt(page as string), parseInt(limit as string));

        return NextResponse.json({
            isSuccessful: true,
            videos
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