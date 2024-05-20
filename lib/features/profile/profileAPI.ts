import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";
import { UserInterface } from "./profileSlice";


async function getProfile() {
    const response = await axios.get(urlMaker(`/admin/api/dashboard/profile/profiledetails`));
    return {
        response: response.data,
        status: response.status
    };
}

async function updateProfile(payload: UserInterface) {
    const response = await axios.put(urlMaker("/admin/api/dashboard/profile/profiledetails"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

async function updateProfilePicture(payload: string) {
    const response = await axios.put(urlMaker("/admin/api/dashboard/profile/profilepicture"), {
        newProfilePicture: payload
    });
    return {
        response: response.data,
        status: response.status
    };
}

async function updatePassword(payload: {currentPassword: string, newPassword: string}) {
    const response = await axios.put(urlMaker("/admin/api/dashboard/profile/picture"), payload);
    return {
        response: response.data,
        status: response.status
    };
}

export {
    getProfile,
    updateProfile,
    updatePassword,
    updateProfilePicture
}