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
    <div className='flex justify-center xl:mt-10 lg:mt-10 md:mt-5'>
      <div className='bg-[#00000080] rounded-2xl drop-shadow-2xl xl:w-[51rem] lg:w-[42rem] md:w-[43rem] xl:h-[28rem] lg:h-[25rem] md:h-[28rem] flex justify-evenly items-center'>
        {rocketValue.slice(1).map((i) => {
          return <RocketCard key={i?.id} data={i} />
        })
        }
      </div>
    </div>
  )
}

export default Rockets
