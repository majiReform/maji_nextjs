import { newsCollection } from "@/models/News";
import { thematicAreaCollection } from "@/models/ThematicArea";
import { logIt } from "app/admin/api/utils";
import { NextRequest, NextResponse } from "next/server";

interface ParamsInterface {
    params: {
        category: string
    }
}


export async function GET(request: NextRequest, {params}: ParamsInterface) {
    try {
        
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page");
        const limit = searchParams.get("limit");

        const news = await newsCollection.paginate({category: params.category}, parseInt(page as string), parseInt(limit as string));

        return NextResponse.json({
            isSuccessful: true,
            details: news
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