import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomImages, getAllBreeds } from '../services/api';
import { DogImage } from '../types/types';

export interface DogsState {
  randomDogs: DogImage[];
  breeds: string[];
}

const initialState: DogsState = {
  randomDogs: [],
  breeds: [],
};

export const fetchRandomDogs = createAsyncThunk(
  'dogs/fetchRandom',
  async () => {
    const urls = await getRandomImages(30);
    return urls.map((url: string, i: number) => {
      const breedMatch = url.match(/breeds\/([^/]+)/);
      return {
        id: `dog-${i}`,
        url: url,
        breed: breedMatch ? breedMatch[1] : 'unknown'
      };
    });
  }
);

export const fetchBreeds = createAsyncThunk(
  'dogs/fetchBreeds',
  async () => {
    const breedsData = await getAllBreeds();
    return Object.keys(breedsData);
  }
);

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomDogs.fulfilled, (state, action) => {
        state.randomDogs = action.payload;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.breeds = action.payload;
      });
  },
});

export default dogsSlice.reducer;