import { NewsInterface } from "@/lib/features/news/newsSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"
import { Document } from "mongodb";


interface NewsCollectionInterface extends NewsInterface, Document {}

const newsCollection = new MongoDBQueryHelper<NewsCollectionInterface>("News");

export {
    newsCollection
}
