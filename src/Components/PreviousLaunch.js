import React, { useEffect, useState } from 'react'
import LaunchCard from './LaunchCard'
import { PREVIOUS_API } from '../constant';

const PreviousLaunch = () => {
  const [prevLaunch, setprevLaunch] = useState([]);
  useEffect(() => {
    PreviousLaunchData();
  }, [])
  const PreviousLaunchData = async () => {
    const response = await fetch(PREVIOUS_API);
    const dataJson = await response.json();
    setprevLaunch(dataJson);
  };
  return (
    <div className='xl:w-[26rem] w-[20rem] mt-4 xl:h-[21rem] h-[19rem] xl:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
          <p className='xl:font-bold font-semibold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl text-lg'>Previous launch</p>
          <div className='-mt-4'>
        <LaunchCard data={prevLaunch}/>
        </div>
    </div>
  )
}

export default PreviousLaunch
