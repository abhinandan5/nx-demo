import { useState, useEffect } from 'react';
import { DogGrid } from './DogGrid';
import { DogImage } from '../types/types';
import { getRandomImages } from '../services/api';

export function DogsPage() {
  const [dogs, setDogs] = useState<DogImage[]>([]);
  
  useEffect(() => {
    async function loadDogs() {
      try {
        const urls = await getRandomImages(30);
        const images = urls.map((url: string, i: number) => {
          const breedMatch = url.match(/breeds\/([^\/]+)/);
          return {
            id: `dog-${i}`,
            url: url,
            breed: breedMatch ? breedMatch[1] : 'unknown'
          };
        });
        setDogs(images);
      } catch (err) {
        console.error('Failed to load dogs', err);
      }
    }
    
    loadDogs();
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Gallery</h1>
      <DogGrid dogs={dogs} />
    </div>
  );
}