import { useState, useEffect } from 'react';
import { DogGrid } from './DogGrid';
import { DogImage } from '../types/types';
import { BreedsList } from './BreedsList';
import { 
  getRandomImages, 
  getAllBreeds, 
  getBreedImages, 
  getSubBreeds,
  getSubBreedImages 
} from '../services/api';
import { Tabs, TabList, Tab, TabPanel } from '@cars24/lego';

export function DogsPage() {
  const [selectedTab, setSelectedTab] = useState('random');
  const [dogs, setDogs] = useState<DogImage[]>([]);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed] = useState<string>('hound');
  const [, setSubBreeds] = useState<string[]>([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');

  useEffect(() => {
    if(selectedTab !== 'random')
      return;

    async function loadDogs() {
      try {
        const urls = await getRandomImages(30);
        const images = urls.map((url: string, i: number) => {
          const breedMatch = url.match(/breeds\/([^/]+)/);
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
  }, [selectedTab]);

  useEffect(() =>{
    if(selectedTab !== 'breeds')
      return;

    async function loadBreeds() {
      try{
        const breedData = await getAllBreeds();
        const breedNames = Object.keys(breedData);
        setBreeds(breedNames);
      }
      catch(err){
        console.error('Failed to load breeds', err);
      }
    }

    loadBreeds();
  }, [selectedTab]);

  useEffect(() => {
    if(selectedTab !== 'by-breed') return;

    async function loadBreedImages() {
      try {
        const images = await getBreedImages(selectedBreed, 9);
        setDogs(images);
      } catch (err) {
        console.error('Failed to load breed images', err);
      }
    }

    loadBreedImages();
  }, [selectedTab, selectedBreed]);

  useEffect(() => {
    if (selectedTab !== 'by-sub-breed' || !selectedBreed) return;

    async function loadSubBreeds() {
      try {
        const subBreedsList = await getSubBreeds(selectedBreed);
        setSubBreeds(subBreedsList);
        if (subBreedsList.length > 0) {
          setSelectedSubBreed(subBreedsList[0]);
        }
      } catch (err) {
        console.error('Failed to load sub-breeds', err);
      }
    }

    loadSubBreeds();
  }, [selectedTab, selectedBreed]);

  useEffect(() => {
    if (selectedTab !== 'by-sub-breed' || !selectedBreed || !selectedSubBreed) return;

    async function loadSubBreedImages() {
      try {
        const images = await getSubBreedImages(selectedBreed, selectedSubBreed, 9);
        setDogs(images);
      } catch (err) {
        console.error('Failed to load sub-breed images', err);
      }
    }

    loadSubBreedImages();
  }, [selectedTab, selectedBreed, selectedSubBreed]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Gallery</h1>
      <Tabs
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as string)}
        orientation="horizontal"
      >
        <TabList>
          <Tab id="breeds">List All Breeds</Tab>
          <Tab id="random">Random Images</Tab>
          <Tab id="by-breed">By Breed</Tab>
          <Tab id="by-sub-breed">By Sub-Breed</Tab>
        </TabList>
        
        <TabPanel id="breeds">
          <BreedsList breeds={breeds} />
        </TabPanel>
        
        <TabPanel id="random">
          <DogGrid dogs={dogs} />
        </TabPanel>
        
        <TabPanel id="by-breed">
          <select 
            value={selectedBreed}
            className="mb-4 p-2 border rounded"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
          <DogGrid dogs={dogs} />
        </TabPanel>
        
        <TabPanel id="by-sub-breed">
          {selectedSubBreed && <DogGrid dogs={dogs} />}
        </TabPanel>
      </Tabs>
    </div>
  );
}