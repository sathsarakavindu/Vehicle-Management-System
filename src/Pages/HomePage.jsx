
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

import { useState } from "react";
import Header from "../Components/Header/Header";
import SearchBar from "../Components/SearchBar";
import VehiclePanel from "../Components/VehicleCard/VehiclePanel";
import Footer from "../Components/Footer";

function HomePage() {
  const [province, setProvince] = useState(""); // State for province

  return (
    <div>
      <Header />
      <SearchBar province={province} setProvince={setProvince} /> {/* Pass state */}
      <VehiclePanel province={province} /> {/* Pass province */}
      <Footer />
    </div>
  );
}

export default HomePage;
