import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";
import { GalleryInterface } from "./gallerySlice";

async function galleryList(page: number, limit: number) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/gallery?page=${page}&limit${limit}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function singleGallery(id: string) {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/gallery/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

async function addGallery(payload: GalleryInterface) {
    const response = await axios.post(urlMaker("/admin/api/dashboard/gallery"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function deleteGallery(id: string) {
    const response = await axios.delete(urlMaker(`/admin/api/dashboard/gallery/${id}`));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    galleryList,
    singleGallery,
    addGallery,
    deleteGallery
}