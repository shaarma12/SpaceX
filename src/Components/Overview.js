import React from 'react'

const Overview = ({description, photo}) => {
  return (
      <div className='flex gap-8 mt-2'>
                    <div className='relative w-[16.7rem] h-[27rem] overflow-hidden rounded-xl mt-1 drop-shadow-2xl'>
                        <div className='absolute bg-gradient-to-t from-black to-transparent opacity-50'></div>
                        <img
                            src={photo}
                            alt='rocket-img'
                            className='object-cover object-center w-full h-full opacity-90'
                        />
                    </div>
                    <div className='w-[44rem] h-[27rem] drop-shadow-2xl bg-white rounded-xl py-7 px-8'>
                     <p className='text-sm text-[#9B9B9B] font-medium'>DESCRIPTION</p>
              <p>{description}</p>
                    </div>
                </div>
  )
}

export default Overview
