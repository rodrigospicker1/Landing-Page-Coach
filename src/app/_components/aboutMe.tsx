"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="mt-20 md:mt-40 px-4 sm:px-8 lg:px-20" id="about">
        <div className="text-[var(--brand-green)] font-bold text-2xl sm:text-3xl text-center mb-10">
            Quem sou eu?
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
                <div className="relative w-full max-w-md h-80 md:h-[300px] rounded-lg overflow-hidden">
                    <Image
                        src="/images/coach_png.png"
                        alt="Everton - Personal Trainer"
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 text-white text-base sm:text-lg font-regular flex flex-col gap-4 md:gap-6">
                <p>Everton é formado em <span className="font-bold text-[#41974B]">educação física</span> desde 2002 e atua como personal físico desde 2015.</p>
                <p>Diante seus alunos se destacam os melhores atletas do país inteiro. Possui <span className="font-bold text-[#41974B]">+100 alunos</span> já atendidos nesses anos.</p>
                <p>Tem uma <span className="font-bold text-[#41974B]">metodologia única</span> de treino aplicada como nunca antes vista.</p>
            </div>
        </div>
        <div className="text-gray-400 font-bold text-center text-sm mt-8 md:mt-10">
            Everton: CREF 000000-0000
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center px-4">
            <Button 
                variant="ghost" 
                className="text-lg sm:text-xl md:text-2xl bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 font-bold py-4 px-6 sm:py-5 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
                Faça parte desse time
            </Button>
            <div className="text-white text-sm sm:text-base flex items-center gap-2 mt-6 text-center sm:text-left">
                <span>Tem alguma dúvida? Entre em contato</span>
                <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/icon/whatsapp.png"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                </a>
            </div>
        </div>

    </div>
  );
}
