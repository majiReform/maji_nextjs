import { thematicAreaCollection } from "@/models/ThematicArea";
import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../utils";

export async function GET(request: NextRequest) {
    try {
        
        const searchParams = request.nextUrl.searchParams;
        const page = searchParams.get("page");
        const limit = searchParams.get("limit");

        const thematicAreas = await thematicAreaCollection.paginate({}, parseInt(page as string), parseInt(limit as string));

        return NextResponse.json({
            isSuccessful: true,
            thematicAreas
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