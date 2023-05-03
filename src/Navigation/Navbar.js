import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import menu from '../Assets/menu.png'
import Navlinks from './Navlinks'
import Offcanvas from './Offcanvas'
const Navbar = () => {
    const [show , setShow] = useState(false)
    const handleClick = () => { 
        console.log(show)
        if(show===false) setShow(true)
        else setShow(false);
     }
  return (
    <>
    {
        show && (
            <Offcanvas handleClick={handleClick} />
        )
    }
    <div className="flex justify-between p-6  bg-white">
        <div className="">
            <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-around sm:w-1/2 xl:w-1/4 align-middle text-4xl">
           <Navlinks />
            <img src={menu} alt="menu" className='hover:scale-110 z-0' onClick={()=> handleClick()} />
        </div>
    </div>
    </>
  )
}

export default Navbar