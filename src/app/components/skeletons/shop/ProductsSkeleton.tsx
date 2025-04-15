import { SiNike } from "react-icons/si";

interface Props {
    category: string;
}

const ProductsSkeleton = async ({ category }: Props) => {
    return (
        <section id="products" className='flex flex-col items-center gap-4 w-full max-w-[1000px] px-8' style={{ scrollMarginTop: "120px" }}>
            <h2 className='text-2xl font-semibold uppercase'>{category} PRODUCTS</h2>
            <SiNike size={40} />

            <div className="w-full">
                {/* ITEMS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full mt-12 pb-8">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex flex-col gap-2 w-full aspect-portrait rounded-xl bg-black/10 dark:bg-white/10 animate-pulse">
                            <div className="aspect-square rounded-xl bg-black/10 dark:bg-white/10"></div>

                            <div className="flex flex-col items-center justify-center gap-1 px-4">
                                <div className="w-6 h-6 rounded-md bg-black/10 dark:bg-white/10 mb-1" />
                                <div className="w-full h-3.5 bg-black/10 dark:bg-white/10"></div>
                                <div className="w-1/2 h-4 bg-black/10 dark:bg-white/10"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsSkeleton;
