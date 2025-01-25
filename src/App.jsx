import HomePage from './Pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Pages/Admin/login';
import ManageVehicle from './Pages/Admin/ManageVehicle';
import AboutUs from './Pages/About';
import ContactUs from './Pages/Contact';
import EditVehicle from './Components/VehicleCard/EditVehicle';
import { Toaster } from 'react-hot-toast';


function App() {

  return (
   <div>
    <BrowserRouter>
    <Toaster  position="top-center"
        reverseOrder={false}/>
      <Routes path="/*">
      
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/manage-vehicle" element={<ManageVehicle/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/edit-vehicle' element={<EditVehicle/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
