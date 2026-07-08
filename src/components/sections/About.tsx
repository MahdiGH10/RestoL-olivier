import ScrollReveal from "../ui/ScrollReveal";
import WordFadeIn from "../ui/WordFadeIn";
import AnimatedCounter from "../ui/AnimatedCounter";
import { RESTAURANT } from "../../data/content";

const stats = [
  { to: RESTAURANT.ratings.google.score, suffix: `/5`, decimals: 1, label: "Note Google" },
  { to: 2, suffix: "", decimals: 0, prefix: "#", label: "TripAdvisor Nabeul" },
  { to: 512, suffix: "", decimals: 0, label: "Avis Restaurant Guru" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="wrap">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-wood" />
            <span className="font-space-mono text-xs tracking-[0.18em] uppercase text-wood">
              La Maison
            </span>
          </div>
          <h2 className="font-fraunces text-[clamp(30px,4.4vw,44px)] max-w-[640px] leading-tight">
            <WordFadeIn text="Une salle intime, pensée pour l'exclusivité" />
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[0.85fr_1fr] gap-14 items-start mt-14">
          <ScrollReveal>
            <p className="text-[17px] text-ink/80 max-w-[48ch] leading-[1.85]">
              Installé avenue Hédi Chaker, L'Olivier a fait le choix d'une salle à taille humaine
              plutôt que d'un grand espace ouvert. Ce format resserré préserve le calme et la
              discrétion, et permet à l'équipe en salle de veiller sur chaque table sans jamais
              se faire remarquer.
            </p>
            <p className="text-[17px] text-ink/80 max-w-[48ch] leading-[1.85] mt-5">
              Le décor sobre et élégant mêle bois, nappes en lin, et un éclairage chaleureux qui
              met en valeur une cuisine raffinée, mariage de la tradition tunisienne et du
              savoir-faire français.
            </p>

            <div className="flex gap-10 md:gap-14 mt-10 flex-wrap">
              {stats.map((s) => (
                <div key={s.label}>
                  <b className="block font-fraunces text-4xl font-semibold text-olive">
                    {s.prefix || ""}
                    <AnimatedCounter to={s.to} suffix={s.suffix} decimals={s.decimals} />
                  </b>
                  <span className="font-space-mono text-[11px] tracking-[0.08em] uppercase text-ink/55">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative bg-cream-card rounded-[4px] p-10 md:p-11 shadow-[0_24px_48px_rgba(38,36,28,0.10)]">
              <span className="font-fraunces text-7xl text-gold/50 absolute top-2 left-5 leading-none select-none">
                &ldquo;
              </span>
              <p className="font-fraunces italic text-xl leading-relaxed relative z-10 mt-7 mb-6">
                Un service attentif, une salle où chaque table garde sa part d'intimité, et une
                cuisine qui fait dialoguer la mer et le terroir.
              </p>
              <div className="font-space-mono text-xs tracking-wider text-wood uppercase">
                — L'esprit de la maison
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
