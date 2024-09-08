import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router-dom';
import { LOGO_IMG } from './constant';
import menu from "./Images/menu.png";
import SidebarsMed from './Components/SidebarsMed';
import wcross from "./Images/wcross.png";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {sidebar && (
        <div>
          <div 
            className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000034] z-10' 
            onClick={() => setSidebar(false)}
          ></div>
          <div className='flex'>
            <img src={wcross} alt='cross' className='absolute left-[30rem] top-8' />
            <SidebarsMed toggleFn={() => setSidebar()} />
          </div>
        </div>
      )}

      <div className='
        xl:h-screen lg:h-screen md:min-h-screen xl:w-full lg:w-full md:w-full w-[45.3rem] h-[87.2rem]
        xl:bg-[#EFEFEF] lg:bg-[#EFEFEF] bg-[url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg")]
        xl:bg-none lg:bg-none bg-cover bg-center
        xl:flex xl:justify-center xl:items-center lg:flex lg:justify-center lg:items-center md:p-8
      '>
        <div className='flex xl:hidden lg:hidden justify-between md:p-0 p-14'>
          <div>
            <img src={LOGO_IMG} alt="logo" className='md:h-7 h-14 m-auto' />
            <p className='font-thin md:text-sm text-2xl md:tracking-[0.45em] tracking-[0.75em] mt-1 md:mb-8 text-[#FFFFFF]'>
              LIVE-INFO
            </p>
          </div>
          <div>
            {!sidebar && (
              <img 
                src={menu} 
                alt='menu' 
                className='md:w-8 md:h-10 w-16 h-14 md:mt-0 mt-6' 
                onClick={() => setSidebar(true)} 
              />
            )}
          </div>
        </div>

        <div className='xl:h-[40rem] lg:h-[35rem] md:h-screen w-full xl:w-[80rem] flex relative drop-shadow-2xl'>
          <Sidebar />
          <div className='
            xl:w-[80%] lg:w-[80%] md:w-full
            lg:bg-[url("https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg")] bg-center bg-120
            rounded-tr-2xl rounded-br-2xl
          '>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
