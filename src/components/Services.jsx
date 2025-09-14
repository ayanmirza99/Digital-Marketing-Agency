// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import FramerMagnetic from "./FramerMagnetic";

const servicesData = [
  {
    id: "001",
    title: "Web design and development",
    description:
      "Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.",
    image:
      "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995458/decimal_eyenzi.jpg",
    categories: ["UI/UX Design", "WordPress", "Scalable Web", "6+"],
    isExpanded: true,
  },
  {
    id: "002",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence and reach your target audience effectively.",
    image:
      "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995458/panda_lzjwt8.jpg",
    categories: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    isExpanded: false,
  },
  {
    id: "003",
    title: "Google Ads",
    description:
      "Strategic Google Ads campaigns designed to maximize your ROI and drive qualified traffic to your business.",
    image:
      "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995456/powell_n7sxcv.jpg",
    categories: ["PPC", "Campaign Management", "Optimization", "Reporting"],
    isExpanded: false,
  },
  {
    id: "004",
    title: "Brand Identity",
    description:
      "Complete brand identity solutions including logo design, brand guidelines, and visual identity systems.",
    image:
      "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/maven_evumil.jpg",
    categories: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Print Design",
    ],
    isExpanded: false,
  },
];

const Services = () => {
  const [services, setServices] = useState(servicesData);

  const toggleService = (id) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, isExpanded: !service.isExpanded }
          : { ...service, isExpanded: false }
      )
    );
  };

  return (
    <div className="h-full selection:bg-[#383838] selection:text-white w-full flex justify-center items-center p-1 relative">
      {/* Background layer with noise effect */}
      <div className="absolute flex justify-center rounded-xl items-center inset-0 overflow-hidden">
        <div className="servicesContainer w-full h-full rounded-xl m-1 md:m-2">
          <svg
            style={{
              display: "none",
              position: "absolute",
              width: 0,
              height: 0,
            }}
          >
            <filter
              id="nnnoise-filter"
              x="0"
              y="0"
              width="100%"
              height="100%"
              filterUnits="userSpaceOnUse"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.6"
                numOctaves="1"
                seed="3"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.06 0"
              />
              <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
            </filter>
          </svg>
        </div>
      </div>

      {/* Content layer (above background) */}
      <div className="text-white relative z-10 w-full rounded-xl p-8">
        <div className="w-full mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-medium">+ What we do</span>
            </div>
            <div className="ml-auto w-full md:w-[71%] flex items-baseline gap-4">
              <h1 className="text-6xl md:text-8xl tracking-[-0.4rem] font-extralight">
                Services.
              </h1>
              <span className="text-2xl text-gray-500">
                ({services.length})
              </span>
            </div>
          </div>

          {/* Accordion Items */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index} className="">
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-8 flex items-center"
                >
                  <div className="flex gap-4 md:gap-0 w-full items-center justify-between">
                    <div className="text-gray-500 font-bold text-lg">
                      ({service.id})
                    </div>
                    <div className="ml-auto w-full md:w-[70%]">
                      <h2 className="text-xl justify-end md:text-4xl text-white font-extralight text-left">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {service.isExpanded ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* Expanded Content with Animation */}
                <AnimatePresence initial={false}>
                  {service.isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden ml-auto w-full md:w-[70%] border-gray-800 last:border-b"
                    >
                      <div className="pb-8">
                        <div className="flex flex-col md:flex-row flex-wrap gap-8 items-start">
                          {/* Image */}
                          <div className="flex md:flex-row flex-col gap-6">
                            <div>
                              <img
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                loading="lazy"
                                className="w-full md:w-80 h-40 md:h-36 object-cover rounded-lg"
                              />
                            </div>

                            {/* Description */}
                            <div>
                              <p className="text-gray-300 text-lg w-full md:w-[80%] leading-relaxed md:mb-6">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Categories */}
                          <div className="flex-shrink-0 ml-auto -mt-4">
                            <div className="text-right md:text-left">
                              <p className="text-gray-500 text-sm mb-3">
                                Categories
                              </p>
                              <div className="flex flex-wrap gap-2 justify-end">
                                {service.categories.map((category, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                                  >
                                    {category}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="ml-auto w-full md:w-[71%] my-12">
            <FramerMagnetic>
              <button className="w-max px-6 py-2 bg-white text-black text-lg rounded-full">
                Get Started
              </button>
            </FramerMagnetic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
