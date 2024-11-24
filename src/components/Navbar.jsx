import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from 'gsap'
import { Link } from "react-router-dom";
const Navbar = () => {
  const [heading, setHeading] = useState("Frustrated Coder");
   const [clicked,setClicked]=useState(false);
 
  const headingref=useRef();
  useGSAP(()=>{
    // let tl=gsap.timeline();
    gsap.from('#span',{
      opacity:0,
      duration:1,
      stagger:0.2,
      // repeat:-1,
      // yoyo:true
    })
    gsap.from('ul li',{
      opacity:0,
      transform:'translatey(-200%)',
      duration:0.5,
      stagger:0.3,
      ease:'elastic.out'
    })
    
  })

  return (
    <div className="w-full flex sm:justify-between sm:items-center  justify-center relative bg-black">
    
      <p
        className="text-red-600 font-bebasNeue text-3xl mx-2 my-3"
        
      >
        <a href="/">
        <span id="span">F</span>
        <span id="span">R</span>
        <span id="span">U</span>
        <span id="span">S</span>
        <span id="span">T</span>
        <span id="span">A</span>
        <span id="span">T</span>
        <span id="span">E</span>
        <span id="span">D</span>
        <span id="span"> </span>
        <span id="span">C</span>
        <span id="span">O</span>
        <span id="span">D</span>
        <span id="span">E</span>
        <span id="span">R</span>
        </a>
      </p>
      <div>
         <img src="/menu.svg" alt="" className=" w-10 sm:hidden absolute right-1 top-2"  onClick={()=>setClicked(!clicked)} />
        {/* Mobile Menu */}
        {clicked && <div>
            <ul className="text-red-600   flex flex-col absolute right-4 z-30 top-10 sm:hidden">
            <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl" id="nav">
          <Link to='/'>Home</Link>
          </li>
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl">
          <Link to='/about'>About</Link>
          </li>
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl" id="nav">
            <Link to='/project'>Projects</Link>
          </li>
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl" id="nav">
          <Link to='/contact'>Contact</Link>
          </li>
          {/* <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl" id="nav">
          <Link to='/blog'>Blog</Link>
          </li> */}
            </ul>
          </div>}
                  {/* Desktop Menu */}

        <ul className="text-red-600 sm:flex gap-6 mr-4 hidden">
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl">
          <Link to='/'>Home</Link>
          </li>
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl">
          <Link to='/about'>About</Link>
          </li>
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl">
            <Link to='/project'>Projects</Link>
          </li>
          <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl">
          <Link to='/contact'>Contact</Link>
          </li>
          {/* <li className="cursor-pointer hover:line-through hover:drop-shadow-2xl">
          <Link to='/blog'>Blog</Link>
          </li> */}
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
