import React from 'react'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-[#EFEFEF] h-screen flex justify-center items-center'>
        <div className='h-[40rem] w-[80rem] flex relative drop-shadow-2xl'>
        <Sidebar/>
        <div className='w-[80%] bg-[url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg")] bg-cente bg-120 rounded-tr-2xl rounded-br-2xl'>
          <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default App
