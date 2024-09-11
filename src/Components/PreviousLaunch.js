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
    <div className='xl:w-[26rem] lg:w-[20rem] md:w-[21.5rem] w-[21.2rem] mt-4 xl:h-[21rem] lg:h-[19rem] md:h-[21rem] h-[18.5rem] xl:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold lg:font-semibold font-bold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl lg:text-lg text-xl'>Previous launch</p>
          <div className='-mt-4'>
        <LaunchCard data={prevLaunch}/>
        </div>
    </div>
  )
}

export default PreviousLaunch
