import { Leaf, TreePine, Warehouse, Coins } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: Leaf,
    title: "Permaculture Farming",
    text: "Mimicking natural ecosystems to grow food with minimal water and zero chemical inputs.",
    img: "/images/squash-plants.jpg",
  },
  {
    icon: TreePine,
    title: "Agroforestry",
    text: "Integrating nitrogen-fixing trees to restore soil health and provide sustainable fodder.",
    img: "/images/seedlings-nursery.jpg",
  },
  {
    icon: Warehouse,
    title: "Feedlot Livestock",
    text: "Moving from nomadic grazing to intensive, high-value livestock management systems.",
    img: "/images/solar-infrastructure.jpg",
  },
  {
    icon: Coins,
    title: "Youth & Women SACCO",
    text: "A community-owned financial vehicle providing credit and economic resilience to women entrepreneurs.",
    img: "/images/women-seedlings.jpg",
  },
];

export default function SolutionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solution" className="section-padding bg-warm-stone" aria-label="Our Solution" ref={ref}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 text-center text-balance">
          A Holistic Ecosystem for Arid Lands
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 md:mb-16 text-pretty">
          Four interconnected pillars work together to transform livelihoods and landscapes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col sm:flex-row gap-5 items-start bg-background rounded-3xl p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 120}ms`, boxShadow: "var(--shadow-glass)" }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full sm:w-28 h-28 object-cover rounded-2xl flex-shrink-0"
                loading="lazy"
              />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p.icon className="text-accent flex-shrink-0" size={20} aria-hidden="true" />
                  <h3 className="font-display text-xl md:text-2xl">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground text-pretty">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
