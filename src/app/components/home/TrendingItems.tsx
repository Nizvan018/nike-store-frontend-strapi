"use client";

import React, { useState } from "react";
import { PiLightning } from "react-icons/pi";
import trendingCategories from "@lib/trendingCategories";
import ItemCard from "../ItemCard";

import greenSneakers from "@assets/images/home/green-sneakers.webp";
import whiteSneakers from "@assets/images/home/white-sneakers.webp";

export default function TrendingItems() {
    const [selectedCategory, setSelectedCategory] = useState(trendingCategories[0].value);

    return (
        <section className='flex flex-col items-center gap-4 w-full max-w-[1000px]'>
            <h2 className='text-2xl font-semibold'>TRENDING ITEMS</h2>

            <PiLightning size={24} />

            {/* CATEGORIES */}
            <div className='flex items-center gap-4'>
                {trendingCategories.map((category, index) => (
                    <React.Fragment key={category.value}>
                        <button
                            className={`${selectedCategory === category.value && "text-blue-zodiac-600"} font-medium cursor-pointer`}
                            onClick={() => setSelectedCategory(category.value)}
                        >
                            {category.label}
                        </button>
                        {index < trendingCategories.length - 1 && (
                            <div className='h-4 w-[2px] rounded-full bg-black/40'></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* STORE */}
            <div className="grid grid-cols-3 gap-12 w-full mt-16 pb-8 px-6">
                <ItemCard
                    name="Air Jordan Swamp"
                    imageSrc={greenSneakers}
                    price={500}
                    coinage="USD"
                    hover="hover:bg-lime-500"
                    bg="bg-lime-300"
                    to="to-lime-500"
                />

                <ItemCard
                    name="Air Jordan Swamp"
                    imageSrc={whiteSneakers}
                    price={500}
                    coinage="USD"
                    hover="hover:bg-indigo-500"
                    bg="bg-indigo-300"
                    to="to-indigo-500"
                />
            </div>
        </section>
    )
}
