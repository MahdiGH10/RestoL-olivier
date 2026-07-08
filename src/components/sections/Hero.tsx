import { motion } from "framer-motion";
import ShimmerButton from "../ui/ShimmerButton";
import { RESTAURANT } from "../../data/content";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/40" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(250,246,237,0.025) 0px, rgba(250,246,237,0.025) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="wrap relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.3 },
            },
          }}
        >
          <motion.div className="flex items-center gap-3 mb-5" variants={fadeUp}>
            <span className="block w-8 h-[1px] bg-olive-soft" />
            <span className="font-space-mono text-xs tracking-[0.18em] uppercase text-olive-soft">
              Nabeul · Cap Bon, Tunisie
            </span>
          </motion.div>

          <h1 className="font-fraunces text-[clamp(48px,8vw,88px)] leading-[0.96] text-cream max-w-[800px]">
            <span className="block">Table</span>
            <span className="block text-gold">d'exception</span>
            <span className="block text-cream">face au Cap Bon</span>
          </h1>

          <motion.p
            className="text-cream/85 font-light text-[17px] max-w-[460px] mt-5 leading-relaxed"
            variants={fadeUp}
          >
            {RESTAURANT.tagline}
          </motion.p>

          <motion.div className="flex flex-wrap gap-3.5 mt-10" variants={fadeUp}>
            <ShimmerButton href={`tel:${RESTAURANT.phones[0].replace(/\s/g, "")}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Réserver une table
            </ShimmerButton>

            <motion.a
              href="#menu"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-cream/35 text-cream text-sm tracking-wide transition-all"
              whileHover={{ scale: 1.03, borderColor: "rgba(250,246,237,0.7)" }}
              whileTap={{ scale: 0.97 }}
            >
              Découvrir le menu
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3.5 mt-12 text-cream/60 text-xs"
            variants={fadeUp}
          >
            <span className="font-fraunces text-xl font-semibold text-cream">
              {RESTAURANT.ratings.google.score}/{RESTAURANT.ratings.google.max}
            </span>
            <span className="w-px h-4 bg-cream/20" />
            <span>avis Google · #2 sur {RESTAURANT.ratings.tripadvisor.total} restaurants à Nabeul</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
