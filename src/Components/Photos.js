import React, { useState } from 'react';
import left from "../Images/left.png";
import right from "../Images/right.png";
const Photos = ({photos}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='mt-2'>
            <button
                onClick={() => {
                    setCurrentIndex((prevIndex) => prevIndex === 0 ? photos.length - 1 : prevIndex - 1);
                }}
                className='absolute left-16 top-1/2 transform -translate-y-1/2 p-2 hover:scale-y-105 transition-transform duration-200'
            >
                <img src={left} alt="leftArrow" />
            </button>
            <div className='relative w-[48rem] h-[30rem] overflow-hidden rounded-xl mt-1 drop-shadow-2xl'>
                <img
                    src={photos[currentIndex]}
                    alt={`rocket-img-${currentIndex}`}
                    className='object-cover object-center w-full h-full opacity-90 drop-shadow-2xl'
                />
            </div>
            <button
                onClick={() => {
                    setCurrentIndex((prevIndex) => prevIndex === photos.length - 1 ? 0 : prevIndex + 1);
                }}
                className='absolute right-16 top-1/2 transform -translate-y-1/2 p-2 hover:scale-y-105 transition-transform duration-200'
            >
                <img src={right} alt="right" />
            </button>
        </div>
    );
};

export default Photos;
