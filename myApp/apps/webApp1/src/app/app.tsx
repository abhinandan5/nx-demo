import { DogsPage, SharedHeader, SharedSideBar } from '@my-app/shared-ui'
import { Routes, Route, useNavigate } from 'react-router-dom'

const navItems = [
  {
    id: "dogs",
    title: "Dog Gallery",
    icon: <img src='/favicon.ico' alt='' className='w-4 h-4'/>,
    href: "/dogs"
  }
];

export function App() {
  const navigate = useNavigate();

  const sidebarItems = navItems.map(item => ({
    ...item,
    onClick: () => navigate(item.href)
  }));

  return (
    <div className="min-h-screen">
      <SharedHeader />
      
      <div className="flex">
        <SharedSideBar items={sidebarItems} />
        
        <div className="flex-1 p-4">
          <Routes>
            <Route path='/dogs' element={<DogsPage />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
