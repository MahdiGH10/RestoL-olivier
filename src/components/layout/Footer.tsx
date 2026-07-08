import { RESTAURANT } from "../../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-12">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8 border-b border-cream/10">
          <img src="/logo.jpg" alt="L'Olivier" className="h-8 w-auto object-contain brightness-0 invert opacity-90" />
          <div className="flex gap-6">
            <a
              href={RESTAURANT.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors text-xs font-space-mono uppercase tracking-widest"
            >
              Facebook
            </a>
            <a
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors text-xs font-space-mono uppercase tracking-widest"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row justify-between gap-3 text-cream/50 text-xs font-space-mono uppercase tracking-wider">
          <span>© {new Date().getFullYear()} L'Olivier — Nabeul, Tunisie</span>
          <span>98 Avenue Hédi Chaker · +216 72 286 613</span>
        </div>
      </div>
    </footer>
  );
}
