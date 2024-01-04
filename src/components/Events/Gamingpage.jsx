import React from 'react';
import Navbar from '../navbar.jsx';
import banner from "../../assets/gamingPageBanner.png";
import bgmi from "../../assets/bgmi.png";
import codm from "../../assets/codm.png";
import valorant from "../../assets/valorant.png";
import fifa2k23 from "../../assets/fifa2k23.png";
import assetocorsa from "../../assets/assetocorsa.png";

const gamingpage = () => {
  return (
    <div>
      <Navbar />
        <div className='wrapper overflow-x-hidden font-varino'>
        <div className='relative'>
          <img src={banner} alt='gamingBanner' className=''/>
          <div className='absolute flex flex-col top-[22rem] items-center w-screen'>
            <p className="gaming font-varino uppercase text-[140px] ">gaming</p>
            <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-24">Play a variety of games of different genre, selecting from a<br/>large library of games.</div>
          </div>
        </div>
        <div className='flex flex-col text-white relative mt-[19rem] justify-center gap-24'>
          <div className='flex flex-row justify-center'>
            <div className='rounded-[76px] w-[650px] h-[450px] text-center bgmigamingcard flex justify-center cursor-pointer bgmi relative grayscale hover:grayscale-0 '>
              <div className='bgmioverlay'></div>
              <img src={bgmi} alt='bgmi' className='pt-4 pl-4 pr-4 pb-4 h-[450px] w-[650px] rounded-[80px] absolute ' />
              <div className='flex  text-center my-auto mx-auto text-[80px] z-10'>BGMI</div>
            </div>
            <div className='rounded-[76px] w-[650px] h-[450px] text-center codmgamingcard flex justify-center cursor-pointer codm relative grayscale hover:grayscale-0 '>
              <div className='bgmioverlay'></div>
              <img src={codm} alt='codm' className='pt-4 pl-4 pr-4 pb-4 h-[450px] w-[650px] rounded-[80px] absolute ' />
              <div className='flex  text-center my-auto mx-auto text-[80px] z-10'>CODM</div>
            </div>
          </div>
          <div className='rounded-[76px] w-[1300px] h-[450px] text-center valorantgamingcard flex justify-center cursor-pointer valorant relative grayscale hover:grayscale-0 '>
            <img src={valorant} alt='valorant' className='pt-4 pl-4 pr-4 pb-4 h-[450px] w-[1300px] rounded-[80px] absolute ' />
            <div className='flex  text-center my-auto mx-auto text-[80px] z-10'>VALORANT</div>
          </div>
          <div className='flex flex-row justify-evenly'>
            <div className='rounded-[76px] w-[650px] h-[450px] text-center fifagamingcard flex justify-center cursor-pointer fifa relative grayscale hover:grayscale-0 '>
              <div className='bgmioverlay'></div>
              <img src={fifa2k23} alt='fifa2k23' className='pt-4 pl-4 pr-4 pb-4 h-[450px] w-[650px] rounded-[80px] absolute ' />
              <div className='flex  text-center my-auto mx-auto text-[80px] z-10'>FIFA<br/>2K23</div>
            </div>
            <div className='rounded-[76px] w-[650px] h-[450px] text-center assetocorsagamingcard flex justify-center cursor-pointer assetocorsa relative grayscale hover:grayscale-0 '>
              <div className='bgmioverlay'></div>
              <img src={assetocorsa} alt='assetocorsa' className='pt-4 pl-4 pr-4 pb-4 h-[450px] w-[650px] rounded-[80px] absolute ' />
              <div className='flex text-center my-auto mx-auto text-[80px] z-10'>aSSETO<br/>CORSA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gamingpage;