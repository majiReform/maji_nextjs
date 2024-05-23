import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { thematicAreaCollection } from "../../../../../models/ThematicArea";
import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../utils";

export async function POST(request: NextRequest) {
    try {
        
        const {
            title,
            category,
            picture,
            details
        }: ThematicAreaInterface = await request.json();

        const result = await thematicAreaCollection.create({
            title, category, picture, details
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
