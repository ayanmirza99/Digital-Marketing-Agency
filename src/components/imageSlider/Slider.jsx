// eslint-disable-next-line no-unused-vars
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";

const slider1 = [
  { color: "#e3e5e7", src: "c2.jpg" },
  { color: "#d6d7dc", src: "decimal.jpg" },
  { color: "#e3e3e3", src: "funny.jpg" },
  { color: "#21242b", src: "google.jpg" },
  { color: "#d4e3ec", src: "maven.jpg" },
  { color: "#e5e0e1", src: "panda.jpg" },
  { color: "#d7d4cf", src: "powell.jpg" },
  { color: "#e1dad6", src: "wix.jpg" },
];

const slider2 = [...slider1].reverse();

export default function Slider() {
  const container = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's md = 768px
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 100%", "end 40%"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isSmallScreen ? 150 : 250]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isSmallScreen ? -150 : -250]
  );

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <img alt="image" src={`/images/${project.src}`} />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <img alt="image" src={`/images/${project.src}`} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
