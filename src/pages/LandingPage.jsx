import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/imageSlider/Slider";
import Services from "../components/Services";
import FAQSection from "../components/FAQSection";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Slider />
      <Services />
      <FAQSection />
    </>
  );
};

export default LandingPage;
