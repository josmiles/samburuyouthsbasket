import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/community-planting.jpg", alt: "Community tree planting day", category: "Farm" },
  { src: "/images/woman-planting.jpg", alt: "Samburu woman planting with traditional beadwork", category: "Women" },
  { src: "/images/watermelon-harvest.jpg", alt: "Harvesting watermelon from the farm", category: "Farm" },
  { src: "/images/citrus-tree.jpg", alt: "Citrus tree bearing fruit", category: "Farm" },
  { src: "/images/tree-tomatoes.jpg", alt: "Tree tomatoes growing on the vine", category: "Farm" },
  { src: "/images/moran-farming.jpg", alt: "Moran working the green farm", category: "Farm" },
  { src: "/images/woman-watering.jpg", alt: "Woman watering crops with a watering can", category: "Women" },
  { src: "/images/women-seedlings.jpg", alt: "Women carrying seedlings for planting", category: "Women" },
  { src: "/images/seedlings-nursery.jpg", alt: "Tree seedlings in a nursery", category: "Farm" },
  { src: "/images/solar-infrastructure.jpg", alt: "Solar panels powering farm infrastructure", category: "Transformation" },
  { src: "/images/team-photo.jpg", alt: "Team members working on the farm", category: "Farm" },
  { src: "/images/farm-fencing.jpg", alt: "Fenced farm area with growing crops", category: "Transformation" },
];

const categories = ["All", "Farm", "Women", "Transformation"];

export default function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <section id="gallery" className="section-padding bg-warm-stone" aria-label="Gallery">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-5xl text-center mb-4">Gallery</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Visual stories from our fields, our people, and our progress.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="relative rounded-2xl overflow-hidden group aspect-square focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={`View: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
          role="dialog"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
