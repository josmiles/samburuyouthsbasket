import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  "Solar-powered Drip Irrigation Infrastructure",
  "10-Acre Farm Expansion & Fencing",
  "Livestock Feedlot Pilot Facility",
  "SACCO Seed Capital for Women Entrepreneurs",
  "Permaculture Training Programs",
];

export default function InvestSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="invest" className="section-padding" aria-label="Investment" ref={ref}>
      <div
        className={`section-container bg-primary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="relative z-10 max-w-2xl">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Investment Opportunity
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-4">
            The Investment Ask
          </h2>
          <p className="text-2xl md:text-3xl text-accent font-display mb-8 md:mb-12">
            KES 3,000,000
          </p>
          <ul className="space-y-3 mb-10 md:mb-12" role="list">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-primary-foreground/80 text-sm md:text-base">
                <Check className="text-accent flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:josephlesorogol140@gmail.com"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-center hover:brightness-110 transition-all"
            >
              Fund a Plot
            </a>
            <a
              href="https://wa.me/254716267141"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground text-foreground px-8 py-4 rounded-full font-bold text-center hover:bg-secondary transition-all"
            >
              WhatsApp Inquiries
            </a>
          </div>
        </div>
        <img
          src="/images/moran-farming.jpg"
          alt=""
          className="absolute right-0 bottom-0 w-1/2 h-full object-cover opacity-15 hidden lg:block"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}
