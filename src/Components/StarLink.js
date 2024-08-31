import React from 'react'
import rocket from "../Images/rocket.png"

const StarLink = () => {

  return (
    <div className='xl:w-[26rem] w-[20rem] mt-4 xl:h-[21rem] h-[19rem] ml-5 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
          <p className='xl:font-bold font-semibold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl text-lg'>Starlink</p>
          <div className='flex flex-col items-center text-base font-semibold mt-8'>
              <img src={rocket} alt="satellite" className='w-24'/>
              <p className='xl:w-[23rem] w-[18rem] pt-10 text-[#FFFFFF] xl:text-base text-sm xl:ml-0 ml-8'>There are currently 3268 active Starlink satellites</p>
              <p className='-ml-3 xl:-mt-1 -mt-[1.35rem] text-[#FFFFFF]'>on the low Earth orbit</p>
          </div>
    </div>
  )
}

export default StarLink
