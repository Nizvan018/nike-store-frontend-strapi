import { LuHeart } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/Product";
import { formatPrice } from "../lib/formatPrice";

interface Props {
    product: Product;
}

const colors = {
    Green: { hover: "hover:bg-lime-500", bg: "bg-lime-300", to: "to-lime-500" },
    Blue: { hover: "hover:bg-blue-500", bg: "bg-blue-300", to: "to-blue-500" },
    Red: { hover: "hover:bg-rose-500", bg: "bg-rose-300", to: "to-rose-500" },
    "Mono-color": { hover: "hover:bg-slate-500", bg: "bg-slate-200", to: "to-slate-500" },
    "Multi-color": { hover: "hover:bg-lime-500", bg: "bg-slate-200", to: "via-rose-500 to-blue-500" }
}

export default function ItemCard({ product }: Props) {
    const { name, slug, images, price, gender, color } = product;

    return (
        <article className={`group relative w-full aspect-portrait rounded-[14px] ${colors[color as keyof typeof colors].hover} duration-[2000ms]`}>
            {/* SHINE EFFECT */}
            <div className="z-20 absolute top-0 left-0 overflow-hidden w-full h-full rounded-[14px] pointer-events-none">
                <div className="relative w-full h-full">
                    <div className="absolute w-full h-full -left-[150%] bg-gradient-to-r from-transparent transform-[skewX(-25deg)] via-white/80 dark:via-white/50 to-transparent group-hover:translate-x-[300%] duration-500"></div>
                </div>
            </div>

            {/* ITEM PROPERTIES */}
            <div className="z-10 absolute top-3 left-3 flex flex-col gap-1">
                <span className="text-xs font-medium text-black dark:text-white rounded-full">{gender}</span>
                <span className={`text-xs font-medium text-black dark:text-white rounded-full`}>{color}</span>
            </div>

            {/* ITEM CARD */}
            <div className={`w-full h-full p-[2px] rounded-[14px] bg-gradient-to-t from-transparent from-10% ${colors[color as keyof typeof colors].to}`}>
                <div className="flex flex-col w-full h-full rounded-xl bg-background">
                    <Link
                        href={`/product/${slug}`}
                        className="relative flex justify-center items-center w-full aspect-square"
                    >
                        <div className={`absolute w-full aspect-square rounded-2xl top-diagonal ${colors[color as keyof typeof colors].bg}`}></div>
                        <Image
                            src={images[0].url}
                            alt={images[0].alternativeText}
                            width={images[0].width}
                            height={images[0].height}
                            className="absolute w-[calc(100%-24px)] h-auto group-hover:scale-[120%] duration-400"
                        />
                    </Link>

                    <div className="flex flex-col items-center justify-center gap-1 h-full">
                        <LuHeart size={24} className="text-black/40 dark:text-white/40 mb-1" />
                        <h3 className="text-sm font-semibold">{name}</h3>
                        <span className="font-bold">{formatPrice(price, "USD", "en-US")}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
