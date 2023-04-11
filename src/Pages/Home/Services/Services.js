import React, { useEffect, useState } from 'react';
import ServiseCart from './ServiseCart';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-orange-600'>Services</h1>
        <h1 className="text-6xl font-bold">Our Service Area</h1>
        <p >the majority have suffered alteration in some form, by injected humour,<br />
          or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-3 gap-3 w-full'>
        {
          services.map(servise => <ServiseCart
            key={servise._id}
            servise={servise}
          ></ServiseCart>)
        }
      </div>
    </div>
  );
};

export default Services;