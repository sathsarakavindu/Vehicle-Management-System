
// import { useState } from "react";


// function SearchBar() {
//   const [province, setProvince] = useState("");


// const handleChange = ()=>{
//   console.log(province);
// };

//   return (
//     <>
//     <div className='hidden sm:flex relative items-center w-full flex my-[25px] mx-[2px] h-[50px] bg-slate-500 rounded-md'>

      
//     <div className="flex ">
//         <input type="text" className="bg-slate-300 rounded-md w-[250px] mx-[40px]"/>
       
      
//        {/* <input type="text" className="bg-slate-300 rounded-md w-[250px]"/> */}
//        <select name="province" className="bg-slate-300 rounded-md w-[250px] h-[35px] items-center my-2" onChange={(e)=>setProvince(e.target.value)}>
//           <option value="">Select Province</option>
//           <option value="Western">Western</option>
//           <option value="Central">Central</option>
//           <option value="Southern">Southern</option>
//           <option value="Eastern">Eastern</option>
//           <option value="Northern">Northern</option>
//           <option value="North Western">North Western</option>
//           <option value="Uva">Uva</option>
//           <option value="Sabaragamuwa">Sabaragamuwa</option>
//         </select>
       
//        <button className="rounded-md mx-[40px] w-[70px]" onClick={()=> handleChange()}>Search</button>
//         </div>
        
//     </div>

//     </>
//   )
// }

// export default SearchBar

import { useState } from "react";

function SearchBar({ province, setProvince }) {
  const handleChange = () => {
    //console.log("Selected Province:", province);
  };

  return (
    <div className="hidden sm:flex relative items-center w-full flex my-[25px] mx-[2px] h-[50px] bg-slate-500 rounded-md">
      <div className="flex">
        <input type="text" className="bg-slate-300 rounded-md w-[250px] mx-[40px]" />
        <select
          name="province"
          className="bg-slate-300 rounded-md w-[250px] h-[35px] items-center my-2"
          onChange={(e) => setProvince(e.target.value)} // Update province
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
        <button className="rounded-md mx-[40px] w-[70px]" onClick={handleChange}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
