import HomePage from './Pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Pages/Admin/login';
import ManageVehicle from './Pages/Admin/ManageVehicle';
import AboutUs from './Pages/About';
import ContactUs from './Pages/Contact';

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes path="/*">
  
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/manage-vehicle" element={<ManageVehicle/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
