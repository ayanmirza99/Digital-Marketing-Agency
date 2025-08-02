import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import ServicesPage from "./pages/ServicesPage";
import PageTransition from "./components/PageTransition";
import ContactPage from "./pages/ContactPage";

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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Navigate to={`/`} replace />} />
        <Route element={<Layout />}>
          <Route
            index
            element={
              // <PageTransition>
                <LandingPage />
              // </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
