import { AnimatePresence } from "motion/react";
import Preloader from "../components/loader/PreLoader";
import { useEffect, useState } from "react";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader words={["Contact"]} />}
      </AnimatePresence>
      <div className="h-screen w-full flex justify-center items-center">
        ContactPage
      </div>
    </main>
  );
};

export default ContactPage;
