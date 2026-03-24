import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

function MetricCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const count = useCountUp(value, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-accent mb-2 font-display">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">{label}</div>
    </div>
  );
}

function TextMetric({ value, label }: { value: string; label: string }) {
  const { ref, isVisible } = useScrollReveal(0.3);
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-accent mb-2 font-display">{value}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">{label}</div>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-primary" aria-label="Impact Metrics">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground text-center mb-12 md:mb-16">
          Our Impact So Far
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <MetricCard value={1200} suffix="+" label="Trees Planted" />
          <TextMetric value="Active" label="Women's SACCO" />
          <TextMetric value="Pilot" label="Permaculture Plots" />
          <TextMetric value="Growing" label="Economic Transformation" />
          <MetricCard value={60} suffix="%" label="Women Participation" />
        </div>
      </div>
    </section>
  );
}
