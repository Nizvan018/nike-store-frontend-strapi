import Image from "next/image";
import Link from "next/link";

import greenSneakers from "@assets/images/home/green-sneakers.webp";

interface Props {
    category: string;
}

export default async function Header({ category }: Props) {
    return (
        <header className="flex justify-center items-center w-full h-[60vh] sm:h-[70vh] md:h-[90vh] px-8 bg-gradient-to-br from-blue-zodiac-950 dark:from-slate-900 to-slate-950 dark:to-near-black bottom-diagonal duration-300 overflow-hidden">
            <div className="flex justify-center w-1/2">
                <div className="flex flex-col gap-4 w-full max-w-[480px]">
                    <h1 className="uppercase text-white text-7xl sm:text-8xl md:text-9xl font-bold italic duration-300">{category}</h1>
                    <p className="text-white font-light ml-3">This will be the description about this specific product category, and this will be load from Strapi, this is just an example.</p>
                    <Link
                        href="#products"
                        className="w-fit ml-3 mt-1 text-sm font-medium text-black py-2 px-4 rounded-full bg-white"
                    >
                        See products
                    </Link>
                </div>
            </div>
            <div className="relative hidden 2xl:flex justify-center items-center w-1/2 h-full">
                <Image
                    src={greenSneakers}
                    alt="Green Sneakers Mockup"
                    className="z-10 absolute h-[50%] w-auto -rotate-[12deg] drop-shadow-2xl"
                />
            </div>
        </header>
    )
}
