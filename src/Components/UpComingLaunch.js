import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'
import { UPCOMING_API } from '../constant';

const UpComingLaunch = () => {
  const [upComingData, setupcomingData] = useState([]);
  useEffect(() => {
    upComing();
  }, []);
  const upComing = async() => {
    const data = await fetch(UPCOMING_API);
    const JsonData = await data.json();
    setupcomingData(JsonData);
  }
  return (
    <div className='w-[26rem] mt-4 h-[21rem] ml-5 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='font-bold py-6 text-[#FFFFFF] text-xl'>Upcoming launch</p>
      <div className='-mt-4'>
        <LaunchCard data={ upComingData}/>
        </div>
    </div>
  )
}

export default UpComingLaunch
