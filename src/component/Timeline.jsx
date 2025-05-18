import React from 'react'



const Timeline = () => {

  return (
    <div className='w-full  bg-black'>
      <p className='text-blue-300 font-semibold text-3xl ml-2.5 mb-2.5'>My Journey So Far</p>
<div className="w-full h-full grid grid-cols-4 grid-rows-6 py-2.5">
    
  <svg className="col-start-3 col-end-3 row-start-1 row-end-12 w-full h-full">
    <line x1="0" y1="0" x2="0" y2="1000" stroke="#8ec5ff" strokeWidth="5" />
  </svg>
  {/* item 1 */}
  <div id='left' className=' flex items-center justify-around py-2.5 gap-5 col-start-1 col-end-3 md:col-start-2 row-start-1 row-end-2 md:col-end-3 px-1 hover:shadow-2xl shadow-blue-300 transition-all duration-200 cursor-pointer  hover:bg-blue-300 rounded-2xl opacity-100 '>
<div  className=''>
   <p className='text-white'>Unified Mentor</p>
   <p className='text-white'>Jan, 2025 - Feb, 2025</p>
    <a href="./unified-certificate.pdf" className=' py-2 px-1 bg-blue-300 rounded-2xl text-center font-primary text-xs hover:bg-white' download="unified-certificate.pdf ">Download Certificate</a>
   </div>
   <div className='w-[15px] h-[15px] rounded-full bg-blue-300'>

   </div>
  </div>
  {/* item 2 */}
  <div id='right' className=' flex flex-row-reverse items-center  justify-around  gap-10 col-start-3 col-end-5  md:col-start-3 md:col-end-4 row-start-2 row-end-3 px-1 hover:shadow-2xl shadow-blue-300 transition-all duration-200 cursor-pointer hover:bg-blue-300 rounded-2xl '>
 
<div >
   <p className='text-white'>University of Engineering and Management, Kolkata</p>
   <p className='text-white'>July, 2020 - August, 2024</p>
   </div>
   <div className='w-[15px] h-[15px] rounded-full bg-blue-300'>

   </div>
  
  </div>
  {/* item 3 */}
   
<div id='left' className=' flex items-center  justify-around  gap-10 col-start-1 col-end-3 md:col-start-2 md:col-end-3 row-start-4 row-end-5 px-1 hover:shadow-2xl shadow-blue-300 transition-all duration-200 cursor-pointer hover:bg-blue-300 rounded-2xl  opacity-100'>
 
<div >
   <p className='text-white'>Birla High School, kolkata</p>
   <p className='text-white'>March, 2017 - March, 2019</p>
   </div>
   <div className='w-[15px] h-[15px] rounded-full bg-blue-300'>

   </div>
  
  </div>
  {/* item 4 */}
   <div id='right' className=' flex flex-row-reverse items-center  justify-around  gap-10 col-start-3 col-end-5  md:col-start-3 md:col-end-4 row-start-6 row-end-7 px-1 hover:shadow-2xl shadow-blue-300 transition-all duration-200 cursor-pointer hover:bg-blue-300 rounded-2xl'>
 
<div >
   <p className='text-white'>St Aloysius High School</p>
   <p className='text-white'>July, 2007 - March, 2017</p>
   </div>
   <div className='w-[15px] h-[15px] rounded-full bg-blue-300'>

   </div>
  
  </div>
     
</div>
    </div>


  )
}

export default Timeline