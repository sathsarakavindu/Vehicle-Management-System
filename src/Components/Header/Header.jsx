
import logo from './../../assets/images/icons/logo.png';
import user from './../../assets/images/icons/user.png';
import HeaderItem from './HeaderItem';


function Header() {

  
  return (
    <header className="w-full h-[80px] bg-gray-800 text-white flex items-center justify-between relative">
      {/* Left Section: Logo */}
      <div className="flex gap-4 items-center p-4">
        <img src={logo} alt="logo" className="w-10 h-10 cursor-pointer" onClick={()=>{}}/>
        <h1 className='text-white text-lg font-bold cursor-pointer'>Vehicle Management System</h1>
      </div>

      {/* Center Section: Navigation Links */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <h2 className="text-white text-md font-medium cursor-pointer hover:underline">Home</h2>
        <h2 className="text-white text-md font-medium cursor-pointer hover:underline">About Us</h2>
      </div> */}


      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 hidden lg:flex">
      <HeaderItem headerName={'Home'} linkPath={"/"}/>
      <HeaderItem headerName={'About Us'} linkPath={"/about"}/>
      <HeaderItem headerName={'Contact Us'} linkPath={"/contact"}/>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/4 flex gap-6 hidden md:flex lg:hidden">
      <HeaderItem headerName={'Home'} linkPath={"/"}/>
      <HeaderItem headerName={'About Us'} linkPath={"/about"}/>
      <HeaderItem headerName={'Contact Us'} linkPath={"/contact"}/>
      </div>

      {/* Right Section: User Icon */}
      <div className="flex items-center absolute right-0 px-5 cursor-pointer">
        <img src={user} className="w-[35px]" alt="user" onClick={()=>{window.location.href = "/login"}}/>
      </div>
    </header>
  );
}

export default Header;
