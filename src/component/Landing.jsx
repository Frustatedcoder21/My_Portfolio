import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-full py-5 bg-black flex flex-wrap gap-10  justify-around items-center'>
    <div className='image relative w-[300px] h-[380px] '>
      <img src="myphoto.jpg" className='w-full h-full rounded-full shadow-blue-300 shadow-2xl' alt="" />
      <div className='w-full h-full rounded-full absolute bg-black top-0 left-0 opacity-40'></div>
    </div>
    <div className='about w-[95%] md:w-[550px] min-h-[450px] py-2.5 rounded-2xl shadow-blue-300 shadow-xl flex flex-col justify-center'>
     
     <div className='pt-5'>
    <p className='text-white text-center px-8 text-xl font-primary'>Welcome to My Portfolio Hi, I’m <span className='text-blue-300'>Mayank</span>, a passionate web developer with experience in building responsive and user-friendly web applications using the MERN stack. This portfolio showcases my latest projects, technical skills, and journey in web development. Whether you're a recruiter, a fellow developer, or just curious, feel free to explore my work and get in touch! </p>
    </div>
     

    <div className=' w-full flex justify-center items-center gap-10'>
    <a href="./Mayank-Pandey.pdf" className='w-[200px] h-[40px] py-2 px-5 bg-blue-300 rounded-2xl text-center font-primary' download="Mayank-Pandey.pdf">Download Resume</a>
    {/* <a href="./Mayank-Pandey.pdf" className='w-[150px] h-[40px] py-2 px-5 bg-blue-300 rounded-2xl' download="Mayank-Pandey.pdf">Download Resume</a> */}

    </div>
    </div>
    </div>
  )
}

export default Landing