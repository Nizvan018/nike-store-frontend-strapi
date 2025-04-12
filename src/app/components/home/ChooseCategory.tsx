import React from "react";
import Link from "next/link";

const ChooseCategory = () => {
    const trendingCategories = [
        { name: "New", slug: "new" },
        { name: "Best", slug: "best" },
        { name: "Special", slug: "special" },
    ];

    return (
        < div className='flex items-center gap-4' >
            <span className='text-blue-zodiac-600 font-medium cursor-pointer'>Featured</span>

            {trendingCategories.map((category) => (
                <React.Fragment key={category.slug}>
                    <div className='h-4 w-[2px] rounded-full bg-black/40'></div>
                    <Link
                        href={`/shop/${category.slug}`}
                        className="font-medium"
                    >
                        {category.name}
                    </Link>
                </React.Fragment>
            ))}
        </ div>
    )
}

export default ChooseCategory;
