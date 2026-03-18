import { CloudRain, Users, Scale, Beef } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const challenges = [
  {
    icon: CloudRain,
    title: "Climate Vulnerability",
    text: "Recurring droughts are destroying traditional pastoralist livelihoods across Samburu County.",
  },
  {
    icon: Users,
    title: "Youth Unemployment",
    text: "Thousands of Morans lack sustainable economic pathways beyond traditional pastoralism.",
  },
  {
    icon: Scale,
    title: "Women Excluded",
    text: "Women bear the burden of labor but lack financial autonomy and decision-making power.",
  },
  {
    icon: Beef,
    title: "Livestock Loss",
    text: "Traditional grazing systems are failing against rapid desertification and climate change.",
  },
];

export default function ChallengeSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="challenge" className="section-padding" aria-label="The Challenge" ref={ref}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4">The Challenge</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 md:mb-16 text-pretty">
          Samburu County faces compounding crises that demand innovative, community-driven solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, i) => (
            <div
              key={c.title}
              className={`p-6 md:p-8 glass-card rounded-3xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <c.icon className="text-accent mb-4" size={32} aria-hidden="true" />
              <h3 className="font-display text-xl md:text-2xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
