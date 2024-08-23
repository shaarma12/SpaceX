import React from 'react'

const LaunchCard = () => {
    return (
        <div className='flex '>
            <div className='flex flex-col'>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>MISSION NAME</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>USSF-44</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>ROCKET</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>Falcon Heavy</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>FLIGHT NUMBER</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>144</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>TIME (UTC)</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>Nov 01, 01:41 PM</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium'>LINKS</p>
                    <div className='flex ml-1'>
                     <div className='bg-white w-6 h-6 rounded-full mr-2'></div>
                     <div className='bg-white w-6 h-6 rounded-full mr-2'></div>
                     <div className='bg-white w-6 h-6 rounded-full mr-2'></div>
                    </div>
                </div>
            </div>
            <div className='ml-14'>
            <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium mb-1'>ROCKET LOGO</p>
                    <div className='bg-[#33333361] h-[8.125rem] w-[8.125rem] rounded-2xl'>
                    </div>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-sm font-medium mt-7'>LAUNCHPAD</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>KSC LC 39A</p>
                </div>
            </div>
        </div>
    )
}

export default LaunchCard
