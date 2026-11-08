import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '58494422-62f2ea08788c8103f77a57f53';

export const getImagesByQuery = (query) => {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    }).then(response => response.data);
};