
import logo from "../../src/assets/ZiegersLogo.webp";
import stars from "../../src/assets/stars.webp";
import stroke from "../../src/assets/strokes.webp";
import sphere1 from "../../src/assets/planet.webp";
import sphere2 from "../../src/assets/planet2.svg";
import sphere3 from "../../src/assets/planet3.svg";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import menu from "../assets/menu.svg";
import { useEffect, useState } from "react";
// import transition from "../transition";
import Loader from "./Loader.js";
import Footer from "./Footer.jsx";


function Home() {


  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/events");
  };
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };

  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    document.title = "Ziegers - Fest of Computer Science";
    
     const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  
  }, []);

  return (
    
    <div className="wrapper overflow-hidden font-varino">
     {isLoading ? (
        <Loader />
      ) : (
        <>
     
      <nav
        className="flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between  rounded-es-[100px] rounded-br-[100px] absolute m-gaming-nav"
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }}
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flex flex-row justify-evenly items-center align-middle h-menus lg:mb-[1rem]"
            style={getMenuStyles(menuOpened)}
          >
            <div
              onClick={handleContactClick}
              className="flex justify-center items-center align-middle font-varino text-focus-in navbar-text cursor-pointer"
            >
              Contact
            </div>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              className="text-focus-in m-hide"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/arrows/outline/arrow-down">
                <path
                  id="Vector 190"
                  d="M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <div onClick={handleAboutClick} className="cursor-pointer font-varino ml-3 text-focus-in navbar-text">
              About
            </div>
            <svg
              width="34"
              height="34"
              className="text-focus-in m-hide"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Huge-icon/arrows/outline/arrow-down">
                <path
                  id="Vector 190"
                  d="M21.2722 18.4141V12.7573M21.2722 12.7573H15.6153M21.2722 12.7573L12.7869 21.2425"
                  stroke="#F3F3F3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </OutsideClickHandler>
        <a
          href="/"
          className="font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] lg:mb-[1rem] text-focus-in logo-text"
          style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.9)" }}
        >
          ZIEGERS
        </a>

        <a
          href="https://www.instagram.com/ziegerscs"
          target="_blank"
          className="w-[150px] m-hide h-[47px] pl-[3px] pr-[13px] mr-[3rem] bg-gradient-to-r from-zinc-950 to-blue-900 rounded-full shadow border border-blue-900 justify-start items-center inline-flex instagram-button mb-[0.5rem]"
        >
          <div className="w-4 h-4 relative flex-col justify-start items-start flex " />
          <div className="text-center text-slate-50 text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="instagram">
                <path
                  id="Vector"
                  d="M11.6188 4.13967C11.4605 4.13967 11.3059 4.18659 11.1743 4.2745C11.0427 4.3624 10.9402 4.48735 10.8797 4.63353C10.8191 4.77971 10.8033 4.94056 10.8341 5.09575C10.865 5.25093 10.9412 5.39348 11.0531 5.50536C11.165 5.61724 11.3075 5.69343 11.4627 5.7243C11.6179 5.75517 11.7787 5.73933 11.9249 5.67878C12.0711 5.61823 12.196 5.51569 12.2839 5.38413C12.3718 5.25257 12.4188 5.0979 12.4188 4.93967C12.4188 4.7275 12.3345 4.52402 12.1844 4.37399C12.0344 4.22396 11.8309 4.13967 11.6188 4.13967ZM14.6854 5.75301C14.6725 5.19987 14.5689 4.65261 14.3788 4.13301C14.2092 3.68843 13.9454 3.28586 13.6054 2.95301C13.2753 2.61129 12.8718 2.34913 12.4254 2.18634C11.9072 1.99045 11.3593 1.88448 10.8054 1.87301C10.0988 1.83301 9.87209 1.83301 8.05876 1.83301C6.24542 1.83301 6.01876 1.83301 5.31209 1.87301C4.75819 1.88448 4.21032 1.99045 3.69209 2.18634C3.24654 2.35077 2.84338 2.61271 2.51209 2.95301C2.17037 3.28313 1.90821 3.68663 1.74542 4.13301C1.54953 4.65124 1.44356 5.19911 1.43209 5.75301C1.39209 6.45967 1.39209 6.68634 1.39209 8.49967C1.39209 10.313 1.39209 10.5397 1.43209 11.2463C1.44356 11.8002 1.54953 12.3481 1.74542 12.8663C1.90821 13.3127 2.17037 13.7162 2.51209 14.0463C2.84338 14.3866 3.24654 14.6486 3.69209 14.813C4.21032 15.0089 4.75819 15.1149 5.31209 15.1263C6.01876 15.1663 6.24542 15.1663 8.05876 15.1663C9.87209 15.1663 10.0988 15.1663 10.8054 15.1263C11.3593 15.1149 11.9072 15.0089 12.4254 14.813C12.8718 14.6502 13.2753 14.3881 13.6054 14.0463C13.9469 13.7147 14.211 13.3118 14.3788 12.8663C14.5689 12.3467 14.6725 11.7995 14.6854 11.2463C14.6854 10.5397 14.7254 10.313 14.7254 8.49967C14.7254 6.68634 14.7254 6.45967 14.6854 5.75301ZM13.4854 11.1663C13.4806 11.5895 13.4039 12.0088 13.2588 12.4063C13.1523 12.6965 12.9813 12.9586 12.7588 13.173C12.5425 13.3933 12.2809 13.564 11.9921 13.673C11.5946 13.8182 11.1753 13.8948 10.7521 13.8997C10.0854 13.933 9.83876 13.9397 8.08542 13.9397C6.33209 13.9397 6.08542 13.9397 5.41876 13.8997C4.97935 13.9079 4.54182 13.8402 4.12542 13.6997C3.84928 13.5851 3.59966 13.4149 3.39209 13.1997C3.17082 12.9855 3.00199 12.7231 2.89876 12.433C2.73599 12.0298 2.64572 11.601 2.63209 11.1663C2.63209 10.4997 2.59209 10.253 2.59209 8.49967C2.59209 6.74634 2.59209 6.49967 2.63209 5.83301C2.63508 5.40038 2.71406 4.97164 2.86542 4.56634C2.98279 4.28495 3.16293 4.03411 3.39209 3.83301C3.59463 3.60379 3.84495 3.42174 4.12542 3.29967C4.53179 3.15304 4.96009 3.07639 5.39209 3.07301C6.05876 3.07301 6.30542 3.03301 8.05876 3.03301C9.81209 3.03301 10.0588 3.03301 10.7254 3.07301C11.1486 3.07786 11.5679 3.15451 11.9654 3.29967C12.2684 3.41211 12.5403 3.59491 12.7588 3.83301C12.9772 4.03779 13.1479 4.28816 13.2588 4.56634C13.4069 4.9723 13.4836 5.40086 13.4854 5.83301C13.5188 6.49967 13.5254 6.74634 13.5254 8.49967C13.5254 10.253 13.5188 10.4997 13.4854 11.1663ZM8.05876 5.07967C7.38263 5.08099 6.72206 5.28269 6.16053 5.65929C5.59899 6.03588 5.16168 6.57047 4.90385 7.19551C4.64602 7.82055 4.57924 8.50799 4.71195 9.17096C4.84467 9.83394 5.17091 10.4427 5.64947 10.9203C6.12803 11.398 6.73743 11.723 7.40066 11.8544C8.06389 11.9859 8.7512 11.9177 9.37574 11.6587C10.0003 11.3997 10.534 10.9613 10.9095 10.399C11.285 9.83676 11.4854 9.1758 11.4854 8.49967C11.4863 8.04974 11.3982 7.60408 11.2262 7.18831C11.0543 6.77254 10.8018 6.39488 10.4833 6.07704C10.1649 5.7592 9.78672 5.50746 9.37062 5.33629C8.95452 5.16513 8.50868 5.07792 8.05876 5.07967ZM8.05876 10.7197C7.61968 10.7197 7.19047 10.5895 6.82539 10.3455C6.46031 10.1016 6.17577 9.75488 6.00774 9.34923C5.83972 8.94358 5.79575 8.49721 5.88141 8.06657C5.96707 7.63594 6.17851 7.24037 6.48898 6.9299C6.79945 6.61942 7.19502 6.40799 7.62566 6.32233C8.05629 6.23667 8.50266 6.28063 8.90831 6.44866C9.31397 6.61669 9.66068 6.90123 9.90462 7.26631C10.1486 7.63139 10.2788 8.0606 10.2788 8.49967C10.2788 8.79121 10.2213 9.07989 10.1098 9.34923C9.9982 9.61857 9.83468 9.86331 9.62853 10.0695C9.42239 10.2756 9.17766 10.4391 8.90831 10.5507C8.63897 10.6623 8.35029 10.7197 8.05876 10.7197Z"
                  fill="#F3F3F3"
                />
              </g>
            </svg>
            <h1 className="ml-2">Instagram</h1>
          </div>
        </a>
        <div
          className="flex menu-icon cursor-pointer flex-row  justify-end mx-auto m-game-menu"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <img
            src={menu}
            alt="menu"
            width="50px"
            className="flex border border-solid  m-burger border-[#F3F3F3] rounded-lg m-burger2 text-focus-in"
          ></img>
        </div>
      </nav>
      <div className="bgstyle"></div>

      <img
        src={stars}
        alt="stars"
        className="absolute h-[40rem] w-[90rem] top-[8rem] left-[7rem] stars"
      ></img>

      <div className="flex justify-center">
        <img
          src={stroke}
          alt="Strokes"
          className="w-[45%] h-[75%] absolute top-0 mt-20 strokes"
        ></img>
        <div className="flex flex-col lg:gap-3 absolute items-center top-[17%] h-[500px] w-[650px] mx-auto overflow-hidden hero-section">
          <img
            src={logo}
            alt="Hello"
            className="h-[143px] w-[150px] translate-y-5 m-logo"
          ></img>
          <p className="text-black ziegers font-semibold text-[50px] leading-[65px] font-varino max-w-[850px] text-center lg:mt-[10px] ziegers2024">
            ZIEGERS 2024
          </p>
          <p className="lg:mt-3 text-center text-[#080808] font-readex font-light text-[20px] leading-[25px] ziegers-text ">
            Ziegers enables participants to discover <br /> connections that was
            not possible before.
          </p>

          <div
            onClick={handleRegisterClick}
            className="flex fuller-button justify-center items-center mt-4 rounded-[100px] text-[#F9F9FF] font-varino bg-[#09090A] shadow-[0_1.417px_2.834px_0_rgba(0, 0, 0, 0.05)] p-[20px_10px_20px_15px] inline-flex items-center justify-center gap-1 h-[3.5rem] cursor-pointer register-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 -2 16 16"
              fill="none"
            >
              <path
                d="M8.88233 14C10.2123 13.9999 11.5046 13.5581 12.5563 12.744C13.6081 11.9299 14.3596 10.7895 14.693 9.502M8.88233 14C7.55233 13.9999 6.26002 13.5581 5.20831 12.744C4.1566 11.9299 3.40505 10.7895 3.07166 9.502M8.88233 14C10.539 14 11.8823 11.3133 11.8823 8C11.8823 4.68667 10.539 2 8.88233 2M8.88233 14C7.22566 14 5.88233 11.3133 5.88233 8C5.88233 4.68667 7.22566 2 8.88233 2M14.693 9.502C14.8163 9.022 14.8823 8.51867 14.8823 8C14.884 6.96807 14.6182 5.95333 14.111 5.05467M14.693 9.502C12.9151 10.4876 10.9151 11.0032 8.88233 11C6.77433 11 4.79366 10.4567 3.07166 9.502M3.07166 9.502C2.94549 9.01132 2.88188 8.50665 2.88233 8C2.88233 6.93 3.16233 5.92467 3.65366 5.05467M8.88233 2C9.94649 1.99956 10.9916 2.28224 11.9105 2.81904C12.8293 3.35585 13.5888 4.12744 14.111 5.05467M8.88233 2C7.81817 1.99956 6.77305 2.28224 5.8542 2.81904C4.93535 3.35585 4.17586 4.12744 3.65366 5.05467M14.111 5.05467C12.6594 6.31195 10.8027 7.00276 8.88233 7C6.88366 7 5.05566 6.26667 3.65366 5.05467"
                stroke="#F9F9FF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className=" w-[123px] text-[10.5px] text-center font-normal translate-y-[0.5px]">
              Register now
            </span>
          </div>
        </div>
      </div>

      <img
        src={sphere1}
        alt="bottomleft"
        className="bottomleft blur-[1.3px] bottom-[30px] left-[160px] absolute h-[170px] w-[170px] "
      ></img>
      <img
        src={sphere1}
        alt="middleleft"
        className="middleleft blur-[2px] rotate-[19deg] bottom-[26rem] left-4 absolute h-[40px] w-[40px] "
      ></img>
      <img
        src={sphere2}
        alt="topleft"
        className="topleft blur-[2px] top-28 left-[190px] absolute h-[80px] w-[80px] "
      ></img>
      <img
        src={sphere3}
        alt="bottomright"
        className="bottomright blur-[2px] bottom-20 right-40 absolute h-[80px] w-[80px]  "
      ></img>
      <img
        src={sphere1}
        alt="middleright"
        className="middleright blur-[1.3px] bottom-60 rotate-[-150deg] right-6 absolute h-[40px] w-[40px] "
      ></img>
      <img
        src={sphere1}
        alt="topright"
        className="topright blur-[1.3px] -rotate-[165deg] top-28 right-24 absolute h-[170px] w-[170px] "
      ></img>

<Footer/>

</>
      )}
    </div>
  );
}
export default Home;