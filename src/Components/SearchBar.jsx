

function SearchBar() {
  return (
    <>
    <div className='hidden sm:flex relative items-center w-full flex my-[25px] mx-[2px] h-[50px] bg-slate-500 rounded-md'>

      
    <div className="flex ">
        <input type="text" className="bg-slate-300 rounded-md w-[250px] mx-[40px]"/>
       
      
       {/* <input type="text" className="bg-slate-300 rounded-md w-[250px]"/> */}
       <select name="province" className="bg-slate-300 rounded-md w-[250px] h-[35px] items-center my-2">
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
       
       <button className="rounded-md mx-[40px] w-[70px] ">Search</button>
        </div>
        
    </div>




      




{/*   <select
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
        </select> */}






    </>
  )
}

export default SearchBar