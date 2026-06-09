'use client'

import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { gold } from '../colors/color'

export default function NoProductFound() {
    return (
        <div className='w-full flex items-center justify-center lg:py-20 md:py-16 sm:py-10 py-5'>
            <div
                className='max-w-xl w-full text-center border rounded-3xl p-10 backdrop-blur-xl'
                style={{
                    borderColor: `${gold.base}30`,
                    background:
                        'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                    boxShadow: `0 0 40px ${gold.base}10`,
                }}
            >
                {/* Icon */}
                <div
                    className='w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6'
                    style={{
                        background: `${gold.base}15`,
                        border: `1px solid ${gold.base}30`,
                    }}
                >
                    <FaSearch
                        size={30}
                        style={{ color: gold.light }}
                    />
                </div>

                {/* Heading */}
                <h2
                    className='text-3xl font-bold mb-3'
                    style={{
                        color: gold.light,
                        fontFamily: 'Poppins',
                    }}
                >
                    No Products Found
                </h2>

                {/* Description */}
                <p
                    className='text-gray-400 leading-relaxed'
                    style={{ fontFamily: 'Poppins' }}
                >
                    We couldn't find any products matching your selected
                    filters. Try adjusting your category, price range,
                    or product type to explore more collections.
                </p>

                {/* Decorative Line */}
                <div
                    className='w-40 h-[2] mx-auto mt-8'
                    style={{
                        background: `linear-gradient(to right, transparent, ${gold.base}, transparent)`,
                    }}
                />
            </div>
        </div>
    )
}