import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.110.12.15:8080/sod',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default api;