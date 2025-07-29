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

  const phrase =
    "We are a web design and marketing agency specializing in website development, SEO, and digital marketing. Our mission is to build fast, functional, and strategically structured websites that drive real business results—without unnecessary complexity.";
  return (
    <div
      ref={container}
      className="description md:mt-[100px] p-4 flex flex-col gap-6 justify-center"
    >
      <div className="block lg:hidden text-[1.1rem]">+ About us</div>
      <div className="body flex md:flex-row flex-col max-w-[1400px] gap-6 md:gap-[40px] relative">
        <p className="m-0 gap-[8px] md:pl-[100px] text-left md:text-justify text-[28px] md:text-[36px] leading-[1.1] md:leading-[1.2]">
          {phrase.split(" ").map((word, index) => (
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
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="text-[20px] leading-[1.1] text-gray-700 md:text-[20px] w-full"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam possimus
          doloremque voluptates!
        </motion.p>
        <div data-scroll data-scroll-speed="2">
          <FramerMagnetic>
            <FramerButton className="top-[56%] left-[calc(100%-300px)] w-[180px] h-[180px] bg-[#1c1d20] text-white rounded-full absolute hidden lg:flex items-center justify-center cursor-pointer">
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
