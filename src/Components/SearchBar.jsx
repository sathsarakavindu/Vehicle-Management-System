
// import { useState } from "react";

// function SearchBar({ province, setProvince, vehicleNumber, setVehicleNumber }) {

//    const[searchValue, setSearchValue] = useState("");
//    const[isSearch, setIsSearch] = useState(false);

//   const handleChange = (e) => {
//    setSearchValue(e);
//   };

//   const eventSearch = ()=>{
    
//     if(searchValue != null){
//       setIsSearch(true);
//       setProvince("");
//       setVehicleNumber(searchValue);
     
//     }
//   }

//   const selectProvice = (e)=>{
//     if(isSearch == false){
//         setProvince(e);
//     }
//   }

//   return (
//     <div className="hidden sm:flex relative items-center w-full flex my-[25px] mx-[2px] h-[50px] bg-slate-500 rounded-md">
//       <div className="flex">
        
//         <select
//           name="province"
//           className="bg-slate-300 rounded-md w-[250px] h-[35px] items-center my-2 ml-2"
//           onChange={(e) => selectProvice(e.target.value)} // Update province
//           value={province} // Bind to province state
//         >
//           <option value="">All Province</option>
//           <option value="Western">Western</option>
//           <option value="Central">Central</option>
//           <option value="Southern">Southern</option>
//           <option value="Eastern">Eastern</option>
//           <option value="Northern">Northern</option>
//           <option value="North Western">North Western</option>
//           <option value="Uva">Uva</option>
//           <option value="Sabaragamuwa">Sabaragamuwa</option>
//         </select>
//         <input type="text" className="bg-slate-300 rounded-md w-[250px] mx-[40px]"  onChange={(e)=> handleChange(e.target.value)}/>
//         <button className="rounded-md mx-[40px] w-[70px]" onClick={() => eventSearch()}>
//           Search
//         </button>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

import { useState } from "react";

function SearchBar({ province, setProvince, vehicleNumber, setVehicleNumber }) {
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleChange = (e) => {
    setSearchValue(e);
  };

  const eventSearch = () => {
    if (searchValue != null) {
      setIsSearch(true);
      setProvince(""); // Reset province filter if vehicle number search is performed
      setVehicleNumber(searchValue); // Pass the vehicle number to filter
    }
  };

  const selectProvice = (e) => {
    if (!isSearch) {
      setProvince(e); // Only set province if it's not a search by vehicle number
    }
  };

  return (
    <div className="hidden sm:flex relative items-center w-full flex my-[25px] mx-[2px] h-[50px] bg-slate-500 rounded-md">
      <div className="flex">
        <select
          name="province"
          className="bg-slate-300 rounded-md w-[250px] h-[35px] items-center my-2 ml-2"
          onChange={(e) => selectProvice(e.target.value)} // Update province
          value={province} // Bind to province state
        >
          <option value="">All Province</option>
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
          className="bg-slate-300 rounded-md w-[250px] mx-[40px]"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="rounded-md mx-[40px] w-[70px]" onClick={() => eventSearch()}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
