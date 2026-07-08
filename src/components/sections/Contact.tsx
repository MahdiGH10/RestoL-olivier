import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import ShimmerButton from "../ui/ShimmerButton";
import { RESTAURANT } from "../../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-ink text-cream">
      <div className="wrap">
        <div className="grid md:grid-cols-3 gap-12 md:gap-14">
          <ScrollReveal>
            <div>
              <h3 className="font-space-mono text-xs uppercase tracking-[0.12em] text-olive-soft mb-5 font-normal">
                Adresse
              </h3>
              <p className="text-[15.5px] text-cream/80 leading-relaxed">
                {RESTAURANT.address.street}
                <br />
                {RESTAURANT.address.city} {RESTAURANT.address.postal}, {RESTAURANT.address.country}
              </p>
              <motion.a
                href={RESTAURANT.address.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-cream/60 hover:text-gold transition-colors font-space-mono uppercase tracking-wider"
                whileHover={{ x: 4 }}
              >
                Voir sur Google Maps →
              </motion.a>

              <div className="mt-8">
                <ShimmerButton href={`tel:${RESTAURANT.phones[0].replace(/\s/g, "")}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Appeler pour réserver
                </ShimmerButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-space-mono text-xs uppercase tracking-[0.12em] text-olive-soft mb-5 font-normal">
                Contact
              </h3>
              {RESTAURANT.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block text-[15.5px] text-cream/80 hover:text-gold transition-colors mb-2 no-underline"
                >
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${RESTAURANT.email}`}
                className="block text-[15.5px] text-cream/80 hover:text-gold transition-colors mb-6 no-underline"
              >
                {RESTAURANT.email}
              </a>

              <div className="flex gap-5 mt-5">
                <a
                  href={RESTAURANT.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold transition-colors text-xs font-space-mono uppercase tracking-widest"
                >
                  Facebook
                </a>
                <a
                  href={RESTAURANT.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold transition-colors text-xs font-space-mono uppercase tracking-widest"
                >
                  Instagram
                </a>
              </div>

              <p className="mt-4 text-sm text-cream/50">
                Cartes bancaires, espèces et sans contact acceptés.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-space-mono text-xs uppercase tracking-[0.12em] text-olive-soft mb-5 font-normal">
                Horaires
              </h3>
              <div className="font-space-mono text-xs tracking-wide text-olive-soft mb-3 uppercase">
                {RESTAURANT.hours.label}
              </div>
              <div className="flex justify-between max-w-[240px] text-[15px] text-cream/75 py-1 border-b border-cream/10">
                <span>Déjeuner</span>
                <span>{RESTAURANT.hours.lunch.start} – {RESTAURANT.hours.lunch.end}</span>
              </div>
              <div className="flex justify-between max-w-[240px] text-[15px] text-cream/75 py-1">
                <span>Dîner</span>
                <span>{RESTAURANT.hours.dinner.start} – {RESTAURANT.hours.dinner.end}</span>
              </div>
              <p className="mt-5 text-xs text-cream/50 leading-relaxed">
                Service midi et soir. Réservation recommandée.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {RESTAURANT.features.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] font-space-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-cream/15 text-cream/60"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-12 rounded-sm overflow-hidden shadow-lg h-[280px] md:h-[340px]">
            <iframe
              src="https://maps.google.com/maps?q=36.4525299,10.7345809&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L'Olivier Nabeul"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
