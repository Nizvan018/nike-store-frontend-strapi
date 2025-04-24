"use client";

import Link from "next/link";
import { TbReload, TbMoodSadSquint } from "react-icons/tb";
import ItemCard from "../ItemCard";
import { SiNike } from "react-icons/si";
import Filters from "@components/shop/Filters";
import useFetch from "@/app/hooks/useFetch";
import { Product } from "@/app/types/Product";
import ProductsSkeleton from "../skeletons/shop/ProductsSkeleton";
import { useState } from "react";

interface Props {
    category: string;
}

interface Option {
    value: string;
    label: string;
}

const Products = ({ category }: Props) => {
    const { loading, error, data: products } = useFetch<Product[]>(`/api/products/category/${category}`, undefined, true);
    const [selectedColor, setSelectedColor] = useState<Option | null>(null);
    const [selectedGender, setSelectedGender] = useState<Option | null>(null);

    const filterByColor = (item: Product) => {
        if (!selectedColor) return true;

        return item.color === selectedColor.value;
    }

    const filterByGender = (item: Product) => {
        if (!selectedGender) return true;

        return item.gender === selectedGender.value;
    }

    const filteredProducts = !loading && products && products.filter(filterByColor).filter(filterByGender);

    return (
        <section id="products" className='flex flex-col items-center gap-4 w-full max-w-[1000px] px-8' style={{ scrollMarginTop: "120px" }}>
            <h2 className='text-2xl font-semibold uppercase'>{category} PRODUCTS</h2>
            <SiNike size={40} />

            <Filters
                colorCallback={setSelectedColor}
                genderCallback={setSelectedGender}
            />

            <div className="w-full">
                {/* WHILE LOADING */}
                {loading && (
                    <ProductsSkeleton category={category} />
                )}

                {/* IF ERROR */}
                {!loading && error && (
                    <div className="flex flex-col items-center gap-4 w-full p-8 mt-16 rounded-xl bg-black/5 dark:bg-white/5">
                        <span className="text-rose-500">{error.message}</span>
                        <Link href={`/shop/${category}`} className='flex items-center gap-1 text-sm font-medium text-white dark:text-black py-2 px-4 rounded-full bg-black dark:bg-white'>
                            Reload
                            <TbReload size={18} />
                        </Link>
                    </div>
                )}

                {/* ITEMS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full mt-16 px-8 sm:px-0 pb-8">
                    {filteredProducts && filteredProducts.map(item => (
                        <ItemCard
                            key={item.documentId}
                            product={item}
                        />
                    ))}
                </div>

                {/* IF EMPTY */}
                {filteredProducts && filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center gap-4 w-full p-8 mt-16 rounded-xl bg-black/5 dark:bg-white/5">
                        <span>No products found with the category/color</span>
                        <TbMoodSadSquint size={32} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products;
