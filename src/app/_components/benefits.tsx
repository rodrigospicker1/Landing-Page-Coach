import { BenefitCard } from "./card/benefit_card";

export function Benefits() {
  return (
    <div id="benefits">
      <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
        Benefícios
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <BenefitCard
            path="/images/musculo.png"
            name="Análise personalizada"
            description="Análise personalizada para todos os indivíduos da consultoria"
        />
        <BenefitCard 
            path="/images/planilha.png"
            name="Protocolo de treino/dieta" 
            description="Protocolo de treino e dieta para todos os indivíduos da consultoria"
        />
        <BenefitCard 
            path="/images/phone.png"
            name="Acompanhamento pelo whatsapp" 
            description="Protocolo de treino e dieta para todos os indivíduos da consultoria"
        />
      </div>
    </div>
  );
}
