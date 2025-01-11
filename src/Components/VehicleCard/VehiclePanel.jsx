
// function VehicleCard() {
//   return (
//     <div className="flex-row flex">
//     <div className="w-[500px] h-[500px] bg-slate-300 relative flex p-2 m-2 ml-2 mr-[50px] rounded-md ">
//         VehicleCard
//     </div>
//     <div className="w-[500px] h-[500px] bg-slate-300 relative flex p-2 m-2 mr-[50px] rounded-md ">
//         VehicleCard
//     </div>
//     <div className="w-[500px] h-[500px] bg-slate-300 relative flex p-2 m-2 mr-[10px] rounded-md ">
//         VehicleCard
//     </div>
//     </div>
//   )
// }

// export default VehicleCard

import axios from "axios";
import VehicleCard from "./VehicleCard";
import { useEffect } from "react";
import { useState } from "react";


function VehiclePanel() {
  const [vehicle, setVehicle] = useState([]);
  const [isLoading, setLoading] = useState(false);

   useEffect(() => {
        if(!isLoading){
          const fetchVehicles = async () => {
            try {
              axios.get(import.meta.env.VITE_BACKEND_URL + '/vehicles').then((result)=>{
              setVehicle(result.data.list); 
              console.log(result.data.list);
              setLoading(true);
              }).catch((err)=>{
                console.log(`Error: ${err}`);
              });

            } catch (error) {
              console.error("Error fetching vehicles:", error);
            }
          };
          fetchVehicles();
        }
        
  }, [isLoading]);
  

  return (
    // <div className="flex flex-wrap justify-center gap-4">
    //   <VehicleCard fundAmount={0} isInPoliceGarage={'True'} isActive={'True'} temporaryLocation={'Service Center'} policeOfficer={'Jane Smith'} province={'Western'} manufactureYear={'2020'} revenueLicenseNumber={'RL123456'} engineNumber={'ENG987654321'} chassyNumber={'CHS123456789'} name={'Vehicle 1'} station={'Veyangoda'} category={'Electric'} model={'Nissan Leaf'} vehicle_no={'wp-2693'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
    //   <VehicleCard fundAmount={100} isInPoliceGarage={'True'} isActive={'False'} temporaryLocation={'Service Center'} policeOfficer={'David Camarron'} province={'Western'} manufactureYear={'2020'} revenueLicenseNumber={'RL123456'} engineNumber={'ENG987654321'} chassyNumber={'CHS123456789'} name={'Vehicle 2'} station={'Paliyagoda'} category={'Petrol'} model={'Prado'} vehicle_no={'wp-2163'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
    //   <VehicleCard fundAmount={500} isInPoliceGarage={'False'} isActive={'True'} temporaryLocation={'Service Center'} policeOfficer={'Edward Martin'} province={'Western'} manufactureYear={'2018'} revenueLicenseNumber={'RL123456'} engineNumber={'ENG987654321'} chassyNumber={'CHS123456789'} name={'vehicle 3'} station={'Kiribathgoda'} category={'Hybrid'} model={'Monterro'} vehicle_no={'wp-5679'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
    // </div>
    <div className="flex flex-wrap justify-center gap-4">
       {
        vehicle.map((value, index)=>(
          <VehicleCard key={index} fundAmount={value.fundAmount} isInPoliceGarage={value.isInPoliceGarage} isActive={value.isActive} temporaryLocation={value.temporaryLocation} policeOfficer={value.policeOfficer} province={value.province} manufactureYear={value.manufactureYear} revenueLicenseNumber={value.revenueLicenseNumber} engineNumber={value.engineNumber} chassyNumber={value.chassyNumber} name={value.vehicleName} station={value.policeStation
          } category={value.vehicleCategory} model={value.vehicleBrand} vehicle_no={value.vehicleNumber} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
        ))
       }
  </div>
  );
}

export default VehiclePanel;

