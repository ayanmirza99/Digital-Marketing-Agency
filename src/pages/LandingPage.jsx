import { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Slider from "../components/imageSlider/Slider";
import Services from "../components/Services";

const LandingPage = () => {
  const scrollRef = useRef(null); // for main scroll container
  const locoScrollInstance = useRef(null); // to store Locomotive instance

  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      console.log("Locomotive Scroll initialized");

      locoScrollInstance.current = scroll;
    };

    initScroll();

    // Optional: cleanup on unmount
    return () => {
      if (locoScrollInstance.current) {
        locoScrollInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Update scroll after AboutSection mounts
    if (locoScrollInstance.current) {
      setTimeout(() => {
        locoScrollInstance.current.update();
      }, 500); // slight delay to ensure DOM is ready
    }
  });

  return (
    <>
      <Navbar />
      <div id="main" data-scroll-container ref={scrollRef}>
        <HeroSection />
        <AboutSection />
        <Slider />
        <Services />
      </div>
    </>
  );
};

export default LandingPage;
