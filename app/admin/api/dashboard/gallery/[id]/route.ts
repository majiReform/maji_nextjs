import { NextRequest, NextResponse } from "next/server";
import { logIt } from "../../../utils";
import { videosCollection } from "../../../../../../models/Videos";
import { galleryCollection } from "../../../../../../models/Gallery";

interface ParamsInterface {
    params: {
        id: string
    }
}

export async function GET(_request: NextRequest, { params }: ParamsInterface) {
    try {

        const id = params.id;

        const gallery = await galleryCollection.findById(id);

        return NextResponse.json({
            isSuccessful: true,
            gallery
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

export async function PUT(request: NextRequest, { params }: ParamsInterface) {
    try {

        const id = params.id;

        const { picture } = await request.json();

        const gallery = await galleryCollection.findByIdAndUpdate(id, {
            picture
        });

        return NextResponse.json({
            isSuccessful: true,
            gallery
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

export async function DELETE(_request: NextRequest, { params }: ParamsInterface) {

    try {
        const id = params.id;

        const deletedGallery = await galleryCollection.findByIdAndDelete(id);

        return NextResponse.json({
            isSuccessful: true,
            deletedGallery,
            deletedId: id
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
