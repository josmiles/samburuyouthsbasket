import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WomenSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding" aria-label="Women Empowerment" ref={ref}>
      <div className="section-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              Women Empowerment
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-6 text-balance">
              When Women Lead, Communities Thrive
            </h2>
            <div className="space-y-4 text-muted-foreground text-pretty">
              <p>
                Women are at the heart of Samburu Youths Basket. Through our Women-led SACCO, 
                they access micro-loans, save collectively, and invest in their families' futures.
              </p>
              <p>
                Our goal is <strong className="text-foreground">60% women participation</strong> across 
                all programs — from farm operations to financial leadership. Women lead planting, 
                manage seedling nurseries, and drive community outreach.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl text-accent">60%</div>
                <div className="text-xs text-muted-foreground mt-1">Participation Goal</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl text-accent">SACCO</div>
                <div className="text-xs text-muted-foreground mt-1">Women-Led</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl md:text-3xl text-accent">Income</div>
                <div className="text-xs text-muted-foreground mt-1">Generation</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/woman-planting.jpg"
              alt="Samburu woman in traditional beadwork planting seedlings"
              className="rounded-3xl w-full h-80 md:h-[500px] object-cover"
              loading="lazy"
              style={{ boxShadow: "var(--shadow-elevated)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
