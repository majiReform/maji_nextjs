import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { MongoDBQueryHelper } from "./setup/queryHelper"
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";


const researchAndReportAreaCollection = new MongoDBQueryHelper<ResearchAndReportInterface>("ResearchAndReport");

export {
    researchAndReportAreaCollection
}
