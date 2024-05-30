import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "./sendEmailUtil";
import { logIt } from "../../utils";



export async function POST(request: NextRequest) {
    try {
        const { from, fullName, subject } = await request.json();

        await sendEmail({
            from, to: process.env.EMAIL_NAME!!,
            subject: `[Maji (Contact Us)] from ${fullName}`,
            html: `
                <div>${fullName} (${from}) has sent a message to you, the message is below:</div>
                <div style="font-style: italic">${subject}</div>
            `
        });

        return NextResponse.json({
            isSuccessful: true
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