import React, { useState } from 'react';
import Overview from './Overview';
import Photos from './Photos';
import cross from "../Images/cross.png";
import { checkPopup } from '../utils/checkSlice';
import { useDispatch, useSelector } from 'react-redux';

const RocketInfo = () => {
    const data = useSelector((store) => store?.popupData?.data);
    const { name, description, flickr_images } = data;
    const dispatch = useDispatch();
    const [overviewcheck, setOverviewCheck] = useState(true);
    const [photoCheck, setPhotoCheck] = useState(false);
    return (
        <div className='flex justify-center w-[71.5rem] h-[35rem] drop-shadow-2xl bg-white p-4 rounded-lg overflow-y-scroll'>
            <div className='flex flex-col h-[35.5rem] mt-10'>
                {photoCheck ? <div className='flex justify-between'><div className='flex gap-6 -ml-[7.5rem] -mt-7'>
                    <p className='text-black text-2xl font-bold'>{name}</p>
                    <p className='text-[#656565] text-2xl hover:bg-[#f5f5f5] hover:rounded-lg hover:cursor-pointer' onClick={() => {
                        setOverviewCheck(true);
                        setPhotoCheck(false);
                    }}>Overview</p>
                    <p className='text-black text-2xl font-semibold hover:bg-[#f5f5f5] hover:rounded-lg hover:cursor-pointer' onClick={() => {
                        setPhotoCheck(true);
                        setOverviewCheck(false);
                    }}>Photos</p>

                </div>
                    <img src={cross} alt="cross" className='-mt-10 hover:cursor-pointer hover:scale-y-105 hover:transform hover:transition-transform hover:duration-200' onClick={() => dispatch(checkPopup(false))} />
                </div> : <div className='flex justify-between'><div className='flex gap-6'>
                        <p className='text-black text-2xl font-bold'>{name}</p>
                    <p className='text-black text-2xl font-semibold hover:bg-[#f5f5f5] hover:rounded-lg hover:cursor-pointer' onClick={() => {
                        setOverviewCheck(true);
                        setPhotoCheck(false);
                    }}>Overview</p>
                    <p className='text-[#656565] text-2xl hover:bg-[#f5f5f5] hover:rounded-lg hover:cursor-pointer' onClick={() => {
                        setPhotoCheck(true);
                        setOverviewCheck(false);
                    }}>Photos</p>

                </div>
                    <img src={cross} alt="cross" className='-mt-3 hover:cursor-pointer hover:scale-y-105 hover:transform hover:transition-transform hover:duration-200' onClick={() => dispatch(checkPopup(false))} />
                </div>}
                {overviewcheck && <Overview description={description} photo={flickr_images[1]} />}
                {photoCheck && <Photos photos={flickr_images} />}
            </div>
        </div>
    );
};

export default RocketInfo;
