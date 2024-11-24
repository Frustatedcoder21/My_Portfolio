import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';

const Center = () => {
  useGSAP(()=>{
    gsap.to('#exclamation',{
      opacity:0,
      repeat:-1,
      duration:2,
      yoyo:true
    })
    gsap.from('#mayank',{
      opacity:0,
      duration:2,
      stagger:0.7
   
    })
    gsap.to('#sub',{
      textDecoration:'underline',
      duration:0.2,
      stagger:0.2,
      repeat:-1,
      // yoyo:true,
      ease:'bounce.inOut'
      
    })

  })
  
  return (
    <div className="relative w-screen h-screen bg-transparent ">
      {/* Video Background */}
      <video
        className="w-full h-full absolute top-0 left-0 object-cover -z-10"
        src="bg.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Foreground Content */}
      <div className="container w-screen h-[60vh] relative z-20 flex flex-col justify-center items-center m-auto">
        <div className=" center col-span-8 rounded-lg ">
         <p className='text-red-600 font-bebasNeue text-[100px] text-center'>Hi<span id='exclamation'> !</span> I am <span id='mayank'>M</span><span id='mayank'>A</span><span id='mayank'>Y</span><span id='mayank'>A</span><span id='mayank'>N</span><span id='mayank'>K</span> </p>
        

         <p className='text-red-600 text-center text-[20px] font-bebasNeue '>A full stack <span> </span>
          <span id='sub'>w</span> 
          <span id='sub'>e</span> 
          <span id='sub'>b</span> 
          <span id='sub'> </span> 
          <span id='sub'>D</span> 
          <span id='sub'>e</span> 
          <span id='sub'>v</span> 
          <span id='sub'>e</span> 
          <span id='sub'>l</span> 
          <span id='sub'>o</span> 
          <span id='sub'>p</span> 
          <span id='sub'>e</span> 
          <span id='sub'>r</span> 
          </p>
         
        </div>
        <button className='text-red-600 border-red-600 border-2 rounded-md p-1 bg-transparent m-4 hover:text-black hover:bg-red-600'><a href="/Mayank-Pandey-(updated)Resume.pdf" download="Mayank-Pandey-Resume.pdf">Download Resume</a></button>   
       
        
      </div>
    </div>
  );
};

export default Center;
