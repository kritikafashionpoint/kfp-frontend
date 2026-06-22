'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { Heart, ShoppingBag, ShoppingCart, Trash2, X } from 'lucide-react'
import Image from 'next/image'
import BuyNowButton from './BuyNowButton'
import AddToCartButton from './AddToCartButton'
import Link from 'next/link'
import GetNow from './GetNow'
import { useSelector } from 'react-redux'
import Loading from '../../../Loading'

export default function WishListModel({ wishListModelOpen, setWishListModelOpen }) {

    const wishListDataList = useSelector((store) => store.wishlist.wishlistData)


    const [getNowModel, setGetNowModel] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState(null);

    const wishListLoading = useSelector((state) => state.wishlist.wishlist_data_loading)



    return (
        <>
            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            {/* Overlay */}
            <div
                onClick={() => setWishListModelOpen(false)}
                className={`
                    fixed inset-0 z-105
                    bg-black/70 backdrop-blur-sm
                    duration-1000
                    top-0 left-0
                    ${wishListModelOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'}
                `}
            />

            {/* Model */}
            <div
                className={`
                    fixed top-0 right-0
                    lg:w-[350] md:w-[300] sm:w-[300] w-[300]
                    h-screen
                    z-110
                    duration-500
                    overflow-hidden
                    ${wishListModelOpen
                        ? 'translate-x-0'
                        : 'translate-x-full'}
                  
                `}
                style={{
                    background: `
                        linear-gradient(
                            180deg,
                            #050505 0%,
                            #0b0b0b 35%,
                            #120d02 100%
                        )
                    `,
                    borderLeft: `1px solid ${gold.base}40`
                }}
            >

                {/* Glow */}
                <div
                    style={{ background: gold.base }}
                    className='absolute top-0 right-0 w-[250] h-[250] rounded-full blur-[120px] opacity-10'
                />

                {/* Header */}
                <div
                    style={{
                        borderBottom: `1px solid ${gold.base}25`
                    }}
                    className='flex items-center justify-between px-6 py-5 relative z-10'
                >

                    <div className='flex items-center gap-3'>

                        <div
                            style={{
                                background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`
                            }}
                            className='w-12 h-12 rounded-full flex items-center justify-center '
                        >
                            <Heart className='text-black fill-black' size={22} />
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold text-[#F5D97A] tracking-wide'>
                                Wishlist
                            </h2>

                            <p className='text-sm text-gray-400 tracking-wide'>
                                Your Premium Collection
                            </p>
                        </div>

                    </div>

                    <button
                        onClick={() => setWishListModelOpen(false)}
                        className='
                            w-10 h-10
                            rounded-full
                            bg-white/5
                            border border-white/10
                            flex items-center justify-center
                            text-[#F5D97A]
                            hover:rotate-90
                            hover:bg-[#d4af37]
                            hover:text-black
                            duration-300
                            cursor-pointer
                        '
                    >
                        <X size={18} />
                    </button>

                </div>

                {/* Wishlist Items */}
                <div className='h-[calc(100vh-180px)] overflow-y-auto px-5 py-5 space-y-5 custom-scrollbar'>

                    {wishListLoading ?
                        (<div className="lg:p-10 p-5 text-white text-lg tracking-wide">
                            Loading Cart...
                        </div>)
                        :
                        (

                            wishListDataList.length == 0 ?
                                <WishlistEmpty setWishListModelOpen={setWishListModelOpen} />
                                :

                                wishListDataList.map((item, index) => (
                                    <Link
                                        onClick={() => setWishListModelOpen(false)}
                                        key={index}
                                        href={`/product/${item.p_slug}`}
                                        className="block h-fit"
                                    >
                                        <article
                                            style={{ borderColor: gold.dark }}
                                            className="
                    bg-white
                    border
                    cursor-pointer
                    rounded-xl
                    shadow-md
                    transition-all
                    duration-300
                    group
                    h-fit
                    flex
                    flex-col
                    overflow-hidden
                    relative
                    hover:shadow-xl
                "
                                        >

                                            {/* TOP SELLING BADGE */}
                                            {item.is_top_selling && (
                                                <div className="absolute top-3 left-3 z-40">
                                                    <p
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            background: `linear-gradient(
                        135deg,
    #7a5a08 0%,
    #a67c1b 15%,
    #d4af37 35%,
    #f5d97b 50%,
    #d4af37 65%,
    #a67c1b 85%,
    #7a5a08 100%
                    )`,
                                                        }}
                                                        className="
                                text-black
                                tracking-wide
                                py-1
                                px-3
                                rounded-full
                                font-semibold
                                text-sm
                                shadow-2xl
                                shadow-black/70
                            "
                                                    >
                                                        Top Selling
                                                    </p>
                                                </div>
                                            )}

                                            {/* DISCOUNT BADGE */}
                                            {!!item.p_discount && (
                                                <div
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, #CC1B1B, #540202)",
                                                        fontFamily: "Poppins",
                                                    }}
                                                    className="
                            absolute
                            top-0
                            right-0
                            py-1
                            px-2
                            rounded-bl-lg
                            tracking-wider
                            text-white
                            z-50
                            text-[13px]
                            font-normal
                        "
                                                >
                                                    -{item.p_discount}%
                                                </div>
                                            )}

                                            {/* IMAGE */}
                                            <div className="bg-black relative">
                                                <div className="relative h-[190] overflow-hidden">

                                                    <Image
                                                        loading='lazy'

                                                        src={item.index_image || "/images/no-image.png"}
                                                        alt={item.p_title || "Product Image"}
                                                        fill
                                                        sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 50vw,
                                25vw
                            "
                                                        className="
                                object-cover
                                object-center
                                duration-500
                                group-hover:scale-105
                            "
                                                    />
                                                </div>
                                            </div>

                                            {/* CONTENT */}
                                            <div style={{ borderColor: gold.dark }}
                                                className="sm:border-x sm:border-b">
                                                <div
                                                    className="
                                                                  border-t
                                                                  px-5
                                                                  pt-5
                                                                  pb-3
                                                                  bg-black
                                                                  flex-1
                                                                  flex
                                                                  flex-col
                                                              "
                                                >

                                                    {/* TITLE */}
                                                    <div className="flex-1">

                                                        <h2
                                                            className="
                                                                          text-xl
                                                                          text-[#E6C766]
                                                                          font-extrabold
                                                                          relative
                                                                          line-clamp-1
                                                                      "
                                                        >
                                                            {item.p_title || "Untitled Product"}

                                                            <span
                                                                style={{
                                                                    background: `
                                                                                  linear-gradient(
                                                                                      to left,
                                                                                      #8c670a,
                                                                                      #d4af37,
                                                                                      #f5df8b
                                                                                  )
                                                                              `,
                                                                }}
                                                                className="
                                                                              block
                                                                              w-[50]
                                                                              h-[2]
                                                                              mt-2
                                                                              rounded-full
                                                                              duration-500
                                                                              group-hover:w-[90]
                                                                          "
                                                            />
                                                        </h2>

                                                        {/* DESCRIPTION */}
                                                        <p
                                                            style={{ fontFamily: "Poppins" }}
                                                            className="
                                                                          text-sm
                                                                          mt-2
                                                                          text-gray-300
                                                                          line-clamp-2
                                                                          min-h-[30]
                                                                      "
                                                        >
                                                            {item.p_short_description || "Best Artificial Premium Jwellery For your special Occasion"}
                                                        </p>
                                                    </div>

                                                    {/* PRICE */}
                                                    <div className="flex items-center sm:gap-3 gap-1.5">

                                                        <p
                                                            style={{ color: gold.base }}
                                                            className="sm:text-2xl text-xl font-extrabold"
                                                        >
                                                            ₹{item.p_customer_price || 0}
                                                        </p>

                                                        {!!item.p_customer_price && (
                                                            <p className="text-sm text-gray-400 line-through">
                                                                ₹{item.p_sale_price}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* BUTTONS */}
                                                <div className="grid grid-cols-2 sm:gap-2 gap-4 px-5 pb-5 bg-black">

                                                    <AddToCartButton item={item} />

                                                    <BuyNowButton
                                                        setSelectedProduct={setSelectedProduct}
                                                        item={item}
                                                        getNowModel={getNowModel}
                                                        setGetNowModel={setGetNowModel}
                                                    />
                                                </div>
                                            </div>

                                        </article>
                                    </Link>
                                ))
                        )
                    }


                </div>

                {/* Footer */}
                <div
                    style={{
                        borderTop: `1px solid ${gold.base}20`
                    }}
                    className='px-5 py-5 bg-black/40 backdrop-blur-xl'
                >
                    <Link href={'/wishlist'}>
                        <button
                            style={{
                                background: `linear-gradient(
                                135deg,
                                #4d3900 0%,
                                #7a5a08 18%,
                                #b8860b 38%,
                                #d4af37 50%,
                                #f5df8b 58%,
                                #c9971a 72%,
                                #7a5a08 88%,
                                #4d3900 100%
                            )`
                            }}
                            className='
                            w-full
                            py-3
                            rounded-full
                            text-black
                            font-bold
                            text-lg
                            tracking-wide
                            hover:scale-[1.01]
                            duration-300
                            cursor-pointer
                        '
                        >
                            Explore Wishlist
                        </button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export function WishlistEmpty({ setWishListModelOpen }) {
    return (
        <div className="w-full flex flex-col items-center justify-center h-[68vh] py-10 px-6 text-center">
            {/* Icon */}
            <div
                className="
            w-20 h-20
            rounded-full
            flex items-center justify-center
            bg-linear-to-tl
            from-[#000000]
            via-[#D4AF37]
            to-[#D4AF37]
        "
            >
                <ShoppingCart size={40} className="text-black" />
            </div>

            {/* Title */}
            <h2 className="mt-8 text-3xl font-bold text-[#F5D97A]">
                Your WishList is Empty
            </h2>


            {/* Button */}
            <Link href="/shop-now">
                <button
                    onClick={() => setWishListModelOpen(false)}
                    className="
                        mt-8
                        px-10
                        py-3
                        rounded-full
                        text-black
                        font-bold
                        tracking-wide
                        hover:scale-105
                        duration-300
                    "
                    style={{
                        background: `
                    linear-gradient(
                        135deg,
                        #4d3900 0%,
                        #7a5a08 18%,
                        #b8860b 38%,
                        #d4af37 50%,
                        #f5df8b 58%,
                        #c9971a 72%,
                        #7a5a08 88%,
                        #4d3900 100%
                    )
                `,
                    }}
                >
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}