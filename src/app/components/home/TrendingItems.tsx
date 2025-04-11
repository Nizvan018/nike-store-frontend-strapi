import { PiLightning } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import ItemCard from "../ItemCard";
import { getFeaturedProducts } from "@/app/api/getFeaturedProducts";
import Link from "next/link";
import { Suspense } from "react";
import TrendingItemsSkeleton from "../skeletons/home/TrendingItemsSkeleton";

const colors = {
    Green: { hover: "hover:bg-lime-500", bg: "bg-lime-300", to: "to-lime-500" },
    Blue: { hover: "hover:bg-blue-500", bg: "bg-blue-300", to: "to-blue-500" },
    Red: { hover: "hover:bg-rose-500", bg: "bg-rose-300", to: "to-rose-500" },
    "Multi-color": { hover: "hover:bg-blue-500", bg: "bg-slate-200", to: "to-rose-500" }
}

export default async function TrendingItems() {
    const res = await getFeaturedProducts();

    return (
        <section className='flex flex-col items-center gap-4 w-full max-w-[1000px] px-6'>
            <h2 className='text-2xl font-semibold'>FEATURED ITEMS</h2>
            <PiLightning size={24} />

            {/* IF ERROR */}
            {!res.succes && (
                <div className="flex flex-col items-center gap-4 w-full p-8 mt-12 rounded-xl bg-black/5 dark:bg-white/5">
                    <span className="text-rose-500">{res.error}</span>
                    <Link href={"/"} className='flex items-center gap-1 text-sm font-medium text-white dark:text-black py-2 px-4 rounded-full bg-black dark:bg-white'>
                        Reload
                        <TbReload size={18} />
                    </Link>
                </div>
            )}

            {/* ITEMS */}
            <Suspense fallback={<TrendingItemsSkeleton />}>
                <div className="grid grid-cols-3 gap-12 w-full mt-12 pb-8">
                    {res.succes && res.data.map(item => (
                        <ItemCard
                            key={item.documentId}
                            name={item.name}
                            price={item.price}
                            imageSrc={item.images[0].url}
                            alt={item.images[0].alternativeText}
                            imageWidth={item.images[0].width}
                            imageHeight={item.images[0].height}
                            coinage="USD"
                            hover={colors[item.color as keyof typeof colors].hover}
                            bg={colors[item.color as keyof typeof colors].bg}
                            to={colors[item.color as keyof typeof colors].to}
                        />
                    ))}
                </div>
            </Suspense>
        </section>
    )
}
