
// function VehicleCard() {
//   return (
//     <div className="flex-row flex">
//     <div className="w-[500px] h-[500px] bg-slate-300 relative flex p-2 m-2 ml-2 mr-[50px] rounded-md ">
//         VehicleCard
//     </div>
//     <div className="w-[500px] h-[500px] bg-slate-300 relative flex p-2 m-2 mr-[50px] rounded-md ">
//         VehicleCard
//     </div>
//     <div className="w-[500px] h-[500px] bg-slate-300 relative flex p-2 m-2 mr-[10px] rounded-md ">
//         VehicleCard
//     </div>
//     </div>
//   )
// }

import VehicleCard from "./VehicleCard";

// export default VehicleCard


function VehiclePanel() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <VehicleCard name={'Vehicle 1'}/>
      <VehicleCard name={'Vehicle 2'}/>
     <VehicleCard name={'vehicle 3'}/>
    </div>
  );
}

export default VehiclePanel;

