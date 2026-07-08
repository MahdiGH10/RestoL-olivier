import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import Marquee from "../ui/Marquee";
import { TESTIMONIALS } from "../../data/content";

function Stars({ count }: { count: number }) {
  return (
    <span className="text-gold text-xs tracking-[0.15em]">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

function ReviewCard({ quote, author, stars }: { quote: string; author: string; source: string; stars: number }) {
  return (
    <div className="w-[380px] shrink-0 rounded-[4px] bg-cream p-7 shadow-[0_8px_24px_rgba(38,36,28,0.06)]">
      <Stars count={stars} />
      <p className="font-fraunces italic text-[15px] text-ink/85 leading-relaxed mt-2 mb-4 line-clamp-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="font-space-mono text-[11px] tracking-wider text-wood uppercase">
        {author}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const mid = Math.ceil(TESTIMONIALS.length / 2);

  return (
    <section className="py-24 md:py-32 bg-cream-card/50 overflow-hidden">
      <div className="wrap">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-wood" />
            <span className="font-space-mono text-xs tracking-[0.18em] uppercase text-wood">
              Ils nous recommandent
            </span>
          </div>
          <h2 className="font-fraunces text-[clamp(30px,4.4vw,44px)] max-w-[600px] leading-tight">
            Ce que nos convives en disent
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-6">
          <div className="relative" style={{ maskImage: "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)" }}>
            <Marquee speed={30} direction="left">
              {TESTIMONIALS.slice(0, mid).map((t, i) => (
                <ReviewCard key={i} {...t} />
              ))}
            </Marquee>
          </div>

          <div className="relative" style={{ maskImage: "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)" }}>
            <Marquee speed={30} direction="right">
              {TESTIMONIALS.slice(mid).map((t, i) => (
                <ReviewCard key={i} {...t} />
              ))}
            </Marquee>
          </div>
        </div>

        <motion.p
          className="text-center mt-8 text-xs text-ink/40 font-space-mono uppercase tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          4.4 ★ Google · #2 TripAdvisor · 4.5 ★ Restaurant Guru
        </motion.p>
      </div>
    </section>
  );
}
