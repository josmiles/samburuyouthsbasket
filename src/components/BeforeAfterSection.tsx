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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://drive.google.com/uc?export=view&id=1cvZzNsvPfUqxKwUHX9IG0h0N5tftTPAx"
              alt="Before: barren dry land"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-foreground/80 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Before
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://drive.google.com/uc?export=view&id=1pu6oAYknHGvpQwRGANIJjAn5G62PiDdf"
              alt="After: green thriving farm"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              After
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="font-display text-2xl md:text-3xl text-center mb-3">Our Story in Motion</h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 text-pretty">
            Watch how severe drought in Samburu drove a youth-led shift toward permaculture, agroforestry, and community resilience.
          </p>
          <div className="rounded-3xl overflow-hidden aspect-video max-w-3xl mx-auto shadow-lg">
            <iframe
              src="https://drive.google.com/file/d/1IhEFt1bgotWyNK6LoF46Wk4pmCIvlRNR/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="Samburu Youths Basket Project Story"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="glass-card rounded-2xl p-5">
              <p className="text-2xl mb-2">💡</p>
              <p className="font-display text-base mb-1">The Opportunity</p>
              <p className="text-xs text-muted-foreground">An online youth enterprise program sparked the idea to address local climate and livelihood challenges.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-2xl mb-2">🌱</p>
              <p className="font-display text-base mb-1">Seed Funding Phase 1</p>
              <p className="text-xs text-muted-foreground">Secured demonstration farm land and purchased vegetable seeds — kale, spinach, onions — plus fruit trees.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-2xl mb-2">🚰</p>
              <p className="font-display text-base mb-1">Seed Funding Phase 2</p>
              <p className="text-xs text-muted-foreground">Expanded with water tanks, fencing, dry-season water purchases, and a farm caretaker.</p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <p className="text-2xl mb-2">🧠</p>
              <p className="font-display text-base mb-1">Skills Gained</p>
              <p className="text-xs text-muted-foreground">Remote project management, conflict resolution, and long-term sustainability thinking.</p>
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
