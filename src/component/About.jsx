import React from 'react'
import Marquee from "react-fast-marquee";

const About = () => {
  const marqeeEle=[
    {
      "image":"javascript.svg",
      "name":"Javascript"
    },
    {
      "image":"java.svg",
      "name":"Java"
    },
    {
      "image":"c.svg",
      "name":"C++"
    },
    {
      "image":"c-1.svg",
      "name":"C"
    },
    {
      "image":"html.svg",
      "name":"Html"
    },
    {
      "image":"css.svg",
      "name":"Css"
    },
    {
      "image":"react.svg",
      "name":"React"
    },
    {
      "image":"redux.svg",
      "name":"Redux"
    },
    {
      "image":"tailwind.svg",
      "name":"Tailwind Css"
    },
    {
      "image":"nodejs.svg",
      "name":"Node Js"
    },
    {
      "image":"express.svg",
      "name":"Express"
    },
   
    {
      "image":"sql.svg",
      "name":"MySQL"
    },
    {
      "image":"mongodb.svg",
      "name":"Mongodb"
    },
    {
      "image":"mongoose.png",
      "name":"Mongoose"
    },
    {
      "image":"jwt.png",
      "name":"Jwt"
    },
    {
      "image":"bcrypt.png",
      "name":"Bcrypt"
    },
   
  ]
  return (
    <div className='w-full h-full  bg-black px-1 py-5 '>
      <p className='text-3xl text-blue-300 font-semibold mb-2.5 ml-2.5 '>Technologies worked with</p>
      <div className=' w-full py-1.5 bg-gray-800  '>
        
        <Marquee>
        {marqeeEle.map((el,index)=>{
          return <div className='h-[200px] mx-10 flex flex-col justify-center items-center  px-5 py-10 gap-2.5 rounded-2xl ' key={index}>
          <div className=''>
            <img src={el.image} className='w-[100px]' alt="img" />
          </div>
          <div>
            <p className='text-white text-center'>{el.name}</p>
          </div>
        </div>
        })}
        
     </Marquee>
      </div>
    
    </div>
  )
}

export default About