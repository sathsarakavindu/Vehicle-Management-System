import axios from 'axios';
import { useEffect, useState } from 'react'
import './../../styles/App.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import AdminVehicleCard from '../../Components/VehicleCard/AdminVehicleCard';
import { supabase } from '../../Components/Admin/supabaseClient';
import toast from 'react-hot-toast';
// import { supabase } from '../../Components/Admin/supabaseClient'; // Import Supabase client


function ManageVehicle() {


    const [vehicles, setVehicles] = useState([]);
    const [searchValue, setSearchValue] = useState(""); 
    const[file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const[fileURL, setFileURL] = useState("")

  // State for adding a vehicle with all fields from the schema
  const [newVehicle, setNewVehicle] = useState({
    vehicleNumber: "",
    vehicleName: "",
    vehicleBrand: "",
    vehicleImage: "",
    chassyNumber: "",
    engineNumber: "",
    revenueLicenseNumber: "",
    vehicleCategory: "",
    manufactureYear: "",
    policeStation: "",
    province: "",
    policeOfficer: "",
    temporaryLocation: "",
    isActive: true,
    isInPoliceGarage: false,
    outsideGarageLocation: "",
    fundAmount: 0,
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const getVehicles = async () => {
    try {
      axios.get(import.meta.env.VITE_BACKEND_URL + '/vehicles').then((result)=>{
       console.log(result.data.list);
       setVehicles(result.data.list);
    return result.data.list;
      }).catch((err)=>{
        console.log(`Error: ${err}`);
      });

    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };


  const vehicleSearch = () => {
    if (searchValue.trim() === "") {
      // Show all vehicles if search is empty
      fetchVehicles();
      return;
    }
  
    const filteredVehicles = vehicles.filter(
      (v) =>
        v.vehicleNumber.toLowerCase().includes(searchValue.toLowerCase()) ||
        v.vehicleName.toLowerCase().includes(searchValue.toLowerCase()) ||
        v.vehicleBrand.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    setVehicles(filteredVehicles); // Update state with filtered vehicles
  };
  

  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();
      console.log(data);
      //setVehicles(data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const createVehicle = async (vehicleData) => {
    try {
      console.log("Sending payload:", vehicleData);
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/vehicles',
        vehicleData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      toast.success('Vehicle Successfully Added..!');
      return response.data;
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);
      throw error;
    }
  };
  

  const handleCreate = async () => {
    try {
      
        await createVehicle(newVehicle);
      fetchVehicles();
      resetForm();
    } catch (error) {
      toast.error('Vehicle can\'t be added');
      console.error("Error creating vehicle:", error);
    }
  };

  const deleteVehicle = async (vehicleNumber) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/vehicles/${vehicleNumber}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      toast.success(`Vehicle ${vehicleNumber} deleted successfully.`);
      console.log(`Vehicle ${vehicleNumber} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting vehicle ${vehicleNumber}:`, error);
      toast.error("Vehicle can't be deleted");
    }
  };

  const handleDelete = async (vehicleNumber) => {
    try {
      await deleteVehicle(vehicleNumber);
      fetchVehicles();
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  const resetForm = () => {
    setNewVehicle({
      vehicleNumber: "",
      vehicleName: "",
      vehicleBrand: "",
      vehicleImage: "",
      chassyNumber: "",
      engineNumber: "",
      revenueLicenseNumber: "",
      vehicleCategory: "",
      manufactureYear: "",
      policeStation: "",
      province: "",
      policeOfficer: "",
      temporaryLocation: "",
      isActive: true,
      isInPoliceGarage: true,
      outsideGarageLocation: "",
      fundAmount: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setNewVehicle((prevState) => ({
        ...prevState,
        [name]: checked,
        // Reset fields depending on logic
        ...(name === "isActive" && checked
          ? {
              isInPoliceGarage: false,
              outsideGarageLocation: "",
              fundAmount: 0,
            }
          : {}),
      }));
    } else {
      setNewVehicle((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
 


  const handleImageUpload = async (e) => {
    const selectedFile = e.target.files[0]; // Extract the file from the event
    setFile(selectedFile); // Use the setter function to update the state
  
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }
  
    setUploading(true);
  
    try {
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
  
      const { data, error } = await supabase.storage
        .from("vehicle-images")
        .upload(filePath, selectedFile);
  
      if (error) {
        console.error("Error uploading image:", error.message);
        return;
      }
  
      const { data: url } = await supabase.storage
        .from("vehicle-images")
        .getPublicUrl(filePath);
  
      console.log("Public URL is:", url.publicUrl);
  
      setFileURL(url.publicUrl);
  
      setNewVehicle((prevState) => ({
        ...prevState,
        vehicleImage: url.publicUrl,
      }));
  
      console.log("Image uploaded successfully:", url.publicUrl);
    } catch (error) {
      console.error("Error uploading image:", error.message);
    } finally {
      setUploading(false);
    }
  };
  

  

  return (
    <>
    <Header/>
    <div>
       <div className='flex flex-row justify-center'>
       <h1 className='text-center flex-row '>Manage Vehicle</h1>
       <input
          placeholder='EX: WP-MNZ 1463'
          type="text"
          className="bg-slate-300 right-[100px] top-[90px] rounded-md w-[200px] h-[40px] absolute"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button className="top-[95px] absolute rounded-md right-0 mx-[20px] w-[70px] h-[40px]" onClick={vehicleSearch}>
          Search
        </button>
       </div>
        <h2 className='text-2xl mx-2'>Add Vehicle</h2>
        <div style={styles.formContainer}>
        {/* General Vehicle Info */}
        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={newVehicle.vehicleNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleName"
          placeholder="Vehicle Name"
          value={newVehicle.vehicleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleBrand"
          placeholder="Vehicle Brand"
          value={newVehicle.vehicleBrand}
          onChange={handleChange}
        />
        <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        <input
          type="text"
          name="vehicleImage"
          placeholder="Vehicle Image URL"
          value={newVehicle.vehicleImage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="chassyNumber"
          placeholder="Chassy Number"
          value={newVehicle.chassyNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="engineNumber"
          placeholder="Engine Number"
          value={newVehicle.engineNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="revenueLicenseNumber"
          placeholder="Revenue License Number"
          value={newVehicle.revenueLicenseNumber}
          onChange={handleChange}
        />
        <select
          name="vehicleCategory"
          value={newVehicle.vehicleCategory}
          onChange={handleChange}
          style={styles.dropdown}
        >
          <option value="">Select a Category</option>
          <option value="Truck">Truck</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Motorcycle">Motorcycle</option>
        </select>

        <input
          type="text"
          name="manufactureYear"
          placeholder="Manufacture Year"
          value={newVehicle.manufactureYear}
          onChange={handleChange}
        />
        <input
          type="text"
          name="policeStation"
          placeholder="Police Station"
          value={newVehicle.policeStation}
          onChange={handleChange}
        />
        <select
          name="province"
          value={newVehicle.province}
          onChange={handleChange}
          style={styles.dropdown}
        >
          <option value="">Select Province</option>
          <option value="Western">Western</option>
          <option value="Central">Central</option>
          <option value="Southern">Southern</option>
          <option value="Eastern">Eastern</option>
          <option value="Northern">Northern</option>
          <option value="North Western">North Western</option>
          <option value="Uva">Uva</option>
          <option value="Sabaragamuwa">Sabaragamuwa</option>
        </select>

        <input
          type="text"
          name="policeOfficer"
          placeholder="Police Officer"
          value={newVehicle.policeOfficer}
          onChange={handleChange}
        />
        <input
          type="text"
          name="temporaryLocation"
          placeholder="Temporary Location"
          value={newVehicle.temporaryLocation}
          onChange={handleChange}
        />

        {/* isActive Checkbox */}
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={newVehicle.isActive}
            onChange={handleChange}
          />
          Is Active
        </label>

        {/* Render this part only if isActive is false */}
        {!newVehicle.isActive && (
          <>
            {/* isInPoliceGarage Checkbox */}
            <label>
              <input
                type="checkbox"
                name="isInPoliceGarage"
                checked={newVehicle.isInPoliceGarage}
                onChange={handleChange}
              />
              Is in Police Garage
            </label>

            {/* Render these fields conditionally */}
            {!newVehicle.isInPoliceGarage && (
              <>
                <input
                  type="text"
                  name="outsideGarageLocation"
                  placeholder="Outside Garage Location"
                  value={newVehicle.outsideGarageLocation}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="fundAmount"
                  placeholder="Fund Amount"
                  value={newVehicle.fundAmount}
                  onChange={handleChange}
                />
              </>
            )}
          </>
        )}

        <button onClick={handleCreate} style={styles.createButton}>
          Save Vehicle
        </button>
      </div>
      {/* <h2>Vehicles List</h2> */}
      <div className="flex flex-wrap justify-center gap-4">
       {
        vehicles.map((value, index)=>(
          <AdminVehicleCard key={index} outsideLocation={value.outsideGarageLocation} fundAmount={value.fundAmount} isInPoliceGarage={value.isInPoliceGarage} isActive={value.isActive} temporaryLocation={value.temporaryLocation} policeOfficer={value.policeOfficer} province={value.province} manufactureYear={value.manufactureYear} revenueLicenseNumber={value.revenueLicenseNumber} engineNumber={value.engineNumber} chassyNumber={value.chassyNumber} name={value.vehicleName} 
          station={value.policeStation} category={value.vehicleCategory} model={value.vehicleBrand} vehicle_no={value.vehicleNumber} image={value.vehicleImage} is_active={value.isActive} is_in_police_garage={value.isInPoliceGarage} handleDelete={handleDelete} />
        ))
       }
  </div>
  </div>
  <Footer/>
  </>   


  );

};


// Inline CSS
const styles = {
    formContainer: {
      display: "grid",
      gap: "10px",
      marginBottom: "20px",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    },
    createButton: {
      backgroundColor: "#28a745",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.3s",
    },
    dropdown: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    deleteButton: {
      backgroundColor: "#dc3545",
      color: "white",
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    },
  };


export default ManageVehicle