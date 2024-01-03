import React from "react";
import transition from "../transition";
import Navbar from "./navbar.jsx";
import WebdevCard from "../assets/WebdevCard.png";
import gamecard from "../assets/gamecard.png";
import technutzcard from "../assets/technutzcard.png";
import codexcard from "../assets/codexcard.png";
import VanillaTilt from "vanilla-tilt";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react"; 

const Eventpage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showFirstCard, setShowFirstCard] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);
  const [showFourthCard, setShowFourthCard] = useState(false);
  const mainRef = useRef(null);

  const navigate = useNavigate();

  const handleGamecardClick = () => {
    navigate("/gamingpage");
  };

  useEffect(() => {
    const createDiv = () => {
      const scene = document.querySelector(".scene");
      for (let i = 0; i < 210; i++) {
        const div = document.createElement("div");
        scene.appendChild(div);
      }

      const tiltElements = document.querySelectorAll(".tilt");
      tiltElements.forEach((element) => {
        VanillaTilt.init(element, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      });
    };

    createDiv();

    const setStarsProperties = () => {
      const stars = document.querySelectorAll(".scene div");
      stars.forEach((star) => {
        let x = `${Math.random() * 200}vmax`;
        let y = `${Math.random() * 100}vh`;
        let z = `${Math.random() * 200 - 100}vmin`;
        let rx = `${Math.random() * 360}deg`;
        star.style.setProperty("--x", x);
        star.style.setProperty("--y", y);
        star.style.setProperty("--z", z);
        star.style.setProperty("--rx", rx);
        let delay = `${Math.random() * 1.5}s`;
        star.style.animationDelay = delay;
      });
    };

    setStarsProperties();
    setTimeout(() => {
      setShowNavbar(true);
      const mainElement = mainRef.current;
      mainElement.classList.add("blurred");
      setTimeout(() => {
        setShowFirstCard(true);
      }, 1000);

      setTimeout(() => {
        setShowSecondCard(true);
      }, 2000);

      setTimeout(() => {
        setShowThirdCard(true);
      }, 3000);

      setTimeout(() => {
        setShowFourthCard(true);
      }, 4000);
    }, 3000);
  }, []);

  

  return (
    <div>
      {showNavbar && <Navbar />}

      {/* <div className="flex flex-col mx-auto absolute z-10 ml-[5rem]">
        <div className="flex flex-row mx-auto mt-[5rem] justify-between items-center ">
          <div className="flex justify-center items-center align-middle pr-3 text-center">
          <h1 className="text-zinc-100  text-[70px] font-extrabold font-['Varino'] leading-[140px] tracking-[15px] absolute">GAMING </h1>
            <img src={GamingCard} className="w-[38rem] h-[18rem]"></img>
          </div>
          <div className="flex justify-center items-center align-middle">
            <img src={GamingCard} className="w-[38rem] h-[18rem] "></img>
          </div>
        </div>
        <div className="flex flex-row mx-auto pt-3 justify-between items-center">
          <div className="flex justify-center items-center align-middle pr-3">
            <img src={GamingCard} className="w-[38rem] h-[18rem] "></img>
          </div>
          <div className="flex justify-center items-center align-middle">
            <img src={GamingCard} className="w-[38rem] h-[18rem] "></img>
          </div>
        </div>
       
      </div> */}

      <div className="flex flex-row justify-center">
        <div className="flex flex-col mx-auto absolute z-10 mt-32">
          <div className="flex flex-row mx-auto justify-between items-center ">
            <div onClick={handleGamecardClick} className="flex justify-center items-center align-middle pr-3 cursor-pointer ">
              <img
                src={gamecard} alt="gamecard"
                className={`w-[33rem]  card1 tilt ${showFirstCard ? "show" : ""}`}
              />
            </div>
            <div className="flex justify-center items-center align-middle cursor-pointer">
              <img
                src={technutzcard} alt="technutzcard"
                className={`w-[33rem] card2 tilt ${showSecondCard ? "show" : ""}`}
              />
            </div>
          </div>
          <div className="flex flex-row mx-auto pt-3 justify-between items-center">
            <div className="flex justify-center items-center align-middle pr-3 cursor-pointer">
              <img
                src={codexcard} alt="codexcard"
                className={`w-[33rem] card3 tilt ${showThirdCard ? "show" : ""}`}
              />
            </div>
            <div className="flex justify-center items-center align-middle cursor-pointer">
              <img
                src={WebdevCard} alt="WebdevCard"
                className={`w-[33rem] card4  tilt ${showFourthCard ? "show" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>

      <main
        ref={mainRef}
        className="scene main-container"
        style={{ position: "relative", zIndex: 0 }}
      ></main>
    </div>
  );
};

export default transition(Eventpage);
