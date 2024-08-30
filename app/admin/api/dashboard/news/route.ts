import { NewsInterface } from "@/lib/features/news/newsSlice";
import { newsCollection } from "../../../../../models/News";
import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../utils";

export async function POST(request: NextRequest) {
    try {
        
        const {
            title,
            picture,
            details
        }: NewsInterface = await request.json();

        const result = await newsCollection.create({
            title, picture, details
        });

        return NextResponse.json({
            isSuccessful: true,
            addedDetails: result
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

        const news = await newsCollection.paginate({}, parseInt(page as string), parseInt(limit as string));

        console.log("News from backend", news);

        return NextResponse.json({
            isSuccessful: true,
            news
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
