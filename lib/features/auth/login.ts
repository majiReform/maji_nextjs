import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";


async function loginFeature(email: string, password: string) {
    const response = await axios.post(urlMaker("/admin/api/login"), {
        email, password
    });
    return {
        response: response.data,
        status: response.status
    };
}

export {
    loginFeature
}
