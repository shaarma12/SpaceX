import React, { useEffect, useState } from 'react'
import RocketCard from './RocketCard'
import { ROCKET_API } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import { checkPopup } from '../utils/checkSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const popup = useSelector((store) => store.Check?.popup);
  const [rocketValue, setRocketValue] = useState([]);
  useEffect(() => {
    rocketData(); 
  }, [])
  const rocketData = async () => {
    const response = await fetch(ROCKET_API);
    const JsonData = await response.json();
    setRocketValue(JsonData);
  };
  console.log("RocketData", rocketValue.slice(1));
  return (
    <div className='flex justify-center mt-10'onClick={()=>dispatch(checkPopup(false))}>
      <div className='bg-[#00000080] rounded-2xl drop-shadow-2xl w-[51rem] h-[28rem] flex justify-evenly items-center'>
        {rocketValue.slice(1).map((i) => {
          return <RocketCard key={i?.id} data={i} />
        })
        }
      </div>
    </div>
  )
}

export default Rockets
