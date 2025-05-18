import React, { useState,useEffect,useRef } from 'react'
import Landing from './Landing'
import Timeline from './Timeline'
import Navbar from './Navbar'
import About from './About'
import Project from './Project'
import Contact from './Contact'
const AllComponent = () => {
  const [location,setLocation]=useState({
    x:0,
    y:0
  })
   const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const getLocation=(e)=>{
console.log(e.clientX,e.clientY);
   setLocation({x:e.clientX,y:e.clientY})

  }
  return (
    <div className='w-screen cursor-none  relative overflow-x-hidden font-primary' onMouseMove={(e)=>{
     getLocation(e);
    }}>
<div
        ref={cursorRef}
        className="w-[30px] h-[30px] rounded-full bg-blue-300  shadow-2xl shadow-white fixed z-50 pointer-events-none opacity-30"
        style={{ transition: 'transform 0.03s linear' }} // optional smoothing
      ></div>
   <div className='nav w-full min-h-[10%] md:h-[10vh] '>
    <Navbar />
   </div>
    <div className='landing w-full min-h-screen md:h-screen' name='home'>
    <Landing />
    </div>
     <div className='projects w-full ' name='project'>
    <Project />
    </div>
    <div className='about w-full ' name='about'>
    <About />
    </div>
    <div className='timeline w-full  '>
    <Timeline />
    </div>
    <div className='Contact w-screen  md:h-screen ' name='contact'>
     <Contact />
    </div>
    

    </div>
  )
}

export default AllComponent