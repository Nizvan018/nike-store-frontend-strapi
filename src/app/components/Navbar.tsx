"use client";

import { SiNike } from "react-icons/si";
import { LuUser } from "react-icons/lu";
import { SlBag } from "react-icons/sl";
import { useState, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const shopLinks: { title: string; href: string; description: string }[] = [
    {
        title: "New",
        href: "/shop/new",
        description:
            "All our brand new products, just for the deportist inside you.",
    },
    {
        title: "Best",
        href: "/shop/best",
        description:
            "Designed for the best of the best, our most popular products.",
    },
    {
        title: "Special",
        href: "/shop/special",
        description:
            "For those who want to be unique, our most exclusive products.",
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        // Intial handle
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`
            z-[1000] fixed flex justify-between items-center gap-12 w-full py-4 px-8 text-white duration-300
            ${isScrolled && "bg-slate-950/90 backdrop-blur-md"}
        `}>
            <div className="flex items-center gap-2 w-[160px]">
                <span className="text-xl font-bold italic">NIKE</span>
                <SiNike size={40} />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:block">
                <DesktopMenu shopLinks={shopLinks} />
            </div>

            <div className="flex items-center justify-end gap-4 w-[160px]">
                <LuUser size={24} />
                <div className="flex items-center text-blue-zodiac-950 py-1 px-2 rounded-sm bg-white">
                    <SlBag className="mr-2" />
                    <span className="border-l border-y-blue-zodiac-950 pl-2">0</span>
                </div>

                {/* MOBILE MENU */}
                <div className="flex items-center md:hidden">
                    <MobileMenu shopLinks={shopLinks} />
                </div>
            </div>
        </nav>
    )
}
