import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";
import { NewsInterface } from "./newsSlice";

async function newsList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/news?page=${page}&limit=${limit}`));

    return {
        response: response.data,
        status: response.status
    };
}

async function singleNews(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/news/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function addNews(payload: NewsInterface) {
    const response = await axios.post(urlMaker("/admin/api/dashboard/news"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function editNews(payload: NewsInterface) {
    const response = await axios.put(urlMaker(`/admin/api/dashboard/news/${payload._id}`), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function deleteNews(id: string) {
    const response = await axios.delete(urlMaker(`/admin/api/dashboard/news/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    newsList,
    singleNews,
    addNews,
    editNews,
    deleteNews,
}
