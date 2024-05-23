import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";
import { Document } from "mongodb";

interface ResearchAndReportCollectionInterface extends ResearchAndReportInterface, Document {}

const researchAndReportAreaCollection = new MongoDBQueryHelper<ResearchAndReportCollectionInterface>("ResearchAndReport");

export {
    researchAndReportAreaCollection
}
