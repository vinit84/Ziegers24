import React from 'react';
import Navbar from '../navbar.jsx';
import banner from "../../assets/gamingPageBanner.png";
import bgmi from "../../assets/bgmi.png";
import codm from "../../assets/codm.png";
import valorant from "../../assets/valorant.png";
import fifa2k23 from "../../assets/fifa2k23.png";
import assetocorsa from "../../assets/assetocorsa.png";
import { useNavigate } from "react-router-dom";

const Gaming = () => {
  const navigate = useNavigate();

  const handleValorantCardClick = () => {
    navigate("/events/gaming/valorant");
  };
  return (
    <div>
      <Navbar />
        <div className='wrapper overflow-x-hidden font-varino'>
        <div className='relative'>
          <img src={banner} alt='gamingBanner' className=''/>
          <div className='flex justify-center'>
            <div className="gaming font-varino uppercase text-[140px] absolute -bottom-12">gaming</div>
          </div>
        </div>
        <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-[9rem]">Play a variety of games of different genre, selecting from a<br/>large library of games.</div>
        <div className='flex flex-col text-white relative mt-[9rem] gap-10 min-w-[1300px] mx-auto flex-wrap mb-10'>
          <div className='flex flex-row justify-center gap-12'>
            <div className='rounded-[76px] bgmigamingcard bgmi'>
              <div className='w-[600px] h-[400px] text-center  flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'>
                <div className='overlay'></div>
                <img src={bgmi} alt='bgmi' className='pt-4 pl-4 pr-4 pb-4 h-[400px] w-[600px] rounded-[80px] absolute ' />
                <div className='flex text-center my-auto mx-auto text-[80px] z-10 bgmitext'>BGMI</div>
              </div>
            </div>
            <div className='rounded-[76px] codmgamingcard codm'>
              <div className='w-[600px] h-[400px] text-center flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out '>
                <div className='overlay'></div>
                <img src={codm} alt='codm' className='pt-4 pl-4 pr-4 pb-4 h-[400px] w-[600px] rounded-[80px] absolute ' />
                <div className='flex text-center my-auto mx-auto text-[80px] z-10 codmtext'>CODM</div>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly'>
            <div onClick={handleValorantCardClick} className='rounded-[76px] valorantgamingcard valorant'>
              <div className=' w-[1250px] h-[450px] text-center flex justify-center cursor-pointer relative'>
                <img src={valorant} alt='valorant' className='pt-4 pl-4 pr-4 pb-4 h-[450px] w-[1250px] rounded-[80px] absolute valorantimg grayscale transition-all duration-500 ease-in-out' />
                <div className='flex text-center my-auto mx-auto text-[100px] z-10 valoranttext'>VALORANT</div>
              </div>
            </div>
          </div>
          <div className='flex flex-row justify-center gap-12'>
            <div className='rounded-[76px] fifagamingcard fifa'>
              <div className='w-[600px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-[600ms] ease-in-out'>
                <div className='overlay'></div>
                <img src={fifa2k23} alt='fifa2k23' className='pt-4 pl-4 pr-4 pb-4 h-[400px] w-[600px] rounded-[80px] absolute ' />
                <div className='flex text-center my-auto mx-auto text-[80px] z-10 fifatext'>FIFA<br/>2K23</div>
              </div>
            </div>
            <div className='rounded-[76px] assetocorsagamingcard assetocorsa'>
              <div className='w-[600px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out'>
                <div className='overlay'></div>
                <img src={assetocorsa} alt='assetocorsa' className='pt-4 pl-4 pr-4 pb-4 h-[400px] w-[600px] rounded-[80px] absolute ' />
                <div className='flex text-center my-auto mx-auto text-[80px] z-10 assetotext'>aSSETO<br/>CORSA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;