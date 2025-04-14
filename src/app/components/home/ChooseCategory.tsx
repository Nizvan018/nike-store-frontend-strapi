import React from "react";
import Link from "next/link";
import { getCategories } from "@/app/api/categories";

const ChooseCategory = async () => {
    const res = await getCategories();

    if (!res.success) {
        return (
            <div className='flex items-center gap-4' >
                <span className='text-blue-zodiac-600 dark:text-blue-zodiac-400 font-medium cursor-pointer'>Featured</span>
            </div>
        )
    }

    return (
        <div className='flex items-center gap-4' >
            <span className='text-blue-zodiac-600 dark:text-blue-zodiac-400 font-medium cursor-pointer'>Featured</span>

            {res.success && res.data.map((category) => (
                <React.Fragment key={category.slug}>
                    <div className='h-4 w-[2px] rounded-full bg-black/40 dark:bg-white/40'></div>
                    <Link
                        href={`/shop/${category.slug}`}
                        className="font-medium"
                    >
                        {category.name}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    )
}

export default ChooseCategory;
