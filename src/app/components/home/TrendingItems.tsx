"use client";

import React, { useState } from "react";
import { PiLightning } from "react-icons/pi";
import trendingCategories from "@lib/trendingCategories";

export default function TrendingItems() {
    const [selectedCategory, setSelectedCategory] = useState(trendingCategories[0].value);

    return (
        <section className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl font-semibold'>TRENDING ITEMS</h2>

            <PiLightning size={24} />

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
        </section>
    )
}
