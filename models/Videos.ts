import { MongoDBQueryHelper } from "./setup/queryHelper"
import { VideoInterface } from "lib/features/videos/videosSlice";
import { Document } from "mongodb";


interface VideosCollectionInterface extends VideoInterface, Document {}

const videosCollection = new MongoDBQueryHelper<VideosCollectionInterface>("Video");

export {
    videosCollection
}
