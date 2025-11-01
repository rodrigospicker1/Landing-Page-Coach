"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Testimonials() {
  return (
    <div className="mt-50" id="testimonials">
      <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
        Depoimentos de alunos
      </div>
      
      <div className="w-full mt-20 px-4 sm:px-6 lg:px-8">
        <Carousel 
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {[
              { src: "/videos/testimonials/testimonial_01.mp4",  },
              { src: "/videos/testimonials/testimonial_02.mp4",  },
              { src: "/videos/testimonials/testimonial_03.mp4",  },
            ].map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div
                    className="w-full max-w-[300px] mx-auto aspect-[9/16] rounded-lg overflow-hidden bg-black cursor-pointer"
                  >
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                      controls
                      playsInline
                      preload="metadata"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="relative top-0 left-0 -translate-x-0" />
            <CarouselNext className="relative top-0 right-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
