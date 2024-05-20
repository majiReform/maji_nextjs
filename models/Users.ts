
import { UserInterface } from "@/lib/features/profile/profileSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"



const userCollection = new MongoDBQueryHelper<UserInterface>("Users");

export {
    userCollection
}
