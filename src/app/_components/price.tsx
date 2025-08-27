import { PriceCard } from "./card/price_card";

export function Price() {
  return (
    <div className="mt-30" id="price">
      <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
        Pacotes
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-4 max-w-7xl mx-auto">
        <PriceCard
            name="Bronze"
            offer={false}
            includeList={[
                "Anamnese", 
                "Avaliação diagnóstica", 
                "Planejamento de treino personalizado(musculação e aeróbico)", 
                "Avaliação da execução dos principais exercícios através de vídeos gravados pelo aluno",
                "Suporte direto via WhatsApp",
                "Controle de aproveitamento de treino semanal com feedback trimestral",
                "Reavaliação diagnóstica a cada 3 meses para analisar o progresso"
              ]
            }
            notIncludeList={[
                "1 video chamada por mês com duração de aproximadamente 20 minutos para tirar as dúvidas em tempo real com um professor", 
                "1 aula assistida por mês com duração de 60 minutos acompanhada pelo professor"
              ]
            }
        />
        <PriceCard
            name="Prata"
            offer={false}
            includeList={[
                "Anamnese", 
                "Avaliação diagnóstica", 
                "Planejamento de treino personalizado(musculação e aeróbico)", 
                "Avaliação da execução dos principais exercícios através de vídeos gravados pelo aluno",
                "Suporte direto via WhatsApp",
                "Controle de aproveitamento de treino semanal com feedback trimestral",
                "Reavaliação diagnóstica a cada 3 meses para analisar o progresso",
                "1 video chamada por mês com duração de aproximadamente 20 minutos para tirar as dúvidas em tempo real com um professor", 
              ]
            }
            notIncludeList={[
              "1 aula assistida por mês com duração de 60 minutos acompanhada pelo professor"
            ]}
        />
        
        <PriceCard
            name="Ouro"
            offer={true}
            includeList={[
                "Anamnese", 
                "Avaliação diagnóstica", 
                "Planejamento de treino personalizado(musculação e aeróbico)", 
                "Avaliação da execução dos principais exercícios através de vídeos gravados pelo aluno",
                "Suporte direto via WhatsApp",
                "Controle de aproveitamento de treino semanal com feedback trimestral",
                "Reavaliação diagnóstica a cada 3 meses para analisar o progresso",
                "1 aula assistida por mês com duração de 60 minutos acompanhada pelo professor"
              ]
            }
            notIncludeList={[
            ]}
        />
      </div>
    </div>
  );
}
