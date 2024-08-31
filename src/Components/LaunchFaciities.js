import React from 'react'
import LaunchFacilitiesCard from './LaunchFacilitiesCard'
import { DUMMY_FACILITIES } from '../constant'
import upArrow from "../Images/upArrow.png";
import { checkLaunch } from '../utils/checkSlice';
import { useDispatch } from 'react-redux';
const LaunchFaciities = () => {
    const dispatch = useDispatch();
    return (
        <div className='xl:w-[26rem] w-[20rem] mt-4 xl:h-[28.5rem] h-[26rem] ml-5 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold font-semibold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl text-lg'>Launch facilities</p>
            <div className='flex flex-col gap-8'>
                {DUMMY_FACILITIES.map((i) => {
                    return <LaunchFacilitiesCard key={i?.id} data={i} />
                })}
            </div>
            <button className='flex mt-2' onClick={(() => [
                dispatch(checkLaunch(false))
            ])}>
                <img src={ upArrow} alt="upArrow" className='w-6 h-7 '/>
                <p className='text-[#FFFFFF] text-lg font-semibold ml-1'>less</p>
            </button>
        </div>
    )
}

export default LaunchFaciities
