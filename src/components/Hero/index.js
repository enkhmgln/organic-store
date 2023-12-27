import React from 'react';
import vegatables from '../../assets/images/vegatables.png';

const Hero = () => {
  return (
    <div className='md:w-full h-1/2 md:h-full mx-2 '>
      <img src={vegatables} className='w-full h-full object-fill' alt='Vegetables' />
    </div>
  );
};

export default Hero;
