
// function VehicleCard({ name, image, vehicle_no, model, station, category, chassyNumber, engineNumber, revenueLicenseNumber, manufactureYear, province, policeOfficer, temporaryLocation, isActive, isInPoliceGarage, fundAmount}) {
//   return (
//     <div className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[500px] bg-slate-300 flex m-2 rounded-md relative">
//       <div>
//         <img
//           src={image}
//           className="w-[97%] h-[35%] m-2 flex absolute rounded-md"
//           alt="Vehicle"
//         />
//       </div>
//       <div className="bg-green-400 flex flex-col justify-center items-center absolute rounded-md top-[200px] left-[180px] p-1 w-[24%]">
//         <h2 className="text-center text-md font-semibold">{vehicle_no}</h2>
//       </div>
//      <div className="flex flex-row ">
//      <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[240px] justify-center p-2 m-2">
//              <h2 className="text-center text-md font-semibold">{name}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[240px] justify-center p-2 m-2 mx-[180px]">
//              <h2 className="text-center text-md font-semibold">{station}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[240px] justify-center p-2 m-2 mx-[330px]">
//              <h2 className="text-center text-md font-semibold">{category}</h2>
//       </div>
      
//      </div>
//      {/* second line */}
    
//      <div className="flex flex-row ">
//      <div className="bg-blue-300 flex absolute rounded-md w-[25%] top-[290px] justify-center p-2 m-2">
//              <h2 className="text-center text-md font-semibold">{chassyNumber}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[25%] top-[290px] justify-center p-2 m-2 mx-[180px]">
//              <h2 className="text-center text-md font-semibold">{engineNumber}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[290px] justify-center p-2 m-2 mx-[330px]">
//              <h2 className="text-center text-md font-semibold">{revenueLicenseNumber}</h2>
//       </div>
//      </div>

//        {/* third line */}
    
//        <div className="flex flex-row ">
//      <div className="bg-blue-300 flex absolute rounded-md w-[25%] top-[365px] justify-center p-2 m-2">
//              <h2 className="text-center text-md font-semibold">{manufactureYear}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[25%] top-[365px] justify-center p-2 m-2 mx-[180px]">
//              <h2 className="text-center text-md font-semibold">{province}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[365px] justify-center p-2 m-2 mx-[330px]">
//              <h2 className="text-center text-md font-semibold">{policeOfficer}</h2>
//       </div>
//      </div>

//         {/* fourth line */}
    
//         <div className="flex flex-row ">
//      <div className="bg-blue-300 flex absolute rounded-md w-[25%] top-[440px] justify-center p-1 m-2">
//              <h2 className="text-center text-md font-semibold">{temporaryLocation}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[25%] top-[440px] justify-center p-2 m-2 mx-[180px]">
//              <h2 className="text-center text-md font-semibold">{isActive ? "Active" : "Not Active"}</h2>
//       </div>
//       <div className="bg-blue-300 flex absolute rounded-md w-[24%] top-[440px] justify-center p-2 m-2 mx-[330px]">
//              <h2 className="text-center text-md font-semibold">{fundAmount}</h2>
//       </div>
//      </div>
     
//     </div>
//   );
// }

// export default VehicleCard;


function VehicleCard({ name, image, vehicle_no, model, station, category, chassyNumber, engineNumber, revenueLicenseNumber, manufactureYear, province, policeOfficer, temporaryLocation, isActive, isInPoliceGarage, fundAmount}) {
       return (
         <div className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[980px] bg-slate-300 flex m-2 rounded-md relative">
           <div>
             <img
               src={image}
               className="w-[97%] h-[38%] m-2 flex absolute rounded-md"
               alt="Vehicle"
             />
           </div>
         
         <div className="bg-green-400 flex flex-row justify-center items-center absolute rounded-md top-[380px] mx-2 p-1 w-[97%]">
             <h2 className="text-center text-sm ">වාහන අංකය : {vehicle_no}</h2>
         </div>
          <div className="flex">

          <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[410px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහනයේ නම : {name}</h2>
           </div>
           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[450px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">චැසි අංකය : {chassyNumber}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[490px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">එංජින් අංකය: {engineNumber}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[530px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">ආදායම් බලපත්‍රය : {revenueLicenseNumber}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[570px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">නිශ්පාදන වර්ෂය : {manufactureYear}</h2>
           </div>
           
           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[610px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">පලාත : {province}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[650px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහනයේ තාවකාලික ස්ථානය : {temporaryLocation}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[690px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහනය භාර පොලිස් නිලදාරියා : {policeOfficer}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[730px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">පොලිස් ස්ථානය : {station}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[770px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහනය පොලිස් ගරාජයේද ? {isInPoliceGarage ? "Available" : "Not Available"}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[810px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහනය ධාවන තත්වයේද ? {isActive ? "Active" : "Not Active"}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[850px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහන වර්ගය : {category}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[890px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">වාහන මොඩලය : {model}</h2>
           </div>

           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[930px] justify-center p-1 m-2">
                  <h2 className="text-center text-sm">අරමුදල් ප්‍රමාණය : {fundAmount}</h2>
           </div>

           </div>
          
         </div>
       );
     }
     
     export default VehicleCard;
     

     