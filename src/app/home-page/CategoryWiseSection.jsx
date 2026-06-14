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
import ProductCardSkeleton from '../categories/[slug]/ProductSkelaton';


export default function CategoryWiseSections({ item, index, loading, setLoading, category_products_loading }) {

    const [selectedProduct, setSelectedProduct] = useState(null);


    const swiperRef = useRef(null)
    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <section className="w-full bg-black overflow-hidden relative">

            <img
                src={'/designs/d1.png'}
                sizes="full"
                alt="designs"
                fill
                className="absolute opacity-[0.03] bottom-0 right-0 w-full h-full object-cover object-top"
            />

            {getNowModel && <Overlay />}
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            <div className='flex justify-center relative z-50'>
                <span style={{
                    fontFamily: 'Poppins',
                    background: `
                    linear-gradient(
                        to left,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}} className='font-bold rounded-full text-black lg:text-2xl md:text-xl text-lg lg:py-2 py-1.5 lg:px-16 md:px-12 px-10 lg:my-10 my-10 capitalize '>{item.category_name}
                    <div
                        className="
                                    absolute
                                    top-1/2
                                    left-1/2
                                    -translate-x-1/2
                                    w-screen
                                    h-[0.5]
                                    -z-50
                                "
                        style={{
                            background: `
                                        linear-gradient(
                                            90deg,
                                            transparent 0%,
                                            rgba(245,223,139,0.15) 20%,
                                            rgba(245,223,139,1) 50%,
                                            rgba(245,223,139,0.15) 80%,
                                            transparent 100%
                                        )
                                    `
                        }}
                    >

                    </div>
                </span>
            </div>

            <div className='max-w-330 mx-auto lg:px-6 sm:px-4 '>

                <div className='lg:mb-5 mb-5'>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 sm:gap-y-8 sm:my-10'>
                        {category_products_loading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCardSkeleton />
                                </SwiperSlide>
                            ))
                            : item?.products?.map((product, index) => (
                                (


                                    <ProductCard
                                        setSelectedProduct={setSelectedProduct}
                                        item={{
                                            ...product,
                                            index_image: product.images?.index_image,
                                            gallery_images: product.images?.gallery_images || []
                                        }}
                                        index={index}
                                        getNowModel={getNowModel}
                                        setGetNowModel={setGetNowModel}
                                    />
                                )
                            ))}
                    </div>

                </div>
            </div>
        </section>
    )
}