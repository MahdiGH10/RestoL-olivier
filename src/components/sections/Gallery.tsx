import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import WordFadeIn from "../ui/WordFadeIn";
import { GALLERY_IMAGES } from "../../data/content";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-cream">
      <div className="wrap">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-wood" />
            <span className="font-space-mono text-xs tracking-[0.18em] uppercase text-wood">
              Galerie
            </span>
          </div>
          <h2 className="font-fraunces text-[clamp(30px,4.4vw,44px)] max-w-[600px] leading-tight">
            <WordFadeIn text="L'ambiance en images" />
          </h2>
        </ScrollReveal>

        <div className="columns-2 md:columns-3 gap-4 mt-14">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={img.id} delay={i * 0.08}>
              <motion.button
                className="w-full mb-4 overflow-hidden rounded-sm block cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(i)}
                style={{ outline: "none" }}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-all duration-500"
                  whileHover={{ scale: 1.08 }}
                  loading="lazy"
                />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-cream/70 hover:text-cream text-3xl z-10 cursor-pointer"
              onClick={() => setSelected(null)}
              whileHover={{ scale: 1.1 }}
              aria-label="Fermer"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.img
              key={selected}
              src={GALLERY_IMAGES[selected].src}
              alt={GALLERY_IMAGES[selected].alt}
              className="max-h-[85vh] max-w-full object-contain rounded-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              <motion.button
                className="p-2.5 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected((selected! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
                }}
                aria-label="Précédent"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>
              <motion.button
                className="p-2.5 rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected((selected! + 1) % GALLERY_IMAGES.length);
                }}
                aria-label="Suivant"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
