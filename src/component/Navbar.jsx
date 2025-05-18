import React, { useState } from 'react'
import { Link } from 'react-scroll';
const Navbar = () => {
    const [menu,setMenu]=useState(false);
  return (
    <div className='w-full h-full bg-black'>
    <ul className='hidden w-full text-white text-3xl font-primary md:flex justify-center gap-10 items-center py-2.5'>
     <li className='cursor-pointer hover:bg-blue-300 duration-200 rounded-2xl px-2.5 py-1.5'><Link to='home' smooth={true} duration={1000}>Home</Link></li>
          <li className='cursor-pointer hover:bg-blue-300 duration-200 rounded-2xl px-2.5 py-1.5'><Link to='project' smooth={true} duration={1000}>Projects</Link></li>
 <li className='cursor-pointer hover:bg-blue-300 duration-200 rounded-2xl px-2.5 py-1.5'><Link to='about' smooth={true} duration={1000}>About</Link></li>
     <li className='cursor-pointer hover:bg-blue-300 duration-200 rounded-2xl px-2.5 py-1.5'><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
    </ul>
    <div className='w-full relative'>
    <img src={menu?"cross.svg":"menu.svg"} className=' inline md:hidden w-[30px] absolute right-2 top-2' onClick={()=>{
        setMenu((prev)=>!prev)
    }} alt="" />
   {
    menu &&  <ul className='text-white w-full flex flex-col items-center pt-5 gap-2'>
    <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
    <li><Link to='project' smooth={true} duration={1000}>Projects</Link></li>
    <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
    <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
  </ul>
   }
    </div>
    
    </div>
  )
}

export default Navbar