"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { gold } from '../colors/color';
import Image from 'next/image';
import GetNow from '../common/GetNow';
import Overlay from '../common/Overlay';
import { DecorativeLine } from '../common/DecorativeLine';
import BuyNowButton from '../common/BuyNowButton';
import AddToCartButton from '../common/AddToCartButton';
import ProductCard from '../categories/[slug]/ProductCard';
import { get_api } from '../api_helper/api_helper';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoryLoading } from '../redux/slices/categorySlice';
import { setProductLoading, setProducts } from '../redux/slices/productSlice';
import ProductCardSkeleton from '../categories/[slug]/ProductSkelaton';


export default function NewArrivals() {

    const [selectedProduct, setSelectedProduct] = useState(null);

    //get products and categories
    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );
    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const new_arrivals = products.slice(0, 10)


    const swiperRef = useRef(null)

    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <section className="w-full bg-black pt-10 lg:mt-10 md:mt-10 mt-5 overflow-hidden relative">
            {getNowModel && <Overlay />}
            <GetNow
                selectedProduct={selectedProduct}
                getNowModel={getNowModel}
                setGetNowModel={setGetNowModel}
            />

            {/* Premium Heading */}
            <div className="relative flex flex-col items-center lg:mb-16 mb-10 overflow-hidden">

                {/* Luxury Label */}
                <div
                    className="uppercase tracking-[0.4em] text-xs mb-3 font-semibold"
                    style={{ color: gold.base }}
                >
                    Latest Collection
                </div>

                {/* Side Lines */}
                <div className="flex items-center gap-5">

                    <div
                        className="lg:w-28 w-16 h-[1]"
                        style={{
                            background: `linear-gradient(to right, transparent, ${gold.base})`
                        }}
                    />

                    {/* Main Heading */}
                    <h1 className="relative">

                        {/* Glow */}
                        <div
                            className="absolute inset-0 blur-3xl opacity-40"
                            style={{
                                background: `radial-gradient(circle, ${gold.base}60, transparent 70%)`
                            }}
                        />

                        <span
                            className="relative z-10 block lg:text-5xl md:text-3xl text-2xl font-black tracking-wider capitalize"
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
                            New Arrivals
                        </span>

                        {/* Underline Accent */}
                        <div className="flex justify-center mt-3">
                            <div
                                className="h-[3] rounded-full"
                                style={{
                                    width: "90px",
                                    background: `linear-gradient(
                            90deg,
                            transparent,
                            ${gold.base},
                            transparent
                        )`
                                }}
                            />
                        </div>

                    </h1>

                    <div
                        className="lg:w-28 w-16 h-[1]"
                        style={{
                            background: `linear-gradient(to left, transparent, ${gold.base})`
                        }}
                    />

                </div>

                {/* Floating Sparkles */}
                <div
                    className="lg:block hidden absolute top-5 left-[45%] text-lg animate-pulse"
                    style={{ color: gold.light }}
                >
                    ✦
                </div>

                <div
                    className="lg:block hidden absolute top-6 right-[36.6%] text-sm animate-pulse"
                    style={{
                        color: gold.base,
                        animationDelay: "1s"
                    }}
                >
                    ✦
                </div>

            </div>




            <div className='max-w-330 mx-auto lg:px-6 px-4 '>

                <div>
                    {products_loading ? (

                        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8'>
                            {[...Array(5)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>

                    ) : new_arrivals.length === 0 ? (

                        <NoNewArrFound title={'No Top Selling Products Yet'} />

                    ) :

                        new_arrivals.length <= 4 ?
                            (
                                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8'>
                                    {new_arrivals.map((item, index) => (
                                        <ProductCard
                                            key={index}
                                            setSelectedProduct={setSelectedProduct}
                                            item={item}
                                            index={index}
                                            getNowModel={getNowModel}
                                            setGetNowModel={setGetNowModel}
                                        />
                                    ))}
                                </div>
                            )
                            :
                            (

                                <Swiper
                                    modules={[Autoplay]}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    spaceBetween={20}
                                    slidesPerView={4}
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        640: { slidesPerView: 3 },
                                        1024: { slidesPerView: 5 },
                                    }}
                                >
                                    {new_arrivals.map((item, index) => (
                                        <SwiperSlide key={item.product_id || index}>
                                            <ProductCard
                                                setSelectedProduct={setSelectedProduct}

                                                item={item}
                                                index={index}
                                                getNowModel={getNowModel}
                                                setGetNowModel={setGetNowModel}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                </div>
            </div>
        </section>
    )
}

export function NoNewArrFound({ title }) {
    return (
        <div
            className='
        w-full
        flex
        items-center
        justify-center
    '
        >
            <div
                className='
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#5c4308]
            bg-black
            px-10
            py-5
            text-center
            max-w-4xl
            w-full
            shadow-2xl
        '
            >

                {/* GLOW EFFECT */}
                <div
                    className='
                absolute
                top-[-100]
                left-1/2
                -translate-x-1/2
                w-[300]
                h-[300]
                rounded-full
                blur-3xl
                opacity-20
            '
                    style={{
                        background:
                            "linear-gradient(135deg,#d4af37,#fff2b3)"
                    }}
                />

                {/* ICON */}
                <div
                    className='
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
            '
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
                    className='
                relative
                z-10
                text-3xl
                font-extrabold
                mb-4
                tracking-wide
            '
                    style={{
                        color: "#E6C766"
                    }}
                >
                    {title ? title : 'No Products Found'}
                </h2>

                {/* DESCRIPTION */}
                <p
                    className='
                relative
                z-10
                text-gray-400
                text-lg
                leading-relaxed
                max-w-xl
                mx-auto
            '
                >
                    Fresh luxury collections are on the way.
                    Stay tuned for our latest premium arrivals and
                    exclusive designs.
                </p>

                {/* DECORATIVE LINE */}
                <div
                    className='
                relative
                z-10
                w-40
                h-[2]
                mx-auto
                mt-8
                rounded-full
            '
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
    )
} 