import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Slider from "../components/imageSlider/Slider";
import Services from "../components/Services";
import FAQSection from "../components/FAQSection";
import MultiStepContact from "../components/MultiStepContact";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/loader/PreLoader";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const assetsLoadedRef = useRef(false);
  const minLoadingTimePassedRef = useRef(false);
  const loadingTimeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.cursor = "wait";
    document.body.style.overflow = "hidden";

    // List of all external assets to preload
    const assetUrls = [
      "https://res.cloudinary.com/dyzgzqw8z/video/upload/f_auto,q_auto:good/v1753982605/1992-153555258_small_k8lqr8.mp4",
      // "https://res.cloudinary.com/dyzgzqw8z/video/upload/f_auto,q_auto:good/v1753912260/Drip_in_water_Black_01_-_Free_Stock_Footage_fkmqr9.mp4",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995458/decimal_eyenzi.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995458/panda_lzjwt8.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/maven_evumil.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/wix_jky4hl.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/google_kc5ap0.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/funny_k8t4mw.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995457/c2_dtzlla.jpg",
      // "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_800/v1753995456/powell_n7sxcv.jpg",
      "https://res.cloudinary.com/dyzgzqw8z/image/upload/f_auto,q_auto,w_1920/v1753995456/serviceBg_zbhfke.avif",
    ];

    const loadAsset = (url) => {
      return new Promise((resolve) => {
        if (url.match(/\.(mp4|webm|mov)$/i)) {
          const video = document.createElement("video");
          video.src = url;
          video.preload = "auto";
          video.onloadeddata = () => resolve();
          video.onerror = () => resolve();
        } else {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    };

    // Minimum loading time (2 seconds)
    loadingTimeoutRef.current = setTimeout(() => {
      minLoadingTimePassedRef.current = true;
      checkLoadingComplete();
    }, 2000);

    // Start loading all assets
    const loadAllAssets = async () => {
      try {
        await Promise.all(assetUrls.map((url) => loadAsset(url)));
        assetsLoadedRef.current = true;
        checkLoadingComplete();
      } catch (error) {
        console.error("Asset loading error:", error);
        assetsLoadedRef.current = true;
        checkLoadingComplete();
      }
    };

    // Start preloading
    loadAllAssets();

    // Check if we can finish loading
    const checkLoadingComplete = () => {
      if (assetsLoadedRef.current && minLoadingTimePassedRef.current) {
        completeLoading();
      }
    };

    const completeLoading = () => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";

      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 0 });
      } else {
        window.scrollTo(0, 0);
      }
    };

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      document.body.style.cursor = "default";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {!isLoading && (
          <>
            <HeroSection />
            <AboutSection />
            <Slider />
            <Services />
            <FAQSection />
            <MultiStepContact />
          </>
        )}
      </div>
    </main>
  );
};

export default LandingPage;
