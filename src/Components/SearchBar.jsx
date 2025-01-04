

function SearchBar() {
  return (
    <>
    <div className='hidden sm:flex relative items-center w-full flex my-[25px] mx-[2px] h-[50px] bg-slate-500 rounded-md'>

      
        <div className="flex ">
        <input type="text" className="bg-slate-300 rounded-md w-[250px] mx-[40px]"/>
       
      
       <input type="text" className="bg-slate-300 rounded-md w-[250px]"/>
       
       <button className="rounded-md mx-[40px] w-[70px] bg-slate-100">Search</button>
        </div>
        
    </div>


<div className='sm:hidden relative items-start w-full flex my-[25px] mx-[2px] h-[100px] bg-slate-500 rounded-md'>

      
<div className="flex absolute top-4">
<input type="text" className="bg-slate-300 rounded-md w-[220px] mx-[20px] flex"/>


<input type="text" className="bg-slate-300 rounded-md w-[220px] flex"/>


</div>
<div className="flex-col top-[60px] absolute">
<button className="rounded-md mx-[20px] w-[70px] bg-slate-100 flex-col">Search</button>
</div>

</div>


    </>
  )
}

export default SearchBar