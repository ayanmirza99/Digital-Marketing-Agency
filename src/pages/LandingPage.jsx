import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/imageSlider/Slider";
import Services from "../components/Services";
import FAQSection from "../components/FAQSection";
import MultiStepContact from "../components/MultiStepContact";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "../components/loader/PreLoader";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.cursor = "wait";
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";

      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 0 });
      } else {
        window.scrollTo(0, 0);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <HeroSection />
      <AboutSection />
      <Slider />
      <Services />
      <FAQSection />
      <MultiStepContact />
    </main>
  );
};

export default LandingPage;
