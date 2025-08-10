import { TestimonialCard } from "./card/testimonial_card";

export function Testimonials() {
  return (
    <div className="mt-50" id="testimonials">
      <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
        Depoimentos de alunos
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-20">
        <TestimonialCard img_path="/images/users/ana.jpg" name="Ana Silva" star={5} 
            testimonial="Avaliação do aluno da consultoria de treinamento e dieta" index={0} />
        <TestimonialCard img_path="/images/users/duda.jpg" name="Ana Silva" star={4.5} 
            testimonial="Avaliação do aluno da consultoria de treinamento e dieta" index={1} />
        <TestimonialCard img_path="/images/users/justin.jpg" name="Ana Silva" star={4.5} 
            testimonial="Avaliação do aluno da consultoria de treinamento e dieta" index={2} />
        <TestimonialCard img_path="/images/users/maria.jpg" name="Ana Silva" star={4} 
            testimonial="Avaliação do aluno da consultoria de treinamento e dieta" index={3} />
        <TestimonialCard img_path="/images/users/simon.jpg" name="Ana Silva" star={5} 
            testimonial="Avaliação do aluno da consultoria de treinamento e dieta" index={4} />
      </div>
    </div>
  );
}
