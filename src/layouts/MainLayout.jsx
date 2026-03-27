import { useState, useEffect } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  const [progress, setProgress] = useState(0);

  // Scroll Velocity Physics
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Calculate subtle elastic distortion based on pixel scroll speed
  const scaleY = useTransform(smoothVelocity, [-2000, 0, 2000], [1.02, 1, 1.02]);
  const skewY = useTransform(smoothVelocity, [-2000, 0, 2000], [-0.5, 0, 0.5]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      <Navbar />

      {/* No padding/horizontal constraints — sections handle their own layout */}
      <motion.main 
        className="space-y-0 origin-center"
        style={{ scaleY, skewY }}
      >
        {children}
      </motion.main>

      <Footer />
    </>
  );
}
