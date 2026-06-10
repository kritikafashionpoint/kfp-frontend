"use client"
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react'
import Link from 'next/link';
import Overlay from '../common/Overlay';
import GetNow from '../common/GetNow';
import { DecorativeLine } from '../common/DecorativeLine';
import BuyNowButton from '../common/BuyNowButton';
import AddToCartButton from '../common/AddToCartButton';
import ProductCard from '../categories/[slug]/ProductCard';
import { useSelector } from 'react-redux';
import { NoNewArrFound } from './NewArrivals';
import ProductCardSkeleton from '../categories/[slug]/ProductSkelaton';

export default function TopSelling() {
    const swiperRef = useRef(null)

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [getNowModel, setGetNowModel] = useState(false)

    // const addToCart = (e) => {

    //     e.preventDefault()
    //     e.stopPropagation()
    //     // if (token) {
    //     //     add to cart api
    //     // }
    //     // else {
    //     //     redirect login page
    //     // }
    // }

    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const top_selling = products.filter(item => item.is_top_selling === true)

    return (
        <section style={{ background: 'black' }} className="w-screen overflow-x-hidden  pb-5 relative ">

            {getNowModel && <Overlay />}

            <GetNow selectedProduct={selectedProduct} getNowModel={getNowModel} setGetNowModel={setGetNowModel} />
            {/* <div className="absolute lg:w-[500] w-full bottom-0 left-0">
                <Image src={'/designs/d1.png'} sizes="full" alt="designs" fill className="absolute opacity-[0.05] bottom-0 right-0 w-full h-full object-cover object-bottom" />
            </div> */}


            {/* <div style={{ background: gold.base }} className='w-[300] lg:block hidden mx-auto h-[1.5] rounded-full absolute top-full left-0'></div>
            <div style={{ background: gold.base }} className='w-[300] lg:block hidden mx-auto h-[1.5] rounded-full absolute top-full right-0'></div> */}

            <div style={{
                borderImage: `linear-gradient(
                    to right,
                    transparent,
                    ${gold.dark}55,
                    transparent
                ) 1`
            }} className="max-w-330 mx-auto lg:px-6 px-4">

                <h1 className="relative flex flex-col items-center justify-center">

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
                        Top Selling Products
                    </span>

                    <DecorativeLine />
                </h1>

                <div>
                    {products_loading ? (

                        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8'>
                            {[...Array(5)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>

                    ) : top_selling.length === 0 ? (

                        <NoNewArrFound title={'No Top Selling Products Yet'} />

                    )
                        :
                        top_selling.length <= 4 ?
                            (
                                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-x-5 gap-y-8'>
                                    {top_selling.map((item, index) => (
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
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        640: { slidesPerView: 3 },
                                        1024: { slidesPerView: 5 },
                                    }}
                                >
                                    {top_selling.map((item, index) => (
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


