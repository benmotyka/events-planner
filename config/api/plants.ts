import axios from "axios";
import {
    apiUrl,
    basicAuthUsername,
    basicAuthPassword,
} from "config/environment";
import { getDeviceId } from "util/device";

const plantsApi = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    // auth: {
    // username: basicAuthUsername,
    // password: basicAuthPassword
    // }
});

plantsApi.interceptors.request.use(async (config) => {
    if (config.headers) config.headers["device-id"] = await getDeviceId();
    return config;
});

plantsApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error.response?.data?.message)
);

export default plantsApi;
