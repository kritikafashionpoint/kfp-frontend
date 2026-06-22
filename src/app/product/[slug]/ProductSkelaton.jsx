"use client"

import React from 'react'

export default function ProductCardSkeleton() {

    return (

        <div
            className='
                bg-black
                border
                border-[#3d2d08]
                rounded-xl
                overflow-hidden
                animate-pulse
            '
        >

            {/* IMAGE */}
            <div className='p-5'>

                <div
                    className='
                        h-50
                        w-full
                        rounded-2xl
                        bg-linear-to-r
                        from-[#1a1a1a]
                        via-[#2a2a2a]
                        to-[#1a1a1a]
                    '
                />
            </div>

            {/* CONTENT */}
            <div className='border-t border-[#3d2d08] p-5'>

                {/* TITLE */}
                <div
                    className='
                        h-6
                        w-[70%]
                        rounded-md
                        bg-linear-to-r
                        from-[#1a1a1a]
                        via-[#2a2a2a]
                        to-[#1a1a1a]
                        mb-4
                    '
                />

                {/* DESCRIPTION */}
                <div
                    className='
                        h-4
                        w-full
                        rounded-md
                        bg-[#1f1f1f]
                        mb-2
                    '
                />


                {/* PRICE */}
                <div
                    className='
                        h-7
                        w-[40%]
                        rounded-md
                        bg-linear-to-r
                        from-[#5c4308]
                        via-[#b8860b]
                        to-[#5c4308]
                        mt-4
                    '
                />

            </div>

            {/* BUTTONS */}
            <div className='grid grid-cols-2 gap-3 px-5 pb-5 bg-black'>

                <div
                    className='
                        h-11
                        rounded-lg
                        bg-[#1f1f1f]
                    '
                />

                <div
                    className='
                        h-11
                        rounded-lg
                        bg-linear-to-r
                        from-[#5c4308]
                        via-[#b8860b]
                        to-[#5c4308]
                    '
                />
            </div>
        </div>
    )
}