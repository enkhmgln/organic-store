import React from 'react';
import Hero from '../Hero';
import Buyer from '../Buyer';

const Home = () => {
  return (
    <div className='flex flex-col pt-20 md:flex-row h-screen  bg-gray-100  md:pt-40 '>
      <Hero />
      <Buyer />
    </div>
  );
};

export default Home;
