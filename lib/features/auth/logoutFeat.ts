import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";


async function logoutFeature() {
    const response = await axios.post(urlMaker("/admin/api/logout"));
    return {
        response: response.data,
        status: response.status
    };
}

export {
    logoutFeature
}
