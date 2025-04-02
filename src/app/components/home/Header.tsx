import Image from "next/image";
import { SiNike } from "react-icons/si";

import whiteSneakers from "@assets/images/home/white-sneakers.webp";
import greenSneakers from "@assets/images/home/green-sneakers.webp";
import colorfulWave from "@assets/images/home/colorful-wave.webp";

export default function Header() {
    return (
        <header className="flex justify-center items-center w-full h-[60vh] sm:h-[70vh] md:h-[90vh] px-8 bg-gradient-to-br from-blue-zodiac-950 to-slate-950 bottom-diagonal duration-300 overflow-hidden">
            <div className="flex justify-center w-1/2">
                <h1 className="text-white text-7xl sm:text-8xl md:text-9xl font-bold italic duration-300">
                    <span className="flex items-center gap-2">AIR <SiNike className="text-9xl sm:text-[160px] md:text-[220px]" /></span>
                    <span className="block -mt-12 sm:-mt-14 md:-mt-20">JORDAN</span>
                </h1>
            </div>
            <div className="relative hidden 2xl:flex justify-center items-center w-1/2 h-full">
                <Image
                    src={whiteSneakers}
                    alt="White Sneakers Mockup"
                    className="z-20 absolute h-[65%] w-auto -rotate-[12deg] translate-x-20 drop-shadow-2xl"
                />
                <Image
                    src={greenSneakers}
                    alt="Green Sneakers Mockup"
                    className="z-10 absolute h-[40%] w-auto rotate-[12deg] -translate-x-40 -scale-x-100 drop-shadow-2xl"
                />
                <Image
                    src={colorfulWave}
                    alt="Colorful wave"
                    className="h-[150%] translate-32 rotate-[16deg] w-auto"
                />
            </div>
        </header>
    )
}
