const HeroSection = () => {
  return (
    <div className="h-[100vh] md:h-[92vh] w-full p-3 pt-1 md:p-4 md:pt-1">
      <div className="heroContainer relative rounded-xl h-[90%] md:h-full w-full">
        <div className="bg-black/20 z-10 absolute top-0 left-0 h-full w-full"></div>
        <div className="flex absolute top-0 left-0 z-20 text-[1rem] flex-col gap-[20%] md:gap-[10%] h-full w-full">
          <div className="flex p-4 md:flex-row flex-col gap-6 md:gap-8 md:items-center">
            <div className="text-[20vw] md:text-[16vw] select-none tracking-[-0.02em] font-semibold text-white">
              Amplify™
            </div>
            <div className="text-[1em] md:text-[1.2em] ml-auto md:ml-0 selection:bg-[#fff] selection:text-black flex justify-end items-end md:items-start md:pt-32 flex-col gap-2 md:gap-1 leading-[80%] text-gray-100">
              <div className="">Digital Branding and Identity</div>
              <div className="">Social Media Marketing</div>
              <div className="">Web Design and Development</div>
              <div className="">SEO Optimization</div>
            </div>
          </div>
          <div className="p-4 md:p-6 w-full md:max-w-[60%] lg:max-w-[40%] text-[1.3em] md:text-[1.5em] text-white selection:bg-[#fff] tracking-tighter selection:text-black leading-[110%]">
            <span className="inline-block md:min-w-[100px]"></span>
            No generic websites. No empty marketing promises.{" "}
            <span className="text-gray-100">
              Just tools and strategies that help your business grow and your
              brand shine.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
