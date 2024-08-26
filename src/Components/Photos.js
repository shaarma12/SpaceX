import React, { useState } from 'react';

const Photos = () => {
  // Array of image URLs
  const images = [
    "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
    "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
    "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
    "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
    "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
    "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='mt-2'>
      <div className='relative w-[48rem] h-[30rem] overflow-hidden rounded-xl mt-1 drop-shadow-2xl'>
        <img
          src={images[currentIndex]}
          alt={`rocket-img-${currentIndex}`}
          className='object-cover object-center w-full h-full opacity-90'
        />

        {/* Left arrow button */}
        <button 
          onClick={handlePrevClick}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
        >
          &#8592;
        </button>

        {/* Right arrow button */}
        <button 
          onClick={handleNextClick}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Photos;
