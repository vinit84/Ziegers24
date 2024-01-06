import React from "react";
import Navbar from "../navbar.jsx";
import banner from "../../assets/gamingPageBanner.png";
import bgmi from "../../assets/bgmi.png";
import codm from "../../assets/codm.png";
import valorant from "../../assets/valorant.png";
import fifa2k23 from "../../assets/fifa2k23.png";
import gt7 from "../../assets/gt7.jpg";
import { useNavigate } from "react-router-dom";
import transition from "../../transition.js";

const Gaming = () => {
  const navigate = useNavigate();

  const handleValorantCardClick = () => {
    navigate("/events/gaming/valorant");
  };
  const handleCodCardClick = () => {
    navigate("/events/gaming/callofduty");
  };
  const handleBgmiCardClick = () => {
    navigate("/events/gaming/bgmi");
  };
  const handleFifaCardClick = () => {
    navigate("/events/gaming/fifa2k23");
  };
  const handleGt7CardClick = () => {
    navigate("/events/gaming/granttruismo7");
  };

  return (
    <div>
      <Navbar />
      <div className="wrapper overflow-x-hidden font-varino">
        <div className="relative">
          <img src={banner} alt="gamingBanner" className="" />
          <div className="flex justify-center">
            <div className="gaming font-varino uppercase text-[140px] absolute -bottom-12 z-10">
              gaming
            </div>
            <div className=" absolute w-[100vw] h-[200px] valorantbanneroverlay top-[17rem] flex justify-center items-center"></div>
          </div>
        </div>
        <div className="text-center text-neutral-300 text-opacity-90 text-[30px] font-medium font-readex mt-[7rem]">
          Play a variety of games of different genre, selecting from a<br />
          large library of games.
        </div>

        <div className="flex flex-col text-white relative mt-[9rem] gap-10 min-w-[1300px] mx-auto flex-wrap mb-10">
          <div className="flex flex-row justify-center gap-12">
            <div
              className="rounded-[76px] bgmigamingcard bgmi"
              onClick={handleBgmiCardClick}
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
                <div className="overlay"></div>
                <img
                  src={bgmi}
                  alt="bgmi"
                  className="pt-4 pl-4 pr-4 pb-4 h-[400px] w-[550px] rounded-[80px] absolute "
                />
                <div className="flex text-center my-auto mx-auto text-[80px] z-10 bgmitext">
                  BGMI
                </div>
              </div>
            </div>

            <div
              className="rounded-[76px] codmgamingcard codm "
              onClick={handleCodCardClick}
            >
              <div className="w-[550px] h-[400px] text-center flex justify-center cursor-pointer relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out ">
                <div className="overlay"></div>
                <img
                  src={codm}
                  alt="codm"
                  className="pt-4 pl-4 pr-4 pb-4 h-[400px] w-[550px] rounded-[80px] absolute "
                />
                <div className="flex text-center my-auto mx-auto text-[80px] z-10 codmtext">
                  CODM
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div
              onClick={handleValorantCardClick}
              className="rounded-[76px] valorantgamingcard valorant"
            >
              <div className=" w-[1150px] h-[400px] text-center flex justify-center cursor-pointer relative">
                <img
                  src={valorant}
                  alt="valorant"
                  className="pt-4 pl-4 pr-4 pb-4 h-[400px] w-[1250px] rounded-[80px] absolute valorantimg grayscale transition-all duration-500 ease-in-out"
                />
                <div className="flex text-center my-auto mx-auto text-[100px] z-10 valoranttext">
                  VALORANT
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-12">
            <div
              onClick={handleFifaCardClick}
              className="rounded-[76px] fifagamingcard fifa "
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-[600ms] ease-in-out">
                <div className="overlay"></div>
                <img
                  src={fifa2k23}
                  alt="fifa2k23"
                  className="pt-4 pl-4 pr-4 pb-4 h-[400px] w-[550px] rounded-[80px] absolute "
                />
                <div className="flex text-center justify-center items-center text-[60px] z-10 fifatext max-w-[35px]">
                  FIFA
                  <br />
                  2K23
                </div>
              </div>
            </div>
            <div
              onClick={handleGt7CardClick}
              className="rounded-[76px] assetocorsagamingcard assetocorsa"
            >
              <div className="w-[550px] h-[400px] text-center  flex justify-center cursor-pointer  relative grayscale hover:grayscale-0 transition-all duration-500 ease-in-out">
                <div className="overlay"></div>
                <img
                  src={gt7}
                  alt="gt7"
                  className="pt-4 pl-4 pr-4 pb-4 h-[400px] w-[550px] rounded-[80px] absolute "
                />
                <div className="flex text-center justify-center items-center text-[60px] z-10 assetotext max-w-[35px]">
                  Grant Truismo 7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Gaming);
