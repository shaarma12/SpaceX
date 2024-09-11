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
        <div className='flex fixed xl:top-[50%] xl:left-[50%] xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 lg:top-[50%] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 md:top-[50%] md:left-[50%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 top-0 left-0 z-50 justify-center xl:w-[71.5rem] lg:w-[60rem] md:w-[46rem] w-full xl:h-[35rem] lg:h-[30rem] md:h-[30rem] h-full drop-shadow-2xl bg-white xl:p-4 xl:rounded-2xl lg:rounded-2xl md:rounded-2xl overflow-y-scroll'>
            <div className='flex flex-col xl:h-[35.5rem] lg:h-[32rem] md:h-[32rem] h-full xl:mt-10 mt-8'>
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
                </div> : <div className='flex justify-between xl:px-0 lg:px-0 md:px-0 px-4 xl:-mt-4 lg:-mt-4 md:-mt-4 -mt-4'><div className='flex gap-6'>
                        <p className='text-black text-2xl font-bold xl:-ml-0 lg:-ml-0 md:-ml-16'>{name}</p>
                    <p className='text-black text-2xl font-semibold hover:bg-[#f5f5f5] hover:rounded-lg hover:cursor-pointer' onClick={() => {
                        setOverviewCheck(true);
                        setPhotoCheck(false);
                    }}>Overview</p>
                    <p className='text-[#656565] text-2xl hover:bg-[#f5f5f5] hover:rounded-lg hover:cursor-pointer xl:block lg:block hidden' onClick={() => {
                        setPhotoCheck(true);
                        setOverviewCheck(false);
                    }}>Photos</p>

                </div>
                    <img src={cross} alt="cross" className='xl:-mt-3  -mt-2 hover:cursor-pointer hover:scale-y-105 hover:transform hover:transition-transform hover:duration-200 xl:-mr-0 lg:-mr-0 md:-mr-20' onClick={() => dispatch(checkPopup(false))} />
                </div>}
                {overviewcheck && <Overview description={description} photo={flickr_images[1]} />}
                {photoCheck && <Photos photos={flickr_images} />}
            </div>
            </div>
            </>,document.querySelector(".popupBehind"));
};

export default RocketInfo;
