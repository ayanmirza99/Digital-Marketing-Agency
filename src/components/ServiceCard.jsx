import { motion } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({ service, index }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <motion.div
      className="rounded-2xl flex flex-col gap-2"
      onHoverStart={() => setHoveredCard("social")}
      onHoverEnd={() => setHoveredCard(null)}
      // Reveal animation on scroll
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index % 2 === 0 ? 0 : 0.2,
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Header */}
      <div className="px-4 py-3 md:p-4 rounded-2xl bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-[14px] md:text-lg text-black">{service.title}</h3>
          <div className="flex space-x-1">
            <motion.div
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor:
                  hoveredCard === "social" ? "#ef4444" : "#e5e7eb",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor:
                  hoveredCard === "social" ? "#eab308" : "#e5e7eb",
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor:
                  hoveredCard === "social" ? "#22c55e" : "#e5e7eb",
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-[60vh] rounded-2xl overflow-hidden bg-white shadow-sm">
        <motion.img
          src={service.imgURL}
          alt="Social media advertising"
          className="w-full h-full object-cover"
          animate={{
            scale: hoveredCard === "social" ? 1.1 : 1,
            filter: hoveredCard === "social" ? "blur(2px)" : "blur(0px)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
