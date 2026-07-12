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
import ProductCard from '../product/[slug]/ProductCard';
import { get_api } from '../api_helper/api_helper';
import ProductCardSkeleton from '../product/[slug]/ProductSkelaton';


export default function CategoryWiseSections({ item, index, loading, setLoading, category_products_loading }) {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [getNowModel, setGetNowModel] = useState(false)

    console.log("Category Item:", item);

    return (
        <section className="w-full bg-white relative">

            <img
                src={'/designs/d4.png'}
                sizes="full"
                alt="designs"
                fill
                className="absolute -z-10 opacity-[0.02] bottom-0 right-0 w-screen h-full object-cover object-top"
            />

            {getNowModel && <Overlay />}
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            <div className='flex justify-center relative z-50'>
                <div className="flex items-center gap-0">

                    <div
                        className="lg:w-28 w-20 h-[1] bg-linear-to-r from-transparent via-black to-transparent"

                    />

                    <span style={{
                        fontFamily: 'Poppins',
                    }}
                        className='font-bold rounded-full bg-[gold] text-black lg:text-2xl md:text-xl text-lg lg:py-2 py-1.5 lg:px-16 md:px-12 px-10 lg:my-10 my-10 capitalize '> {item.category_name}
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

                    <div
                        className="lg:w-28 w-20 h-[1] bg-linear-to-r from-transparent via-black to-transparent"
                    />

                </div>

            </div>

            <div className='max-w-330 mx-auto lg:px-6 px-4 '>

                <div className='lg:mb-5 mb-5'>
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 gap-x-3 sm:gap-y-8 gap-y-5 sm:my-10'>
                        {category_products_loading
                            ? Array.from({ length: 5 }).map((_, index) => (
                                <ProductCardSkeleton />
                            ))
                            :

                            item?.products.map((product, index) => (
                                (
                                    <ProductCard
                                        key={index}
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