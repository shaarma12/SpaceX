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
    <div className='flex justify-center mt-10'>
      <div className='bg-[#00000080] rounded-2xl drop-shadow-2xl xl:w-[51rem] w-[42rem] xl:h-[28rem] h-[25rem] flex justify-evenly items-center'>
        {rocketValue.slice(1).map((i) => {
          return <RocketCard key={i?.id} data={i} />
        })
        }
      </div>
    </div>
  )
}

export default Rockets
