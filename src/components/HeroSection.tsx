export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-moran.jpg"
          alt="A Samburu Moran walking through green farmland towards the mountains"
          className="w-full h-full object-cover brightness-[0.4]"
          loading="eager"
        />
      </div>
      <div className="relative z-10 text-center px-5 max-w-5xl">
        <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
          Youth-led · Women-centered · Nature-powered
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 md:mb-8 leading-[0.95] text-balance">
          Turning Arid Land Into Opportunity
        </h1>
        <p className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 text-pretty">
          A climate-smart agricultural enterprise in Samburu County, Northern Kenya — 
          building food security, economic resilience, and environmental restoration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#invest"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-base md:text-lg hover:brightness-110 transition-all shadow-xl"
          >
            Support the Project
          </a>
          <a
            href="#solution"
            className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-foreground/20 transition-all"
          >
            Explore the Model
          </a>
        </div>
      </div>
    </section>
  );
}
