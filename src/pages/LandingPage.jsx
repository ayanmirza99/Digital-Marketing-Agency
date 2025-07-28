import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/imageSlider/Slider";
import Services from "../components/Services";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Slider />
      <Services />
    </>
  );
};

export default LandingPage;
