import ScrollReveal from "../ui/ScrollReveal";
import WordFadeIn from "../ui/WordFadeIn";
import CardHoverEffect from "../ui/CardHoverEffect";
import { ATMOSPHERE } from "../../data/content";

const icons = {
  service: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 20c4-6 12-6 16 0" />
      <circle cx="12" cy="8" r="4.2" />
    </svg>
  ),
  hours: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  cuisine: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M3 10l9-6 9 6-9 6-9-6z" />
      <path d="M7 12v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
    </svg>
  ),
};

export default function Atmosphere() {
  return (
    <section id="atmosphere" className="py-28 md:py-36 bg-cream">
      <div className="wrap">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-wood" />
            <span className="font-space-mono text-xs tracking-[0.18em] uppercase text-wood">
              L'Expérience
            </span>
          </div>
          <h2 className="font-fraunces text-[clamp(30px,4.4vw,44px)] max-w-[600px] leading-tight">
            <WordFadeIn text="Ce que l'on vient chercher, ici" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {ATMOSPHERE.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <CardHoverEffect>
                <div className="text-wood mb-5">
                  {icons[item.icon as keyof typeof icons]}
                </div>
                <h3 className="font-fraunces text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-ink/70 font-light leading-relaxed">{item.desc}</p>
              </CardHoverEffect>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
