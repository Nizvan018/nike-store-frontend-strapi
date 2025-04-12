import { PiLightning } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import ItemCard from "../ItemCard";
import { getFeaturedProducts } from "@/app/api/getFeaturedProducts";
import Link from "next/link";

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
            <div className="grid grid-cols-3 gap-12 w-full mt-12 pb-8">
                {res.succes && res.data.map(item => (
                    <ItemCard
                        key={item.documentId}
                        product={item}
                    />
                ))}
            </div>
        </section>
    )
}
