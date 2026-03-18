import { ShoppingBasket, Beef, TreePine, Wind, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const streams = [
  { icon: ShoppingBasket, title: "Crop Sales", text: "Watermelon, kale, tomatoes, and high-value vegetables for local markets." },
  { icon: Beef, title: "Livestock Sales", text: "Fattened cattle and goats through efficient feedlot management." },
  { icon: TreePine, title: "Tree Seedlings", text: "Indigenous and fruit tree seedlings for reforestation and commercial sale." },
  { icon: Wind, title: "Carbon Credits", text: "Future revenue through verified carbon sequestration programs." },
  { icon: GraduationCap, title: "Training & Demo Fees", text: "Permaculture training workshops for neighbouring communities." },
];

export default function BusinessModelSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding" aria-label="Business Model" ref={ref}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4">Revenue Streams</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-pretty">
          A diversified income model ensuring long-term sustainability and growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {streams.map((s, i) => (
            <div
              key={s.title}
              className={`glass-card rounded-3xl p-6 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <s.icon className="text-accent mx-auto mb-3" size={28} aria-hidden="true" />
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
