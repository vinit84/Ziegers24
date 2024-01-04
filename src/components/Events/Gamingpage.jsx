import React, { useEffect } from 'react';
import Navbar from '../navbar.jsx';
import banner from "../../assets/gamingPageBanner.png";
import transition from '../../transition.js';
import { useNavigate } from 'react-router-dom';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import LocomotiveScrollComponent from './LocomotiveScrollComponent.js';

// gsap.registerPlugin(ScrollTrigger);

const GamingPage = () => {
  // useEffect(() => {

  //   // const scroll = new LocomotiveScroll({
  
  //   // });

    
  //   const tl = gsap.timeline();

  //   tl.from('.gaming', { opacity: 0, y: 50, duration: 1 });
  //   tl.from('.bgmigamingcard, .codmgamingcard', { opacity: 50, y: 50, stagger: 0.3, duration: 1 }, '-=0.5');
  //   // tl.from('.flex-row div', { opacity: 0, y: 50, stagger: 0.3, duration: 1 }, '-=0.5');

  //   ScrollTrigger.create({
  //     trigger: '.wrapper',
  //     start: 'top center',
  //     animation: tl,
  //     scrub: 1,
  //   });

  //   // return () => {
  //   //   scroll.destroy();
  //   // };
  // }, []);

  const navigate = useNavigate();

  const valorant = () => {
    navigate("/events/gaming/valorant");
  };

  return (
    <div>
      
      <Navbar />
      <div className='wrapper overflow-x-hidden font-varino'>
        <div className='relative'>
          <img src={banner} alt='gamingBanner' className='' />
          <div className='absolute flex flex-col top-[22rem] items-center w-screen cursor-pointer' onClick={valorant}>
            <p className="gaming font-varino uppercase text-[140px] ">gaming</p>
            <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-24">Play a variety of games of different genres, selecting from a<br/>large library of games.</div>
          </div>
        </div>
        <div className='flex flex-col text-white relative mt-[19rem]'>
          <div className='flex flex-row justify-evenly'>
            <div className='rounded-[88px] w-[700px] h-[500px] text-center bgmigamingcard '>
              <p>BGMI</p>
            </div>
            <div className='rounded-[88px] w-[700px] h-[500px] text-center codmgamingcard'>CODM</div>
          </div>
          <div className='flex flex-row justify-center'>VALORANT</div>
          <div className='flex flex-row justify-evenly'>
            <div className='text-center'>FIFA<br/>2K23</div>
            <div className='text-center'>asseto<br/>corsa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(GamingPage);
