// import Footer from './Components/Footer'
// import Header from './Components/Header/Header'
// import { BrowserRouter, Route, Routes } from "react-router-dom"

// import SearchBar from './Components/SearchBar'
// import VehiclePanel from './Components/VehicleCard/VehiclePanel'
// import Login from './Pages/Admin/login'
import HomePage from './Pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Pages/Admin/login';

function App() {

  return (
    // <div>
      

    //   <Header/>
    //    <SearchBar/>
    //    <VehiclePanel/>
    //    <Footer/>

    // </div>
   <div>
    <BrowserRouter>
      <Routes path="/*">
  
        <Route path="/*" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
