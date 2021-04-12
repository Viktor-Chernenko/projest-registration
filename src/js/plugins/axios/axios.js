import axios from "axios";
import API_ENV from '../../config/api.config';

const instanceAutoComplete = axios.create({
    baseURL: API_ENV.apiUrlAutoComplete,
    headers: {
        'Content-type': 'application/json'
    },
});

const axiosBase = axios.create({
    baseURL: API_ENV.apiForm,
    headers: {
        'Content-type': 'application/json'
    },
});

export { instanceAutoComplete, axiosBase };