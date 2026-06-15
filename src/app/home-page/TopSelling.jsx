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
            }} className="max-w-330 mx-auto lg:px-6 sm:px-4">

                {/* Side Lines */}
                <div className="flex items-center justify-center gap-5">

                    <div
                        className="lg:w-28 w-16 h-[1]"
                        style={{
                            background: `linear-gradient(to right, transparent, ${gold.base})`
                        }}
                    />

                    {/* Main Heading */}
                    <h2 className="relative">



                        <span
                            className="relative sm:uppercase z-10 block lg:text-4xl md:text-3xl text-2xl font-black tracking-wider "
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
                            ✦ Top selling 
                        </span>


                    </h2>

                    <div
                        className="lg:w-28 w-16 h-[1]"
                        style={{
                            background: `linear-gradient(to left, transparent, ${gold.base})`
                        }}
                    />

                </div>

                <div className='my-10'>
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
                        (
                            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 gap-y-8'>
                                {top_selling?.map((item, index) => (
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
                    }
                </div>
            </div>
        </section>

    )
}


