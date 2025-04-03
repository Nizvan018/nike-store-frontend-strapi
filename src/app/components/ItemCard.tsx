import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { LuHeart } from "react-icons/lu";
import Image from "next/image";

interface Props {
    name: string;
    imageSrc: string | StaticImport;
    price: number;
    coinage: string;
    hover: string;
    bg: string;
    to: string;
}

export default function ItemCard({ name, imageSrc, price, coinage, hover, bg, to }: Props) {
    return (
        <article className={`group w-full aspect-portrait rounded-[14px] ${hover} duration-[2000ms] cursor-pointer`}>
            <div className={`w-full h-full p-[2px] rounded-[14px] bg-gradient-to-t from-transparent from-10% ${to}`}>
                <div className="flex flex-col w-full h-full rounded-xl bg-white">
                    <div className="relative flex justify-center items-center w-full aspect-square">
                        <div className={`absolute w-full aspect-square rounded-2xl top-diagonal ${bg}`}></div>
                        <Image src={imageSrc} alt="Green Sneakers" className="absolute w-[calc(100%-24px)] h-auto group-hover:scale-[120%] duration-400" />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-1 h-full">
                        <LuHeart size={24} className="text-black/40 mb-1" />
                        <h3 className="text-sm font-semibold">{name}</h3>
                        <span className="font-bold">${price.toFixed(2)} <span className="font-semibold text-black/60">{coinage}</span></span>
                    </div>
                </div>
            </div>
        </article>
    )
}
