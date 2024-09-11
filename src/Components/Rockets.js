import React, { useEffect, useState } from 'react'
import RocketCard from './RocketCard'
import { ROCKET_API } from '../constant';

const Rockets = () => {
  const [rocketValue, setRocketValue] = useState([]);
  
  useEffect(() => {
    rocketData(); 
  }, [])
  const rocketData = async () => {
    const response = await fetch(ROCKET_API);
    const JsonData = await response.json();
    setRocketValue(JsonData);
  };

  return (
    <div className='xl:flex xl:flex-row xl:justify-center lg:flex lg:flex-row lg:justify-center md:flex md:flex-row md:justify-center flex flex-col items-center xl:mt-10 lg:mt-10 mt-5'>
      <div className='bg-[#00000080] rounded-2xl drop-shadow-2xl xl:w-[51rem] lg:w-[42rem] md:w-[43rem] w-[21rem] xl:h-[28rem] lg:h-[25rem] md:h-[28rem] xl:flex xl:flex-row xl:justify-evenly xl:items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center md:flex md:flex-row md:justify-evenly md:items-center flex flex-col justify-center items-center xl:ml-0 lg:ml-0 md:ml-0 ml-5 p-6 gap-7'>
        {rocketValue.slice(1).map((i) => {
          return <RocketCard key={i?.id} data={i} />
        })
        }
      </div>
    </div>
  )
}

export default Rockets
