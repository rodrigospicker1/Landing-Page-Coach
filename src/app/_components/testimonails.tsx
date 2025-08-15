import { TestimonialCard } from "./card/testimonial_card";
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
              { img: "/images/users/ana.jpg", name: "Ana Silva", star: 5 },
              { img: "/images/users/duda.jpg", name: "Duda", star: 4.5 },
              { img: "/images/users/justin.jpg", name: "Justin", star: 4.5 },
              { img: "/images/users/maria.jpg", name: "Maria", star: 4 },
              { img: "/images/users/simon.jpg", name: "Simon", star: 5 },
            ].map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard 
                    img_path={testimonial.img} 
                    name={testimonial.name} 
                    star={testimonial.star}
                    testimonial="Avaliação do aluno da consultoria de treinamento e dieta"
                    index={index}
                  />
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
