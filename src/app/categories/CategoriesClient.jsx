'use client'
import React, { useRef, useState } from 'react'
import { gold } from '../colors/color'
import Link from 'next/link'
import Image from 'next/image'
import BuyNowButton from '../common/BuyNowButton'
import AddToCartButton from '../common/AddToCartButton'
import Overlay from '../common/Overlay'
import GetNow from '../common/GetNow'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../product/[slug]/ProductCard'
import { NoNewArrFound } from '../home-page/NewArrivals'
import { Autoplay } from 'swiper/modules'
import { useSelector } from 'react-redux'
import ProductCardSkeleton from '../product/[slug]/ProductSkelaton'
import { ChevronDown } from "lucide-react";

export default function CategoriesClient() {

    const [getNowModel, setGetNowModel] = useState(false)
    const swiperRef = useRef(null)

    const [selectedProduct, setSelectedProduct] = useState(null);



    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );

    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const [selectedCategory, setSelectedCategory] = useState(null)


    const filteredProducts = selectedCategory
        ? products.filter(
            item => item.category_id === selectedCategory
        )
        : products;

    const [showCategories, setShowCategories] = useState(false);


    return (
        <section className='w-full h-full relative bg-no-repeat bg-cover bg-center'>

            {getNowModel && <Overlay />}

            {<GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />}



            {/* <div className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.9)]'></div> */}
            <div className='max-w-330 mx-auto lg:px-6 sm:px-4 '>
                <div className=' lg:py-10 py-5 '>

                    {/* categoy modal */}
                    <div
                        className="w-full h-fit lg:mb-5 mb-3 z-50 rounded-3xl py-5 relative overflow-hidden backdrop-blur-2xl"

                    >
                        {/* Heading */}
                        <div
                            onClick={() => setShowCategories(!showCategories)}
                            className="w-full flex items-center justify-between mb-8 relative z-10 ">
                            <div className="flex items-center gap-4 ">
                                <div
                                    className="w-2 h-10 rounded-full shadow-lg"
                                    style={{
                                        background: `linear-gradient(to bottom, ${gold.light}, ${gold.dark})`,
                                    }}
                                />

                                <h1
                                    className="text-3xl Poppins font-bold tracking-[6px] capitalize Poppins"
                                    style={{
                                        color: gold.light,
                                        textShadow: `0 0 20px ${gold.base}40`,
                                    }}
                                >
                                    <span className="sm:inline hidden Poppins">All</span> Categories
                                </h1>
                            </div>


                            <button
                                className="text-white hover:scale-110 transition-all duration-300"
                            >
                                <ChevronDown
                                    size={30}
                                    className={`transition-transform duration-300 ${showCategories ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                        </div>




                        {/* Categories */}
                        <div
                            className={`
    overflow-hidden
    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${showCategories
                                    ? "max-h-[1000] opacity-100 translate-y-0"
                                    : "max-h-0 opacity-0 -translate-y-10"
                                }
  `}
                        >
                            <ul className="flex flex-wrap items-center gap-4 relative z-10">
                                {/* ALL BUTTON */}
                                <li
                                    onClick={() => setSelectedCategory(null)}
                                    style={
                                        selectedCategory == null
                                            ? {
                                                background:
                                                    "linear-gradient(135deg,#8a6a12 0%,#b8860b 20%,#d4af37 40%,#fff2b3 50%,#d4af37 60%,#b8860b 80%,#8a6a12 100%)",
                                                border: "1px solid rgba(255,242,179,0.4)",
                                            }
                                            : {
                                                border: `1px solid ${gold.base}50`,
                                            }
                                    }
                                    className={`${selectedCategory == null
                                        ? "linear-gradient(to left,#8a6a12 0%,#b8860b 20%,#d4af37 40%,#fff2b3 50%,#d4af37 60%,#b8860b 80%,#8a6a12 100%) text-black"
                                        : "bg-transparent text-white"
                                        } lg:px-8 lg:py-2 px-5 py-1 capitalize rounded-full tracking-wide cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 font-bold active:scale-95 backdrop-blur-md`}
                                >
                                    All
                                </li>

                                {categories.map((item) => (
                                    <li
                                        onClick={() => setSelectedCategory(item.category_id)}
                                        key={item.category_id}
                                        className={`
        lg:px-8
        lg:py-2
        px-5
        py-2
        capitalize
        rounded-full
        tracking-wide
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        font-bold
        active:scale-95
        backdrop-blur-md
        ${item.category_id === selectedCategory
                                                ? "text-black shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                                                : "text-white"
                                            }
    `}
                                        style={
                                            item.category_id === selectedCategory
                                                ? {
                                                    background:
                                                        "linear-gradient(135deg,#8a6a12 0%,#b8860b 20%,#d4af37 40%,#fff2b3 50%,#d4af37 60%,#b8860b 80%,#8a6a12 100%)",
                                                    border: "1px solid rgba(255,242,179,0.4)",
                                                }
                                                : {
                                                    border: `1px solid ${gold.base}50`,
                                                }
                                        }
                                    >
                                        {item.category_name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='mb-10'>
                        <p className='text-gray-300 Poppins'>Buy stylish artificial jewellery online featuring Bajuband, Kamarband, Rings, Earrings, Maang Tikka, Necklaces, Bangles, and Bridal Jewellery. Our collection combines traditional craftsmanship with modern fashion to suit weddings, festivals, and daily wear. Find the perfect imitation jewellery pieces to elevate your look at the best prices.</p>

                        <p className='text-gray-300 Poppins mt-2'> Explore our exclusive collection of artificial jewellery designed for every style and occasion. From traditional Bajuband and Kamarband to elegant rings, earrings, and bridal sets, discover timeless fashion accessories. Shop premium-quality imitation jewellery online with nationwide delivery.</p>
                    </div>

                    <div className="lg:mb-5 mb-5 lg:p-0">
                        {products_loading ? (
                            [...Array(5)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                        ) : filteredProducts.length === 0 ? (
                            <NoProductFoundInThisCategory />
                        ) : (
                            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  sm:gap-x-5 sm:gap-y-8">
                                {filteredProducts.map((item, index) => (
                                    <ProductCard
                                        setSelectedProduct={setSelectedProduct}
                                        key={item.product_id || index}
                                        item={item}
                                        index={index}
                                        getNowModel={getNowModel}
                                        setGetNowModel={setGetNowModel}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    )
}


export function NoProductFoundInThisCategory() {
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
            py-10
            lg:px-6 sm:px-4
            text-center
            max-w-2xl
            mx-auto
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
                lg:text-3xl
                text-2xl
                font-extrabold
                mb-4
                tracking-wide
            '
                    style={{
                        color: "#E6C766"
                    }}
                >
                    No Products Found In This Category
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