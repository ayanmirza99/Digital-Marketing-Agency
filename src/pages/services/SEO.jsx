import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Preloader from "../../components/loader/PreLoader";
import { seoServiceData } from "../../data/servicePageData";
import { Link } from "react-router-dom";
import FramerButton from "../../components/FramerButton";
import FramerMagnetic from "../../components/FramerMagnetic";

const SEO = ({ params }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateContent, setAnimateContent] = useState(false);

  const contentRef = useRef(null);
  const servicesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: servicesScrollProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const servicesY = useTransform(servicesScrollProgress, [0, 1], ["-5%", "5%"]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setAnimateContent(true); // allow animations
    }, 400);
  }, []);

  const serviceData = seoServiceData;

  // Variants
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const heroChild = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={[serviceData.title]} />}
      </AnimatePresence>

      <div className="min-h-screen selection:bg-[#848484] selection:text-white overflow-y-hidden z-10 mt-[15vh] mb-[5vh] w-full flex justify-center items-start p-4 md:p-6">
        <div className="w-full md:w-[80%] mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={animateContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors text-sm"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Services
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.div
            ref={contentRef}
            style={{ y }}
            variants={heroVariants}
            initial="hidden"
            animate={animateContent ? "show" : "hidden"}
            className="flex lg:flex-row flex-col justify-between items-start lg:items-center mb-[10vh]"
          >
            <div className="flex flex-col">
              <motion.h1
                variants={heroChild}
                className="text-5xl selection:bg-[#383838] selection:text-white lg:text-8xl text-black mb-4 tracking-[-0.3rem] lg:tracking-[-0.5rem] font-bold"
              >
                {serviceData.title}
              </motion.h1>
              <motion.h2
                variants={heroChild}
                className="text-2xl lg:text-4xl text-gray-700 mb-8 tracking-[-0.1rem]"
              >
                {serviceData.subtitle}
              </motion.h2>
            </div>

            <motion.div
              variants={heroChild}
              className="w-[300px] md:w-[400px] lg:max-w-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="ml-4 text-sm text-gray-600">(2016-256)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {serviceData.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Hero Taglines */}
          <motion.div
            initial="hidden"
            animate={animateContent ? "show" : "hidden"}
            variants={heroVariants}
            className="mb-[8vh]"
          >
            {serviceData.heroTaglines.map((tagline, index) => (
              <motion.h3
                key={index}
                variants={heroChild}
                className="text-xl lg:text-2xl text-gray-800 mb-2 flex gap-4 items-center font-medium"
              >
                <span className="h-3 w-3 bg-black/80 rounded-full"></span>
                {tagline}
              </motion.h3>
            ))}
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial="hidden"
            animate={animateContent ? "show" : "hidden"}
            variants={heroVariants}
            className="mb-[10vh]"
          >
            <div className="flex lg:flex-row flex-col gap-8">
              <div className="lg:w-1/3">
                <h4 className="text-3xl selection:bg-[#383838] selection:text-white lg:text-4xl text-black mb-4 font-bold tracking-[-0.1rem]">
                  SEO Solutions
                </h4>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-600 text-base leading-relaxed">
                  {serviceData.mainDescription}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={servicesRef}
            style={{ y: servicesY }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[10vh]"
          >
            {serviceData.services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="bg-white border cursor-pointer border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-white selection-none text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h5 className="text-xl font-bold selection:bg-[#383838] selection:text-white text-black">
                    {service.title}
                  </h5>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={animateContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ backgroundImage: `url(${serviceData.imgURL})` }}
            className="relative text-center bg-cover bg-center text-white rounded-lg p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h6 className="text-2xl lg:text-3xl font-bold mb-6">
                Ready to Get Started?
              </h6>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                {serviceData.cta}
              </p>
              <FramerMagnetic>
                <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get Free Audit
                </button>
              </FramerMagnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default SEO;
