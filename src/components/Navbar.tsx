import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#challenge", label: "Challenge" },
  { href: "#solution", label: "Solution" },
  { href: "#impact", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
  { href: "#invest", label: "Invest" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display text-xl md:text-2xl tracking-tight text-foreground">
          SAMBURU <span className="text-accent">YOUTHS BASKET</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#invest"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-5 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#invest"
            className="mt-4 block text-center bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </a>
        </div>
      )}
    </nav>
  );
}
