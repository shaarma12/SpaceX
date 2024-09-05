import React from 'react'
import { NavLink } from 'react-router-dom'
import { LOGO_IMG } from '../constant'
import wcross from "../Images/wcross.png"
const Sidebar = ({toggleState}) => {
    return (
        <>
            {toggleState ? <div className='flex'><div><img src={wcross} alt='cross' className='absolute -mt-14 right-[11.5rem]' /></div><div className='absolute -right-8 t-0 w-[30%] h-[46.7rem] bg-white rounded-tl-2xl rounded-bl-2xl -mt-24 z-50'>
                <img src={LOGO_IMG} alt="logo" className='xl:h-7 h-5 m-auto mt-20' />
                <p className='font-thin text-sm tracking-[0.45em] ml-7 mt-1'>LIVE-INFO</p>
                <div className='mt-24 text-[#656565] text-2xl ml-5 flex flex-col'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'hover:bg-[#080606] py-2 px-3 w-36 rounded-md text-black font-semibold' : 'hover:bg-[#f5f5f5] py-2 px-3 w-36 rounded-md'}>Dashboard</NavLink>
                    <NavLink to='/rockets' className={({ isActive }) => isActive ? 'hover:bg-[#f5f5f5] py-2 px-3 -mt-2 w-28 rounded-md text-black font-semibold' : 'hover:bg-[#f5f5f5] py-2 px-3 -mt-2 w-28 rounded-md'}>Rockets</NavLink>
                </div>
            </div>
            </div>
            :<div className='xl:w-[22%] lg:w-[22%] md:hidden xl:block lg:block bg-white rounded-tl-2xl rounded-bl-2xl'>
            <img src={LOGO_IMG} alt="logo" className='xl:h-7 h-5 m-auto mt-20' />
            <p className='font-thin text-sm tracking-[0.45em] ml-7 mt-1'>LIVE-INFO</p>
            <div className='mt-24 text-[#656565] text-2xl ml-5 flex flex-col'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'hover:bg-[#f5f5f5] py-2 px-3 w-36 rounded-md text-black font-semibold' : 'hover:bg-[#f5f5f5] py-2 px-3 w-36 rounded-md'}>Dashboard</NavLink>
                <NavLink to='/rockets' className={({isActive})=>isActive?'hover:bg-[#f5f5f5] py-2 px-3 -mt-2 w-28 rounded-md text-black font-semibold':'hover:bg-[#f5f5f5] py-2 px-3 -mt-2 w-28 rounded-md'}>Rockets</NavLink>
            </div>
            </div>}
            </>
    )
}

export default Sidebar
