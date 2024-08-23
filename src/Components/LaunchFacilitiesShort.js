import React from 'react'
import LaunchFacilitiesCard from './LaunchFacilitiesCard'
import { DUMMY_FACILITIES_SHORT } from '../constant'
import downArrow from "../Images/downArrow.png";
import { useDispatch } from 'react-redux';
import { checkLaunch } from '../utils/checkSlice';
const LaunchFaciitiesShort = () => {
    const dispatch = useDispatch();
    return (
        <div className='w-[26rem] mt-4 h-[21rem] ml-5 px-6 bg-[#00000080] rounded-2xl drop-shadow-2xl'>
            <p className='font-bold py-6 text-[#FFFFFF] text-xl'>Launch facilities</p>
            <div className='flex flex-col gap-8'>
                {DUMMY_FACILITIES_SHORT.map((i) => {
                    return <LaunchFacilitiesCard key={i?.id} data={i} />
                })}
            </div>
            <button className='flex mt-2' onClick={() => {
                dispatch(checkLaunch(true));
            }}>
                <img src={ downArrow} alt="downArrow" className='w-5 h-5 mt-1 '/>
                <p className='text-[#FFFFFF] text-lg font-semibold ml-1'>more</p>
                </button>
        </div>
    )
}

export default LaunchFaciitiesShort
