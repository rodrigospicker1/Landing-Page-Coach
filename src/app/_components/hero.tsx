"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import TypingAnimation from "@/components/TypingAnimation";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <div className="scroll-smooth">
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full text-white z-50 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-[var(--brand-green)]">
              <Image
                  src="/images/logo.png"
                  alt=""
                  width={300}
                  height={600}
                  className="relative w-full h-full object-cover"
                  priority // melhora o carregamento para imagens acima da dobra
              />
            </a>

            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            <div
              className={`md:flex gap-30 items-center ${
                menuOpen ? "block" : "hidden"
              } md:block`}
            >
              <a href="#home" className="">
                Sobre
              </a>
              <a href="#about" className="">
                Planos
              </a>
              <a href="#services" className="">
                FAC
              </a>
              <a href="#contact" className="">
                Benefícios
              </a>
            </div>
          </div>
        </nav>
      </div>

      <section className="py-50 px-10 ">
        <div className="flex justify-center items-end">
          {/* <div
            className="w-1 rounded-lg bg-white mr-10"
            style={{
              boxShadow: "0 0 40px 10px #47A34D",
            }}
          ></div> */}
          <div className="absolute w-[90%] h-[50%]">
            <Image
                  src="/images/logo_lg.png"
                  alt=""
                  width={500}
                  height={600}
                  className="relative object-cover"
                  priority // melhora o carregamento para imagens acima da dobra
              />
          </div>
          <div className="flex items-center flex-col ml-[10%] z-2">
            <div className="text-3xl lg:text-5xl bg-clip-text text-center text-gray-200">
              Não é só sobre <span className="text-[var(--brand-green)] font-bold "><TypingAnimation text="treino" className="text-[var(--brand-green)] font-bold" /></span>, é sobre <br></br>
              <TypingAnimation text="transformação real!" className="text-[var(--brand-green)] font-bold" /> 
            </div>

            <div className="text-gray-400 mt-10 text-md col-6 w-[70%] text-center">
              Resultados reais e duradouros com simplicidade, acompanhamento personalizado e foco no seu bem-estar.
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
