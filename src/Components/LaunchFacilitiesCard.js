import React from 'react'

const LaunchFacilitiesCard = ({ data }) => {
    const { img, name, facilityName, temp, weather, region, wind } = data;
    return (
        <div className='relative flex flex-col xl:w-[23rem] lg:w-[18rem] w-[19rem] xl:h-[6.5rem] lg:h-[6rem] md:h-[6.5rem] h-[6.3rem] pt-2 px-3 -mt-4 rounded-2xl bg-center bg-cover bg-opacity-100 xl:-ml-0 -ml-2' style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
            <div className='relative flex justify-between'>
                <div>
                    <p className='text-[#FFFFFF] xl:text-lg lg:text-base md:text-lg text-base xl:font-semibold lg:font-semibold md:font-semibold font-bold'>{name}</p>
                    <p className='-mt-1 text-[#FFFFFF80] text-xs font-medium'>{facilityName}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>REGION</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg xl:font-semibold lg:font-semibold font-bold xl:-ml-3 '>{region}</p>
                </div>
            </div>
            <div className='relative flex justify-between mt-2'>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>TEMP</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg xl:font-semibold lg:font-semibold font-bold'>{temp}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>WEATHER</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg xl:font-semibold lg:font-semibold font-bold'>{weather}</p>
                </div>
                <div>
                    <p className='text-[#FFFFFF80] text-xs font-medium'>WIND</p>
                    <p className='-mt-1 text-[#FFFFFF] xl:text-lg xl:font-semibold lg:font-semibold font-bold -ml-3'>{wind}</p>
                </div>
            </div>
        </div>
    )
}

export default LaunchFacilitiesCard
