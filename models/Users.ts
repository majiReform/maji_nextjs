import { MongoDBQueryHelper } from "./setup/queryHelper"

interface UserInterface {
    fullName?: string
    email?: string
    password?: string
    createdAt?: Date
    updatedAt?: Date
}

const userCollection = new MongoDBQueryHelper<UserInterface>("Users");

export {
    userCollection,
    type UserInterface
}
