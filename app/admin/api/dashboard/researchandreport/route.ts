import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { thematicAreaCollection } from "@/models/ThematicArea";
import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../utils";
import { researchAndReportAreaCollection } from "@/models/ResearchAndReport";
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";

export async function POST(request: NextRequest) {
    try {

        const {
            title,
            category,
            pictureURL,
            document,
            details
        }: ResearchAndReportInterface = await request.json();

        const record = await researchAndReportAreaCollection.create({
            title, category, pictureURL, document, details
        });

        return NextResponse.json({
            isSuccessful: true,
            details: record
        }, {
            status: 201
        });

    } catch (error) {
        logIt({ value: error, level: "error" });
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

        const researchandreport = await researchAndReportAreaCollection.paginate({}, parseInt(page as string), parseInt(limit as string));

        return NextResponse.json({
            isSuccessful: true,
            details: researchandreport
        }, {
            status: 200
        });

    } catch (error) {
        logIt({ value: error, level: "error" });
        return NextResponse.json({
            isSuccessful: false,
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
