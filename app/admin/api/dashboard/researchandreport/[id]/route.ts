import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../../utils";
import { videosCollection } from "@/models/Videos";
import { researchAndReportAreaCollection } from "@/models/ResearchAndReport";

interface ParamsInterface {
    params: {
        id: string
    }
}

export async function GET(_request: NextRequest, {params}: ParamsInterface) {
    try {
        console.log("Param", params);
        
        const id = params.id;


        const researchandreport = await researchAndReportAreaCollection.findById(id);

        return NextResponse.json({
            isSuccessful: true,
            researchandreport
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

        const deletedReport = await researchAndReportAreaCollection.findByIdAndDelete(id);

        return NextResponse.json({
            isSuccessful: true,
            deletedReport,
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

