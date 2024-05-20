import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";
import { ResearchAndReportInterface } from "./researchSlice";

async function researchList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/researchandreport?page=${page}&limit=${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function singleResearch(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/researchandreport/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function addResearch(payload: ResearchAndReportInterface) {
    const response = await axios.post(urlMaker("/admin/api/dashboard/researchandreport"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function deleteResearch(id: string) {
    const response = await axios.delete(urlMaker(`/admin/api/dashboard/researchandreport/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    researchList,
    singleResearch,
    addResearch,
    deleteResearch
}