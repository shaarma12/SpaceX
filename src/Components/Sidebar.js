import React from 'react'
import { NavLink } from 'react-router-dom'
import { LOGO_IMG } from '../constant'

const Sidebar = () => {
    return (
        <div className='w-[22%] bg-white rounded-tl-2xl rounded-bl-2xl'>
            <img src={LOGO_IMG} alt="logo" className='h-7 m-auto mt-20' />
            <p className='font-thin text-sm tracking-[0.45em] ml-7 mt-1'>LIVE-INFO</p>
            <div className='mt-24 text-[#656565] text-2xl ml-5 flex flex-col'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'hover:bg-[#f5f5f5] py-2 px-3 w-36 rounded-md text-black font-semibold' : 'hover:bg-[#f5f5f5] py-2 px-3 w-36 rounded-md'}>Dashboard</NavLink>
                <NavLink to='/rockets' className={({isActive})=>isActive?'hover:bg-[#f5f5f5] py-2 px-3 -mt-2 w-28 rounded-md text-black font-semibold':'hover:bg-[#f5f5f5] py-2 px-3 -mt-2 w-28 rounded-md'}>Rockets</NavLink>
            </div>
        </div>
    )
}

export default Sidebar
