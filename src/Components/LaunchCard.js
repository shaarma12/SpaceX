import React from 'react';
import useRocket from '../utils/useRocket';
import useLaunchpad from '../utils/useLaunchpad';
import reddit from "../Images/reddit.png";
import wiki from "../Images/wiki.png";
import crew from "../Images/crew.png";
import youtubeLogo from "../Images/youtubeLogo.png";
import { Link } from "react-router-dom";

const LaunchCard = ({ data }) => {
    const { rocketname } = useRocket(data?.rocket);
    const { launchpadName } = useLaunchpad(data?.launchpad);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);

        if (isNaN(date.getTime())) {
            return "Invalid date";
        } else {
            const options = {
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };

            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

            return formattedDate;
        }
    };

    return (
        <div className='flex'>
            <div className='flex flex-col'>
                <div>
                    <p className='text-[#FFFFFF80] text-sm xl:font-medium'>MISSION NAME</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg lg:text-base md:text-lg xl:font-semibold lg:font-medium font-semibold mb-1'>{data?.name}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm xl:font-medium'>ROCKET</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg lg:text-base md:text-lg xl:font-semibold lg:font-medium font-semibold mb-1'>{rocketname}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm xl:font-medium'>FLIGHT NUMBER</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg lg:text-base md:text-lg xl:font-semibold lg:font-medium font-semibold mb-1'>{data?.flight_number}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm xl:font-medium'>TIME (UTC)</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg lg:text-base md:text-lg xl:font-semibold lg:font-medium font-semibold xl:w-36 lg:w-32 w-36 mb-1'>{formatDate(data?.date_utc)}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm xl:font-medium'>LINKS</p>
                    <div className='flex ml-1'>
                        {data?.links?.wikipedia ? (
                            <Link to={data?.links?.wikipedia} className='flex bg-white xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 rounded-full mr-2'>
                                <img src={wiki} alt='wiki' className='p-[0.1rem]' />
                            </Link>
                        ) : (
                            <div className='flex bg-white xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 rounded-full mr-2 hover: cursor-not-allowed opacity-25'>
                                <img src={wiki} alt='wiki' className='p-[0.1rem]' />
                            </div>
                        )}
                        {data?.links?.webcast ? (
                            <Link to={data?.links?.webcast} className='bg-white xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 rounded-full mr-2'>
                                <img src={youtubeLogo} alt='youtube' className='p-[0.20rem]' />
                            </Link>
                        ) : (
                            <div className='bg-white xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 rounded-full mr-2 hover: cursor-not-allowed opacity-25'>
                                <img src={youtubeLogo} alt='youtube' className='p-[0.20rem]' />
                            </div>
                        )}
                        {data?.links?.reddit?.launch ? (
                            <Link to={data?.links?.reddit?.launch} className='bg-white xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 rounded-full mr-2'>
                                <img src={reddit} alt='reddit' className='p-[0.20rem]' />
                            </Link>
                        ) : (
                            <div className='bg-white xl:w-6 lg:w-5 w-6 xl:h-6 lg:h-5 h-6 rounded-full mr-2 hover: cursor-not-allowed opacity-25'>
                                <img src={reddit} alt='reddit' className='p-[0.20rem]' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='xl:ml-14 ml-10'>
                <div>
                    {data?.links?.patch?.small?<div>
                        <p className='text-[#FFFFFF80] text-sm xl:font-medium md:mb-1 mb-3'>MISSION PATCH</p>
                        <div className='flex justify-center items-center bg-[#33333361] xl:h-[8.125rem] h-[6rem] xl:w-[8.125rem] w-[6rem] rounded-2xl'>
                                <img src={data?.links?.patch?.small} alt='patchLogo' className='xl:w-[5.5rem] lg:w-[5rem] md:w-[6rem] md:mt-4' />
                        </div>
                    </div>:<div>
                    <p className='text-[#FFFFFF80] text-sm xl:font-medium mb-1'>ROCKET LOGO</p>
                    <div className='flex justify-center items-center bg-[#33333361] xl:h-[8.125rem] h-[6rem] xl:w-[8.125rem] w-[6rem] rounded-2xl'>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Falcon_Heavy_logo.svg/105px-Falcon_Heavy_logo.svg.png" alt='rocketLogo' className='xl:w-20 lg:w-18 md:w-[20rem]' />
                    </div>
                </div>}
                    </div>
                {data?.crew && data?.crew.length > 0 ? (
                    <div>
                        <p className='text-[#FFFFFF80] text-sm font-medium xl:mt-9 lg:mt-14  md:mt-[4.5rem] mt-[3rem]'>CREW</p>
                        <div className='flex'>
                            {data.crew.map((i) => (
                                <img key={i} src={crew} alt='crew' className='xl:w-7 lg:w-5 w-6' />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className='text-[#FFFFFF80] text-sm xl:font-medium xl:mt-9 lg:mt-14 md:mt-[4.5rem] mt-[3.5rem]'>LAUNCHPAD</p>
                        <p className='-mt-1 text-[#FFFFFF] xl:text-lg lg:text-base md:text-lg xl:font-semibold lg:font-medium font-semibold'>{launchpadName}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LaunchCard;
