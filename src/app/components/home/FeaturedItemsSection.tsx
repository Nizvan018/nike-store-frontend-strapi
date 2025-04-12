import { PiLightning } from "react-icons/pi";
import FeaturedItems from "./FeaturedItems";
import { Suspense } from "react";
import FeaturedItemsSkeleton from "../skeletons/home/FeaturedItemsSkeleton";

export default function FeaturedItemsSection() {
    return (
        <section className='flex flex-col items-center gap-4 w-full max-w-[1000px] px-8'>
            <h2 className='text-2xl font-semibold'>FEATURED ITEMS</h2>
            <PiLightning size={24} />

            <Suspense fallback={<FeaturedItemsSkeleton />}>
                <FeaturedItems />
            </Suspense>
        </section>
    )
}
