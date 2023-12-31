import logo from "./ZiegersLogo.png";
import stars from "./stars.png";
import stroke from "./strokes.png";
import sphere1 from "./planet.png";
import sphere2 from "./planet2.svg";
import sphere3 from "./planet3.svg";
import globe from "./globe.svg";
import { useNavigate } from "react-router-dom";
import transition from "./transition";

function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/eventspage'); 
  };

  return (
    <div className="wrapper relative overflow-x-hidden font-varino" >
      <div className="bgstyle"></div>
      <img
        src={stars}
        alt="stars"
        className="absolute h-[40rem] w-[90rem] top-[8rem] left-[7rem]"
      ></img>
      <nav className="flex justify-center align-center">
        <div className="w-screen max-w-[1400px] mx-auto flex items-center justify-between absolute top-1 z-10">
          <ul className="flex justify-center  ">
            <li className="text-white py-7 cursor-pointer">
              <a
                href="h"
                
                className=" text-[20px] ml-[3.5rem] leading-[24px] uppercase text-flicker-in-glow"
              >
                Ziegers
              </a>
            </li>
          </ul>
          <div className="ml-[13.8rem]">
            <ul className="lg:flex gap-3 items-center hidden">
              <li className="text-white py-7 cursor-pointer relative group">
                <div className="flex justify-center items-center">
                  <a
                    href="h"
                    className="text-center font-varino text-[12px] font-normal leading-[18px] text-[#111] uppercase"
                  >
                    Contact
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="28"
                    viewBox="10 1 34 34"
                    fill="none"
                  >
                    <path
                      d="M21.2133 18.3848V12.728M21.2133 12.728H15.5565M21.2133 12.728L12.728 21.2133"
                      stroke="#101417"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
              <li className="text-white py-7 cursor-pointer relative group">
                <div className="flex justify-center items-center">
                  <a
                    href="h"
                    className="text-center font-varino text-[12px] font-normal leading-[18px] text-[#111] uppercase"
                  >
                    About us
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="28"
                    viewBox="10 1 34 34"
                    fill="none"
                  >
                    <path
                      d="M21.2133 18.3848V12.728M21.2133 12.728H15.5565M21.2133 12.728L12.728 21.2133"
                      stroke="#101417"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a
              href="h"
              className="lg:inline-flex items-center  justify-end gap-2 text-[#F9F9FF] text-[15px] leading-[24px] hidden uppercase mr-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M12.272 2.768C12.0821 2.768 11.8965 2.8243 11.7387 2.92979C11.5808 3.03528 11.4577 3.18521 11.3851 3.36062C11.3124 3.53604 11.2934 3.72907 11.3304 3.91529C11.3675 4.10151 11.4589 4.27256 11.5932 4.40682C11.7274 4.54108 11.8985 4.63251 12.0847 4.66955C12.2709 4.7066 12.464 4.68758 12.6394 4.61492C12.8148 4.54226 12.9647 4.41922 13.0702 4.26135C13.1757 4.10348 13.232 3.91787 13.232 3.728C13.232 3.47339 13.1309 3.22921 12.9508 3.04918C12.7708 2.86914 12.5266 2.768 12.272 2.768ZM15.952 4.704C15.9364 4.04024 15.8121 3.38352 15.584 2.76C15.3806 2.22651 15.064 1.74342 14.656 1.344C14.2599 0.933941 13.7756 0.619341 13.24 0.424C12.6181 0.188929 11.9607 0.061768 11.296 0.048C10.448 -4.12648e-08 10.176 0 8 0C5.824 0 5.552 -4.12648e-08 4.704 0.048C4.03932 0.061768 3.38187 0.188929 2.76 0.424C2.22534 0.621319 1.74155 0.935649 1.344 1.344C0.933941 1.74014 0.619341 2.22435 0.424 2.76C0.188929 3.38187 0.061768 4.03932 0.048 4.704C-4.47035e-08 5.552 0 5.824 0 8C0 10.176 -4.47035e-08 10.448 0.048 11.296C0.061768 11.9607 0.188929 12.6181 0.424 13.24C0.619341 13.7756 0.933941 14.2599 1.344 14.656C1.74155 15.0644 2.22534 15.3787 2.76 15.576C3.38187 15.8111 4.03932 15.9382 4.704 15.952C5.552 16 5.824 16 8 16C10.176 16 10.448 16 11.296 15.952C11.9607 15.9382 12.6181 15.8111 13.24 15.576C13.7756 15.3807 14.2599 15.0661 14.656 14.656C15.0658 14.2581 15.3827 13.7746 15.584 13.24C15.8121 12.6165 15.9364 11.9598 15.952 11.296C15.952 10.448 16 10.176 16 8C16 5.824 16 5.552 15.952 4.704ZM14.512 11.2C14.5062 11.7078 14.4142 12.211 14.24 12.688C14.1123 13.0362 13.9071 13.3507 13.64 13.608C13.3805 13.8724 13.0666 14.0771 12.72 14.208C12.243 14.3822 11.7398 14.4742 11.232 14.48C10.432 14.52 10.136 14.528 8.032 14.528C5.928 14.528 5.632 14.528 4.832 14.48C4.30471 14.4899 3.77968 14.4087 3.28 14.24C2.94863 14.1025 2.64908 13.8982 2.4 13.64C2.13447 13.383 1.93187 13.0682 1.808 12.72C1.61269 12.2361 1.50435 11.7216 1.488 11.2C1.488 10.4 1.44 10.104 1.44 8C1.44 5.896 1.44 5.6 1.488 4.8C1.49159 4.28084 1.58636 3.76636 1.768 3.28C1.90884 2.94233 2.12501 2.64133 2.4 2.4C2.64305 2.12493 2.94343 1.90648 3.28 1.76C3.76764 1.58403 4.2816 1.49206 4.8 1.488C5.6 1.488 5.896 1.44 8 1.44C10.104 1.44 10.4 1.44 11.2 1.488C11.7078 1.49382 12.211 1.5858 12.688 1.76C13.0515 1.89492 13.3778 2.11428 13.64 2.4C13.9022 2.64574 14.107 2.94619 14.24 3.28C14.4178 3.76715 14.5098 4.28142 14.512 4.8C14.552 5.6 14.56 5.896 14.56 8C14.56 10.104 14.552 10.4 14.512 11.2ZM8 3.896C7.18865 3.89758 6.39597 4.13962 5.72212 4.59153C5.04828 5.04345 4.5235 5.68496 4.21411 6.435C3.90471 7.18505 3.82458 8.00997 3.98384 8.80554C4.14309 9.60111 4.53459 10.3316 5.10886 10.9048C5.68313 11.4779 6.41441 11.868 7.21029 12.0257C8.00617 12.1834 8.83093 12.1017 9.58038 11.7908C10.3298 11.48 10.9703 10.954 11.4209 10.2792C11.8715 9.6045 12.112 8.81135 12.112 8C12.1131 7.46008 12.0074 6.92529 11.801 6.42637C11.5946 5.92744 11.2916 5.47425 10.9095 5.09284C10.5273 4.71143 10.0736 4.40934 9.57424 4.20394C9.07492 3.99854 8.53991 3.89389 8 3.896ZM8 10.664C7.47311 10.664 6.95805 10.5078 6.51996 10.215C6.08187 9.92231 5.74042 9.50625 5.53878 9.01947C5.33715 8.53269 5.2844 7.99705 5.38719 7.48028C5.48998 6.96351 5.7437 6.48883 6.11627 6.11627C6.48883 5.7437 6.96351 5.48998 7.48028 5.38719C7.99705 5.2844 8.53269 5.33715 9.01947 5.53878C9.50625 5.74042 9.92231 6.08187 10.215 6.51996C10.5078 6.95805 10.664 7.47311 10.664 8C10.664 8.34984 10.5951 8.69626 10.4612 9.01947C10.3273 9.34268 10.1311 9.63636 9.88373 9.88373C9.63636 10.1311 9.34268 10.3273 9.01947 10.4612C8.69626 10.5951 8.34984 10.664 8 10.664Z"
                  fill="#DCDADA"
                />
              </svg>
              {/* <span className="font-Inter">instagram</span> */}
              <h5 className="flex font-inter text-[15px] font-semibold capitalize text">
                Instagram
              </h5>
            </a>
           
            <div className="w-[140px] h-[40px] mr-[5rem] bg-gradient-to-r from-black to-teal-900 rounded-full shadow border border-sky-400 justify-center items-center text-center gap-[5px] inline-flex">
              <img src={globe} className="w-[15px]"></img>

              <div className="text-[8px] text-center justify-center items-center text-white font-['Varino'] font-medium">
                Register now
              </div>
            </div>
            <div className=" w-[18px] flex flex-col gap-1 lg:hidden ">
              <div className=" bg-white w-full h-[1.2px] "></div>
              <div className=" bg-white w-full h-[1.2px] "></div>
              <div className=" bg-white w-full h-[1.2px] "></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <img
          src={stroke}
          alt="Strokes"
          className="w-[45%] h-[75%] absolute top-0 mt-20"
        ></img>
        <div className="flex flex-col gap-3 absolute z-10 items-center top-[17%] h-[420px] w-[650px] mx-auto overflow-hidden">
          <img
            src={logo}
            alt="Hello"
            className="h-[143px] w-[150px] translate-y-5"
          ></img>
          <p className="text-black ziegers font-semibold text-[50px] leading-[65px] font-varino max-w-[850px] text-center mt-[10px] text-focus-in">
            ZIEGERS 2024
          </p>
          <p className="mt-3 text-center text-[#080808] font-inter text-[20px] leading-[25px]">
            Ziegers enables participants to discover <br /> connections that was
            not possible before.
          </p>
          <div
          onClick={handleRegisterClick}
          className="flex fuller-button justify-center items-center mt-4 rounded-[100px] text-[#F9F9FF] font-varino bg-[#09090A] shadow-[0_1.417px_2.834px_0_rgba(0, 0, 0, 0.05)] p-[20px_10px_20px_15px] inline-flex items-center justify-center gap-1 h-[3.5rem] cursor-pointer"
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
            <span className=" w-[123px] text-[10.5px] text-center font-normal translate-y-[0.5px]" >
              Register now
            </span>
          </div>
        </div>
      </div>
      <img
        src={sphere1}
        alt="bottomleft"
        className="blur-[1.3px] bottom-[30px] left-[160px] absolute h-[170px] w-[170px] "
      ></img>
      <img
        src={sphere1}
        alt="middleleft"
        className="blur-[2px] rotate-[19deg] top-72 left-4 absolute h-[40px] w-[40px] "
      ></img>
      <img
        src={sphere2}
        alt="topleft"
        className="blur-[2px] top-28 left-[190px] absolute h-[80px] w-[80px] "
      ></img>
      <img
        src={sphere3}
        alt="bottomright"
        className="blur-[2px] bottom-20 right-40 absolute h-[80px] w-[80px]  "
      ></img>
      <img
        src={sphere1}
        alt="middleright"
        className="blur-[1.3px] bottom-60 rotate-[-150deg] right-6 absolute h-[40px] w-[40px] "
      ></img>
      <img
        src={sphere1}
        alt="topright"
        className="blur-[1.3px] -rotate-[165deg] top-28 right-24 absolute h-[170px] w-[170px] "
      ></img>
    </div>
  );
}
export default transition(Home);
