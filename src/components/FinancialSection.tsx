import { useScrollReveal } from "@/hooks/useScrollReveal";

const projections = [
  { phase: "Year 1", revenue: "800,000", scope: "Pilot Site Establishment" },
  { phase: "Year 2", revenue: "2,000,000", scope: "Market Expansion" },
  { phase: "Year 3", revenue: "5,000,000", scope: "Full Scale Operations", highlight: true },
];

export default function FinancialSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-warm-stone" aria-label="Financial Projections" ref={ref}>
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4">Projected Growth</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-pretty">
          Conservative projections based on market demand and scaling capacity.
        </p>
        <div
          className={`overflow-hidden rounded-3xl glass-card transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[400px]">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="p-5 md:p-6 font-semibold text-sm">Phase</th>
                  <th className="p-5 md:p-6 font-semibold text-sm">Target Revenue (KES)</th>
                  <th className="p-5 md:p-6 font-semibold text-sm">Impact Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {projections.map((row) => (
                  <tr key={row.phase}>
                    <td className="p-5 md:p-6 text-sm">{row.phase}</td>
                    <td className={`p-5 md:p-6 font-mono text-sm ${row.highlight ? "font-bold text-primary" : ""}`}>
                      {row.revenue}
                    </td>
                    <td className="p-5 md:p-6 text-sm text-muted-foreground">{row.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
