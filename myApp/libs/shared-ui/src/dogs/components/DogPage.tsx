import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Tabs, TabList, Tab, TabPanel } from '@cars24/lego/components';
import { DogGrid } from './DogGrid';
import { BreedsList } from './BreedsList';

import { fetchRandomDogs, fetchBreeds } from '../store/dogsSlice';
import { useAppDispatch } from '../../lib/store/store';

export function DogsPage() {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { randomDogs, breeds } = useSelector((state: any) => state.dogs);
  
  const [selectedTab, setSelectedTab] = React.useState('random');
  
  useEffect(() => {
    if (selectedTab === 'random') {
      dispatch(fetchRandomDogs());
    } else if (selectedTab === 'breeds') {
      dispatch(fetchBreeds());
    }
  }, [selectedTab, dispatch]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dog Browser</h1>
      
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
          <DogGrid dogs={randomDogs} />
        </TabPanel>
        
        <TabPanel id="by-breed">
          <div className="text-gray-500 p-8">Coming soon...</div>
        </TabPanel>
        
        <TabPanel id="by-sub-breed">
          <div className="text-gray-500 p-8">Coming soon...</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}