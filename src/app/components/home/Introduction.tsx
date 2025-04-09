import React from 'react'

export default function Introduction() {
    return (
        <section className='flex items-center gap-16 w-full max-w-[1000px] px-6'>
            <article className='flex flex-col items-center gap-4 md:gap-6 w-full text-center'>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>NEVER STOP</span>
                <div className='w-1/3 h-1 rounded-full bg-black/40'></div>
                <span className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold w-[90%]'>Push The Limits Out Of The Impossible</span>
                <button className='text-sm font-medium text-white dark:text-black py-2 px-4 rounded-full bg-black dark:bg-white'>BUY NOW</button>
            </article>

            <article className='text-7xl sm:text-8xl md:text-9xl lg:text-[160px] text-center font-extrabold text-wrap w-full'>
                <span className='block'>JUST</span>
                <span className='block -mt-4 lg:-mt-8'>DO</span>
                <span className='block -mt-4 lg:-mt-8'>IT</span>
            </article>
        </section>
    )
}
