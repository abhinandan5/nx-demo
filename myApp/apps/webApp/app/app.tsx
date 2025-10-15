import { SharedHeader, SharedSideBar } from '@my-app/shared-ui'
import paiIcon from "/PAI.svg"
import { Routes, Route, useNavigate } from 'react-router-dom'
import PerformaAndInvoice from './PerformaAndInvoice';

const navItems = [
  { 
    id: "PAI", 
    title: "Performa & Invoice", 
    icon: <img src={paiIcon} alt="" className="w-4 h-4" />, 
    href: "/performa-invoice", 
    children: [] 
  }
];

export function App() {
  const navigate = useNavigate();

  const sidebarItems = navItems.map(item => ({
    ...item,
    onClick: () => navigate(item.href)
  }))

  return (
    <div className='min-h-screen'>
      <SharedHeader />
      
      <div className='flex'>
        <div className='flex-shrink-0'>
          <SharedSideBar items={sidebarItems}/>
        </div>

      <div>
        <Routes>
          <Route path='/performa-invoice' element={<PerformaAndInvoice />}/>
        </Routes>
      </div>

      </div>
    </div>
  );
}

export default App;
