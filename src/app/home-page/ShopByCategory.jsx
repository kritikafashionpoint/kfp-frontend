"use client"
import Image from "next/image";
import React from "react";
import { gold } from "../colors/color";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { DecorativeLine } from "../common/DecorativeLine";
import { useSelector } from "react-redux";


export default function ShopByCategory() {

    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );

    return (
        <section className="w-screen bg-black h-full lg:my-16 my-12 relative">

            {/* <div style={{background:gold.dark}} className="absolute top-0 left-1/2 -translate-1/2 w-[200] h-[5] rounded-full "></div> */}

            <div className="absolute lg:w-[500] md:w-full w-full h-[400]  -rotate-90 top-0 -right-30">
                <Image src={'/designs/d1.png'} sizes="full" alt="designs" fill className="absolute opacity-5 bottom-0 right-0 w-full h-full object-cover object-top" />
            </div>

            <div className="max-w-330 mx-auto lg:px-6 px-4">

                {/* Heading */}
                <h1 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                    {/* Main Heading */}
                    <span
                        className="relative z-10 lg:text-4xl text-3xl font-extrabold tracking-wide inline-block bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                `linear-gradient(90deg,${gold.dark},${gold.base},${gold.dark})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            fontFamily: "serif",
                        }}
                    >
                        Shop By Category
                    </span>

                    {/* Glow Effect
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 w-72 h-16 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #d4af37, #fff2b3, #d4af37)"
                        }}
                    /> */}

                    {/* Decorative Line */}
                    <DecorativeLine />
                </h1>


                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    speed={500}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        480: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                >

                    {
                        category_loading
                            ?

                            [...Array(6)].map((_, index) => (
                                <SwiperSlide key={index}>

                                    <div className="flex flex-col gap-10 items-center animate-pulse">

                                        {/* IMAGE SKELETON */}
                                        <div
                                            className="
                            relative
                           lg:w-[120]
                            lg:h-[120]
                            md:w-[150]
                            md:h-[150]
                            sm:w-[130]
                            sm:h-[130]
                            w-[150]
                            h-[150]
                            rounded-full
                            overflow-hidden 
                            bg-linear-to-br
                            from-[#1a1a1a]
                            via-[#2b2b2b]
                            to-[#1a1a1a]
                        "
                                        />

                                        {/* TITLE SKELETON */}
                                        <div
                                            className="
                            mt-5
                            h-4
                            w-24
                            rounded-full
                            bg-linear-to-r
                            from-[#5c4308]
                            via-[#b8860b]
                            to-[#5c4308]
                        "
                                        />

                                    </div>

                                </SwiperSlide>
                            )

                            )

                            :

                            categories.length === 0

                                ?

                                <div className="w-full flex justify-center py-10">

                                    <div
                                        className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-[#5c4308]
                        bg-black
                        px-10
                        py-14
                        text-center
                        max-w-2xl
                        w-full
                        shadow-2xl
                    "
                                    >

                                        {/* GLOW */}
                                        <div
                                            className="
                            absolute
                            top-[-100]
                            left-1/2
                            -translate-x-1/2
                            w-[300]
                            h-[300]
                            rounded-full
                            blur-3xl
                            opacity-20
                        "
                                            style={{
                                                background:
                                                    "linear-gradient(135deg,#d4af37,#fff2b3)"
                                            }}
                                        />

                                        {/* ICON */}
                                        <div
                                            className="
                            relative
                            z-10
                            w-20
                            h-20
                            mx-auto
                            rounded-full
                            flex
                            items-center
                            justify-center
                            text-4xl
                            mb-6
                        "
                                            style={{
                                                background: `
                                linear-gradient(
                                    135deg,
                                    #8a6a12,
                                    #d4af37,
                                    #fff2b3
                                )
                            `,
                                                color: "#000"
                                            }}
                                        >
                                            ✦
                                        </div>

                                        {/* TITLE */}
                                        <h2
                                            className="
                            relative
                            z-10
                            text-3xl
                            font-extrabold
                            mb-4
                            tracking-wide
                        "
                                            style={{
                                                color: "#E6C766"
                                            }}
                                        >
                                            No Categories Found
                                        </h2>

                                        {/* DESC */}
                                        <p
                                            className="
                            relative
                            z-10
                            text-gray-400
                            text-lg
                            leading-relaxed
                            max-w-xl
                            mx-auto
                        "
                                        >
                                            New premium collections and luxury
                                            categories will be available soon.
                                        </p>

                                        {/* LINE */}
                                        <div
                                            className="
                            relative
                            z-10
                            w-40
                            h-[2]
                            mx-auto
                            mt-8
                            rounded-full
                        "
                                            style={{
                                                background: `
                                linear-gradient(
                                    to right,
                                    transparent,
                                    #d4af37,
                                    transparent
                                )
                            `
                                            }}
                                        />
                                    </div>
                                </div>

                                :

                                categories.map((item) => {
                                    return (
                                        <SwiperSlide key={item.category_id}>

                                            <Link href={'/categories'}>

                                                <div className="flex flex-col items-center group cursor-pointer">

                                                    {/* IMAGE CIRCLE */}
                                                    <div
                                                        style={{
                                                            borderColor: gold.dark,
                                                        }}
                                                        className="
                                        relative 
                                        lg:w-[120]
                                        lg:h-[120]
                                        md:w-[150]
                                        md:h-[150]
                                        sm:w-[130]
                                        sm:h-[130]
                                        w-[100]
                                        h-[100]
                                        rounded-full 
                                        overflow-hidden 
                                        border-2
                                        duration-500
                                        hover:scale-105
                                        hover:rotate-3
                                        shadow-[0_0_10px_rgba(212,175,55,0.15)]
                                        hover:shadow-[0_0_25px_rgba(212,175,55,0.55)]
                                    "
                                                    >

                                                        {/* GLOW RING */}
                                                        <div className="absolute inset-0 rounded-full border border-[#fff2b3]/30 z-20 scale-90 group-hover:scale-100 duration-500" />

                                                        {/* IMAGE */}
                                                        <Image
                                        loading='lazy'

                                                            src={item.category_image}
                                                            fill
                                                            sizes="full"
                                                            alt={item.category_name}
                                                            className="
                                            object-cover
                                            object-center
                                            group-hover:scale-125
                                            duration-700
                                            w-full h-full
                                        "
                                                        />

                                                        {/* OVERLAY */}
                                                        <div className="
                                        absolute 
                                        inset-0 
                                        bg-linear-to-t 
                                        from-black/70 
                                        via-black/10 
                                        to-transparent
                                        opacity-70
                                        group-hover:opacity-40
                                        duration-500
                                    " />

                                                    </div>

                                                    {/* TITLE */}
                                                    <h2
                                                        className="
                                        mt-5
                                        text-center
                                        tracking-[0.18em]
                                        uppercase
                                        text-sm
                                        sm:text-base
                                        font-semibold
                                        duration-300
                                        group-hover:scale-110
                                    "
                                                        style={{
                                                            color: gold.base,
                                                        }}
                                                    >
                                                        {item.category_name}
                                                    </h2>

                                                    {/* UNDERLINE */}
                                                    <div
                                                        className="
                                        mt-2
                                        h-0.5
                                        w-0
                                        group-hover:w-16
                                        duration-500
                                        rounded-full
                                    "
                                                        style={{
                                                            background:
                                                                "linear-gradient(to right, #8a6a12, #d4af37, #fff2b3)",
                                                        }}
                                                    />
                                                </div>

                                            </Link>

                                        </SwiperSlide>
                                    );
                                })
                    }
                </Swiper>

            </div>
        </section>
    );
}