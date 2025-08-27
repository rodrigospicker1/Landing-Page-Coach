import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/constants/urls";
import { ArrowLongRightIcon, CheckBadgeIcon } from "@heroicons/react/16/solid";
import { XCircle } from "lucide-react";
import Image from "next/image";

type PriceCardProps = {
    name: String,
    offer: Boolean,
    includeList: string[];
    notIncludeList: string[];
};

export function PriceCard({ name, offer, includeList, notIncludeList }: PriceCardProps) {
  return (
    <div className={` bg-gradient-to-b from-[#BFBFBF] via-[#0C0C0C] to-[#929292] p-0.5 rounded-lg relative overflow-hidden`}>
        {
            offer && 
            <div className="absolute rotate-315 font-bold bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-green-400 z-2 w-40 pl-8 ml-[-40px] text-sm p-1"> 
                OFERTA
            </div>
        }
        <div className="flex flex-col justify-between w-full bg-[linear-gradient(to_bottom,#252835_35%,#010101_98%)] rounded-lg p-4 relative h-full">
            

            <div className="text-white text-2xl font-bold m-2 text-center"> 
                Pacote
                <span className={
                    name === "Ouro" ? 'text-yellow-400' :
                    name === "Prata" ? 'text-gray-400' :
                    name === "Bronze" ? 'text-[#cd7f32]' :
                    'text-white'
                }> {name}</span>
            </div>

            {/* <div className="text-5xl text-white font-bold my-4 text-center">
                {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                <span className="text-sm text-gray-400">/mês</span>
            </div> */}

            <div className="flex flex-col p-4 gap-4">
                {includeList.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 col-12">
                        <div className="col-2">
                            <CheckBadgeIcon className="h-4 w-4 text-green-400"  />
                        </div>
                        <div className="col-10">
                            <span className="text-white text-sm">{item}</span>
                        </div>
                    </div>
                ))}
            </div>

            {
                notIncludeList.length > 0 &&
                <div className="flex flex-col p-4 gap-4">
                    {notIncludeList.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 col-12">
                            <div className="col-2">
                                <XCircle className="h-4 w-4 text-gray-600"  />
                            </div>
                            <div className="col-10">
                                <span className="text-gray-600 text-sm">{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            }
            

            <div className="flex items-center justify-center mt-4">
                <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="relative text-2xl text-white w-70 border border-[#3AB248] bg-[#323545] rounded-xl p-1 font-bold overflow-hidden group">
                        <span className="relative z-10">Quero saber mais</span>
                        <span className="absolute inset-0 bg-[#3AB248] transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100 rounded-lg"></span>
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
}
