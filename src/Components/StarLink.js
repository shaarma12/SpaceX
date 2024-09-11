import React from 'react'
import rocket from "../Images/rocket.png"

const StarLink = () => {

  return (
    <div className='xl:w-[26rem] lg:w-[20rem] md:w-[21.5rem] w-[21.2rem] mt-4 xl:h-[21rem] lg:h-[19rem] md:h-[21rem] h-[18.5rem] xl:ml-5 md:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold lg:font-semibold font-bold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl lg:text-lg text-xl'>Starlink</p>
          <div className='flex flex-col items-center text-base font-semibold mt-8'>
              <img src={rocket} alt="satellite" className='w-24'/>
              <p className='xl:w-[23rem] w-[18rem] pt-10 text-[#FFFFFF] xl:text-base lg:text-sm md:text-base xl:ml-0 lg:ml-8 md:ml-0 md:font-semibold'>There are currently 3268 active Starlink satellites</p>
              <p className='xl:ml-2 lg:ml-2 ml-3 xl:-mt-1 lg:-mt-[1.32rem] -mt-[1.45rem] xl:text-base lg:text-sm md:text-base text-[#FFFFFF] font-semibold'>on the low Earth orbit</p>
          </div>
    </div>
  )
}

export default StarLink
