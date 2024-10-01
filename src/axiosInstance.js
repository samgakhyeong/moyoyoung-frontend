import axios from 'axios';
import store from './store';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.token;

    const excludedUrls = ['/auth/login'];

    if (excludedUrls.some(url => config.url.includes(url))) {
        return config;
    }

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        return Promise.reject(new Error('로그인이 필요합니다.'));
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
