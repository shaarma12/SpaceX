import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'
import { UPCOMING_API } from '../constant';

const UpComingLaunch = () => {

  const [upComingData, setupcomingData] = useState([]);

  useEffect(() => {
    upComing();
  }, []);

  const upComing = async () => {
    const data = await fetch(UPCOMING_API);
    const JsonData = await data.json();
    setupcomingData(JsonData);
  };

  return (
    <div className='xl:w-[26rem] w-[20rem] mt-4 xl:h-[21rem] h-[19rem] xl:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold font-semibold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl text-lg'>Upcoming launch</p>
      <div className='-mt-4'>
        <LaunchCard data={ upComingData}/>
        </div>
    </div>
  )
}

export default UpComingLaunch
