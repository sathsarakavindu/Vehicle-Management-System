
/*
import axios from "axios";
import VehicleCard from "./VehicleCard";
import { useEffect, useState } from "react";

function VehiclePanel({ province, vehicleNumber }) {
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

        }else if(vehicleNumber){
          // Filter vehicles based on the selected vehicle number
          console.log("Vehicle Number:", vehicleNumber);
          setVehicle(vehicles.filter((v) => v.vehicleNumber === vehicleNumber));

        } 
        
        else {
          // No province selected, show all vehicles
          setVehicle(vehicles);
        }

        setLoading(true);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, [province,vehicleNumber]); // Refetch data when the province changes

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
*/

import axios from "axios";
import VehicleCard from "./VehicleCard";
import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";

function VehiclePanel({ province, vehicleNumber }) {
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
        } else if (vehicleNumber) {
          // Filter vehicles based on the selected vehicle number, case-insensitive
          console.log("Vehicle Number:", vehicleNumber);
          setVehicle(
            vehicles.filter(
              (v) => v.vehicleNumber.toLowerCase() === vehicleNumber.toLowerCase()
            )
          );
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
  }, [province, vehicleNumber]); // Refetch data when the province or vehicleNumber changes

  if (!isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Circles
          height= "80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    );
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
