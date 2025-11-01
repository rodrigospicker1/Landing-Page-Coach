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
                "Coleta de dados para anamnese", 
                "Montagem de treino (no App mfit)", 
                "Suporte para dúvidas via whatsapp.", 
                "Coleta de aproveitamento de treino (semanal).",
                "Coleta de vídeo com a execução dos principais exercícios de musculação para avaliação.",
                "Coleta de feedback para reajuste (mensal)."
              ]
            }
            notIncludeList={[
                "Avaliação física presencial EJ Smart Test",
                "Reavaliação diagnóstica a cada 3 meses para analisar o progresso",
                "1 treino assistido por mês com duração de 1h"
              ]
            }
        />
        <PriceCard
            name="Prata"
            offer={false}
            includeList={[
                "Coleta de dados para Anamnese.", 
                "Avaliação física presencial EJ Smart Test",
                "Montagem de treino (no App mfit) com base no resultado da EJ Smart Test e no seu objetivo",
                "Suporte para dúvidas via whatsapp",
                "Coleta de aproveitamento de treino (semanal)",
                "Coleta de vídeo com a execução dos principais exercícios de musculação para avaliação.",
                "Coleta de feedback para reajuste (mensal).",
                "Reavaliação a cada 3 meses.",
              ]
            }
            notIncludeList={[
              "1 treino assistido por mês com duração de 1h"
            ]}
        />
        
        <PriceCard
            name="Ouro"
            offer={true}
            includeList={[
                "Coleta de dados para Anamnese.", 
                "Avaliação física presencial EJ Smart Test",
                "Montagem de treino (no App mfit) com base no resultado da EJ Smart Test e no seu objetivo",
                "Suporte para dúvidas via whatsapp",
                "Coleta de aproveitamento de treino (semanal)",
                "Coleta de vídeo com a execução dos principais exercícios de musculação para avaliação.",
                "Coleta de feedback para reajuste (mensal).",
                "Reavaliação a cada 3 meses.",
                "1 treino assistido por mês com duração de 1h"
              ]
            }
            notIncludeList={[
            ]}
        />
      </div>
    </div>
  );
}
