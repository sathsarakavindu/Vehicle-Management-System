
// function VehicleCard({name, image, vehicle_no}) {
//   return (
//     <div className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[500px] bg-slate-300 flex  m-2 rounded-md relative">
//        <div>
//         <img src={image} className="w-[97%] h-[35%] m-2 flex absolute rounded-md"/>
//        </div>
//        <div className=" bg-green-300 flex flex-col absolute rounded-md top-[200px] left-[10px] p-1">
//               <h2>{vehicle_no}</h2>
//        </div>
//     </div>
//   )
// }

// export default VehicleCard


function VehicleCard({ name, image, vehicle_no, model, station, category}) {
  return (
    <div className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[500px] bg-slate-300 flex m-2 rounded-md relative">
      <div>
        <img
          src={image}
          className="w-[97%] h-[35%] m-2 flex absolute rounded-md"
          alt="Vehicle"
        />
      </div>
      <div className="bg-green-400 flex flex-col justify-center items-center absolute rounded-md top-[200px] left-[180px] p-1 w-[24%]">
        <h2 className="text-center text-md font-semibold">{vehicle_no}</h2>
      </div>
     <div className="flex flex-row ">
     <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[250px] justify-center p-1 m-2">
             <h2 className="text-center text-md font-semibold">{model}</h2>
      </div>
      <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[250px] justify-center p-1 m-2 mx-[180px]">
             <h2 className="text-center text-md font-semibold">{station}</h2>
      </div>
      <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[250px] justify-center p-1 m-2 mx-[330px]">
             <h2 className="text-center text-md font-semibold">{category}</h2>
      </div>
     </div>
    </div>
  );
}

export default VehicleCard;
