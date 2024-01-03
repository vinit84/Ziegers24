import React from 'react';
import Navbar from './navbar.jsx';
import banner from "../../src/assets/gamingPageBanner.png";

const gamingpage = () => {
  return (
    <div>
      <Navbar />
        <div className='wrapper overflow-x-hidden'>
        <div className='relative'>
          <img src={banner} alt='gamingBanner' className=''/>
          <div className='absolute flex flex-col top-[19rem] items-center w-screen'>
            <p className="gaming font-varino uppercase text-[140px] ">gaming</p>
            <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-24">Play a variety of games of different genre, selecting from a<br/>large library of games.</div>
          </div>
        </div>
        <div className='flex flex-col text-white relative mt-[22rem]'>
          <div className='flex flex-row justify-evenly'>
            <div>Hello</div>
            <div>Hello</div>
          </div>
          <div className='flex flex-row justify-center'>Hello</div>
          <div className='flex flex-row justify-evenly'>
            <div>Hello</div>
            <div>Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gamingpage;