import axios from "axios";
import { useParams } from 'react-router-dom'

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAllPosts: async () => {
        let response = await axios.get(`${BASE}/albums`);
        return response.data;
    },
    getPhotos: async (id: string) => {
        let response = await axios.get(`${BASE}/albums/${id}/photos`);
        return response.data;
    },
    getAlbum: async (id: string) => {
        let response = await axios.get(`${BASE}/albums/${id}`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        let response = await axios.get(`${BASE}/photos/${id}`);
        return response.data;
    }
}