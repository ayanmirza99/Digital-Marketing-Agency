import { Plus, Star } from "lucide-react";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const Testemonials = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });

  const slideup = {
    initial: { y: "100%" },
    open: (i) => ({ y: 0, transition: { duration: 0.5, delay: i * 0.02 } }),
    closed: { y: "100%" },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={container} className="min-h-screen selection:bg-[#383838] selection:text-white w-full p-6 flex">
      <div className="w-full mt-[10vh] flex flex-col">
        <div className="flex flex-col gap-2 md:gap-6 lg:gap-0 lg:flex-row items-start">
          <div className="flex items-center mt-4 gap-2">
            <div className="w-6 h-6 flex items-center pb-[2px] rounded-full justify-center text-xl bg-black text-white font-semibold">
              +
            </div>
            <p>Testemonials</p>
          </div>
          <div className="flex flex-1 overflow-hidden justify-center font-extralight lg:ml-[-9vw] text-[16vw] sm:text-9xl tracking-tighter md:tracking-[-0.7rem]">
            {"Experiences.".split("").map((letter, index) => (
              <span key={index} className={`mask relative inline-flex`}>
                <motion.span
                  custom={index}
                  variants={slideup}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:gap-2 mt-[4vh] md:mt-[10vh] lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {/* First Card */}
          <motion.div
            className="w-[95%] h-[60vh] bg-white shadow-lg px-4 pt-8 pb-6 rounded-xl flex flex-col justify-between"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            whileHover="hover"
            variants={{ ...cardVariants, ...hoverVariants }}
          >
            <div className="flex items-start gap-2 w-full h-full">
              <div className="flex items-end justify-center gap-1 w-[40%]">
                <h1 className="text-6xl tracking-tighter font-semibold">4.9</h1>
                <h1 className="text-xl text-gray-700 tracking-tighter">/5</h1>
              </div>
              <div className="w-[60%] leading-tight text-gray-500">
                We've delivered{" "}
                <span className="text-gray-800">350+ projects</span> that help
                companies generate real results.
              </div>
            </div>
            <div className="flex flex-col gap-8 px-4 pb-1">
              <h1 className="text-2xl">Amplify™</h1>
            </div>
            <div className="w-full flex justify-between items-center pl-4">
              <div className="w-1/2 flex">
                <motion.div
                  className="w-8 h-8 rounded-full border-2 -ml-2 border-white overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1739553178/man-1_jvkfct.png"
                    }
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-8 h-8 rounded-full border-2 -ml-2 border-white overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1739553178/woman-1_tppi49.png"
                    }
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-8 h-8 rounded-full border-2 -ml-2 border-white overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1739553177/man-2_ylpsqd.png"
                    }
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-8 h-8 rounded-full border-2 -ml-2 border-white overflow-hidden"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1738877861/ox5mmuqqfrkpddbw9ixo.png"
                    }
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="w-1/2 flex flex-col gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Star
                        height={16}
                        width={16}
                        color="#efbf04"
                        fill="#efbf04"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="text-[12px] tracking-tighter">
                  Trusted by{" "}
                  <span className="text-gray-700">clients nationwide</span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <motion.button
                className="w-full h-[50px] mt-5 rounded-full bg-black text-white"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#333",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Leave a review
              </motion.button>
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="w-[95%] flex flex-col gap-2"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            whileHover="hover"
            variants={{ ...cardVariants, ...hoverVariants }}
          >
            <motion.div
              className="flex items-center p-4 bg-white justify-between border-gray-100 rounded-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="h-12 w-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1739553178/man-1_jvkfct.png"
                    }
                    alt="Omega Vision Center"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Omega Vision Center
                  </h3>
                  <p className="text-gray-500 text-sm">Customer</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial text */}
            <motion.div
              className="bg-white p-6 h-max min-h-[60vh] md:max-h-[50vh] md:min-h-[50vh] shadow-sm rounded-lg flex flex-col justify-between"
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Star
                        height={12}
                        width={12}
                        color="#efbf04"
                        fill="#efbf04"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Animate Plus on hover */}
                <motion.div
                  className="h-8 w-8 text-gray-400"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus />
                </motion.div>
              </div>
              <motion.p
                className="text-gray-900 text-[1.4rem] text-left leading-[120%]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Working with Amplify was a game-changer for our e-commerce
                store. Their redesign and targeted ad campaigns boosted our
                conversion rate by 68% and doubled monthly revenue in just four
                months.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Third Card */}
          <motion.div
            className="w-[95%] flex flex-col gap-2"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            whileHover="hover"
            variants={{ ...cardVariants, ...hoverVariants }}
          >
            <motion.div
              className="bg-white p-6 h-max min-h-[60vh] md:min-h-[50vh] md:max-h-[50vh] shadow-sm rounded-lg flex flex-col justify-between"
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Star
                        height={12}
                        width={12}
                        color="#efbf04"
                        fill="#efbf04"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Animate Plus on hover */}
                <motion.div
                  className="h-8 w-8 text-gray-400"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus />
                </motion.div>
              </div>
              <motion.p
                className="text-gray-900 text-[1.4rem] text-left leading-[120%]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                We were searching for business growth experts who actually
                deliver, and Amplify exceeded expectations. They helped us scale
                with a full-funnel strategy that increased qualified leads by
                70%.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex items-center p-4 bg-white justify-between border-gray-100 rounded-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="h-12 w-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1738877861/ox5mmuqqfrkpddbw9ixo.png"
                    }
                    alt="Omega Vision Center"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Omega Vision Center
                  </h3>
                  <p className="text-gray-500 text-sm">Customer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Fourth Card */}
          <motion.div
            className="w-[95%] flex flex-col gap-2"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            whileHover="hover"
            variants={{ ...cardVariants, ...hoverVariants }}
          >
            <motion.div
              className="flex items-center p-4 bg-white justify-between border-gray-100 rounded-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="h-12 w-12 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1739553178/woman-1_tppi49.png"
                    }
                    alt="Omega Vision Center"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Foresight Media
                  </h3>
                  <p className="text-gray-500 text-sm">Customer</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial text */}
            <motion.div
              className="bg-white p-6 h-max min-h-[60vh] md:max-h-[50vh] md:min-h-[50vh] shadow-sm rounded-lg flex flex-col justify-between"
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Star
                        height={12}
                        width={12}
                        color="#efbf04"
                        fill="#efbf04"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Animate Plus on hover */}
                <motion.div
                  className="h-8 w-8 text-gray-400"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus />
                </motion.div>
              </div>
              <motion.p
                className="text-gray-900 text-[1.4rem] text-left leading-[120%]"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                If you're looking for the top SEO company in the U.S., Amplify
                is it. They got us ranking on page one for competitive keywords
                in under 90 days, and organic traffic has more than doubled.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
