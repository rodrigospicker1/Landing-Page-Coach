import Image from "next/image";

export function Footer() {
  return (
    <div className="mt-40 bg-gray-900 p-5 px-20 flex flex-wrap h-full">
        <div className="flex items-center justify-center w-[20%]">
          <div className="flex flex-col gap-5 items-center w-full">
            <a href="#" className="text-2xl font-bold text-[var(--brand-green)]">
                <Image
                    src="/images/logo.png"
                    alt=""
                    width={35}
                    height={35}
                    className="relative object-cover"
                    priority // melhora o carregamento para imagens acima da dobra
                />
            </a>
            <div className="flex gap-4">
                <a href="#">
                  <Image src="/images/icon/instagram.png" alt="Instagram" width={25} height={25} />
                </a>
                <a href="#">
                  <Image src="/images/icon/facebook.png" alt="Facebook" width={25} height={25} />
                </a>
                <a href="#">
                  <Image src="/images/icon/twitter.png" alt="Twitter" width={25} height={25} />
                </a>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center items-center w-[80%] text-gray-300 flex-col text-md h-full">
          <div className="flex gap-30 items-center h-10">
            <a href="#benefits" className="">
                Benefícios
              </a>
              <a href="#testimonials" className="">
                Depoimentos
              </a>
              <a href="#price" className="">
                Planos
              </a>
              <a href="#about" className="" >
                Sobre
              </a>
          </div>

          <div className="flex h-10 items-end">
            <div className="text-gray-500 text-sm">{new Date().getFullYear()} @Todos os direitos reservados</div>
          </div>
            
        </div>
    </div>
  );
}
