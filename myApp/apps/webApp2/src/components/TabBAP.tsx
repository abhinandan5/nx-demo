import { Tab, Tabs, TabList, TabPanel } from "@cars24/lego";

const TabBAP = () =>{
    return (
<div
  style={{
    maxWidth: '700px'
  }}
>
  <Tabs
    onSelectionChange={function Xs(){}}
    orientation="horizontal"
    selectedKey="dinosaur1"
  >
    <TabList
      items={[
        {
          id: 'dinosaur1',
          info: 'Tyrannosaurus is a genus of large theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented theropods.',
          name: 'Pending'
        },
        {
          id: 'dinosaur2',
          info: 'Velociraptor is a genus of small dromaeosaurid dinosaur that lived in Asia during the Late Cretaceous epoch, about 75 million to 71 million years ago.',
          name: 'Passed'
        },
        {
          id: 'dinosaur3',
          info: 'Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
          name: 'Failed'
        }
      ]}
    >
      <Tab id="dinosaur1">
        Pending
      </Tab>
      <Tab id="dinosaur2">
        Passed
      </Tab>
      <Tab id="dinosaur3">
        Failed
      </Tab>
    </TabList>
    <TabPanel id="dinosaur1">
      <h3>
        Pending
      </h3>
      <p>
        Tyrannosaurus is a genus of large theropod dinosaur. The species Tyrannosaurus rex, often called T. rex or colloquially T-Rex, is one of the best represented theropods.
      </p>
    </TabPanel>
    <TabPanel id="dinosaur2">
      <h3>
        Passed
      </h3>
      <p>
        Velociraptor is a genus of small dromaeosaurid dinosaur that lived in Asia during the Late Cretaceous epoch, about 75 million to 71 million years ago.
      </p>
    </TabPanel>
    <TabPanel id="dinosaur3">
      <h3>
        Failed
      </h3>
      <p>
        Triceratops is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.
      </p>
    </TabPanel>
  </Tabs>
</div>
    )
}

export default TabBAP;