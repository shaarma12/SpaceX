import React from 'react'
import LaunchFacilitiesCard from './LaunchFacilitiesCard'
import { DUMMY_FACILITIES } from '../constant'
import upArrow from "../Images/upArrow.png";
import { checkLaunch } from '../utils/checkSlice';
import { useDispatch } from 'react-redux';
const LaunchFaciities = () => {
    const dispatch = useDispatch();
    return (
        <div className='xl:w-[26rem] lg:w-[20rem] md:w-[21.5rem] w-[21.2rem] mt-4 xl:h-[28.5rem] lg:h-[26rem] md:h-[28rem] h-[27rem] md:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold lg:font-semibold font-bold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl lg:text-lg text-xl'>Launch facilities</p>
            <div className='flex flex-col gap-8'>
                {DUMMY_FACILITIES.map((i) => {
                    return <LaunchFacilitiesCard key={i?.id} data={i} />
                })}
            </div>
            <button className='flex mt-2' onClick={(() => [
                dispatch(checkLaunch(false))
            ])}>
                <img src={ upArrow} alt="upArrow" className='w-6 h-7 xl:mt-0 lg:mt-0 md:mt-1'/>
                <p className='text-[#FFFFFF] text-lg font-semibold ml-1 xl:mt-0 lg:mt-0 md:mt-1'>less</p>
            </button>
        </div>
    )
}

export default LaunchFaciities
