import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BenefitCard } from "./card/benefit_card";
import { TestimonialCard } from "./card/testimonial_card";

export function Benefits() {
  return (
    <div id="benefits">
      <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
        Benefícios
      </div>

      <div className="flex justify-center mt-10 sm:px-6">
        <iframe
          width="500"
          height="281"
          src="https://www.youtube.com/embed/wuxNoxZQo4k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl shadow-lg"
        ></iframe>
      </div>

      <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
        <Carousel 
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {[
              { img: "/images/muscle.png", name: "Avaliação individual", description: "Avaliação personalizada para todos os indivíduos da consultoria" },
              { img: "/images/form.png", name: "Testes de hapitidão", description: "Testes presenciais com equipamentos de alta tecnologia para quem é de Itajaí, Balneário Camboriú, Camboriú e Navegantes." },
              { img: "/images/plan.png", name: "Treino personalizado", description: "Treino montado considerando seus objetivos além do nível de aptidão cardiorrespiratória e desequilíbrio de força muscular totalmente pessoal" },
              { img: "/images/suport.png", name: "Suporte direto via WhatsApp", description: "Suporte direto via WhatsApp para todos os indivíduos da consultoria" },
              { img: "/images/nutricao.png", name: "Orientação Nutricional", description: "Orientações nutricionais (com apoio de nutricionista parceiro). Para quem aderir ao plano nutri." },
              { img: "/images/calendar.png", name: "Acompanhamento semanal", description: "Acompanhamento semanal com reajustes estratégicos a cada microciclo de treino" },
            ].map((benefit, index) => (
              <CarouselItem key={index} className="pl-4 min-w-min md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <BenefitCard 
                    path={benefit.img}
                    name={benefit.name}
                    description={benefit.description}
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
