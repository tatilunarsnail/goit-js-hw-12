import axios from 'axios';

const API_KEY = '44884421-e01d7eda68b827a4ca86e08d6';
const BASE_URL = 'https://pixabay.com/api/';
let currentPage = 1;
let currentQuery = '';

export async function fetchImages(query) {
    if (currentQuery !== query) {
        currentPage = 1;
        currentQuery = query;
    }

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: currentPage,
                per_page: 15,
            },
        });

        currentPage += 1;

        return response.data;
    } catch (error) {
        throw new Error(error.response.status);
    }
}
