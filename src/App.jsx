import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Emailform from './components/Emailform'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Center/></>
    },
    {
      path:'/project',
      element:<><Navbar /> <Project /></>
    }
    ,
    {
      path:'/contact',
      element:<><Navbar/><Emailform/></>
    },{
      path:'/blog',
      element:<><Navbar /><Center /></>
    },{
      path:'/about',
      element:<><Navbar /><About /></>
    }
  ])
  return (
    <div className='w-min-screen h-screen overflow-x-hidden '>
    <div  >
    {/* <Navbar />
    <Center />
    <Project />
    <Emailform />
    <Footer /> */}
    <RouterProvider router={router} />
    </div>
    </div>
  )
}

export default App
