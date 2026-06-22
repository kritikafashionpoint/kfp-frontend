import Image from 'next/image'
import React from 'react'
import { gold } from '../colors/color'
import { DecorativeLine } from '../common/DecorativeLine'

export default function OfferBanner() {
    return (

        <>
            <div className="flex items-center justify-center sm:gap-5 gap-0">

                <div
                    className="lg:w-28 w-16 h-[1]"
                    style={{
                        background: `linear-gradient(to right, transparent, ${gold.base})`
                    }}
                />

                {/* Main Heading */}
                <h2 className="relative">

                    {/* Glow */}
                    <div
                        className="absolute inset-0 blur-3xl opacity-40"
                        style={{
                            background: `radial-gradient(circle, ${gold.base}60, transparent 70%)`
                        }}
                    />

                    <span
                        className="relative capitalize sm:uppercase z-10 block lg:text-4xl md:text-3xl text-2xl font-black tracking-wider "
                        style={{
                            fontFamily: "serif",
                            background: `linear-gradient(
                                   180deg,
                                   #fff5c2 0%,
                                   ${gold.light} 25%,
                                   ${gold.base} 50%,
                                   ${gold.dark} 100%
                               )`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        ✦ <span className='sm:inline hidden'>get</span> Up To 50% off
                    </span>





                </h2>




                <div
                    className="lg:w-28 w-16 h-[1]"
                    style={{
                        background: `linear-gradient(to left, transparent, ${gold.base})`
                    }}
                />

            </div>
            <p className="Poppins mb-3 text-sm text-gray-400 max-w-5xl leading-normal mx-auto tracking-wide text-center mt-3 px-3">
                Shop authentic Rajputi Jewellery and Rajasthani Bridal Jewellery including Aad, Timaniya, Borla, Bajuband, Kundan Sets, and traditional wedding accessories crafted with royal heritage and timeless elegance.

            </p>

            <section className='w-full lg:h-[70vh] md:h-[60vh] h-[40vh] lg:my-10 my- relative '>


                <div className='w-full h-full absolute top-0 left-0 bg-linear-to-r from-black/50 via-transparent to-black/50 z-50'></div>



                <Image
                    style={{ borderColor: gold.dark }}
                    loading='lazy'
                    src={'/banner/offer.png'}
                    className='absolute border-y top-0 left-0 w-full h-full object-contain object-center'
                    fill
                    sizes='full'
                    alt='Kritika Fashion Point luxury jewellery sale banner with 50% off discount on premium gold jewellery, exclusive offers, elegant black background, gold necklace set, earrings, bracelet, and red promotional badge.'
                />
            </section>
        </>
    )
}
