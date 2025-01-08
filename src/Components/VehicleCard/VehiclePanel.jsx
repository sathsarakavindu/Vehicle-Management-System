
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
      <VehicleCard name={'Vehicle 1'} station={'Veyangoda'} category={'Electric'} model={'Nissan Leaf'} vehicle_no={'wp-2693'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
      <VehicleCard name={'Vehicle 2'} station={'Paliyagoda'} category={'Petrol'} model={'Prado'} vehicle_no={'wp-2163'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
      <VehicleCard name={'vehicle 3'} station={'Kiribathgoda'} category={'Hybrid'} model={'Monterro'} vehicle_no={'wp-5679'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P4uDsjBCS_f54801NJpbGxzVgcgq20vcQIgfjb23U11mDoue0xML-p4&s'}/>
    </div>
  );
}

export default VehiclePanel;

