import axios from 'axios';

const base_url = "http://130.211.193.38/api";

export default axios.create({
    baseURL: base_url,
    headers: { 'Access-Control-Allow-Origin': '*' },
    mode: 'no-cors',
    withCredentials: true
});