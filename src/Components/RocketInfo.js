import React, { useState } from 'react';
import ReactDOM from "react-dom";
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
    return ReactDOM.createPortal(
        <>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#00000034] z-30' onClick={()=>dispatch(checkPopup(false))}></div>
        <div className='flex fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50 justify-center xl:w-[71.5rem] w-[60rem] xl:h-[35rem] h-[30rem] drop-shadow-2xl bg-white xl:p-4 rounded-2xl overflow-y-scroll'>
            <div className='flex flex-col xl:h-[35.5rem] h-[32rem] xl:mt-10 mt-8'>
                {photoCheck ? <div className='flex justify-between'><div className='flex gap-6 xl:-ml-[7.5rem] -ml-[5rem] xl:-mt-7'>
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
                    <img src={cross} alt="cross" className='xl:-mt-10 -mt-2 hover:cursor-pointer hover:scale-y-105 hover:transform hover:transition-transform hover:duration-200' onClick={() => dispatch(checkPopup(false))} />
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
            </>,document.querySelector(".popupBehind"));
};

export default RocketInfo;
