// eslint-disable-next-line no-unused-vars
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";

const slider1 = [
  { color: "#e3e5e7", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/wix_jky4hl.jpg" },
  { color: "#d6d7dc", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/v1753995457/maven_evumil.jpg" },
  { color: "#e3e3e3", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995458/panda_lzjwt8.jpg" },
  { color: "#21242b", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995458/decimal_eyenzi.jpg" },
  { color: "#d4e3ec", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/google_kc5ap0.jpg" },
  { color: "#e5e0e1", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/funny_k8t4mw.jpg" },
  { color: "#d7d4cf", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/c2_dtzlla.jpg" },
  { color: "#e1dad6", src: "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995456/powell_n7sxcv.jpg" },
];

const slider2 = [...slider1].reverse();

export default function Slider() {
  const container = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 100%", "end 2%"],
  });

  const x1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isSmallScreen ? 150 : 250]
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isSmallScreen ? -50 : -250]
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
              <img alt="image" src={project.src} loading="lazy" />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x1 }} className={`${styles.slider} -left-[10vh] md:-left-0`}>
        {slider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <img alt="image" src={project.src} loading="lazy" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
