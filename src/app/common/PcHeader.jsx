'use client'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { IoDiamond } from 'react-icons/io5'
import Link from 'next/link'
import { FaRegHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { FaAngleDown, FaAngleUp, FaUser } from 'react-icons/fa6'
import Image from 'next/image'
import WishListModel from './WishListModel'
import CartModel from './CartModel'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

export default function PcHeader() {

    const [wishListModelOpen, setWishListModelOpen] = useState(false)

    const [cartModelOpen, setCartModelOpen] = useState(false)

    const [search, setSearch] = useState(false)

    const token = useSelector((store) => store.user.token)

    const cartData = useSelector((store) => store.cart.cartData)


    const premiumGoldGradient = `
        linear-gradient(
            135deg,
            #4d3900 0%,
            #8c670a 18%,
            #d4af37 38%,
            #f5df8b 50%,
            #e6c766 58%,
            #c9971a 72%,
            #7a5a08 88%,
            #4d3900 100%
        )
    `

    return (
        <>
            <WishListModel wishListModelOpen={wishListModelOpen} setWishListModelOpen={setWishListModelOpen} />
            <CartModel cartModelOpen={cartModelOpen} setCartModelOpen={setCartModelOpen} />

            <SearchModel search={search} setSearch={setSearch} />

            <div
                className='
                    lg:block hidden
                    w-full
                    relative
                    overflow-hidden
                    bg-white
                    border
                    border-gray-300
                    z-50
                    backdrop-blur-2xl
                    
                '
            >

                <div className='max-w-330 mx-auto lg:px-6 px-4 lg:py-1 py-3'>
                    <div className='flex items-center justify-between'>

                        <Logo premiumGoldGradient={premiumGoldGradient} />

                        <NavBar search={search} premiumGoldGradient={premiumGoldGradient} />

                        <UserPoints
                            cartData={cartData}
                            token={token}
                            cartModelOpen={cartModelOpen} setCartModelOpen={setCartModelOpen}
                            search={search} setSearch={setSearch} wishListModelOpen={wishListModelOpen} setWishListModelOpen={setWishListModelOpen} premiumGoldGradient={premiumGoldGradient} />
                    </div>
                </div>
            </div>
        </>
    )
}

export function Logo({ premiumGoldGradient }) {

    return (
        <Link href={'/'}>
            <div className='cursor-pointer group'>

                <div className='flex items-center gap-3'>

                    {/* Premium Diamond */}
                    <div
                        className='
                            relative
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            border
                            duration-300
                            group-hover:scale-110
                            group-hover:rotate-6
                        '
                        style={{
                            background: premiumGoldGradient,
                            borderColor: '#e6c766',
                            boxShadow: '0 0 25px rgba(245,223,139,0.18)'
                        }}
                    >

                        {/* Shine */}
                        <div
                            className='
                                absolute
                                top-0
                                -left-full
                                w-full
                                h-full
                                rotate-12
                                group-hover:left-full
                                duration-700
                            '
                            style={{
                                background:
                                    'linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)'
                            }}
                        />

                        <IoDiamond
                            className='relative z-10 text-black'
                            size={22}
                        />
                    </div>

                    {/* Logo Text */}
                    <div
                        className='
                            text-[20px]
                            tracking-[2px]
                            font-extrabold
                            
                            duration-300
                        '
                        style={{
                            color: '#f5df8b',
                            textShadow: '0 0 15px rgba(245,223,139,0.12)'
                        }}
                    >

                        <span className='uppercase text-black '>Kritika Fashion Point</span>

                    </div>

                </div>

            </div>
        </Link>
    )
}

const nav_bar_data = [
    { title: 'home', link: '/' },
    { title: 'about', link: '/about' },
    { title: 'shop', link: '/shop-now' },
    { title: 'categories', link: '/categories' },
    { title: 'contact', link: '/contact-us' },
]

function NavBar() {

    return (
        <div
            className={`
                duration-500
                transition-all
                bg-white
            `}
        >
            <ul
                className='
                    flex
                    items-center
                    gap-5
                    bg-white
                    px-3
                    py-2
                '
            >

                {nav_bar_data.map((item, index) => {

                    return (
                        <Link href={item.link} key={index}>

                            <li
                                className='
                                    relative
                                    px-5
                                    py-2
                                    rounded-full
                                    text-[16px]
                                    tracking-wide
                                    font-semibold
                                    text-black
                                    uppercase
                                    overflow-hidden
                                    cursor-pointer
                                    duration-300
                                    hover:text-black
                                    hover:scale-105
                                    group
                                '
                            >


                                <span className='relative z-10 Poppins'>
                                    {item.title}
                                </span>

                            </li>

                        </Link>
                    )
                })}

            </ul>
        </div>
    )
}

export function UserPoints({
    ismobile,
    token,
    cartData,
    premiumGoldGradient,
    setSearch,
    setWishListModelOpen,
    setCartModelOpen,
}) {
    return (
        <div className={`flex items-center ${ismobile ? 'gap-3' : 'gap-5'}`}>

            {/* SEARCH ICON - ALWAYS VISIBLE */}
            {/* <div
                onClick={() => setSearch(true)}
                className="
                    relative
                    w-10
                    h-10
                    rounded-full
                    flex
                    text-black
                    items-center
                    justify-center
                    border
                    bg-white
                    border-gray-300
                    cursor-pointer
                    overflow-hidden
                    duration-300
                    hover:scale-110
                    hover:border-[#f5df8b]
                "
            >
                <div
                    className="
                        absolute
                        inset-0
                        opacity-0
                        hover:opacity-100
                        duration-500
                    "
                />

                <FaSearch
                    size={17}
                    className="relative z-10 text-black"
                />
            </div> */}

            {token ? (
                <>
                    {/* WISHLIST */}
                    <div
                        onClick={() => setWishListModelOpen(true)}
                        className="
                            relative
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            border
                            bg-white
                            border-gray-300
                            cursor-pointer
                            overflow-hidden
                            duration-300
                            hover:scale-110
                        "
                    >
                        <FaRegHeart
                            size={17}
                            className="relative z-10 text-black "
                        />
                    </div>

                    {/* CART */}
                    <div
                        onClick={() => setCartModelOpen(true)}
                        className="
                            relative
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            border
                            bg-white
                            text-black
                            cursor-pointer
                            border-gray-300
                            duration-300
                            hover:scale-110
                        "
                    >
                        <span
                            className="
                                absolute
                                bg-amber-300
                                Poppins
                                -top-2
                                -right-2
                                w-5
                                h-5
                                rounded-full
                                flex
                                items-center
                                justify-center
                                text-black
                                text-xs
                                font-semibold
                            "
                        >
                            {cartData?.length || 0}
                        </span>

                        <FaShoppingCart
                            size={20}
                            className="relative z-10 text-black"
                        />
                    </div>

                    {
                        !ismobile &&

                        (
                            <Link href="/my-account">
                                <span
                                    style={{
                                        background: premiumGoldGradient,
                                        fontFamily: "Poppins",
                                    }}
                                    className="
      rounded-full
      hover:scale-[1.03]
      duration-100
      cursor-pointer
      p-3
      text-black
      flex
      items-center
      justify-center
    "
                                >
                                    <FaUser size={18} />
                                </span>
                            </Link>
                        )
                    }

                </>
            ) : (
                <Link href="/login">
                    <div
                        className="
                            relative
                            w-10
                            h-10
                            border
                            border-gray-400
                            flex
                            items-center
                            justify-center
                            rounded-full
                            overflow-hidden
                            cursor-pointer
                            group
                            duration-300
                            hover:scale-110
                        "
                    >
                        <div
                            className="
                                absolute
                                inset-0
                                opacity-0
                                group-hover:opacity-100
                                duration-500
                            "
                        />

                        <div
                            className="
                                absolute
                                top-0
                                -left-full
                                w-full
                                h-full
                                rotate-12
                                group-hover:left-full
                                duration-700
                            "
                        />

                        <FaUser
                            className="
                                relative
                                z-10
                                text-black
                                group-hover:scale-110
                                duration-300
                            "
                            size={16}
                        />
                    </div>
                </Link>
            )}
        </div>
    );
}

export function SearchModel({ search, setSearch }) {
    const router = useRouter();

    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchText.trim()) return;

        router.push(
            `/shop-now?search=${encodeURIComponent(searchText)}`
        );

        setSearch(false);
    };

    return (
        <div className="relative">

            {/* Overlay */}
            <div
                onClick={() => setSearch(false)}
                className={`
                    fixed inset-0 z-105
                    bg-black/70 backdrop-blur-md
                    duration-500
                    top-0 left-0
                    ${search
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'}
                `}
            />

            {/* Modal */}
            <div
                className={`
                    fixed
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[95%]
                    md:w-[92%]
                    xl:w-[80%]
                    h-fit
                    custom-scrollbar
                    z-160
                    overflow-y-auto
                    duration-700
                    transition-all
                    rounded-b-[40px]
                    overflow-x-hidden
                    border
                    backdrop-blur-3xl
                    px-6
                    md:px-10
                    py-8
                    shadow-[0_30px_100px_rgba(0,0,0,0.8)]
                    ${search
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-full pointer-events-none'}
                `}
                style={{
                    background: `
                        linear-gradient(
                            180deg,
                            rgba(10,10,10,0.98) 0%,
                            rgba(16,16,16,0.97) 30%,
                            rgba(0,0,0,0.98) 100%
                        )
                    `,
                    borderColor: 'rgba(245,223,139,0.18)',
                    boxShadow: `
                        0 0 0 1px rgba(245,223,139,0.05),
                        0 25px 80px rgba(0,0,0,0.8)
                    `
                }}
            >

                {/* Luxury Glow */}
                <div
                    className="
                        absolute
                        -top-40
                        left-1/2
                        -translate-x-1/2
                        w-[600]
                        h-[600]
                        rounded-full
                        blur-[150px]
                        opacity-20
                        pointer-events-none
                    "
                    style={{
                        background: gold.base
                    }}
                />

                {/* Close Button */}
                <button
                    onClick={() => setSearch(false)}
                    className="
                        absolute
                        top-5
                        right-5
                        w-11
                        h-11
                        rounded-full
                        border
                        flex
                        items-center
                        justify-center
                        text-white
                        hover:rotate-90
                        duration-300
                        z-50
                    "
                    style={{
                        borderColor: 'rgba(245,223,139,0.15)'
                    }}
                >
                    ✕
                </button>

                {/* Heading */}
                <div className="text-center mb-10 relative z-10">

                    <p
                        className="
                            uppercase
                            tracking-[8px]
                            text-xs
                            mb-3
                        "
                        style={{ color: gold.mid }}
                    >
                        Discover Luxury
                    </p>

                    <h2
                        className="
                            text-3xl
                            md:text-5xl
                            font-semibold
                            text-white
                        "
                    >
                        Search Our
                        <span
                            style={{ color: gold.base }}
                            className="ml-3"
                        >
                            Collection
                        </span>
                    </h2>

                    <div
                        className="w-32 h-[2] mx-auto mt-5 rounded-full"
                        style={{
                            background: `
                                linear-gradient(
                                    to right,
                                    transparent,
                                    ${gold.base},
                                    transparent
                                )
                            `
                        }}
                    />
                </div>

                {/* Search Form */}
                <form
                    onSubmit={handleSearch}
                    className="
                        flex
                        items-center
                        gap-4
                        border
                        rounded-full
                        px-7
                        h-16
                        bg-black/60
                        backdrop-blur-xl
                        relative
                        z-10
                        transition-all
                        duration-300
                        focus-within:scale-[1.01]
                    "
                    style={{
                        borderColor: 'rgba(245,223,139,0.2)',
                        boxShadow: `
                            0 0 0 1px rgba(245,223,139,0.05),
                            0 0 30px rgba(245,223,139,0.08)
                        `
                    }}
                >

                    <FaSearch
                        size={20}
                        className="text-[#f5df8b] shrink-0"
                    />

                    <input
                        style={{ fontFamily: 'Poppins' }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        placeholder="Search luxury jewellery..."
                        className="
                            w-full
                            bg-transparent
                            outline-none
                            text-[#f5df8b]
                            placeholder:text-[#8f7a45]
                            text-lg
                            tracking-wide
                            font-medium
                        "
                    />

                </form>

                {/* Popular Searches */}
                <div className="lg:mt-8 relative z-10">

                    <p
                        className="
                            text-xs
                            tracking-[6px]
                            uppercase
                            mb-6
                            text-center
                        "
                        style={{ color: gold.mid }}
                    >
                        Trending Searches
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        {[
                            'Bridal Set',
                            'Luxury Necklace',
                            'Gold Earrings',
                            'Wedding Collection',
                            'Bangles',
                            'Traditional Jewellery'
                        ].map((item, index) => (
                            <button
                                onClick={() => {
                                    router.push(
                                        `/shop-now?search=${encodeURIComponent(item)}`
                                    );
                                    setSearch(false);
                                }}
                                key={index}
                                className="
                                    px-6
                                    py-3
                                    rounded-full
                                    cursor-pointer
                                    text-sm
                                    tracking-wide
                                    border
                                    duration-300
                                    hover:scale-105
                                    hover:-translate-y-1
                                    backdrop-blur-xl
                                    bg-white/2
                                    hover:bg-[#111]
                                    relative
                                    overflow-hidden
                                "
                                style={{
                                    color: '#f5df8b',
                                    borderColor: 'rgba(245,223,139,0.15)',
                                    fontFamily: 'Poppins',
                                    boxShadow:
                                        '0 8px 25px rgba(0,0,0,0.3)'
                                }}
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                </div>

                {/* Premium Stats */}
                {/* <div
                    className="
                        mt-14
                        grid
                        grid-cols-3
                        gap-4
                        text-center
                        relative
                        z-10
                    "
                >

                    <div>
                        <h3
                            className="text-2xl md:text-3xl font-bold"
                            style={{ color: gold.base }}
                        >
                            500+
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Products
                        </p>
                    </div>

                    <div>
                        <h3
                            className="text-2xl md:text-3xl font-bold"
                            style={{ color: gold.base }}
                        >
                            100+
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Collections
                        </p>
                    </div>

                    <div>
                        <h3
                            className="text-2xl md:text-3xl font-bold"
                            style={{ color: gold.base }}
                        >
                            4.9★
                        </h3>

                        <p className="text-gray-400 text-sm mt-1">
                            Rating
                        </p>
                    </div>

                </div> */}

            </div>
        </div>
    );
}