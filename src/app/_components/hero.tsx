"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import App from "./navbar";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <App />

      <section className="py-50 px-10 ">
        <div className="flex justify-center items-end">
          
          <div className="absolute w-[90%]">
            <Image
                  src="/images/logo_lg.png"
                  alt=""
                  width={500}
                  height={600}
                  className="relative object-cover"
                  priority // melhora o carregamento para imagens acima da dobra
              />
          </div>
          <div className="flex items-center flex-col ml-0 md:ml-[20%] z-2">
            <div className="text-xl lg:text-4xl bg-clip-text text-center text-gray-200">
              Não é apenas sobre <span className="text-[var(--brand-green)] font-bold ">estética</span>. É sobre  se sentir<br></br>
              <span className="text-[var(--brand-green)] font-bold ">forte, confiante e no controle do seu corpo.</span> 
            </div>

            <div className="text-gray-400 mt-10 text-md col-6 w-[80%] text-center">
              Treinamento físico individualizado com base em testes físicos e avaliação criteriosa.<br></br>
              Atendimento 100% humano , com acompanhamento real e próximo.<br></br>
            </div>

            <div className="mt-10">
              <Button variant="ghost" className="text-xl bg-[var(--brand-green)] p-6 font-bold hover:p-7 hover:bg-[var(--brand-green)]">
                Quero fazer parte desse time
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
