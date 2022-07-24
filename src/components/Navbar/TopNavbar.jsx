import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
const TopNavbar = () => {
  return (

    <>
    <div>TopNavbar</div>
    <div>
      <img width={`5%`} src="https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg" alt="logo_website" />
    </div>
    <div>
      <span> <SearchIcon /> </span>
      <input  placeholder='Search for products or brands'  type="text" />
    </div>
    <div>
      <div>
        <span>Hi,User <span><KeyboardArrowDownIcon /></span></span>
      </div>
        <div><span><LockIcon /></span></div>
    </div>
    </>
  )
}

export default TopNavbar