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
              { img: "", name: "Natália", star: 5, testimonial: "Pensa na felicidade que eu estou, é o primeiro dia.. mas sinto que já venci a obesidade. com certeza com todo seu conhecimento, ensinamento e apoio até mesmo psicológico que você da para seus alunos!" },
              { img: "", name: "Bruna", star: 5, testimonial: "Muito a agredecer por todo esse processo de mudança interna e externa🙌🙏 Um ótimo professional!" },
              { img: "", name: "Tales", star: 5, testimonial: "Ótimo experiência! Não tive dificuldade com os treinos e percebi melhora estética e qualidade de vida desde que comecei a fazer." },
            ].map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard 
                    img_path={testimonial.img} 
                    name={testimonial.name} 
                    star={testimonial.star}
                    testimonial={testimonial.testimonial}
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
