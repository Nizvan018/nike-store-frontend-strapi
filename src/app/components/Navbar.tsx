"use client";

import { SiNike } from "react-icons/si";
import { LuUser } from "react-icons/lu";
import { SlBag } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
    { label: "Home", pathname: "/" },
    { label: "Store", pathname: "/store" },
    { label: "Contact", pathname: "/contact" }
]

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`
            z-[1000] fixed flex justify-between items-center gap-12 w-full py-4 px-8 text-white duration-300
            ${isScrolled && "bg-blue-zodiac-950"}
        `}>
            <div className="flex items-center gap-2 w-[120px]">
                <span className="text-xl font-bold italic">NIKE</span>
                <SiNike size={40} />
            </div>
            <ul className="flex items-center gap-8 text-sm">
                {links.map(item => (
                    <li key={item.label}>
                        <a
                            href={item.pathname}
                            className={`border-b pb-1 ${item.pathname === pathname ? "border-white" : "border-transparent"}`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-end gap-4 w-[120px]">
                <LuUser size={24} />
                <div className="flex items-center text-blue-zodiac-950 py-1 px-2 rounded-sm bg-white">
                    <SlBag className="mr-2" />
                    <span className="border-l border-y-blue-zodiac-950 pl-2">0</span>
                </div>
            </div>
        </nav>
    )
}
