import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../../utils";

import { thematicAreaCollection } from "../../../../../../models/ThematicArea";

interface ParamsInterface {
    params: {
        id: string
    }
}

export async function GET(_request: NextRequest, {params}: ParamsInterface) {
    try {
        
        const id = params.id;

        const thematicArea = await thematicAreaCollection.findById(id);

        return NextResponse.json({
            isSuccessful: true,
            thematicArea
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

        const deletedThematicArea = await thematicAreaCollection.findByIdAndDelete(id);

        return NextResponse.json({
            isSuccessful: true,
            deletedThematicArea,
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


