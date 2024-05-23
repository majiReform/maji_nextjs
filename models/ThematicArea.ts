import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"
import { Document } from "mongodb";


interface ThematicCollectionInterface extends ThematicAreaInterface, Document {}

const thematicAreaCollection = new MongoDBQueryHelper<ThematicCollectionInterface>("ThematicAreas");

export {
    thematicAreaCollection
}
