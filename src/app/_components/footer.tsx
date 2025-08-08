import Image from "next/image";

export function Footer() {
  return (
    <div className="mt-40 bg-gray-900 p-5 px-10 flex flex-wrap">
        <div className="flex items-center sjustify-center w-[10%]">
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
        </div>
        <div className="flex justify-center items-center w-[90%] h-10 text-gray-300 flex-col text-md">
            <div>Everton: CREF 000000-0000</div>
            <div>{new Date().getFullYear()} @Todos os direitos reservados</div>
        </div>
    </div>
  );
}
