import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import Testimonials from "./components/sections/Testimonials";
import Gallery from "./components/sections/Gallery";
import Atmosphere from "./components/sections/Atmosphere";
import Contact from "./components/sections/Contact";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function onFrame(time: number) {
      lenis.raf(time);
    }

    requestAnimationFrame(onFrame);

    const rafId = { current: 0 };
    function raf(time: number) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    // Sync anchor clicks with Lenis
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        lenis.scrollTo(target, { offset: -80, duration: 1.4 });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", handleClick));

    return () => {
      cancelAnimationFrame(rafId.current);
      lenis.destroy();
      anchors.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Gallery />
        <Atmosphere />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
