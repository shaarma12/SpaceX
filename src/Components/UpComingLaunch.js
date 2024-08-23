import React from 'react'
import LaunchCard from './LaunchCard'

const UpComingLaunch = () => {
  return (
    <div className='w-[26rem] mt-4 h-[21rem] ml-5 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='font-bold py-6 text-[#FFFFFF] text-xl'>Upcoming launch</p>
      <div className='-mt-4'>
        <LaunchCard />
        </div>
    </div>
  )
}

export default UpComingLaunch
