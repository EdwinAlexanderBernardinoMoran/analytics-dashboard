import axios from 'axios';

export const Analytic = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});