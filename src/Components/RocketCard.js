import React from 'react'

const RocketCard = ({ data }) => {
    const { name, flickr_images, active } = data;
    console.log(name,active);
  return (
    <div className='flex flex-col'>
          <p className='text-[#FFFFFF] text-xl font-semibold'>{name}</p>
          <div className='w-[14.5rem] h-[22rem] overflow-hidden rounded-xl mt-1'>
              <img src={flickr_images[1]} alt='rocket-img' className='object-cover object-center w-full h-full opacity-90 hover:scale-105 transform transition-transform duration-300' />
              {active == true?<div className='absolute bottom-11 ml-4 opacity-100 flex flex-col bg-[#1D8F2466] p-1 rounded-md bg-opacity-100'>
                  <p className='text-[#FFFFFF80] text-xs font-bold -mb-1'>STATUS</p>
                  <p className='text-[#FFFFFF] font-semibold text-lg'>Active</p>
              </div>:
               <div className='absolute bottom-11 ml-4 flex flex-col opacity-100 bg-[#FFB30366] p-1 rounded-md bg-opacity-100'>
                  <p className='text-[#FFFFFF80] text-xs font-bold -mb-1'>STATUS</p>
                  <p className='text-[#FFFFFF] font-semibold text-lg'>In development</p>
              </div> }
          </div>
    </div>
  )
}

export default RocketCard
