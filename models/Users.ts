
import { UserInterface } from "@/lib/features/profile/profileSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"
import { Document } from "mongodb";


interface UserCollectionInterface extends UserInterface, Document {}

const userCollection = new MongoDBQueryHelper<UserCollectionInterface>("Users");

export {
    userCollection
}
