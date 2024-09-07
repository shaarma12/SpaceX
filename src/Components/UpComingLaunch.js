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
    <div className='xl:w-[26rem] lg:w-[20rem] md:w-[21.5rem] mt-4 xl:h-[21rem] lg:h-[19rem] md:h-[21rem] xl:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold lg:font-semibold md:font-bold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl lg:text-lg md:text-xl'>Upcoming launch</p>
      <div className='-mt-4'>
        <LaunchCard data={ upComingData}/>
        </div>
    </div>
  )
}

export default UpComingLaunch
