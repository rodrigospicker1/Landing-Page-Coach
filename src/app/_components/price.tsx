import { PriceCard } from "./card/price_card";

export function Price() {
  return (
    <div className="mt-30" id="price">
      <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
        Preços
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-4 max-w-7xl mx-auto">
        <PriceCard
            name="Combo treino mensal"
            price={69.99}
            offer={false}
            includeList={[
                "Treino personalizada por 1 mês", 
                "Atendimento personalizado pelo whatsapp durante 1 mês"
              ]
            }
            notIncludeList={[
                "Dieta personalizada", 
                "Acompanhamento semanal", 
              ]
            }
        />
        <PriceCard
            name="Combo dieta/treino semestral"
            price={79.99}
            offer={true}
            includeList={[
                "Dieta personalizada por 6 meses", 
                "Treino personalizada por 6 meses", 
                "Acompanhamento semanal por 6 mês", 
                "Atendimento personalizado pelo whatsapp durante 6 meses"
              ]
            }
            notIncludeList={[]}
        />
        <PriceCard
            name="Combo dieta/treino mensal"
            price={99.99}
            offer={false}
            includeList={[
                "Dieta personalizada por 1 mês", 
                "Treino personalizada por 1 mês", 
                "Acompanhamento semanal por 1 mês", 
                "Atendimento personalizado pelo whatsapp durante 1 mês"
              ]
            }
            notIncludeList={[]}
        />
      </div>
    </div>
  );
}
