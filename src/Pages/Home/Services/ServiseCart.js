import React from 'react';

const ServiseCart = ({ servise }) => {
  const { img, title, price } = servise;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text=3xl font-bold text-orange-600 '> price:${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiseCart;