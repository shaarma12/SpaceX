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
        <div className='flex '>
            <div className='flex flex-col'>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>MISSION NAME</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{data?.name}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>ROCKET</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{rocketname}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>FLIGHT NUMBER</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{data?.flight_number}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>TIME (UTC)</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{formatDate(data?.date_utc)}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>LINKS</p>
                    <div className='flex ml-1'>
                        {data?.links?.wikipedia ? (
                            <Link to={data?.links?.wikipedia} className='flex bg-white w-6 h-6 rounded-full mr-2'>
                                <img src={wiki} alt='wiki' className='p-[0.1rem]' />
                            </Link>
                        ) : (
                            <div className='flex bg-white w-6 h-6 rounded-full mr-2 hover: cursor-not-allowed opacity-25'>
                                <img src={wiki} alt='wiki' className='p-[0.1rem]' />
                            </div>
                        )}
                        {data?.links?.webcast ? (
                            <Link to={data?.links?.webcast} className='bg-white w-6 h-6 rounded-full mr-2'>
                                <img src={youtubeLogo} alt='youtube' className='p-[0.20rem]' />
                            </Link>
                        ) : (
                            <div className='bg-white w-6 h-6 rounded-full mr-2 hover: cursor-not-allowed opacity-25'>
                                <img src={youtubeLogo} alt='youtube' className='p-[0.20rem]' />
                            </div>
                        )}
                        {data?.links?.reddit?.launch ? (
                            <Link to={data?.links?.reddit?.launch} className='bg-white w-6 h-6 rounded-full mr-2'>
                                <img src={reddit} alt='reddit' className='p-[0.20rem]' />
                            </Link>
                        ) : (
                            <div className='bg-white w-6 h-6 rounded-full mr-2 hover: cursor-not-allowed opacity-25'>
                                <img src={reddit} alt='reddit' className='p-[0.20rem]' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='ml-14'>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium mb-1'>ROCKET LOGO</p>
                    <div className='flex justify-center items-center bg-[#33333361] h-[8.125rem] w-[8.125rem] rounded-2xl'>
                        {data?.links?.patch?.small ? (
                            <img src={data?.links?.patch?.small} alt='patchLogo' className='w-[5.5rem]' />
                        ) : (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Falcon_Heavy_logo.svg/105px-Falcon_Heavy_logo.svg.png" alt='rocketLogo' className='w-20' />
                        )}
                    </div>
                </div>
                {data?.crew && data?.crew.length > 0 ? (
                    <div>
                        <p className='text-[#FFFFFF80] text-sm font-medium mt-5'>CREW</p>
                        <div className='flex'>
                            {data.crew.map((i) => (
                                <img key={i} src={crew} alt='crew' className='w-7' />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className='text-[#FFFFFF80] text-sm font-medium mt-7'>LAUNCHPAD</p>
                        <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{launchpadName}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LaunchCard;
