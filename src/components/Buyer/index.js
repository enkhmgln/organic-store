import React from 'react';
import Seed from '../Seed';
import Button from '../Button';

const Buyer = () => {
  return (
    <section className='flex flex-col items-center md:items-start py-10 md:w-1/2 text-center md:text-start'>
      <Seed />
      <h2 className='font-bold text-3xl my-4 md:mt-4'>Best Quality Products</h2>
      <h1 className='text-3xl md:text-6xl md:py-4'>Join The Organic Movement!</h1>
      <p className=' text-xl py-3 md:py-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <Button
      url = '/products'
      text = 'Shop now '
      />
    </section>
  );
};

export default Buyer;
