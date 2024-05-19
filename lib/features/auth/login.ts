import axios from "axios";
import { urlMaker } from "../urlMaker/urlMaker";


async function loginFeature(email: string, password: string) {
    const response = axios.post(urlMaker("/admin/api/login"), {
        email, password
    });
}

export {
    loginFeature
}
