import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  { icon: Heart, label: "Sustainability" },
  { icon: Users2, label: "Inclusivity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Target, label: "Community Ownership" },
];

import { Users2 } from "lucide-react";

export default function MissionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding" aria-label="Mission & Vision" ref={ref}>
      <div className="section-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-8">Our Purpose</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl text-accent mb-2">Mission</h3>
                <p className="text-muted-foreground text-pretty">
                  To empower Samburu youth and women through climate-smart agriculture, creating 
                  sustainable livelihoods that restore the land and uplift communities.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-accent mb-2">Vision</h3>
                <p className="text-muted-foreground text-pretty">
                  A Samburu County where arid lands thrive, youth lead innovation, women prosper 
                  economically, and communities own their future through regenerative agriculture.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl mb-6">Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.label} className="glass-card rounded-2xl p-5 flex items-center gap-3">
                  <v.icon className="text-accent flex-shrink-0" size={24} aria-hidden="true" />
                  <span className="font-semibold text-sm">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
