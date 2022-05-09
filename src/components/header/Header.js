import React from 'react'
import './_header.scss';
import{FaBars}from "react-icons/fa"
import{AiOutlineSearch}from "react-icons/ai"
import{MdNotifications, MdApps}from "react-icons/md"
const Header = () => {
  return (
    <div className="border border-dark header">
      <FaBars className='header_menu'size={26}/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="" className='header_logo'/>
      <form>
      <input type="text" placeholder='Search for something'/>
      <button type="submit" className="">
          <AiOutlineSearch size={22}/>
      </button>
      </form>
      <div className="header_icons">
          <MdNotifications size={28}/>
          <MdApps size={28}/>
          <img src="https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png" alt="avatar" />
      </div>
    </div>
  )
}

export default Header
