import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoAnimation from "../ui/LogoAnimation";
import { RESTAURANT } from "../../data/content";

const NAV_ITEMS = [
  { label: "La Maison", href: "#about" },
  { label: "Le Menu", href: "#menu" },
  { label: "Galerie", href: "#gallery" },
  { label: "L'Expérience", href: "#atmosphere" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "bg-[#FBFBFA] shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="wrap flex items-center justify-between py-4 md:py-5">
            <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <LogoAnimation variant="navbar" />
            <span className={`font-fraunces text-sm sm:text-lg tracking-tight transition-colors duration-300 ease-in-out ${scrolled ? "text-[#22251D]" : "text-white"}`}>Restorant l'olivier</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.12em] font-space-mono transition-all duration-300 ease-in-out ${
                  scrolled ? "text-[#22251D] hover:text-[#22251D]" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <motion.a
              href={`tel:${RESTAURANT.phones[0].replace(/\s/g, "")}`}
              className={`text-xs font-space-mono px-4 py-2 rounded-full border transition-all duration-300 ease-in-out ${
                scrolled
                  ? "border-[#22251D] text-[#22251D] hover:bg-gold hover:border-gold hover:text-[#22251D]"
                  : "border-white/40 text-white hover:bg-gold hover:border-gold hover:text-[#22251D]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +216 72 286 613
            </motion.a>
          </nav>

          <button
            className={`md:hidden relative w-8 h-6 flex flex-col justify-center gap-1.5 z-50 transition-colors duration-300 ease-in-out ${
              scrolled ? "text-[#22251D]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <motion.span
              className="block h-[1.5px] w-full bg-current origin-center"
              animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-[1.5px] w-full bg-current"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block h-[1.5px] w-full bg-current origin-center"
              animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-cream z-50 flex flex-col pt-24 px-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <LogoAnimation variant="navbar" className="mb-10" />
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="font-fraunces text-3xl text-ink py-3 border-b border-ink/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={`tel:${RESTAURANT.phones[0].replace(/\s/g, "")}`}
                className="mt-8 btn btn-solid text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Appeler
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
