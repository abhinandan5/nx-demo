import axios from "axios";

const BASE = 'https://dog.ceo/api';

export async function getRandomImages(count : number) {
    const res = await axios.get(`${BASE}/breeds/image/random/${count}`);
    return res.data.message;
}