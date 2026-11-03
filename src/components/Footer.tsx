import { Mail, MessageCircle, Linkedin } from "lucide-react";
import ExternalLink from "@/components/ExternalLink";

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
          <div className="flex flex-col items-start gap-3 text-sm">
            <ExternalLink
              href="mailto:josephlesorogol140@gmail.com"
              className="w-40 gap-2 border border-primary-foreground/25 text-primary-foreground/85 px-4 py-2 rounded-full hover:bg-primary-foreground/10 hover:text-accent transition-colors"
            >
              <Mail size={16} aria-hidden="true" />
              Email Us
            </ExternalLink>
            <ExternalLink
              href="https://wa.me/254716267141"
              className="w-40 gap-2 border border-primary-foreground/25 text-primary-foreground/85 px-4 py-2 rounded-full hover:bg-primary-foreground/10 hover:text-accent transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/joseph-lesorogol-a98117253/"
              className="w-40 gap-2 border border-primary-foreground/25 text-primary-foreground/85 px-4 py-2 rounded-full hover:bg-primary-foreground/10 hover:text-accent transition-colors"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </ExternalLink>
            <p className="pt-1 text-xs text-primary-foreground/60 leading-relaxed">
              josephlesorogol140@gmail.com<br />+254 716 267 141
            </p>
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
