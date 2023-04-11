import React from 'react';

const BannerItems = ({ slider }) => {
  const { image, id, prev, next } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='img-grediant'>
        <img src={image} alt='' className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2  top-1/3 left-24 ">
        <h1 className='text-6xl text-white'>Affordable <br />
          frice for Car <br />
          Servecing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-1/2  top-1/2 left-24 ">
        <p className='text-xl text-white '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-1/2  top-2/3 left-24 ">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 bottom-0 right-5 ">
        <a href={`#slide${prev}`} className="btn btn-circle mr-3">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>
  );
};

export default BannerItems;