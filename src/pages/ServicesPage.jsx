import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Preloader from "../components/loader/PreLoader";
import { useEffect, useState, useRef } from "react";
import { serviceCards } from "../data/servicePageData";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cardsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "5%"]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={["Services"]} />}
      </AnimatePresence>
      <div className="min-h-screen overflow-y-hidden z-10 mt-[25vh] mb-[10vh] w-full flex justify-center items-center p-4 md:p-6">
        <div className="w-full md:w-[80%] mx-auto">
          {/* Header Section */}
          <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center mb-[15vh]">
            <div className="flex">
              <h1 className="text-6xl lg:text-9xl text-black mb-8 tracking-[-0.3rem] lg:tracking-[-0.5rem]">
                Services
              </h1>
            </div>

            <div className="w-[300px] md:w-[400px] lg:max-w-md">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="ml-4 text-sm text-gray-600">(2016-256)</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We've helped businesses across industries achieve their goals.
                Here are some of our recent projects.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <motion.div
            ref={cardsRef}
            style={{ y }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {serviceCards.map((service, index) => (
              <Link to={service.detailPageURL} key={index}>
                <ServiceCard service={service} index={index} />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
