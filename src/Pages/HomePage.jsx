
// import Header from '../Components/Header/Header'
// import SearchBar from '../Components/SearchBar'
// import VehiclePanel from '../Components/VehicleCard/VehiclePanel'
// import Footer from '../Components/Footer'

// function HomePage() {
//   return (
//     <div>
        
//      <Header/>
//         <SearchBar/>
//         <VehiclePanel/>
//        <Footer/>
//     </div>
//   )
// }

// export default HomePage

import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import SearchBar from "../Components/SearchBar";
import VehiclePanel from "../Components/VehicleCard/VehiclePanel";
import Footer from "../Components/Footer";

// Splash Screen Component
function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <h1 className="text-white text-9xl font-bold">Welcome</h1>
      <div className="flex h-100vh"><h1></h1></div>
      <h1 className="text-white text-6xl font-bold">Vehicle Management System</h1>
      <h1 className="text-white text-3xl font-bold">Special Branch - Transport Unit</h1>
    </div>
  );
}

function HomePage() {
  const [showSplash, setShowSplash] = useState(true); // State for splash screen
  const [province, setProvince] = useState(""); // State for province
  const [vehicleNumber, setVehicleNumber] = useState(""); // State for vehicle number

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (showSplash) {
    return <SplashScreen />; // Show the splash screen
  }

  return (
    <div>
      <Header />
      <SearchBar
        province={province}
        setProvince={setProvince}
        setVehicleNumber={setVehicleNumber}
        vehicleNumber={vehicleNumber}
      />
      <VehiclePanel province={province} vehicleNumber={vehicleNumber} />
      <Footer />
    </div>
  );
}

export default HomePage;
