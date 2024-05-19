import { ObjectId } from "mongodb"
import { MongoDBQueryHelper } from "./setup/queryHelper"

interface UserInterface {
    _id?: string | ObjectId
    fullName?: string
    email?: string
    profilePicture?: string
    phoneNumber?: string
    password?: string
    createdAt?: Date
    updatedAt?: Date
}

const userCollection = new MongoDBQueryHelper<UserInterface>("Users");

export {
    userCollection,
    type UserInterface
}
