import axios from "axios";

const BASE = 'https://dog.ceo/api';

export async function getRandomImages(count : number) {
    const res = await axios.get(`${BASE}/breeds/image/random/${count}`);
    return res.data.message;
}

export async function getAllBreeds() {
    const res = await axios.get(`${BASE}/breeds/list/all`);
    return res.data.message;
}

export async function getBreedImages(breed: string, count: number) {
    const res = await axios.get(`${BASE}/breed/${breed}/images/random/${count}`);
    return res.data.message.map((url: string, i: number) => ({
        id: `${breed}-${i}`,
        url: url,
        breed: breed
    }));    
}

export async function getSubBreeds(breed: string) {
    const res = await axios.get(`${BASE}/breed/${breed}/list`);
    return res.data.message;
}

export async function getSubBreedImages(breed: string, subBreed: string, count: number) {
    const res = await axios.get(`${BASE}/breed/${breed}/${subBreed}/images/random/${count}`);
    return res.data.message.map((url: string, i: number) => ({
        id: `${breed}-${subBreed}-${i}`,
        url: url,
        breed: `${breed} ${subBreed}`
    }));
}
