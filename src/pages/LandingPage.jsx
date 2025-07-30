import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/imageSlider/Slider";
import Services from "../components/Services";
import FAQSection from "../components/FAQSection";
import MultiStepContact from "../components/MultiStepContact";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Slider />
      <Services />
      <FAQSection />
      <MultiStepContact />
    </>
  );
};

export default LandingPage;
