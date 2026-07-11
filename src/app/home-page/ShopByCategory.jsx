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
        <section className="w-screen bg-white h-full lg:py-16 sm:py-12 py-10 relative">

            {/* <div style={{background:gold.dark}} className="absolute top-0 left-1/2 -translate-1/2 w-[200] h-[5] rounded-full "></div> */}

            <div className="absolute lg:w-[500] md:w-full w-full h-[400]  -rotate-90 top-0 -right-30">
                <Image src={'/designs/d1.png'} sizes="full" alt="designs" fill className="absolute opacity-5 bottom-0 right-0 w-full h-full object-cover object-top" />
            </div>

            <div className="max-w-330 mx-auto lg:px-6 px-4">

                {/* Heading */}
                <div className="flex items-center justify-center sm:gap-5 gap-0">
                    {/* Main Heading */}
                    <h2 className="relative flex items-center justify-center lg:mb-14 mb-8">

                        {/* Main Heading */}
                        <span
                            className="relative Poppins z-10 lg:text-3xl text-2xl font-semibold tracking-wide inline-block text-black"
                        >
                            Shop By Category
                        </span>

                        <div className="absolute top-[115%] left-1/2 -translate-x-1/2 z-99 w-1/2 h-[1.5] bg-linear-to-r from-transparent via-black to-transparent"></div>

                    </h2>

                </div>


                <div
                    className="
    flex items-center gap-5
    w-screen lg:w-full
    overflow-x-auto lg:overflow-visible
    flex-nowrap lg:flex-wrap
  "
                >                    {
                        category_loading
                            ?

                            [...Array(6)].map((_, index) => (

                                <div className="flex flex-col gap-10 items-center animate-pulse">

                                    {/* IMAGE SKELETON */}
                                    <div
                                        className="
            relative
            lg:w-[120px]
            lg:h-[120px]
            md:w-[150px]
            md:h-[150px]
            sm:w-[130px]
            sm:h-[130px]
            w-[120px]
            h-[120px]
            rounded-full
            overflow-hidden
            border
            border-amber-200
            shadow-[0_8px_25px_rgba(212,175,55,0.12)]
            bg-gradient-to-br
            from-white
            via-amber-50
            to-white
        "
                                    />

                                    {/* TITLE SKELETON */}
                                    <div
                                        className="
            mt-5
            h-4
            w-24
            rounded-full
            bg-gradient-to-r
            from-amber-200
            via-amber-300
            to-amber-200
        "
                                    />

                                </div>

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
      bg-white
      border
      border-amber-200
      px-10
      py-14
      text-center
      max-w-2xl
      w-full
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    "
                                    >
                                        {/* Soft Glow */}
                                        <div
                                            className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-80
        h-80
        rounded-full
        blur-3xl
        opacity-40
      "
                                            style={{
                                                background:
                                                    "radial-gradient(circle, rgba(212,175,55,.25) 0%, rgba(255,255,255,0) 70%)",
                                            }}
                                        />

                                        {/* Icon */}
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
        shadow-lg
      "
                                            style={{
                                                background:
                                                    "linear-gradient(135deg,#B8860B,#D4AF37,#F8E7A1)",
                                                color: "#fff",
                                            }}
                                        >
                                            ✦
                                        </div>

                                        {/* Title */}
                                        <h2
                                            className="
        relative
        z-10
        text-3xl
        font-extrabold
        mb-4
      "
                                            style={{ color: "#8A6A12" }}
                                        >
                                            No Categories Found
                                        </h2>

                                        {/* Description */}
                                        <p
                                            className="
        relative
        z-10
        text-gray-600
        text-lg
        leading-relaxed
        max-w-xl
        mx-auto
      "
                                        >
                                            New premium collections and luxury categories will be available soon.
                                        </p>

                                        {/* Divider */}
                                        <div
                                            className="
        relative
        z-10
        w-40
        h-[2px]
        mx-auto
        mt-8
        rounded-full
      "
                                            style={{
                                                background:
                                                    "linear-gradient(to right, transparent, #D4AF37, transparent)",
                                            }}
                                        />
                                    </div>
                                </div>

                                :

                                categories?.map((item) => {
                                    return (

                                        <Link href={`/categories/${item.category_slug}`}>

                                            <div className="flex flex-col items-center group cursor-pointer">

                                                {/* IMAGE CIRCLE */}
                                                <div
                                                    className="
                                        relative 
                                        lg:w-[110]
                                        lg:h-[110]
                                        md:w-[110]
                                        md:h-[110]
                                        sm:w-[110]
                                        sm:h-[110]
                                        w-[90]
                                        h-[90]
                                        rounded-full 
                                        overflow-hidden 
                                        border
                                        border-gray-400
                                        duration-500
                                        hover:scale-105
                                        hover:rotate-3
                                        shadow-[0_0_10px_rgba(212,175,55,0.15)]
                                        hover:shadow-[0_0_25px_rgba(212,175,55,0.55)]
                                    "
                                                >

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
                                        capitalize
                                        text-sm
                                        sm:text-base
                                        Poppins
                                        font-semibold
                                        duration-300
                                        group-hover:scale-110
                                    "
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

                                                />
                                            </div>

                                        </Link>

                                    );
                                })
                    }
                </div>


            </div>
        </section>
    );
}