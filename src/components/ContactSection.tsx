import { Mail, MessageCircle, Linkedin } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ExternalLink
            href="mailto:josephlesorogol140@gmail.com"
            className="w-full sm:w-auto justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold shadow-sm hover:brightness-110 transition-all"
          >
            <Mail size={18} aria-hidden="true" />
            Email Us
          </ExternalLink>
          <ExternalLink
            href="https://wa.me/254716267141"
            className="w-full sm:w-auto justify-center gap-2 bg-[#25D366] text-[#073B2A] px-7 py-3.5 rounded-full font-bold shadow-sm hover:brightness-110 transition-all"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/joseph-lesorogol-a98117253/"
            className="w-full sm:w-auto justify-center gap-2 bg-[#0A66C2] text-white px-7 py-3.5 rounded-full font-bold shadow-sm hover:brightness-110 transition-all"
          >
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
