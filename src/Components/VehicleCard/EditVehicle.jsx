import { useNavigate } from "react-router-dom";
import Header from './../Header/Header';
import Footer from './../Footer';


function EditVehicle() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
      };
  return (
   <>
   <Header/>
    <div className="w-full h-[1450px] flex justify-center items-center mb-12">
         <form onSubmit={()=>{}} className="p-6 bg-gray-100 rounded-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Edit Vehicle Details</h2>
            
            <label className="block mb-2">
               Vehicle No:
               <input
                  type="text"
                  value={''}
                  onChange={() => {}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Vehicle No"
                  required
               />
            </label>

            <label className="block mb-2">
               Vehicle Name:
               <input
                  type="text"
                  value={''}
                  onChange={() => {}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Vehicle Name"
                  required
               />
            </label>

            <label className="block mb-2">
               Chassy Number:
               <input
                  type="text"
                 value={''}
                 onChange={() => {}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Chassy Number"
                  required
               />
            </label>
            <label className="block mb-2">
               Engine Number:
               <input
                  type="text"
                  value={''}
                  onChange={() => {}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Engine Number"
               />
            </label>
            <label className="block mb-2">
               Vehicle Revenue Permit:
               <input
                  type="text"
                  value={''}
                  onChange={() => {}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Vehicle Revenue Permit"
                  required
               />
            </label>

            <label className="block mb-2">
              Manufacture Year:
               {/* <textarea
                  value={''}
                  onChange={() =>{}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Enter Description"
                  required
               /> */}
                <input
                  type="text"
                  value={''}
                  onChange={() => {}}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="Manufacture Year"
                  required
               />
            </label>
            <label className="block mb-4">
               Category:
               <select className="w-full p-2 rounded border mt-1">
                  <option value={''}>Select Category</option>
                  <option value={'Truck'}>Truck</option>
                  <option value={'Sedan'}>Sedan</option>
                  <option value={'SUV'}>SUV</option>
                  <option value={'Motorcycle'}>Motorcycle</option>
               </select>

            </label>
            <label className="block mb-3">
               {/* Upload Image:
               <input
                  type="file"
                  onChange={''}
                  className="w-full p-2 border rounded mt-1"
                  accept="image/*"
               /> */}
               Provice:
               <select name="province"
          onChange={()=>{}}
          className=" mb-2 w-full p-2 mt-1">
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
            </label>

            <label className="block mb-2">
               Temporary Location:
              <input type="text" value={''} placeholder="Temporary Location" onChange={()=>{}} className="w-full p-2 border rounded mt-1" required/>
            </label>

            <label className="block mb-2">
               Police Officer:
              <input type="text" value={''} placeholder="Police Officer" onChange={()=>{}} className="w-full p-2 border rounded mt-1" required/>
            </label>

            <label className="block mb-2">
               Police Station:
              <input type="text" value={''} placeholder="Temporary Location" onChange={()=>{}} className="w-full p-2 border rounded mt-1" required/>
            </label>

            <label className="block mb-2">
               Vehicle Type:
              <input type="text" value={''} placeholder="Vehicle Type" onChange={()=>{}} className="w-full p-2 border rounded mt-1" required/>
            </label>

            <label className="block mb-2">
               Vehicle Model:
              <input type="text" value={''} placeholder="Vehicle Model" onChange={()=>{}} className="w-full p-2 border rounded mt-1" required/>
            </label>

            <label className="block mb-2">
               Amount of Fund:
              <input type="text" value={''} placeholder="Amount of Fund" onChange={()=>{}} className="w-full p-2 border rounded mt-1" required/>
            </label>

            <button type="submit" className="w-full p-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 justify-center flex">
                Update Vehicle
            
            </button>
            <button type="button" onClick={()=>{handleBack()}} className="w-full p-2 mt-4 bg-gray-500 text-white rounded hover:bg-gray-600">
             Back
        </button>
         </form>
      </div>
      <Footer/>
      </>
  )
}

export default EditVehicle

