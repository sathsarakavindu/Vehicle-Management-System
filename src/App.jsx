import HomePage from './Pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Pages/Admin/login';
import ManageVehicle from './Pages/Admin/ManageVehicle';

function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes path="/*">
  
        {/* <Route path="/*" element={<HomePage/>}/> */}
        <Route path="/*" element={<ManageVehicle/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
