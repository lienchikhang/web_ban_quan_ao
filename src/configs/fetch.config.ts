import axios from "axios";
import CONFIG from "../constants/fetch.constants";

const fetch = axios.create({
    baseURL: CONFIG.BASE_URL,
})

const options = {
    headers: {
        token: localStorage.getItem('token')
    }
}

export {

}