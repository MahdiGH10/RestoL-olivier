import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import WordFadeIn from "../ui/WordFadeIn";
import { MENU_CATEGORIES } from "../../data/content";

const dishStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const dishItem = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Menu() {
  return (
    <section id="menu" className="relative py-28 md:py-36 bg-olive-dark text-cream overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,246,237,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,246,237,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="wrap relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-olive-soft" />
            <span className="font-space-mono text-xs tracking-[0.18em] uppercase text-olive-soft">
              Le Menu
            </span>
          </div>
          <h2 className="font-fraunces text-[clamp(30px,4.4vw,44px)] text-cream leading-tight">
            <WordFadeIn text="De la mer au terroir" />
          </h2>
          <p className="text-cream/60 font-light text-[15px] max-w-[56ch] mt-3">
            Un aperçu des spécialités qui font la réputation de la maison — carte complète et
            suggestions du jour présentées à table.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-14 mt-14">
          {MENU_CATEGORIES.map((cat) => (
            <ScrollReveal key={cat.id} delay={0.1}>
              <div>
                <h3 className="font-fraunces text-xl text-gold mb-6 flex items-baseline gap-3">
                  <span className="font-space-mono text-xs text-cream/40 font-normal">
                    {String(MENU_CATEGORIES.indexOf(cat) + 1).padStart(2, "0")}
                  </span>
                  {cat.name}
                </h3>
                <motion.div
                  variants={dishStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {cat.items.map((dish) => (
                    <motion.div key={dish.name} variants={dishItem} className="group">
                      <div className="flex items-baseline gap-3 py-3.5 border-b border-cream/10">
                        <span className="font-medium text-[15px] whitespace-nowrap">
                          {dish.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-cream/20 min-w-[20px]" />
                        <span className="font-space-mono text-xs text-olive-soft whitespace-nowrap">
                          {dish.price}
                        </span>
                      </div>
                      {dish.desc && (
                        <p className="text-xs text-cream/50 font-light mt-1.5 pb-2 max-w-[42ch]">
                          {dish.desc}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <motion.p
          className="mt-10 text-sm text-cream/45 italic font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Carte détaillée et tarifs communiqués sur place ou par téléphone au +216 72 286 613.
        </motion.p>
      </div>
    </section>
  );
}
