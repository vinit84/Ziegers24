import React from "react";
import banner from "../../assets/valorantbanner.png";
import transition from "../../transition.js";

const Valorant = () => {
  return (
    <div className="wrapper ">
      <nav
        className="flex text-[#fff] flex-row  items-center align-middle mx-auto pt-2 pl-10 justify-between bg-[#000000CC] rounded-es-[100px] rounded-br-[100px] bg-opacity-80 absolute"
        style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 15 }}
      >
        <div className="flex flex-row justify-evenly items-center align-middle mb-[1rem] ml-[3rem]">
          <a
            href="h"
            className="flex justify-center items-center align-middle font-varino text-focus-in nav-text"
          >
            Contact
          </a>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            className="text-focus-in"
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
          <a href="h" className="font-varino ml-3 text-focus-in nav-text">
            About
          </a>
          <svg
            width="34"
            height="34"
            className="text-focus-in"
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
        <a
          href="/"
          className="font-varino font-bold mx-auto text-xl translate-x-[-2.7rem] mb-[1rem] text-focus-in logo-text"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
        >
          ZIEGERS
        </a>

        <a
          href="h"
          className="text-focus-in w-[150px] h-[47px] pl-[3px] pr-[13px] mr-[5rem] bg-[#CFFB25] from-zinc-950  rounded-full shadow border border-[#CFFB25] justify-start items-center inline-flex instagram-button mb-[0.5rem]"
        >
          <div className="w-4 h-4 relative flex-col justify-start items-start flex " />
          <div className="text-center text-black  text-xs font-normal font-['Varino'] flex flex-row justify-center items-center align-middle">
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
                  fill="#000000"
                />
              </g>
            </svg>
            <h1 className="ml-2 m-insta">Instagram</h1>
          </div>
        </a>
      </nav>
      <div className="font-varino">
        <div>
          <div className="flex justify-end z-10">
            <svg
              width="300"
              height="341"
              viewBox="0 0 382 341"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[2rem] right-[5px] z-10"
            >
              <path
                d="M0 135.107C0 108.981 0 95.9175 2.42664 85.1039C10.8952 47.3661 40.3661 17.8952 78.1039 9.42664C88.9175 7 101.981 7 128.107 7H143.832C151.85 7 159.774 8.72531 167.066 12.0588L168.579 12.7504C182.779 19.2416 199.134 19.0562 213.183 12.2447C220.302 8.79315 228.11 7 236.022 7H253.507C279.993 7 293.236 7 304.192 9.4935C341.69 18.0279 370.972 47.3098 379.507 84.8081C382 95.7639 382 109.007 382 135.493V174C382 236.624 382 267.935 368.471 291.227C359.744 306.252 347.252 318.744 332.227 327.471C308.935 341 277.624 341 215 341H167C104.376 341 73.0647 341 49.7734 327.471C34.7481 318.744 22.2561 306.252 13.5287 291.227C0 267.935 0 236.624 0 174V135.107Z"
                fill="#1E1F29"
              />
              <path
                d="M187.598 3.05973C188.96 1.62406 189.64 0.906222 190.5 0.906222C191.36 0.906222 192.04 1.62406 193.402 3.05973L194.054 3.74728C196.794 6.63538 198.163 8.07942 197.643 9.28971C197.123 10.5 195.133 10.5 191.152 10.5H189.848C185.867 10.5 183.877 10.5 183.357 9.28971C182.837 8.07942 184.206 6.63538 186.946 3.74729L187.598 3.05973Z"
                fill="#0B0C10"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="111"
              viewBox="0 0 105 111"
              fill="none"
              className="absolute top-[7rem] mr-[2.5rem] z-10"
            >
              <path
                d="M47.0275 21.0951L37.38 55.5022C37.0234 56.7732 36.4299 57.9555 35.6346 58.9789C34.8393 60.0024 33.8583 60.8462 32.7498 61.4604C31.6413 62.0746 30.4278 62.4467 29.1812 62.5546C27.9347 62.6626 26.6803 62.5042 25.4925 62.0888L11.2375 57.1057C9.94781 56.655 8.76623 55.9118 7.77497 54.9278C6.78371 53.9438 6.00657 52.7426 5.49761 51.4079C4.98865 50.0731 4.76011 48.6368 4.82787 47.1988C4.89563 45.7609 5.25808 44.3559 5.88999 43.0816L24.6275 5.29765C25.3848 3.77083 26.5049 2.48003 27.8771 1.55292C29.2492 0.6258 30.8258 0.094473 32.451 0.0114781C34.0762 -0.0715169 35.6937 0.296695 37.1435 1.0797C38.5933 1.86271 39.8253 3.03339 40.7175 4.47597L45.8875 12.8359C46.6327 14.0418 47.1207 15.4055 47.3176 16.832C47.5145 18.2585 47.4155 19.7133 47.0275 21.0951Z"
                fill="#282A36"
              />
              <path
                d="M80.1525 5.30034L98.8825 43.079C99.5144 44.3535 99.8769 45.7587 99.9446 47.1968C100.012 48.6349 99.7839 50.0714 99.2749 51.4064C98.766 52.7413 97.9889 53.9427 96.9976 54.927C96.0063 55.9113 94.8247 56.6548 93.535 57.1058L79.2875 62.0889C78.0992 62.5046 76.8443 62.6632 75.5971 62.5554C74.3499 62.4475 73.1358 62.0753 72.0268 61.4608C70.9178 60.8463 69.9364 60.0021 69.1408 58.9781C68.3452 57.9541 67.7515 56.7712 67.395 55.4995L57.75 21.0951C57.3625 19.7137 57.2638 18.2594 57.4607 16.8335C57.6575 15.4075 58.1453 14.0442 58.89 12.8386L64.055 4.48132C64.947 3.03742 66.1792 1.8655 67.6297 1.08151C69.0801 0.297532 70.6984 -0.0713408 72.3246 0.0113967C73.9507 0.0941343 75.5283 0.625614 76.9013 1.55325C78.2742 2.48088 79.3949 3.77251 80.1525 5.30034Z"
                fill="#282A36"
              />
              <path
                d="M37.9725 64.3481L44.885 37.2248C45.0383 36.6237 45.3741 36.0929 45.8404 35.7144C46.3068 35.3359 46.8777 35.1308 47.465 35.1309H56.96C57.5384 35.1303 58.1013 35.3287 58.5642 35.6962C59.0272 36.0638 59.3652 36.5806 59.5275 37.1692L66.995 64.2925C67.1115 64.715 67.1336 65.1606 67.0594 65.5937C66.9853 66.0269 66.8169 66.4358 66.5677 66.788C66.3185 67.1402 65.9954 67.4259 65.6239 67.6226C65.2524 67.8193 64.8428 67.9215 64.4275 67.9211H40.5525C40.1421 67.9211 39.7371 67.8209 39.3691 67.6282C39.0011 67.4356 38.6799 67.1556 38.4304 66.8101C38.1809 66.4645 38.0098 66.0627 37.9304 65.6358C37.851 65.2088 37.8654 64.7682 37.9725 64.3481Z"
                fill="#282A36"
              />
              <path
                d="M0 91.9569V68.5921C0.283333 65.7472 1.39 63.4774 3.32 61.7828C5.38667 59.9681 7.73667 59.2126 10.37 59.5166C11.315 59.6261 12.5867 60.0149 14.185 60.6828C19.5083 62.9093 25.27 65.2577 31.47 67.728C33.3117 68.4631 34.6167 69.1426 35.385 69.7663C37.8825 71.7993 39.345 75.1178 39.0675 78.4788C39.0142 79.1202 38.7833 80.2016 38.375 81.7231C36.4633 88.8496 34.6092 95.7596 32.8125 102.453C32.4842 103.676 31.8225 104.881 30.8275 106.069C28.62 108.703 25.1325 109.843 21.9025 109.101C20.9725 108.887 19.7825 108.362 18.3325 107.526C14.2225 105.155 10.205 102.893 6.28 100.741C4.73833 99.8963 3.595 99.094 2.85 98.3342C1.22 96.6714 0.27 94.5457 0 91.9569Z"
                fill="#282A36"
              />
              <path
                d="M105 68.6277V91.913C104.735 94.5159 103.797 96.6425 102.185 98.2929C101.425 99.0704 100.159 99.9469 98.3875 100.922C94.3625 103.14 90.3692 105.389 86.4075 107.668C85.0609 108.442 83.9434 108.923 83.055 109.11C79.115 109.942 75.1925 108.166 73.1225 104.585C72.6225 103.72 72.1542 102.451 71.7175 100.779C70.1092 94.6192 68.4775 88.5388 66.8225 82.5379C66.1842 80.2266 65.875 78.5939 65.895 77.6397C65.9775 73.4412 68.335 69.8629 72.075 68.3494C79.1367 65.4939 85.6783 62.823 91.7 60.3367C92.855 59.8596 93.8775 59.5795 94.7675 59.4965C97.4309 59.2438 99.7775 60.0478 101.808 61.9085C103.671 63.6155 104.735 65.8552 105 68.6277Z"
                fill="#B3FF00"
              />
              <path
                d="M66.6125 110.998H38.1875C36.4059 109.001 35.5025 106.729 35.4775 104.181C35.4659 103.052 35.7384 101.435 36.295 99.3304C37.7784 93.7307 39.2584 87.9401 40.735 81.9586C41.29 79.7127 41.7175 78.231 42.0175 77.5136C43.4525 74.0784 46.69 71.7857 50.245 71.6956C51.7767 71.6567 53.185 71.6638 54.47 71.7168C57.475 71.8413 60.185 73.7471 61.7675 76.3818C62.1942 77.0921 62.66 78.3635 63.165 80.196C65.0784 87.1528 66.9959 94.1079 68.9175 101.061C69.9492 104.79 69.1809 108.102 66.6125 110.998Z"
                fill="#282A36"
              />
            </svg>
            <div className="flex flex-row z-10">
              <div className=" absolute text-white text-xl font-semibold font-['Outfit'] translate-y-[7.5rem] -translate-x-[16.5rem]">
                Registration
                <br />
                Amount
                <div className="text-slate-400 text-[13px] font-medium mt-[1rem]">
                  Check in 15:00
                </div>
                <div className="text-slate-400 text-[13px] font-medium">
                  No refund
                </div>
                <div className="relative justify-center">
                  <div className="w-[225px] h-[60px] left-0 top-3 absolute bg-zinc-950 rounded-[100px]" />
                  <div className="w-6 h-5 left-[180px] top-[32px] absolute justify-center items-center inline-flex">
                    <div className="w-6 h-5 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.43 5.92969L20.5 11.9997L14.43 18.0697"
                          stroke="#B3FF00"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.5 12H20.33"
                          stroke="#B3FF00"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="left-[30px] top-[30px] absolute text-white text-[20px] font-semibold">
                    ₹200/Team
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="flex justify-center valo-btn cursor-pointer absolute z-10 mx-auto bottom-[4.7rem]">
              <div className="flex justify-center ">
                <div className="w-[235px] h-[65px] text-center flex flex-row justify-center items-center left-0 top-0 bg-[#CFFB25] rounded-[100px]">
                  <div className="left-[2rem] absolute text-neutral-900 text-[22px] font-semibold font-['Outfit']">
                    Participate
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex ml-[9.5rem]"
                    >
                      <path
                        d="M14.4301 5.92969L20.5001 11.9997L14.4301 18.0697"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 12H20.33"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <img src={banner} alt="webdevbanner" className="w-screen"></img>

            <div className=" absolute w-[100vw] h-[300px] valorantbanneroverlay -bottom-32 flex justify-center items-center">
              <div className=" inline-flex p-[25px] items-center gap-5 rounded-[22px] webdevvenuecard translate-y-[5rem] justify-center align-middle">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                  <div className=" font-readex text-[#F3F3F3]">
                    18th January
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z"
                      stroke="#F3F3F3"
                      stroke-width="2.47513"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className=" font-readex text-[#F3F3F3]">
                    10:00 AM to 12:00 PM
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="25"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z"
                      fill="#F3F3F3"
                    />
                  </svg>
                  <div className=" font-readex text-[#F3F3F3]">
                    CS Lab,4th Floor
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100vw] h-[450px] absolute valorantbanneroverlay top-[28rem] -z-1"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-[40px] items-center max-w-[950px] mx-auto mt-[3rem] mb-20">
        <div className=" inline-flex p-[25px] items-center gap-5 rounded-[22px] webdevvenuecard translate-y-[-1rem] justify-center align-middle">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.61073 0.672852C9.39667 0.672852 10.0338 1.30998 10.0338 2.09593V4.94208H27.1107V2.09593C27.1107 1.30998 27.7479 0.672852 28.5338 0.672852C29.3197 0.672852 29.9569 1.30998 29.9569 2.09593V4.94208H31.38C34.5237 4.94208 37.0723 7.49062 37.0723 10.6344V31.9805C37.0723 35.1243 34.5237 37.6729 31.38 37.6729H5.76457C2.6208 37.6729 0.0722656 35.1243 0.0722656 31.9805V10.6344C0.0722656 7.49062 2.6208 4.94208 5.76457 4.94208H7.18765V2.09593C7.18765 1.30998 7.82478 0.672852 8.61073 0.672852ZM34.2261 17.7498C34.2261 16.1779 32.9518 14.9036 31.38 14.9036H5.76457C4.19269 14.9036 2.91842 16.1779 2.91842 17.7498V31.9805C2.91842 33.5524 4.19269 34.8267 5.76457 34.8267H31.38C32.9518 34.8267 34.2261 33.5524 34.2261 31.9805V17.7498Z"
                fill="#F3F3F3"
              />
            </svg>
            <div className=" font-readex text-[#F3F3F3]">18th January</div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M19.0605 9.92285V19.1729H25.998M32.9355 19.1729C32.9355 26.8358 26.7235 33.0478 19.0605 33.0478C11.3976 33.0478 5.18555 26.8358 5.18555 19.1729C5.18555 11.5099 11.3976 5.29785 19.0605 5.29785C26.7235 5.29785 32.9355 11.5099 32.9355 19.1729Z"
                stroke="#F3F3F3"
                stroke-width="2.47513"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className=" font-readex text-[#F3F3F3]">
              10:00 AM to 12:00 PM
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8383 35.1307C17.8849 35.1577 17.9215 35.1785 17.9474 35.1931L17.9904 35.2171C18.334 35.4057 18.7602 35.4043 19.1041 35.2177L19.1483 35.1931C19.1742 35.1785 19.2108 35.1577 19.2574 35.1307C19.3505 35.0768 19.4836 34.9981 19.6509 34.895C19.9854 34.6891 20.4576 34.3854 21.0216 33.9869C22.1478 33.1914 23.6504 32.011 25.1563 30.4692C28.1535 27.4005 31.2666 22.7898 31.2666 16.8603C31.2666 9.83598 25.5722 4.1416 18.5479 4.1416C11.5235 4.1416 5.8291 9.83598 5.8291 16.8603C5.8291 22.7898 8.94222 27.4005 11.9394 30.4692C13.4453 32.011 14.9479 33.1914 16.0741 33.9869C16.6381 34.3854 17.1103 34.6891 17.4448 34.895C17.6121 34.9981 17.7452 35.0768 17.8383 35.1307ZM18.5479 21.4853C21.1022 21.4853 23.1728 19.4147 23.1728 16.8604C23.1728 14.306 21.1022 12.2354 18.5479 12.2354C15.9935 12.2354 13.9229 14.306 13.9229 16.8604C13.9229 19.4147 15.9935 21.4853 18.5479 21.4853Z"
                fill="#F3F3F3"
              />
            </svg>
            <div className=" font-readex text-[#F3F3F3]">CS Lab,4th Floor</div>
          </div>
        </div>

        <div className="text-[21px] font-inter text-center text-[#D4D4D4] tracking-[1.15px] font-medium z-10">
          Valorant LAN tournament is a competitive event featuring some of the
          best teams competing against each other in the popular first-person
          shooter game, Valorant. The tournament will be played in a LAN (Local
          Area Network) setup, where all the participating teams will be
          physically present in the same location to play their matches. The
          tournament will feature a prize pool for the winning team. It aims to
          bring together the best teams and fans of Valorant to showcase their
          skills and enjoy the game together in a face to face environment which
          will add an extra layer of excitement and pressure.
        </div>

        <div className="valorantmapselection w-[950px]">
          <div className="p-[10px] flex flex-col gap-3 text-[#D4D4D4] tracking-[1.15px] text-[20px] font-inter text-center">
            <div className="font-medium">
              Map Selection Process for Best-of-One Matches:
            </div>
            <ul
              className="flex flex-col gap-3 items-center text-center"
              style={{ listStyleType: "disc" }}
            >
              <li> Team A bans 1 Map</li>
              <li> Team B bans 1 Map</li>
              <li> Team A bans 1 Map</li>
              <li> Team B bans 1 Map</li>
              <li> Team A bans 1 Map</li>
              <li> Team B bans 1 Map</li>
              <li> Map 7 is only Map remaining</li>
              <li> Teams will be picking sides by toss</li>
            </ul>
          </div>
        </div>
        <div className="valorantnote text-[#D05555] text-center text-[20px] font-inter italic font-medium tracking-[1.15px]">
          *NOTE: Any sort of damage to the property of Ziegers and the concerned
          authorities will not be tolerated and the one's responsible will be
          sanctioned with penalties and can also be charged a fine depending on
          the damage done.
        </div>
      </div>
    </div>
  );
};

export default transition(Valorant);
