// eslint-disable-next-line no-unused-vars
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FramerMagnetic from "./FramerMagnetic";
import FramerButton from "./FramerButton";

const AboutSection = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const opacity = {
    initial: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
    closed: { opacity: 0 },
  };
  const slideup = {
    initial: { y: "100%" },
    open: (i) => ({ y: 0, transition: { duration: 0.5, delay: i * 0.01 } }),
    closed: { y: "100%" },
  };

  const phrase1 =
    "Empowering Businesses to Thrive in the Digital World";
  const phrase2 =
    "At Amplify, our mission is simple — turn visibility into revenue. Trusted by 170+ success stories, we exist to help ambitious businesses grow faster, smarter, and more profitably through full-funnel digital marketing strategies and conversion-focused web development.";
  return (
    <div
      ref={container}
      className="description md:mt-[100px] mb-[180px] p-4 flex flex-col gap-6 justify-center"
    >
      <div className="block lg:hidden text-[1.1rem]">+ About us</div>
      <div className="body flex md:flex-row flex-col max-w-[1400px] gap-6 md:gap-[40px] relative">
        <div>
          <p className="m-0 lg:flex items-center md:pl-[100px] text-left md:text-justify text-[24px] md:text-[30px] font-extralight leading-[1.1] md:leading-[1.2] mb-6">
            <div className="rounded-full hidden mr-2 lg:flex items-center justify-center bg-black/80 h-6 w-6 text-gray-200 pb-[0.5px] text-[28px]">+</div>
            {phrase1.split(" ").map((word, index) => (
              <span
                key={index}
                className={`mask mr-[3px] ${
                  index > 15 ? "text-gray-700" : "text-black"
                } relative inline-flex overflow-hidden`}
              >
                <motion.span
                  custom={index}
                  variants={slideup}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  className="mr-[3px]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
          <p className="m-0 gap-[8px] md:pl-[100px] text-left md:text-justify text-[24px] md:text-[36px] leading-[1.1] md:leading-[1.2]">
            {phrase2.split(" ").map((word, index) => (
              <span
                key={index}
                className={`mask mr-[3px] ${
                  index > 10 ? "text-gray-700" : "text-black"
                } relative inline-flex overflow-hidden`}
              >
                <motion.span
                  custom={index}
                  variants={slideup}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  className="mr-[3px]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </div>
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="text-[18px] leading-[1.1] text-gray-700 md:text-[20px] w-full"
        >
          We’re on a journey to make history as the most impactful digital
          marketing agency ever—crafting a legacy of innovation, growth, and
          unparalleled success.
        </motion.p>
        <div data-scroll data-scroll-speed="2">
          <FramerMagnetic>
            <FramerButton className="top-[45%] left-[calc(100%-300px)] w-[180px] h-[180px] bg-[#1c1d20] text-white rounded-full absolute hidden lg:flex items-center justify-center cursor-pointer">
              <FramerMagnetic>
                <p className="m-0 text-[24px] relative z-[1]">About Us</p>
              </FramerMagnetic>
            </FramerButton>
          </FramerMagnetic>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
