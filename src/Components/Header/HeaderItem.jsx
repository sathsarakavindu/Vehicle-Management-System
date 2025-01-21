import { Link } from "react-router-dom"


function HeaderItem({headerName, linkPath}) {
  return (
    <div>
    <Link to = {linkPath}><h2 className='text-white text-md font-medium cursor-pointer hover:underline'>{headerName}</h2></Link>
    </div>
  )
}

export default HeaderItem