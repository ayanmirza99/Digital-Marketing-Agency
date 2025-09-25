import { useState } from "react";
import FramerMagnetic from "./FramerMagnetic";

const HeroSection = () => {
  const [videoReady, setVideoReady] = useState(false);
  return (
    <div className="h-[100vh] md:h-[94vh] w-full p-3 pt-1 md:p-4 md:pt-1">
      <div className="relative overflow-hidden rounded-xl h-[90%] md:h-full w-full">
        {!videoReady && (
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/image.png')] bg-cover bg-center z-0 transition-opacity duration-300"></div>
        )}

        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoReady(true)}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dyzgzqw8z/video/upload/f_auto,q_auto:good/v1753982605/Untitled_design_jqewtj.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 z-[1]" />
        <div className="bg-black/20 rounded-xl z-10 absolute top-0 left-0 h-full w-full"></div>
        <div className="flex absolute top-0 left-0 z-20 text-[1rem] flex-col gap-[20%] md:gap-[10%] h-full w-full">
          <div className="flex p-4 md:flex-row flex-col gap-6 md:gap-8 md:items-center">
            <div className="text-[20vw] md:text-[15.5vw] select-none md:ml-[3vw] font-semibold text-white">
              Adify<span className="font-extralight">™</span>
            </div>
            <div className="text-[1em] md:text-[1.2em] ml-auto md:ml-[3vw] md:mt-[2vw] selection:bg-[#fff] selection:text-black flex justify-end items-end md:items-start md:pt-32 flex-col gap-2 md:gap-1 leading-[80%] text-gray-100">
              <div className="">Digital Branding and Identity</div>
              <div className="">Social Media Marketing</div>
              <div className="">Web Design and Development</div>
              <div className="">SEO Optimization</div>
              <FramerMagnetic>
                <button className="w-max px-4 md:px-6 py-3 md:py-[5px] mt-2 bg-[#f5f5f5] text-black text-[16px] md:text-lg rounded-full">
                  Get Started
                </button>
              </FramerMagnetic>
            </div>
          </div>
          <div className="p-4 md:p-6 w-full md:max-w-[60%] lg:max-w-[42%] text-[1.3em] md:text-[1.5em] text-white selection:bg-[#fff] tracking-tighter selection:text-black leading-[110%]">
            <span className="inline-block md:min-w-[100px]"></span>
            Empower Your Business Growth with Stunning Websites and Strategic Marketing.{" "}
            <span className="text-gray-100">
              Tools and strategies that help your business grow and your
              brand shine.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
