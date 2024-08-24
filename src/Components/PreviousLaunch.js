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
    <div className='w-[26rem] mt-4 h-[21rem] ml-5 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
          <p className='font-bold py-6 text-[#FFFFFF] text-xl'>Previous launch</p>
          <div className='-mt-4'>
        <LaunchCard data={prevLaunch}/>
        </div>
    </div>
  )
}

export default PreviousLaunch
