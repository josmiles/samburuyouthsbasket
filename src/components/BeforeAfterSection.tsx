import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function BeforeAfterSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding" aria-label="Transformation" ref={ref}>
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4">Transformation</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-pretty">
          From barren arid land to thriving permaculture plots — see the power of climate-smart agriculture.
        </p>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/before-dry-land.webp"
              alt="Before: dry arid land with women tilling soil"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-foreground/80 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Before
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/after-green-farm.webp"
              alt="After: lush green vegetation and growing trees"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              After
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="font-display text-lg mb-1">Mulching</p>
            <p className="text-xs text-muted-foreground">Retaining moisture through organic ground cover</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="font-display text-lg mb-1">Water Troughs</p>
            <p className="text-xs text-muted-foreground">Efficient water collection for livestock</p>
          </div>
          <div className="glass-card rounded-2xl p-5 text-center">
            <p className="font-display text-lg mb-1">Drip Irrigation</p>
            <p className="text-xs text-muted-foreground">Solar-powered precision watering systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
