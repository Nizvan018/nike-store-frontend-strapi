import { getProductsByCategory } from "@/app/api/products";
import Link from "next/link";
import { TbReload } from "react-icons/tb";
import ItemCard from "../ItemCard";
import { SiNike } from "react-icons/si";

interface Props {
    category: string;
}

const Products = async ({ category }: Props) => {
    const res = await getProductsByCategory(category);

    return (
        <section id="products" className='flex flex-col items-center gap-4 w-full max-w-[1000px] px-8' style={{ scrollMarginTop: "120px" }}>
            <h2 className='text-2xl font-semibold uppercase'>{category} PRODUCTS</h2>
            <SiNike size={40} />

            <div className="w-full">
                {/* IF ERROR */}
                {!res.success && (
                    <div className="flex flex-col items-center gap-4 w-full p-8 mt-12 rounded-xl bg-black/5 dark:bg-white/5">
                        <span className="text-rose-500">{res.error}</span>
                        <Link href={`/shop/${category}`} className='flex items-center gap-1 text-sm font-medium text-white dark:text-black py-2 px-4 rounded-full bg-black dark:bg-white'>
                            Reload
                            <TbReload size={18} />
                        </Link>
                    </div>
                )}

                {/* ITEMS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full mt-12 pb-8">
                    {res.success && res.data.map(item => (
                        <ItemCard
                            key={item.documentId}
                            product={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products;
