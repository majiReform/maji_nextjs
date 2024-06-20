import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";
import { VideoInterface } from "./videosSlice";

async function videosList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/video?page=${page}&limit=${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function singleVideo(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/video/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function editVideo(payload: VideoInterface) {
    const response = await axios.put(urlMaker(`/admin/api/dashboard/video/${payload._id}`), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function addVideo(payload: VideoInterface) {
    const response = await axios.post(urlMaker("/admin/api/dashboard/video"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function deleteVideo(id: string) {
    const response = await axios.delete(urlMaker(`/admin/api/dashboard/video/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    videosList,
    singleVideo,
    addVideo,
    editVideo,
    deleteVideo
}