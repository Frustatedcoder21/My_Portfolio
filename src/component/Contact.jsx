import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full bg-black relative py-5 break-words '>
     <p className='text-5xl text-blue-300 mb-10 ml-2.5 font-semibold '>Contact</p>
    <div className=' mt-10 flex  flex-wrap gap-5  items-center w-full px-2.5 md:px-10 break-words '>
         <div className='text-5xl md:text-7xl text-white break-words '>
        <p>I’m available for work,</p> <span className='text-blue-300'> collaboration, or coffee</span>.
     </div>
     <div className=' text-blue-300 rounded-2xl px-5 flex flex-col gap-10 mt-2.5'>
      <div className='flex items-center text-xl md:text-2xl gap-5'>
        <img src="email.svg" className='h-[50px]' alt="" />
        <a href="mailto:mayankp2k1@gmail.com">mayankp2k1@gmail.com</a>
        
      </div>
      <div className='flex items-center  md:text-2xl gap-5'>
        <img src="github.svg" className='h-[50px]' alt="" />
        <a href="https://github.com/Frustatedcoder21" target='_blank'>github.com/Frustatedcoder21</a>
        
      </div>
      <div className='flex items-center  md:text-2xl gap-5'>
        <img src="linkedin.svg" className='h-[50px]' alt="" />
        <a href="https://www.linkedin.com/in/mayankpandey2104/" target='_blank'>linkedin.com/in/mayankpandey2104</a>
        
      </div>
      <div className='flex items-center  md:text-2xl gap-5'>
        <img src="twitter.svg" className='h-[50px]' alt="" />
        <a href="https://www.linkedin.com/in/mayankpandey2104/" target='_blank'>linkedin.com/in/mayankpandey2104</a>
        
      </div>
     </div>
    </div>
    </div>
  )
}

export default Contact