import { Mail, Phone, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ExternalLink from "@/components/ExternalLink";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-warm-stone" aria-label="Contact" ref={ref}>
      <div
        className={`section-container text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="font-display text-3xl md:text-5xl mb-4">Get In Touch</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-pretty">
          Ready to partner, invest, or learn more? We'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ExternalLink
            href="mailto:josephlesorogol140@gmail.com"
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
          >
            <Mail size={18} aria-hidden="true" />
            josephlesorogol140@gmail.com
          </ExternalLink>
          <ExternalLink
            href="https://wa.me/254716267141"
            showIcon
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
          >
            <Phone size={18} aria-hidden="true" />
            +254 716 267 141
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/joseph-lesorogol-a98117253/"
            showIcon
            className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
