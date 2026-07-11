"use client"

import React from 'react'

export default function ProductCardSkeleton() {
    return (
        <div
            className="
                bg-white
                border
                border-amber-200
                rounded-xl
                overflow-hidden
                animate-pulse
                shadow-[0_8px_30px_rgba(212,175,55,0.12)]
            "
        >
            {/* IMAGE */}
            <div className="p-5">
                <div
                    className="
                        h-50
                        w-full
                        rounded-2xl
                        bg-linear-to-r
                        from-gray-100
                        via-amber-50
                        to-gray-100
                    "
                />
            </div>

            {/* CONTENT */}
            <div className="border-t border-amber-100 p-5">

                {/* TITLE */}
                <div
                    className="
                        h-6
                        w-[70%]
                        rounded-md
                        bg-gradient-to-r
                        from-gray-100
                        via-amber-50
                        to-gray-100
                        mb-4
                    "
                />

                {/* DESCRIPTION */}
                <div
                    className="
                        h-4
                        w-full
                        rounded-md
                        bg-gray-100
                        mb-2
                    "
                />

                <div
                    className="
                        h-4
                        w-[85%]
                        rounded-md
                        bg-gray-100
                    "
                />

                {/* PRICE */}
                <div
                    className="
                        h-7
                        w-[40%]
                        rounded-md
                        bg-gradient-to-r
                        from-amber-200
                        via-amber-300
                        to-amber-200
                        mt-4
                    "
                />
            </div>

            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-3 px-5 pb-5 bg-white">

                <div
                    className="
                        h-11
                        rounded-lg
                        bg-gray-100
                        border
                        border-gray-200
                    "
                />

                <div
                    className="
                        h-11
                        rounded-lg
                        bg-gradient-to-r
                        from-amber-200
                        via-amber-300
                        to-amber-200
                    "
                />
            </div>
        </div>
    );
}