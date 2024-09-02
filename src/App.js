import React from 'react';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
    <div className='xl:bg-[#EFEFEF] lg:bg-[#EFEFEF]  h-screen flex justify-center items-center'>
        <div className='xl:h-[40rem] h-[35rem] w-[58rem] xl:w-[80rem] flex relative drop-shadow-2xl'>
            <Sidebar />
          <div className='xl:w-[80%] lg:w-[80%] lg:bg-[url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg")] bg-center bg-120 rounded-tr-2xl rounded-br-2xl'>
            <Outlet />
          </div>
        </div>
      </div>
      </>
  )
}

export default App
