import React from 'react'
import LaunchFacilitiesCard from './LaunchFacilitiesCard'
import { DUMMY_FACILITIES_SHORT } from '../constant'
import downArrow from "../Images/downArrow.png";
import { useDispatch } from 'react-redux';
import { checkLaunch } from '../utils/checkSlice';
const LaunchFaciitiesShort = () => {
    const dispatch = useDispatch();
    return (
        <div className='xl:w-[26rem] lg:w-[20rem] md:w-[21.5rem] w-[21.2rem] mt-4 xl:h-[21rem] lg:h-[19rem] md:h-[21rem] h-[19.7rem] md:ml-5 ml-8 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
      <p className='xl:font-bold lg:font-semibold font-bold xl:py-6 py-5 text-[#FFFFFF] xl:text-xl lg:text-lg text-xl'>Launch facilities</p>
            <div className='flex flex-col gap-8'>
                {DUMMY_FACILITIES_SHORT.map((i) => {
                    return <LaunchFacilitiesCard key={i?.id} data={i} />
                })}
            </div>
            <button className='flex mt-2' onClick={() => {
                dispatch(checkLaunch(true));
            }}>
                <img src={ downArrow} alt="downArrow" className='w-5 h-5 xl:mt-1 lg:mt-1 md:mt-3 mt-1'/>
                <p className='text-[#FFFFFF] text-lg font-semibold ml-1 xl:mt-0 lg:mt-0 md:mt-2'>more</p>
                </button>
        </div>
    )
}

export default LaunchFaciitiesShort
