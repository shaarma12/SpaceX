import React from 'react'
import rocket from "../Images/rocket.png"

const StarLink = () => {

  return (
    <div className='text-[#FFFFFF] text-xl w-[26rem] mt-4 h-[21rem] ml-5 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
          <p className='font-bold p-6'>Starlink</p>
          <div className='flex flex-col items-center text-base font-semibold mt-8'>
              <img src={rocket} alt="satellite" className='w-24'/>
              <p className='w-[23rem] pt-10'>There are currently 3268 active Starlink satellites</p>
              <p className='-ml-3 -mt-1'>on the low Earth orbit</p>
          </div>
    </div>
  )
}

export default StarLink
