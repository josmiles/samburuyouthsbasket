import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24 px-5 md:px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <h3 className="font-display text-xl md:text-2xl mb-4">
            SAMBURU <span className="text-accent">YOUTHS BASKET</span>
          </h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed text-pretty">
            Turning arid land into opportunity through climate-smart agriculture, 
            youth leadership, and women's empowerment in Northern Kenya.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] text-primary-foreground/40">
            Connect
          </h4>
          <div className="space-y-3 text-sm">
            <a
              href="mailto:josephlesorogol140@gmail.com"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
            >
              <Mail size={14} aria-hidden="true" />
              josephlesorogol140@gmail.com
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Phone size={14} aria-hidden="true" />
              +254 716 267 141
            </div>
            <a
              href="https://www.linkedin.com/in/joseph-lesorogol-a98117253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
            >
              <Linkedin size={14} aria-hidden="true" />
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] text-primary-foreground/40">
            Partners
          </h4>
          <p className="text-sm text-primary-foreground/60 italic">
            In collaboration with Zuhura Impact.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 border-t border-primary-foreground/10 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/30">
        © {new Date().getFullYear()} Samburu Youths Basket. All Rights Reserved.
      </div>
    </footer>
  );
}
