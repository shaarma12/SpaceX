import React from 'react';
import RocketInfo from './RocketInfo';
import { useDispatch, useSelector } from "react-redux";
import { checkPopup } from '../utils/checkSlice';
import { popData } from '../utils/popupDataSlice';
const RocketCard = ({ data }) => {
    const isPopupVisible = useSelector((store) => store.Check.popup);
    const { name, flickr_images, active} = data;
    const dispatch = useDispatch();
    return (
        <>
            <div className='flex flex-col' onClick={() => {
                dispatch(checkPopup(true))
                dispatch(popData(data));
            }}>
                <p className='text-[#FFFFFF] text-xl font-semibold'>{name}</p>
                <div className='xl:w-[14.5rem] lg:w-[12rem] md:w-[12rem] w-[17rem] xl:h-[22rem] lg:h-[20rem] md:h-[22rem] h-[21rem] overflow-hidden rounded-xl mt-1'>
                    <img
                        src={flickr_images[1]}
                        alt='rocket-img'
                        className='object-cover object-center w-full h-full opacity-90 hover:scale-105 transform transition-transform duration-300 hover:cursor-pointer'
                    />
                    {active ? (
                        <div className='absolute xl:bottom-11 bottom-12 ml-4 opacity-100 flex flex-col bg-[#1D8F2466] p-1 rounded-md bg-opacity-100'>
                            <p className='text-[#FFFFFF80] text-xs font-bold -mb-1'>STATUS</p>
                            <p className='text-[#FFFFFF] font-semibold text-lg'>Active</p>
                        </div>
                    ) : (
                        <div className='absolute xl:bottom-11 bottom-12 ml-4 flex flex-col opacity-100 bg-[#FFB30366] p-1 rounded-md bg-opacity-100'>
                            <p className='text-[#FFFFFF80] text-xs font-bold -mb-1'>STATUS</p>
                            <p className='text-[#FFFFFF] font-semibold text-lg'>In development</p>
                        </div>
                    )}
                </div>
            </div>
            {isPopupVisible && <RocketInfo/>}
        </>
    );
};

export default RocketCard;
