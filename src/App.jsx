import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Navigate to={`/`} replace />} />
          <Route element={<Layout />}>
            <Route
              index
              element={
                  <LandingPage />
              }
            />
            <Route
              path="/services"
              element={
                  <ServicesPage />
              }
            />
            <Route
              path="/contact"
              element={
                  <ContactPage />
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
