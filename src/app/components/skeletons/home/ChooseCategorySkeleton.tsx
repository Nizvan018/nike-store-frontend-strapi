import React from "react";

const ChooseCategorySkeleton = () => {
    return (
        < div className='flex items-center gap-4' >
            <span className='text-blue-zodiac-600 dark:text-blue-zodiac-400 font-medium cursor-pointer'>Featured</span>

            {Array.from({ length: 3 }).map((_, index) => (
                <React.Fragment key={index}>
                    <div className='h-4 w-[2px] rounded-full bg-black/40 dark:bg-white/40'></div>
                    <div className="h-4 w-16 bg-black/20 dark:bg-white/20 font-medium rounded-sm animate-pulse">
                    </div>
                </React.Fragment>
            ))}
        </ div>
    )
}

export default ChooseCategorySkeleton;
