import React, { useState } from 'react'

const Project = () => {
    const[view,setView]=useState(false);
    const project=[
        {
        name:'Dopamine Classes',
        link:'https://github.com/Frustatedcoder21/dopamine-classes.git',
        desc:'A modern and responsive website for a science coaching institute. Includes sections for courses, faculty, student testimonials, and contact form to enhance outreach and engagement.',
        tech:['React','Redux','Node','Express','MongoDb','Bycrpt','Jwt','Tailwind']
    },
        {
        name:'Gymmy',
        link:'https://github.com/Frustatedcoder21/Gymmy.git',
        desc:'A MERN stack web app where users can explore and subscribe to gym plans. Admins can manage users, subscriptions, and perform secure CRUD operations with JWT-based authentication.',
          tech:['React','Redux','Node','Express','MongoDb','Bycrpt','Jwt','Tailwind']
    },
        {
        name:'Your Indian Meal',
        link:'https://github.com/Frustatedcoder21/your-Indian-Meal.git',
        desc:'A RESTful API that provides details of Indian recipes, including ingredients and preparation steps. Admins can securely manage recipes with JWT-authenticated CRUD operations.',
        tech:['Node','Express','MongoDb','Ejs','Rest Api']
    },
        {
        name:'Typing Tester',
        link:'https://github.com/Frustatedcoder21/speedTyper.git',
        desc:'A simple web app to test and improve typing speed. It calculates words per minute (WPM), accuracy, and provides instant feedback in a clean, responsive UI.',
        tech:['Html','Css', 'Javascript']
    },
        {
        name:'C++ Code',
        link:'https://github.com/Frustatedcoder21/practice_c-.git',
        desc:'Some of my practiced C++ code are present in the repository',
        tech:['C++']
    },
        {
        name:'Url Shortner',
        link:'https://github.com/Frustatedcoder21/Url-Shortner.git',
        desc:'A minimal and functional URL shortener built with Node.js and EJS. Allows users to generate short links from long URLs with instant redirection. Designed with a clean, responsive interface to ensure ease of use and seamless performance.',
        tech:['Node','Express','Ejs','MongoDb']
    },
        
]
  return (
    <div className='w-full h-full bg-black px-1 py-5'>
     <p className='text-blue-300 text-3xl mb-2.5 ml-2.5 font-semibold '>Project which I have worked upon</p>
<div
  className={`w-full flex flex-wrap gap-2.5 py-1.5 justify-center items-center
    ${view ? 'h-auto' : 'h-[600px] '} overflow-hidden md:h-auto ` }>


       {project.map((p,index)=>{
       return <div key={index} className=' w-[250px] min-h-[350px]  border-2 border-white px-2.5 py-2.5 rounded-2xl shadow-2xl shadow-blue-300'>
            <div className='flex items-center gap-2.5'>
           <p className='text-blue-300 text-xl'>{p.name}</p>
           <a href={p.link} target='_blank'><img src="link.svg" className='w-[30px]' alt="" /></a>
            </div>Lor
            <p className='text-white'>{p.desc}</p>
        <div className='flex flex-wrap gap-1 py-1 px-0.5'>
            {p.tech.map((t,index)=>{
             return <span className='rounded-2xl bg-blue-300  p-1 mx-0.5 text-xs' key={index}>{t}</span>
            })}
        </div>
        </div>
       })} 
       
     </div>
     <div className=' w-full  md:hidden flex justify-center items-center gap-2.5  ' onClick={()=>{
        setView((prev)=>!prev)
     }}>
     <p className='text-blue-300  text-center text-xl'> See {view?'less':'more'} </p>
      <img src={view?"up.svg":"down.svg"} className='h-[30px]' alt="" />
     </div>
    </div>
  )
}

export default Project