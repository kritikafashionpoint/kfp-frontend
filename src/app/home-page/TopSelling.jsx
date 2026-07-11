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
import ProductCard from '../product/[slug]/ProductCard';
import { useSelector } from 'react-redux';
import { NoNewArrFound } from './NewArrivals';
import ProductCardSkeleton from '../product/[slug]/ProductSkelaton';

export default function TopSelling() {
    const swiperRef = useRef(null)

    const [selectedProduct, setSelectedProduct] = useState(null);


    const [visibleItems, setVisibleItems] = useState(10);

    const handleViewMore = () => {
        setVisibleItems((prev) => prev + 10);
    };

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
        <section style={{ background: 'white' }} className="w-screen overflow-x-hidden  pb-5 relative ">


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

                {/* Side Lines */}
                <div className="flex items-center justify-center sm:gap-5 gap-1">

                    {/* Main Heading */}
                    <h2 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                        {/* Main Heading */}
                        <span
                            className="relative Poppins z-10 lg:text-3xl text-2xl font-semibold tracking-wide inline-block text-black"
                        >
                            Top Sellings
                        </span>

                    </h2>
                </div>

                <div className='my-0'>
                    {products_loading ? (

                        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-x-3 sm:gap-x-5 sm:gap-y-8 gap-y-5'>
                            {[...Array(5)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>

                    ) : top_selling.length === 0 ? (

                        <NoNewArrFound title={'No Top Selling Products Yet'} />

                    )
                        :
                        (
                            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-x-3 sm:gap-x-5 sm:gap-y-8 gap-y-5'>
                                {top_selling
                                    ?.slice(0, visibleItems)
                                    .map((item, index) => (
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

                {visibleItems < products.length && (
                    <div className="flex justify-end mt-10">
                        <button
                            onClick={handleViewMore}
                            className="
                            Poppins
                sm:px-8
                sm:py-3
                px-4
                py-2
                font-semibold
                transition-all
                duration-300
                border
                border-gray-700
                cursor-pointer
                text-black
            "
                        >
                            View More Products
                        </button>
                    </div>
                )}
            </div>
        </section>

    )
}


