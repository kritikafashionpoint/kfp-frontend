"use client"
import React, { useState } from 'react'
import { gold } from '../colors/color'
import Image from 'next/image'
import { FaBars, FaBarsProgress, FaBarsStaggered, FaRegHeart, FaUser } from 'react-icons/fa6'
import { IoCloseCircleSharp, IoDiamond } from 'react-icons/io5'
import Link from 'next/link'
import { VscTriangleRight } from 'react-icons/vsc'
import { Logo, SearchModel, UserPoints } from './PcHeader'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import WishListModel from './WishListModel'
import CartModel from './CartModel'
import { useSelector } from 'react-redux'

export default function MobileHeader() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [wishListModelOpen, setWishListModelOpen] = useState(false)

    const cartData = useSelector((store) => store.cart.cartData)
    const token = useSelector((store) => store.user.token)

    const [search, setSearch] = useState(false)


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

    const [cartModelOpen, setCartModelOpen] = useState(false)
    return (
        <>
            <WishListModel wishListModelOpen={wishListModelOpen} setWishListModelOpen={setWishListModelOpen} />
            <CartModel cartModelOpen={cartModelOpen} setCartModelOpen={setCartModelOpen} />
            <SearchModel search={search} setSearch={setSearch} />

            <div
                // style={{ background: 'rgba(44, 15, 58, 1)', borderBottomColor: gold.base }}
                style={{ background: 'black', borderColor: gold.base }}

                className='lg:hidden block w-full h-full py-3.5 border-b px-4'>
                <div className='flex items-center justify-between'>
                    <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
                        <Image  src={'/designs/d2.png'} sizes='full' alt='designs' fill className='opacity-[0.05] w-full h-full object-cover object-top' />
                    </div>
                    <Link href={'/'}>
                        <div className='cursor-pointer group'>

                            <div className='flex items-center sm:gap-5 gap-3'>

                                <div onClick={() => setMobileMenu(true)}>
                                    <FaBarsStaggered style={{ color: gold.base }} size={20} />
                                </div>

                                {/* Premium Diamond */}
                                <div
                                    className='
                                        relative
                                        w-9
                                        h-9
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
                                            sm:tracking-[2]
                                            tracking-[3]
                                            font-extrabold
                                            duration-300
                                            '
                                    style={{
                                        color: '#f5df8b',
                                        textShadow: `
            0 2px 4px rgba(0,0,0,0.9),
            0 6px 12px rgba(0,0,0,0.8),
            0 0 25px rgba(0,0,0,0.7)
        `

                                    }}
                                >

                                    <span style={{ color: '#fff2b3' }}>K</span>
                                    <span className='sm:inline hidden'>ritika{" "}</span>

                                    <span style={{ color: '#fff2b3' }}>F</span>
                                    <span className='sm:inline hidden'>ashion{" "}</span>

                                    <span style={{ color: '#fff2b3' }}>P</span>
                                    <span className='sm:inline hidden'>oint</span>

                                </div>

                            </div>

                        </div>
                    </Link>

                    <div>
                        <UserPoints ismobile={true} token={token} cartData={cartData} premiumGoldGradient={premiumGoldGradient} setSearch={setSearch} setWishListModelOpen={setWishListModelOpen} setCartModelOpen={setCartModelOpen} />
                    </div>
                </div>

            </div>
            {mobileMenu &&
                <div onClick={() => setMobileMenu(false)} className='w-full h-screen bg-[rgba(0,0,0,0.6)] backdrop-blur-sm fixed top-0 left-0'></div>

            }
            <MobileMenu premiumGoldGradient={premiumGoldGradient} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </>
    )
}

import {
    Home,
    ShoppingBag,
    Grid3X3,
    Info,
    Phone,
    User,
    LayoutDashboard,
    ChevronRight
} from "lucide-react";

export function MobileMenu({ mobileMenu, setMobileMenu, premiumGoldGradient }) {

    const Data = [
        {
            title: "home",
            link: "/",
            icon: Home,
            border: "#22c55e",
            glow: "rgba(34,197,94,.25)",
            bg: "from-green-500/10 to-transparent"
        },
        {
            title: "Shop Now",
            link: "/shop-now",
            icon: ShoppingBag,
            border: "#D4AF37",
            glow: "rgba(212,175,55,.25)",
            bg: "from-yellow-500/10 to-transparent"
        },
        {
            title: "Categories",
            link: "/categories",
            icon: Grid3X3,
            border: "#a855f7",
            glow: "rgba(168,85,247,.25)",
            bg: "from-purple-500/10 to-transparent"
        },
        {
            title: "About",
            link: "/about",
            icon: Info,
            border: "#3b82f6",
            glow: "rgba(59,130,246,.25)",
            bg: "from-blue-500/10 to-transparent"
        },
        {
            title: "Contact Us",
            link: "/contact-us",
            icon: Phone,
            border: "#06b6d4",
            glow: "rgba(6,182,212,.25)",
            bg: "from-cyan-500/10 to-transparent"
        },
        {
            title: "My Account",
            link: "/my-account",
            icon: User,
            border: "#ec4899",
            glow: "rgba(236,72,153,.25)",
            bg: "from-pink-500/10 to-transparent"
        }
    ];


    return (
        <div
            style={{ borderBottomColor: gold.base }}
            className={`
                fixed inset-0
                transform
                ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-300 ease-in-out
                w-full h-[85vh] overflow-y-scroll
                custom-scrollbar
                bg-black text-white border-b-4
                lg:hidden block
                transform-gpu
                z-100
                            `}
        >
            <div
                className="
        relative
        flex
        justify-between
        items-center
        py-5
        px-5
        overflow-hidden
        border-b
        backdrop-blur-xl
    "
                style={{
                    borderBottomColor: "rgba(212,175,55,.25)",
                    background:
                        "linear-gradient(to right, rgba(255,255,255,.03), rgba(255,255,255,.01))",
                }}
            >

                {/* Background Glow */}
                <div
                    className="
            absolute
            -left-10
            -top-10
            w-32
            h-32
            rounded-full
            blur-3xl
            opacity-20
        "
                    style={{
                        background: gold.base,
                    }}
                />

                <Link href={"/"}>
                    <div className="cursor-pointer group relative z-10">

                        <div className="flex items-center gap-4">

                            {/* Premium Diamond */}
                            <div
                                className="
                        relative
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        border
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                    "
                                style={{
                                    background: premiumGoldGradient,
                                    borderColor: "#e6c766",
                                    boxShadow:
                                        "0 0 30px rgba(245,223,139,.25)"
                                }}
                            >

                                {/* Shine */}
                                <div
                                    className="
                            absolute
                            top-0
                            -left-full
                            w-full
                            h-full
                            rotate-12
                            group-hover:left-full
                            duration-1000
                        "
                                    style={{
                                        background:
                                            "linear-gradient(120deg, transparent, rgba(255,255,255,.45), transparent)"
                                    }}
                                />

                                <IoDiamond
                                    className="relative z-10 text-black"
                                    size={24}
                                />
                            </div>

                            {/* Logo Text */}
                            <div>

                                <h2
                                    className="
                            text-[22px]
                            font-black
                            tracking-[2px]
                            leading-none
                        "
                                    style={{
                                        color: "#f5df8b",
                                        textShadow:
                                            "0 0 20px rgba(245,223,139,.18)"
                                    }}
                                >
                                    <span style={{ color: '#fff2b3' }}>K</span>
                                    <span className='sm:inline hidden'>ritika{" "}</span>

                                    <span style={{ color: '#fff2b3' }}>F</span>
                                    <span className='sm:inline hidden'>ashion{" "}</span>

                                    <span style={{ color: '#fff2b3' }}>P</span>
                                    <span className='sm:inline hidden'>oint</span>
                                </h2>

                                <p
                                    className="
                            text-[11px]
                            tracking-[3px]
                            uppercase
                            mt-1
                        "
                                    style={{
                                        color: "rgba(245,223,139,.65)"
                                    }}
                                >
                                    Premium Jewellery
                                </p>

                            </div>

                        </div>

                    </div>
                </Link>

                {/* Premium Close Button */}
                <button
                    onClick={() => setMobileMenu(false)}
                    className="
            relative
            z-10
            w-11
            h-11
            rounded-full
            flex
            items-center
            justify-center
            border
            duration-300
            hover:rotate-90
            hover:scale-110
        "
                    style={{
                        color: gold.base,
                        borderColor: "rgba(212,175,55,.25)",
                        background: "rgba(255,255,255,.03)",
                        boxShadow:
                            "0 0 20px rgba(212,175,55,.12)"
                    }}
                >
                    <IoCloseCircleSharp size={24} />
                </button>
            </div>
            <ul className='px-5 py-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-5 text-xl font-semibold space-y-4'>
                {Data.map((item, index) => {

                    const Icon = item.icon;

                    return (
                        <Link key={index} href={item.link}>
                            <li
                                onClick={() => setMobileMenu(false)}
                                className="
                    relative
                    overflow-hidden
                    capitalize
                    rounded-xl
                    px-5
                    py-2.5
                    backdrop-blur-xl
                    group
                    cursor-pointer
                    duration-500
                    hover:scale-[1.03]
                "
                                style={{
                                    border: `1px solid ${item.border}50`,
                                    background:
                                        "linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.01))",
                                    boxShadow: `0 0 0px ${item.glow}`,
                                }}
                            >

                                <div className="relative z-10 flex items-center justify-between">

                                    <div className="flex items-center gap-3">

                                        <div
                                            className="
                                w-10
                                h-10
                                rounded-xl
                                flex
                                items-center
                                justify-center
                            "
                                            style={{
                                                background: `${item.border}20`,
                                                border: `1px solid ${item.border}50`
                                            }}
                                        >
                                            <Icon
                                                size={20}
                                                style={{
                                                    color: item.border
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <h3
                                                style={{
                                                    fontFamily: 'Poppins'
                                                }}
                                                className="
                                    text-white
                                    font-normal
                                    text-[16px]
                                    tracking-wide
                                "
                                            >
                                                {item.title}
                                            </h3>

                                        </div>
                                    </div>

                                    <ChevronRight
                                        size={20}
                                        style={{
                                            color: item.border
                                        }}
                                        className="
                            group-hover:translate-x-1
                            duration-300
                        "
                                    />
                                </div>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    )

} 