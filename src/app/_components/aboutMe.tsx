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
                <div className="relative w-full max-w-md h-80 md:h-[400px] rounded-lg overflow-hidden">
                    <Image
                        src="/images/coach_png.png"
                        alt="Everton - Personal Trainer"
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 text-gray-300 text-base sm:text-md font-regular flex flex-col gap-4 md:gap-6">
                <p>Everton John – Fundador, CEO e head personal da Assessoria (CREF:037846-G/SC)</p>
                <p>Treina desde 2010 e, já no início, entendeu que a musculação era mais do que físico,
                era transformação. Em 2016 começou a estudar <span className="font-bold text-[#41974B]"> treino e nutrição a fundo</span>, mas
                acabou focando mais no mundo do treino, unindo prática e teoria.</p>
                <p>Em 2021 começou a atender os primeiros alunos e não parou mais. <span className="font-bold text-[#41974B]">Amante da musculação e corrida de
                rua</span>, tem como missão mostrar que, ao se conectar com quem realmente é, qualquer
                pessoa pode transformar seu corpo e sua vida.</p>
                <p>Em 2025 venho um passo ousado com muita fé em Deus e trabalho duro, montou
                uma equipe e <span className="font-bold text-[#41974B]">fundou oficialmente a Everton John Assessoria</span> em treinamento físico.</p>

                <div className="p-2 shadow-md backdrop-blur-sm text-sm rounded-lg border-[2px] border-gray-600">
                    <div className="px-2 my-2 border-l-2 border-rounded border-green-400 ">
                        <div className="text-white font-bold mb-2">Salmos 139:13-14</div>
                        <div className="text-gray-300">“Pois tu formaste o meu interior, tu me teceste no ventre de minha mãe.
                            Graças te dou, visto que por modo assombrosamente maravilhoso me formaste.”
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="text-gray-400 font-bold text-center text-sm mt-8 md:mt-10">
            Everton: CREF:037846-G/SC
        </div>

        <div className="mt-20 md:mt-40 flex flex-col items-center justify-center px-4">

            <div className="text-lg lg:text-4xl bg-clip-text text-center text-gray-200 mb-10 leading-10">
                Seu corpo é reflexo do que <span className="text-[var(--brand-green)] font-bold ">você faz</span>.<br></br>
                O que ele está dizendo sobre <span className="text-[var(--brand-green)] font-bold ">você?</span>
            </div>

            <Button 
                variant="ghost" 
                className="text-sm lg:text-2xl bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-900 font-bold 
                    py-6 px-4 sm:py-5 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 min-w-fit
                    sm:max-w-fit md:max-w-md"
            >
                Quero começar meu treino com acompanhamento
            </Button>
            <div className="text-gray-400 text-xs lg:text-base flex items-center gap-2 mt-5 text-center sm:text-left">
                <span>Clique acima e chame no WhatsApp. Dê o primeiro passo que os outros nós guiamos você!</span>
                <Image
                        src="/images/icon/whatsapp.png"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="w-4"
                    />
                {/* <a href="#" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                    <Image
                        src="/images/icon/whatsapp.png"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="w-4"
                    />
                </a> */}
            </div>
        </div>

    </div>
  );
}
