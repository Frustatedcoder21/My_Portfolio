import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import './About.css'
const About = () => {
    useGSAP(()=>{
        gsap.from('#edu',{
            opacity:0,
            duration:2,
            stagger:1
        })
     gsap.from('.c,.js,.ht,.css,.node,.react',{
        background:'conic-gradient(black 360deg, red 0deg)',
        duration:2,
        ease:'bounce.out'
     })
    })
  return (
    <div className='w-screen    bg-red-black relative flex flex-col justify-around'>
        <div className='education'>
            <p className='text-center text-red-600 text-3xl font-bebasNeue '>Education</p>
            <div className='flex justify-center gap-6 flex-wrap'>
        <div className='text-red-600 border-red-600 border-2 w-[60vw] sm:w-[30vw]   rounded-md flex flex-col items-center justify-center' id='edu'>
           <img src="/uem.png" alt="" />
            <p className='text-center'>University of Engineering and Management, kolkata</p>
            <p>B.tech(CSE)</p> 
            <p>(2020-2024)</p>
        </div>
        <div className='text-red-600 border-red-600 border-2 w-[60vw] sm:w-[30vw]   rounded-md flex flex-col items-center justify-center' id='edu'>
           <img src="/bhs.png" alt="" />
            <p>Birla High School</p>
            <p>XII</p>
            <p>(2019)</p>
        </div>
        <div className='text-red-600 border-red-600 border-2 w-[60vw] sm:w-[30vw]  rounded-md flex flex-col items-center justify-center' id='edu'>
           <img src="/sas.png" alt="" />
            <p>
                St Aloysius High School
            </p>
            <p>X</p>
            <p>(2017)</p>
        </div>
        </div>
        </div>

        <div className='skills mt-7'>
        <h1 className='text-center text-red-600 text-3xl font-bebasNeue'>Skills</h1>
       <div className='flex gap-4 flex-wrap justify-center mt-8'>
        <div className='c w-[150px] h-[150px] bg-red-600 flex justify-center items-center ' >
            <div className=' cover w-[100px] h-[100px] bg-black flex justify-center items-center '>
              <p className='text-red-600'>C++</p>
            </div>
        </div>
        <div className='js w-[150px] h-[150px] bg-red-600 flex justify-center items-center ' >
            <div className=' cover w-[100px] h-[100px] bg-black flex justify-center items-center'>
            <p className='text-red-600'>Javascript</p>
            </div>
        </div>
        <div className='ht w-[150px] h-[150px] bg-red-600 flex justify-center items-center ' >
            <div className=' cover w-[100px] h-[100px] bg-black flex justify-center items-center '>
             <p className='text-red-600'>Html</p>
            </div>
        </div>
        <div className='css w-[150px] h-[150px] bg-red-600 flex justify-center items-center ' >
            <div className=' cover w-[100px] h-[100px] bg-black flex justify-center items-center'>
             <p className='text-red-600'>CSS</p>
            </div>
        </div>
        <div className='node w-[150px] h-[150px] bg-red-600 flex justify-center items-center ' >
            <div className=' cover w-[100px] h-[100px] bg-black flex justify-center items-center'>
             <p className='text-red-600'>NodeJs</p>
            </div>
        </div>
        <div className='react w-[150px] h-[150px] bg-red-600 flex justify-center items-center ' >
            <div className=' cover w-[100px] h-[100px] bg-black flex justify-center items-center'>
             <p className='text-red-600'>ReactJs</p>
            </div>
        </div>
        
       </div>
       </div>
    </div>
  )
}

export default About
