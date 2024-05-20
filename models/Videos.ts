import { MongoDBQueryHelper } from "./setup/queryHelper"
import { VideoInterface } from "@/lib/features/videos/videosSlice";


const videosCollection = new MongoDBQueryHelper<VideoInterface>("Video");

export {
    videosCollection
}
