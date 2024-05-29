import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";

async function guestThematicAreaList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/guest/thematic?page=${page}&limit=${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function guestSingleThematicArea(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/guest/thematic/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function guestResearchList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/guest/reportandresearch?page=${page}&limit=${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function guestSingleResearch(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/guest/reportandresearch/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}


async function guestVideosList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/guest/video?page=${page}&limit=${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function guestSingleVideo(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/guest/video/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function guestGalleryList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/guest/gallery?page=${page}&limit${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function guestSingleGallery(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/guest/gallery/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    guestThematicAreaList,
    guestSingleThematicArea,
    guestResearchList,
    guestSingleResearch,
    guestVideosList,
    guestSingleVideo,
    guestGalleryList,
    guestSingleGallery
}
