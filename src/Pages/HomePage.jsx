
import Header from '../Components/Header/Header'
import SearchBar from '../Components/SearchBar'
import VehiclePanel from '../Components/VehicleCard/VehiclePanel'
import Footer from '../Components/Footer'

function HomePage() {
  return (
    <div>
        
     <Header/>
        <SearchBar/>
        <VehiclePanel/>
       <Footer/>
    </div>
  )
}

export default HomePage