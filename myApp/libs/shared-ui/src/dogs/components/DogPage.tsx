import { useState, useEffect } from 'react';
import { DogGrid } from './DogGrid';
import { BreedsList } from './BreedsList';
import { Tabs, TabList, Tab, TabPanel } from '@cars24/lego';

export function DogsPage() {


  const [selectedTab, setSelectedTab] = useState('random');

  const [dogs, setDogs] = useState<DogImage[]>([]);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed] = useState<string>('hound');
  const [, setSubBreeds] = useState<string[]>([]);
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('');

useEffect(() => {
    if (selectedTab === 'random' && randomDogs.length === 0) {
      dispatch(fetchRandomDogs());
    }
  }, [selectedTab, dispatch, randomDogs.length]);
  
  useEffect(() => {
    if (selectedTab === 'breeds' && allBreeds.length === 0) {
      dispatch(fetchAllBreeds());
    }
  }, [selectedTab, dispatch, allBreeds.length]);

  // useEffect(() => {
  //   if(selectedTab !== 'by-breed') return;

  //   async function loadBreedImages() {
  //     try {
  //       const images = await getBreedImages(selectedBreed, 9);
  //       setDogs(images);
  //     } catch (err) {
  //       console.error('Failed to load breed images', err);
  //     }
  //   }

  //   loadBreedImages();
  // }, [selectedTab, selectedBreed]);

  // useEffect(() => {
  //   if (selectedTab !== 'by-sub-breed' || !selectedBreed) return;

  //   async function loadSubBreeds() {
  //     try {
  //       const subBreedsList = await getSubBreeds(selectedBreed);
  //       setSubBreeds(subBreedsList);
  //       if (subBreedsList.length > 0) {
  //         setSelectedSubBreed(subBreedsList[0]);
  //       }
  //     } catch (err) {
  //       console.error('Failed to load sub-breeds', err);
  //     }
  //   }

  //   loadSubBreeds();
  // }, [selectedTab, selectedBreed]);

  // useEffect(() => {
  //   if (selectedTab !== 'by-sub-breed' || !selectedBreed || !selectedSubBreed) return;

  //   async function loadSubBreedImages() {
  //     try {
  //       const images = await getSubBreedImages(selectedBreed, selectedSubBreed, 9);
  //       setDogs(images);
  //     } catch (err) {
  //       console.error('Failed to load sub-breed images', err);
  //     }
  //   }

  //   loadSubBreedImages();
  // }, [selectedTab, selectedBreed, selectedSubBreed]);

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
          <BreedsList breeds={allBreeds} />
        </TabPanel>
        
        <TabPanel id="random">
          <DogGrid dogs={randomDogs} />
        </TabPanel>
        
        {/* <TabPanel id="by-breed">
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
        </TabPanel> */}
      </Tabs>
    </div>
  );
}