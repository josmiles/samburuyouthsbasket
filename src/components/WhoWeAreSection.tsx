import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhoWeAreSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-warm-stone" aria-label="Who We Are" ref={ref}>
      <div className="section-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/community-planting.jpg"
              alt="Community members planting trees together"
              className="rounded-2xl object-cover w-full h-48 md:h-64"
              loading="lazy"
            />
            <img
              src="/images/woman-planting.jpg"
              alt="Samburu woman planting seedlings"
              className="rounded-2xl object-cover w-full h-48 md:h-64 mt-8"
              loading="lazy"
            />
            <img
              src="/images/team-photo.jpg"
              alt="Youth team working the farm together"
              className="rounded-2xl object-cover w-full h-48 md:h-64"
              loading="lazy"
            />
            <img
              src="/images/samburu-culture.jpg"
              alt="Samburu person in traditional beadwork"
              className="rounded-2xl object-cover w-full h-48 md:h-64 mt-8"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-5xl mb-6 text-balance">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground text-pretty">
              <p>
                <strong className="text-foreground">Samburu Youths Basket</strong> was born from the conviction 
                that the Morans — the warrior-age youth of the Samburu people — could transform from pastoralists 
                facing a drying landscape into pioneers of regenerative agriculture.
              </p>
              <p>
                Our team is youth-led and women-centered. We believe that when women have economic power, 
                entire communities rise. Today, women make up over 60% of our active participants, leading 
                our SACCO and driving farming operations.
              </p>
              <p>
                In collaboration with <strong className="text-foreground">Zuhura Impact</strong>, we're building 
                a replicable model that proves arid-land communities can become food secure, economically 
                resilient, and environmentally regenerative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
