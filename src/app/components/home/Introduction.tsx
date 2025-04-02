import React from 'react'

export default function Introduction() {
    return (
        <section className='flex items-center gap-16 w-full max-w-[1000px]'>
            <article className='flex flex-col items-center gap-6 w-full text-center'>
                <span className='text-6xl font-bold'>NEVER STOP</span>
                <div className='w-1/3 h-1 rounded-full bg-black/40'></div>
                <span className='text-2xl font-semibold w-[90%]'>Push The Limits Out Of The Impossible</span>
                <button className='text-sm font-medium text-white py-2 px-4 rounded-full bg-black'>BUY NOW</button>
            </article>

            <article className='text-[160px] text-center font-extrabold text-wrap w-full'>
                <span className='block'>JUST</span>
                <span className='block -mt-28'>DO</span>
                <span className='block -mt-28'>IT</span>
            </article>
        </section>
    )
}
