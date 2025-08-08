import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

type BenefitCardProps = {
  name: string;
  description: string;
  path: string;
};

export function BenefitCard({ name, description, path }: BenefitCardProps) {
  return (
    <div className="flex p-0.5 bg-[linear-gradient(to_right,#41974B_0%,#153118_25%,#41974B_62%,#1F4924_94%)] rounded-lg">
        <div className="flex ">
            <div className="w-90 backdrop-filter backdrop-blur-lg bg-opacity-50 p-6 rounded-lg z-2 bg-gray-900 border border-gray-700 ">
                <div className="flex items-center">
                    <div className="p-4 mr-6 bg-gray-600 col-4 rounded-full relative flex justify-center items-center">
                        <Image
                            src={path}
                            alt=""
                            width={150}
                            height={150}
                            className="relative w-10"
                            priority // melhora o carregamento para imagens acima da dobra
                        />
                    </div>
                    <div className="p-2 text-xl w-60 text-gray-200 font-semibold">
                        { name }
                    </div>
                </div>
                <div className="text-gray-400 mt-2">
                    {description}
                </div>
                <div className="mt-4">
                    <Button variant="ghost" className="w-full text-white hover:bg-gray-700 hover:text-white">
                        <div className="flex items-center justify-between w-full">
                            <span>Saiba mais</span>
                            <ArrowLongRightIcon className="text-[var(--brand-green)] " />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}
