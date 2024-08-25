import React, { useState } from 'react';
import RocketInfo from './RocketInfo';

const RocketCard = ({ data }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const { name, flickr_images, active } = data;

    return (
        <div className='relative'>
            {/* Main Content */}
            <div className='flex flex-col' onClick={() => setIsPopupVisible(true)}>
                <p className='text-[#FFFFFF] text-xl font-semibold'>{name}</p>
                <div className='w-[14.5rem] h-[22rem] overflow-hidden rounded-xl mt-1'>
                    <img
                        src={flickr_images[1]}
                        alt='rocket-img'
                        className='object-cover object-center w-full h-full opacity-90 hover:scale-105 transform transition-transform duration-300'
                    />
                    {active ? (
                        <div className='absolute bottom-11 ml-4 opacity-100 flex flex-col bg-[#1D8F2466] p-1 rounded-md bg-opacity-100'>
                            <p className='text-[#FFFFFF80] text-xs font-bold -mb-1'>STATUS</p>
                            <p className='text-[#FFFFFF] font-semibold text-lg'>Active</p>
                        </div>
                    ) : (
                        <div className='absolute bottom-11 ml-4 flex flex-col opacity-100 bg-[#FFB30366] p-1 rounded-md bg-opacity-100'>
                            <p className='text-[#FFFFFF80] text-xs font-bold -mb-1'>STATUS</p>
                            <p className='text-[#FFFFFF] font-semibold text-lg'>In development</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Conditional Overlay and Popup */}
            {isPopupVisible && (
                <>
                    {/* Background Blur Overlay */}
                    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10' onClick={() => setIsPopupVisible(false)}></div>

                    {/* Popup Content */}
                    <div className='fixed top-[17.5rem] left-[16.5rem] transform -translate-x-1/2 -translate-y-1/2 z-20'>
                        <RocketInfo />
                    </div>
                </>
            )}
        </div>
    );
};

export default RocketCard;
