import React, { useState } from 'react';
import Overview from './Overview';
import Photos from './Photos';

const RocketInfo = () => {
    const [overviewcheck, setOverviewCheck] = useState(true);
    const [photoCheck, setPhotoCheck] = useState(false);
    return (
        <div className='flex justify-center w-[71.5rem] h-[35rem] drop-shadow-2xl bg-white p-4 rounded-lg overflow-y-scroll'>
            <div className='flex flex-col h-[35.5rem] mt-10'>
                {photoCheck?<div className='flex gap-6 -ml-[7.5rem] -mt-7'>
                    <p className='text-black text-2xl font-bold'>Falcon 9</p>
                    <p className='text-[#656565] text-2xl hover:bg-[#f5f5f5] hover:rounded-lg' onClick={() => {
                        setOverviewCheck(true);
                        setPhotoCheck(false);
                    }}>Overview</p>
                    <p className='text-black text-2xl font-semibold hover:bg-[#f5f5f5] hover:rounded-lg' onClick={() => {
                        setPhotoCheck(true);
                        setOverviewCheck(false);
                    }}>Photos</p>
                </div>:<div className='flex gap-6'>
                    <p className='text-black text-2xl font-bold'>Falcon 9</p>
                    <p className='text-black text-2xl font-semibold hover:bg-[#f5f5f5] hover:rounded-lg' onClick={() => {
                        setOverviewCheck(true);
                        setPhotoCheck(false);
                    }}>Overview</p>
                    <p className='text-[#656565] text-2xl hover:bg-[#f5f5f5] hover:rounded-lg' onClick={() => {
                        setPhotoCheck(true);
                        setOverviewCheck(false);
                    }}>Photos</p>
                </div>}
                {overviewcheck && <Overview />}
                {photoCheck && <Photos />}
            </div>
        </div>
    );
};

export default RocketInfo;
