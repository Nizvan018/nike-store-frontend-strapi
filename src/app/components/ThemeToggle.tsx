"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const switchTheme = () => {
        if (resolvedTheme === "light") {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="text-black p-2 rounded-sm bg-white">
                <div className="h-4 w-4" />
            </div>
        )
    }

    return (
        <button
            onClick={switchTheme}
            className="text-black p-2 rounded-sm bg-white cursor-pointer transition hover:bg-blue-zodiac-100"
        >
            {resolvedTheme === "light" ? (
                <Moon size={16} />
            ) : (
                <Sun size={16} />
            )}
        </button>
    )
}

export default ThemeToggle;
