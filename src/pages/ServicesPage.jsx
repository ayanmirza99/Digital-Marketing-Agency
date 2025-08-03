import { AnimatePresence } from "motion/react";
import Preloader from "../components/loader/PreLoader";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={["Services"]} />}
      </AnimatePresence>
      <div className="h-screen w-full flex justify-center items-center">
        ServicesPage
      </div>
    </main>
  );
};

export default ServicesPage;
