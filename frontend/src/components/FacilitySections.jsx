import FacilityCard from "./FacilityCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function FacilitySections({title, subtitle, facilities}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Arrow controls
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Dots state
  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-1 text-slate-600">
        {subtitle}
      </p>

      {/* Carousel viewport */}
      <div className="relative mt-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="border-2 border-blue-800 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <FacilityCard {...facility} />
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow (desktop) */}
        <button
          onClick={scrollPrev}
          className="hidden lg:flex items-center justify-center absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border"
        >
          ←
        </button>

        {/* Right Arrow (desktop) */}
        <button
          onClick={scrollNext}
          className="hidden lg:flex items-center justify-center absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border"
        >
          →
        </button>
      </div>

      {/* Pagination dots */}
      <div className="border-2 border-gray-600 flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === selectedIndex
                ? "bg-blue-600"
                : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
