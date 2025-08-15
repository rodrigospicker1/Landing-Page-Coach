import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

type TestimonialCardProps = {
  img_path: string;
  star: number;
  name: string;
  testimonial: string;
  index?: number;
};


export function TestimonialCard({ img_path, star, name, testimonial, index = 0}: TestimonialCardProps) {

    let fullStar = Math.floor(star);
    let hasHalfStar = fullStar != star ? true : false;
    
    return (
        <div className="relative col-span-1">
            <div className="flex p-0.5 bg-[linear-gradient(to_right,#41974B_0%,#153118_25%,#41974B_62%,#1F4924_94%)] rounded-lg w-full">
                <div className="flex rounded-lg w-full">
                    <div className="bg-gray-900/90 backdrop-filter backdrop-blur-lg p-6 rounded-lg w-full z-2 flex flex-col items-center">
                        <div className="bg-gray-600 w-15 h-15 rounded-full flex justify-center items-center ">
                            <Image 
                                src={img_path}
                                alt=""
                                width={200}
                                height={400}
                                className=" w-full h-full rounded-full object-cover"
                                priority // melhora o carregamento para imagens acima da dobra
                            />
                        </div>
                        <div className="flex my-4 md:gap-4 gap-2"> 
                            {Array.from({ length: fullStar }).map((_, index) => (
                                <Image
                                key={index} // A 'key' é crucial para o React identificar cada elemento
                                src="/images/icon/star.png"
                                alt={`Estrela de avaliação ${index + 1}`}
                                width={15}
                                height={15}
                                className="inline-block" // A classe 'relative' não é necessária aqui
                                priority={index === 0} // Boa prática: priorizar apenas a primeira imagem da lista para LCP
                                />
                            ))}
                            {hasHalfStar && (
                                <Image
                                    src="/images/icon/half_star.png"
                                    alt="Meia estrela"
                                    width={15}
                                    height={15}
                                    className="inline-block"
                                />
                            )}
                        </div>
                        <div className="p-2 text-xl w-full text-center text-gray-200 font-semibold">
                            { name }
                        </div>
                        <div className="text-gray-400 mt-2 text-center text-sm w-[100%]">
                            {testimonial}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
