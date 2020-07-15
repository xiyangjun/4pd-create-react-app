import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
    baseURL: '',
});

instance.interceptors.request.use(config => {
    if (config.method === 'get') {
        if (!config.params) {
            config.params = {};
        }
        config.params._t = Date.now();
    }
    return config;
});
instance.interceptors.response.use(
    response => {
        const { status, error } = response.data;
        if (status !== '0') {
            message.error(`code：${error}`);
            return Promise.reject(error);
        }
        return response.data;
    },
    error => {
        const errorMsg = error.response.data?.msg || error.toString();
        message.error(errorMsg);
        return Promise.reject(error);
    },
);

export default instance;
