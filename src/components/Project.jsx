
import React, { useEffect, useState } from 'react'
import './Project.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Project = () => {
   const[data,setData]=useState([]);
   const [loading,setLoading]=useState(true);
  useEffect(()=>{
     const retrive=async()=>{
      let val=await fetch('https://portfolio-backend-xuxv.onrender.com/api/data');
      let ok=await val.json();
      setLoading(false);
      setData(ok);
      console.log(data);
      
     }
     retrive();
  },[])
  useGSAP(()=>{
  
   gsap.from('#dot',{
    opacity:0,
    duration:0.5,
    stagger:0.2,
    repeat:-1
   })
  })
  return (
    <div className='w-screen sm:h-screen   bg-red-black '>
      <p className='text-center font-bebasNeue text-3xl text-red-600'>Projects</p>
      <div className='flex gap-8 justify-center flex-wrap mt-9'>
        {loading&& <div className='text-red-600'>Please wait projects are loading <span id='dot' className='text-3xl'>.</span><span id='dot' className='text-3xl'>.</span><span id='dot' className='text-3xl'>.</span></div>}
        {data.map((d,index)=>{
          return (
        
            <a key={index} href={d.link} className='border-red-600 border-2 w-[250px] h-[200px] relative flex items-center justify-center flex-col rounded-lg' target="_blank" rel="noopener noreferrer" id='project'>
             {/* <p className='text-white'>{d.link}</p> */}
             <div className='w-[250px] h-[200px] rounded-lg absolute bg-red-600 hover:opacity-0 hover:scale-150 flex  flex-col justify-center items-center'>
              <p className='font-bebasNeue font-bold text-2xl'>{d.name}</p>
              <p className='text-black text-center'>Technologies used:-[{d.technologies.map((t)=>{
              return <span>{t} </span>
             })}] </p>
              {/* <p>Click</p> */}
              </div>
            
              <p className='text-red-600 text-xs'>{d.description}</p>
            </a>
          )
        })}
      </div>
    </div>
  ) 
  }
export default Project
