import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";
import { ThematicAreaInterface } from "./thematicSlice";

async function thematicAreaList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/thematicarea?page=${page}&limit=${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function singleThematicArea(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/thematicarea/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function addThematicArea(payload: ThematicAreaInterface) {
    const response = await axios.post(urlMaker("/admin/api/dashboard/thematicarea"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function deleteThematicArea(id: string) {
    const response = await axios.delete(urlMaker(`/admin/api/dashboard/thematicarea/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    thematicAreaList,
    singleThematicArea,
    addThematicArea,
    deleteThematicArea
}
