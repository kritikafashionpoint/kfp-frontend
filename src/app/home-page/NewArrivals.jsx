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
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoryLoading } from '../redux/slices/categorySlice';
import { setProductLoading, setProducts } from '../redux/slices/productSlice';
import ProductCardSkeleton from '../product/[slug]/ProductSkelaton';


export default function NewArrivals() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleItems, setVisibleItems] = useState(10);

    const handleViewMore = () => {
        setVisibleItems((prev) => prev + 10);
    };

    //get products and categories
    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );
    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const new_arrivals = products.slice(0, visibleItems)


    const swiperRef = useRef(null)

    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <section className="w-full bg-white lg:py-10 py-5 overflow-hidden relative">
            {getNowModel && <Overlay />}
            <GetNow
                selectedProduct={selectedProduct}
                getNowModel={getNowModel}
                setGetNowModel={setGetNowModel}
            />

            {/* Premium Heading */}
            <div className="relative flex flex-col items-center overflow-hidden">

                {/* Side Lines */}
                <div className="flex items-center  justify-center sm:gap-5 gap-0">
                    <div
                        className="lg:w-28 w-20 h-[1] bg-linear-to-r from-transparent via-black to-transparent"

                    />
                    {/* Main Heading */}
                    <h2 className="relative flex items-center justify-center lg:mb-14 mb-8">

                        {/* Main Heading */}
                        <span
                            className="relative Poppins z-10 lg:text-3xl text-2xl font-semibold tracking-wide inline-block text-black"
                        >
                            New Arrivals
                        </span>

                    </h2>

                    <div
                        className="lg:w-28 w-20 h-[1] bg-linear-to-r from-transparent via-black to-transparent"
                    />
                </div>

            </div>




            <div className='max-w-330 mx-auto lg:px-6 px-4 '>

                <div>
                    {products_loading ? (

                        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 sm:gap-y-8  gap-y-5'>
                            {[...Array(5)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>

                    ) : new_arrivals.length === 0 ? (

                        <NoNewArrFound title={'No Top Selling Products Yet'} />

                    ) :

                        (
                            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 gap-x-4 sm:gap-y-8 gap-y-5'>
                                {new_arrivals?.map((item, index) => (
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
            sm:rounded-3xl
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