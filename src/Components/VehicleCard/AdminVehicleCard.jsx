import { useNavigate } from "react-router-dom";

function AdminVehicleCard({ 
       name, 
       image, 
       vehicle_no, 
       model, 
       station, 
       category, 
       chassyNumber, 
       engineNumber, 
       revenueLicenseNumber, 
       manufactureYear, 
       province, 
       policeOfficer, 
       temporaryLocation, 
       isActive, 
       isInPoliceGarage, 
       fundAmount, 
       handleDelete,
       handleEdit
       // Accept the delete function as a prop
   }) {

       const navigate = useNavigate();
       return (
          <div className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[1050px] bg-slate-300 flex flex-col m-2 rounded-md relative"> 
           <div className="w-full">
               <div>
                   <img
                       src={image}
                       className="w-[97%] h-[38%] m-2 flex absolute rounded-md"
                       alt="Vehicle"
                   />
               </div>
           
               <div className="bg-green-400 flex flex-row justify-center items-center absolute rounded-md top-[380px] mx-2 p-1 w-[97%]">
                   <h2 className="text-center text-sm">{vehicle_no}</h2>
               </div>
               
   
               <div className="flex">
   
             <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[410px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{name}</h2>
              </div>
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[450px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">Chassy Number: {chassyNumber}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[490px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">Engine Number: {engineNumber}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[530px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">Revenue Licence Number: {revenueLicenseNumber}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[570px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">Manufacured Year: : {manufactureYear}</h2>
              </div>
              
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[610px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">Provice: : {province}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[650px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{temporaryLocation}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[690px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{policeOfficer}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[730px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{station}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[770px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{isInPoliceGarage ? "Available" : "Not Available"}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[810px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{isActive ? "Active" : "Not Active"}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[850px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{category}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[890px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{model}</h2>
              </div>
   
              <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[930px] justify-center p-1 m-2">
                     <h2 className="text-center text-sm">{fundAmount}</h2>
              </div>
   
              </div>
           </div>
   
           {/*Edit button*/ }
           <button onClick={()=>{navigate('/edit-vehicle')}} className="absolute bottom-4 right-[120px] px-3 py-1 ">
                 Edit
           </button>
   
           {/* Delete button */}
           <button
               onClick={() => handleDelete(vehicle_no)} // Use the passed function with vehicle_no
               className="absolute bottom-4 right-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
           >
               Delete
           </button>
          </div> 
       );
   }
   
   export default AdminVehicleCard;
   






// function AdminVehicleCard({ 
//     name, 
//     image, 
//     vehicle_no, 
//     model, 
//     station, 
//     category, 
//     chassyNumber, 
//     engineNumber, 
//     revenueLicenseNumber, 
//     manufactureYear, 
//     province, 
//     policeOfficer, 
//     temporaryLocation, 
//     isActive, 
//     isInPoliceGarage, 
//     fundAmount, 
//     handleDelete,
//     handleEdit
//     // Accept the delete function as a prop
// }) {
//     return (
//        <div className="w-full sm:w-full md:w-[48%] lg:w-[30%] h-[1050px] bg-slate-300 flex flex-col m-2 rounded-md relative"> 
//         <div className="w-full">
//             <div>
//                 <img
//                     src={image}
//                     className="w-[97%] h-[38%] m-2 flex absolute rounded-md"
//                     alt="Vehicle"
//                 />
//             </div>
        
//             <div className="bg-green-400 flex flex-row justify-center items-center absolute rounded-md top-[380px] mx-2 p-1 w-[97%]">
//                 <h2 className="text-center text-sm">{vehicle_no}</h2>
//             </div>
            

//             <div className="flex">

//           <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[410px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{name}</h2>
//            </div>
//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[450px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">Chassy Number: {chassyNumber}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[490px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">Engine Number: {engineNumber}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[530px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">Revenue Licence Number: {revenueLicenseNumber}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[570px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">Manufacured Year: : {manufactureYear}</h2>
//            </div>
           
//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[610px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">Provice: : {province}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[650px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{temporaryLocation}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[690px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{policeOfficer}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[730px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{station}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[770px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{isInPoliceGarage ? "Available" : "Not Available"}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[810px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{isActive ? "Active" : "Not Active"}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[850px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{category}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[890px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{model}</h2>
//            </div>

//            <div className="bg-blue-300 flex absolute rounded-md w-[97%] top-[930px] justify-center p-1 m-2">
//                   <h2 className="text-center text-sm">{fundAmount}</h2>
//            </div>

//            </div>
//         </div>

//         {/*Edit button*/ }
//         <button onClick={()=>handleEdit()} className="absolute bottom-4 right-[120px] px-3 py-1 ">
//               Edit
//         </button>

//         {/* Delete button */}
//         <button
//             onClick={() => handleDelete(vehicle_no)} // Use the passed function with vehicle_no
//             className="absolute bottom-4 right-4 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
//         >
//             Delete
//         </button>
//        </div> 
//     );
// }

// export default AdminVehicleCard;



