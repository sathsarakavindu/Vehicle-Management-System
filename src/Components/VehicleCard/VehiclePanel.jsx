// import axios from "axios";
// import VehicleCard from "./VehicleCard";
// import { useEffect } from "react";
// import { useState } from "react";


// function VehiclePanel() {
//   const [vehicle, setVehicle] = useState([]);
//   const [isLoading, setLoading] = useState(false);

//    useEffect(() => {
//         if(!isLoading){
//           const fetchVehicles = async () => {
//             try {
//               axios.get(import.meta.env.VITE_BACKEND_URL + '/vehicles').then((result)=>{
//               setVehicle(result.data.list); 
//               console.log(result.data.list);
//               setLoading(true);
//               }).catch((err)=>{
//                 console.log(`Error: ${err}`);
//               });

//             } catch (error) {
//               console.error("Error fetching vehicles:", error);
//             }
//           };
//           fetchVehicles();
//         }
        
//   }, [isLoading]);
  

//   return (
    
//     <div className="flex flex-wrap justify-center gap-4">
//        {
//         vehicle.map((value, index)=>(
//           <VehicleCard key={index} fundAmount={value.fundAmount} isInPoliceGarage={value.isInPoliceGarage} isActive={value.isActive} temporaryLocation={value.temporaryLocation} policeOfficer={value.policeOfficer} province={value.province} manufactureYear={value.manufactureYear} revenueLicenseNumber={value.revenueLicenseNumber} engineNumber={value.engineNumber} chassyNumber={value.chassyNumber} name={value.vehicleName} station={value.policeStation
//           } category={value.vehicleCategory} model={value.vehicleBrand} vehicle_no={value.vehicleNumber} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
//         ))
//        }
//   </div>
//   );
// }

// export default VehiclePanel;


import axios from "axios";
import VehicleCard from "./VehicleCard";
import { useEffect, useState } from "react";

function VehiclePanel({ province }) {
  const [vehicle, setVehicle] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/vehicles");
        const vehicles = response.data.list;

        if (province) {
          // Filter vehicles based on the selected province
          console.log("Province:", province);
          setVehicle(vehicles.filter((v) => v.province === province));

        } else {
          // No province selected, show all vehicles
          setVehicle(vehicles);
        }

        setLoading(true);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, [province]); // Refetch data when the province changes

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {vehicle.map((value, index) => (
        <VehicleCard
          key={index}
          fundAmount={value.fundAmount}
          isInPoliceGarage={value.isInPoliceGarage}
          isActive={value.isActive}
          temporaryLocation={value.temporaryLocation}
          policeOfficer={value.policeOfficer}
          province={value.province}
          manufactureYear={value.manufactureYear}
          revenueLicenseNumber={value.revenueLicenseNumber}
          engineNumber={value.engineNumber}
          chassyNumber={value.chassyNumber}
          name={value.vehicleName}
          station={value.policeStation}
          category={value.vehicleCategory}
          model={value.vehicleBrand}
          vehicle_no={value.vehicleNumber}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s"
        />
      ))}
    </div>
  );
}

export default VehiclePanel;
