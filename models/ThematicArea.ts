import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"


const thematicAreaCollection = new MongoDBQueryHelper<ThematicAreaInterface>("ThematicAreas");

export {
    thematicAreaCollection
}
