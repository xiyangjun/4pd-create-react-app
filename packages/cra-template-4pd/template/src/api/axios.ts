import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
    baseURL: '/api/v1',
});

instance.interceptors.request.use((config) => {
    if (config.method === 'get') {
        if (!config.params) {
            config.params = {};
        }
        config.params._t = Date.now();
    }
    return config;
});
instance.interceptors.response.use(
    (response) => {
        const { status, error } = response.data;
        if (status !== '0') {
            message.error(`code：${error}`);
            return Promise.reject(error);
        }
        return response.data;
    },
    (error) => {
        message.error(error.toString());
        return Promise.reject(error.toString());
    },
);

export default instance;
