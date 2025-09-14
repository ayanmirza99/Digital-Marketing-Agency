/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ setIsOpen }) => {
  const children = {
    hidden: {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    show: (i) => ({
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        duration: 0.6,
        ease: [0.11, 0.325, 0.16, 0.95],
        delay: Math.random() * (i / 50),
      },
    }),
    exit: (i) => ({
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      transition: {
        ease: [0.645, 0.045, 0.335, 0.8],
        delay: Math.random() * (i / 50),
        duration: 0.6,
      },
    }),
  };

  const navLink = {
    hidden: {
      y: "-100%",
    },
    show: {
      y: 0,
      transition: {
        ease: "easeOut",
        delay: 0.2,
        duration: 0.4,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  return (
    <div className="w-screen h-screen overflow-hidden fixed inset-0 z-30">
      <div className="w-screen h-screen overflow-hidden fixed inset-0 z-30 flex">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <motion.div
              variants={children}
              initial="hidden"
              animate="show"
              exit="exit"
              custom={i}
              className="flex-1 h-full bg-[#fff] scale-x-[1.01] origin-left"
              key={i}
            ></motion.div>
          ))}
      </div>

      <section className="w-full h-full selection:bg-[#383838] selection:text-white absolute inset-0 flex justify-center md:text-[2rem] text-[1.5rem] items-center z-40">
        <ul className="w-[900px] flex items-center flex-col leading-none">
          <li className="overflow-hidden">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Link
                className="text-[2em] tracking-[-0.2rem] font-extralight text-black transition-colors duration-100 ease-in hover:text-gray-800"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li className="overflow-hidden">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Link
                className="text-[2em] tracking-[-0.2rem] font-extralight text-black transition-colors duration-100 ease-in hover:text-gray-800"
                to="/services"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </motion.div>
          </li>
          <li className="overflow-hidden">
            <motion.div
              variants={navLink}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Link
                className="text-[2em] tracking-[-0.2rem] font-extralight text-black transition-colors duration-100 ease-in hover:text-gray-800"
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Menu;
