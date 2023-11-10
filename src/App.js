import "./App.css";

import banner1 from "./img/banner1.png";
import rocket from "./img/rocket.png";
import instagram from "./img/insta.jpeg";
import tiktok from "./img/tiktok.jpeg";
import youtube from "./img/yt.jpeg";
import arrow from "./img/arrow.jpeg";
import love from "./img/love.png";
import emoji from "./img/emoji.png";
import shadow from "./img/Group 11350.png";
// import { useEffect, useState } from "react";

function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  return (
    <div className="">
      {/* <div className="toggle-slide" onClick={handleThemeSwitch}>
        <div className={`slide ${theme ? "slide" : ""}`}></div>
      </div> */}
      <div className="pl-7 md:pl-8 lg:pl-[150px]">
        <div className="grid grid-cols-5">
          <div className="col-span-5 relative md:col-span-2 p-4 flex flex-col  justify-center gap-20">
            <div className="flex flex-col gap-4">
              <h3 className="text-5xl md:text-4xl lg:text-6xl font-bold md:leading-none">
                Boost your
              </h3>
              <h1 className="md:text-4xl lg:text-6xl text-5xl font-bold bg-gradient-to-r from-[#7920E8] via-[#CB26B6] to-[#dd3131] bg-clip-text text-transparent md:leading-none">
                SOCIAL MEDIA
              </h1>{" "}
              <h3 className="md:text-4xl text-5xl  lg:text-6xl font-bold md:leading-none">
                Presence…
              </h3>
            </div>
            <p className="md:text-[18px] text-xl lg:text-xl">
              Are you looking to boost your social media presence? Look no
              further! Our genuine social media services can help you reach new
              heights.
            </p>
            <button class="  bg-[#051A29] w-1/2 md:w-2/4 lg:w-1/4 rounded-2xl pt-3 pb-3 font-bold text-white">
              Get started
            </button>
          </div>
          <div className="col-span-5 md:col-span-3 relative mt-5 md:mt-0">
            <img
              className="hidden lg:block md:w-full md:h-full"
              src={banner1}
              alt=""
            />

            <div className=" backdrop-blur-lg shadow-[0_9px_30px_rgb(0,0,0,0.12)] absolute top-14 left-[10%] w-[80%]  md:left-1/4 rounded-2xl border-4 border-[#FDFDFD] lg:w-[45%]">
              <div className="bg-opacity-36 backdrop-blur-20 border border-opacity-100 border-solid border-white   m-4 rounded-2xl">
                <div className="p-8 w-full">
                  <h3 className="text-2xl mb-8 lg:text-[15px] font-semibold  lg:w-64 ">
                    Choose the social media
                    <div className="flex ">
                      <h2>platfrom you wish too boost!</h2>
                      <span className="">
                        <img src={rocket} alt="" />
                      </span>
                    </div>
                  </h3>
                  <div className="">
                    <div
                      className="flex justify-between items-center  mt-4 p-2 rounded-2xl lg:w-60"
                      style={{ border: "1px solid #D0CFD0" }}
                    >
                      <div className="flex items-center  gap-10">
                        <img
                          className=" w-7 md:w-7 lg:w-7"
                          src={instagram}
                          alt=""
                        />
                        <h2 className="text-lg"> Instagram</h2>
                      </div>
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                    <div
                      className="flex justify-between items-center  mt-4 p-2 rounded-2xl lg:w-60"
                      style={{ border: "1px solid #D0CFD0" }}
                    >
                      <div className="flex items-center gap-10">
                        <img
                          className="w-7 md:w-7 lg:w-7"
                          src={tiktok}
                          alt=""
                        />
                        <h2 className="text-lg"> Tiktok</h2>
                      </div>
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                    <div
                      className="flex justify-between items-center  mt-4 p-2 rounded-2xl lg:w-60"
                      style={{ border: "1px solid #D0CFD0" }}
                    >
                      <div className="flex items-center gap-10">
                        <img
                          className="w-7 md:w-7 lg:w-7"
                          src={youtube}
                          alt=""
                        />
                        <h2 className="text-lg"> Youtube</h2>
                      </div>
                      <div>
                        <img src={arrow} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-center mt-5 gap-3">
                      <h2 className="text-xl md:text-[20px] lg:text-xl font-bold">
                        see more
                      </h2>
                      <img src={arrow} alt="" />
                    </div>
                    <div className="mt-2 lg:mt-2 p-2 lg:p-4 rounded-2xl">
                      <button class="  bg-gradient-to-r from-[#7920E8] via-[#CB26B6] to-[#F65420] text-white w-full rounded-2xl pt-2 lg:pt-3 pb-2 lg:pb-3">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute hidden lg:block lg:top-0 left-20 md:left-16 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-3 rounded-2xl">
              <div className="flex gap-3">
                <img src={love} alt="" />
                <span>Marketing</span>
              </div>
            </div>
            <div className="absolute hidden lg:block right-7 md:top-10 lg:top-0 md:right-10 lg:right-20 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-3 rounded-2xl">
              <div className="flex gap-3">
                <img src={emoji} alt="" />
                <span>Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </div>
  );
}

export default App;
