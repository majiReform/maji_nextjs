import { userCollection } from "@/models/Users";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const { email, password } = await request.json();

    try {

        const admin = await userCollection.findOne({ email });

        console.log(admin);

        if (!admin) {
            return Response.json({
                isSuccessful: false,
                message: "No user found"
            }, {
                status: 404
            });
        }

        const passwordsMatch = await bcrypt.compareSync(password, admin.password);

        if(!passwordsMatch) {
            return Response.json({
                isSuccessful: false,
                message: "Passwords don't match"
            }, {
                status: 400
            });
        }

        // Login the user

        return Response.json({
            isSuccessful: true,
            res: "Hi"
        }, {
            status: 200
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