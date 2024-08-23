import React from 'react'

const LaunchFacilitiesCard = ({ data }) => {
    const { img, name, facilityName, temp, weather, region, wind } = data;
    return (
        <div className='relative flex flex-col w-[23rem] h-[6.5rem] pt-2 px-3 -mt-4 rounded-2xl bg-center bg-cover bg-opacity-100' style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
            <div className='relative flex justify-between'>
                <div>
                    <p className='text-[#FFFFFF] text-lg font-semibold'>{name}</p>
                    <p className='-mt-1 text-[#FFFFFF80] text-xs font-medium'>{facilityName}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>REGION</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold -ml-3'>{region}</p>
                </div>
            </div>
            <div className='relative flex justify-between mt-2'>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>TEMP</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{temp}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>WEATHER</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold'>{weather}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>WIND</p>
                    <p className='-mt-1 text-[#FFFFFF] text-lg font-semibold -ml-3'>{wind}</p>
                </div>
            </div>
        </div>
    )
}

export default LaunchFacilitiesCard
