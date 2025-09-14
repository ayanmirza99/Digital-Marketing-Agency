/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import FramerMagnetic from "./FramerMagnetic";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const burger = {
    opened: (deg) => ({ rotate: deg }),
    closed: { rotate: 0 },
  };

  const navLinksAnim = {
    hidden: {
      opacity: 0,
      x: -20,
      pointerEvents: "none",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      pointerEvents: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const colorTransition = {
    opened: {
      backgroundColor: "#ffffff",
      delay: 0.5,
    },
    closed: {
      backgroundColor: "#f5f5f5",
    },
  };

  return (
    <>
      <motion.div
        variants={colorTransition}
        animate={isOpen ? "opened" : "closed"}
        initial="closed"
        className="h-[50px] selection:bg-[#383838] selection:text-white sticky top-0 left-0 z-50 flex items-center justify-between px-6 text-[1.6rem]"
      >
        <Link className="text-[1em]" to={"/"}>
          Amplify™
        </Link>

        <motion.div
          className="text-[0.6em] font-semibold flex-1 hidden lg:flex px-6 justify-around items-center"
          variants={navLinksAnim}
          initial="visible"
          animate={isOpen ? "hidden" : "visible"}
        >
          <FramerMagnetic>
            <div className="cursor-pointer">
              <Link to={"/"}>Home</Link>
            </div>
          </FramerMagnetic>
          <FramerMagnetic>
            <div className="cursor-pointer">
              <Link to={"/services"}>Services</Link>
            </div>
          </FramerMagnetic>
          <FramerMagnetic>
            <div className="cursor-pointer">
              <Link to={"/contact"}>Contact</Link>
            </div>
          </FramerMagnetic>
        </motion.div>

        <div
          className="space-y-2 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="w-[60px] bg-black origin-left h-[3px]"
            variants={burger}
            animate={isOpen ? "opened" : "closed"}
            custom={"10deg"}
          ></motion.div>
          <motion.div
            className="w-[60px] bg-black origin-left h-[3px]"
            variants={burger}
            animate={isOpen ? "opened" : "closed"}
            custom={"-11deg"}
          ></motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && <Menu setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
