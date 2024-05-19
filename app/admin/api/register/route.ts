import { userCollection } from "@/models/Users";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    try {
        const { fullName, email, password } = await request.json();

        const admin = await userCollection.findOne({ email });

        if (admin) {
            return Response.json({
                isSuccessful: false,
                message: "Admin already exist"
            }, {
                status: 409
            });
        }

        const hashedPassword = bcrypt.hashSync(bcrypt.genSaltSync(10), password);

        await userCollection.create({ fullName, email, password: hashedPassword });

        return Response.json({
            isSuccessful: true,
            res: "Registered"
        }, {
            status: 201
        });

    } catch (error) {
        return Response.json({
            isSuccessful: false,
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}