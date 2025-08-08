"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="mt-50">
        <div className="text-[var(--brand-green)] font-bold text-3xl text-center">
            Quem sou eu?
        </div>

        <div className="flex justify-center mt-10 gap-10">
            <div className="col-6">
                <Image
                    src="/images/coach.png"
                    alt=""
                    width={300}
                    height={600}
                    className="relative w-full h-full rounded-lg object-cover"
                    priority // melhora o carregamento para imagens acima da dobra
                />
            </div>
            <div className="w-100 text-white text-lg font-regular flex flex-col gap-4">
                <div>Everton é formado em <span className="font-bold text-[#41974B]">educação física</span> desde 2002 e atua como personal físico desde 2015.</div>
                <div>Diante seus alunos se destacam os melhores atletas do país inteiro.
                    Possui <span className="font-bold text-[#41974B]">+100 alunos</span> já atendidos nesses anos.</div>
                <div>Tem uma <span className="font-bold text-[#41974B]">metodologia unica</span> de treino aplicada como nunca antes vista</div>
            </div>
        </div>

        <div className="mt-30 flex flex-col items-center justify-center">
            <Button variant="ghost" className="text-2xl bg-white p-6 font-bold rounded-xl hover:p-7">
                Faça parte desse time
            </Button>
            <div className="text-white text-sm flex mt-5 items-center gap-2">
                Tem alguma dúvida? Entre em contato
                <Image
                    src="/images/icon/whatsapp.png"
                    alt=""
                    width={20}
                    height={20}
                    className="relative w-3 h-3 h-full object-cover"
                    priority // melhora o carregamento para imagens acima da dobra
                />
            </div>
        </div>
    </div>
  );
}
