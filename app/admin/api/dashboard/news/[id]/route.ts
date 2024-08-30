import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../../utils";

import { newsCollection } from "../../../../../../models/News";
import { NewsInterface } from "@/lib/features/news/newsSlice";

interface ParamsInterface {
    params: {
        id: string
    }
}

export async function GET(_request: NextRequest, {params}: ParamsInterface) {
    try {
        
        const id = params.id;

        const news = await newsCollection.findById(id);

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

export async function PUT(request: NextRequest, {params}: ParamsInterface) {
    try {
        
        const id = params.id;

        const {
            title,
            picture,
            details,
        }: NewsInterface = await request.json();


        const news = await newsCollection.findByIdAndUpdate(id, {
            title,
            picture,
            details
        });

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

export async function DELETE(_request: NextRequest, {params}: ParamsInterface) {
    
    try {
        const id = params.id;

        const deletedNews = await newsCollection.findByIdAndDelete(id);

        return NextResponse.json({
            isSuccessful: true,
            deletedNews,
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


