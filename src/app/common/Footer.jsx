'use client'
import React from 'react'
import { gold } from '../colors/color'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiLocationPlus } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {

    const QuickLinks = [
        { title: 'home', link: '/' },
        { title: 'shop now', link: '/shop-now' },
        { title: 'categories', link: '/categories' },
        { title: 'about', link: '/about' },
        { title: 'contact us', link: '/contact-us' },
    ]

    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );

    return (
        <footer
            className='
                relative
                overflow-hidden
                border-t
                border-[#c9971a]/20
                bg-black
                text-white
                lg:mt-20
                mt-10
            '
        >

            {/* Background Glow */}
            <div
                className='
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[500]
                    h-[250]
                    rounded-full
                    blur-3xl
                    opacity-[0.05]
                    pointer-events-none
                '
                style={{
                    background: '#d4af37'
                }}
            />

            {/* Decorative Design */}
            <div className="absolute -top-10 -left-10 w-[300] h-[300] opacity-[0.2] pointer-events-none">
                <Image
                    src="/designs/d1.png"
                    alt="design"
                    fill
                    sizes='full'
                    className="object-contain"
                />
            </div>

            <div className="absolute -bottom-10 -right-10 rotate-180 w-[300] h-[300] opacity-[0.2] pointer-events-none">
                <Image
                    src="/designs/d1.png"
                    alt="design"
                    fill
                    sizes='full'
                    className="object-contain"
                />
            </div>

            <div className='max-w-330 mx-auto lg:px-6 px-4 lg:py-20 py-12 relative z-10'>

                {/* Top Brand */}
                <div className='mb-16 text-center'>

                    <p
                        className='
                            uppercase
                            tracking-[8px]
                            text-xs
                            mb-4
                            text-[#d4af37]
                        '
                    >
                        Premium Jewellery Collection
                    </p>

                    <h2
                        className='
                            lg:text-5xl
                            md:text-4xl
                            text-3xl
                            font-bold
                            tracking-wide
                            text-white
                        '
                    >
                        KRITIKA
                        <span className='text-[#d4af37] ml-3'>
                            FASHION POINT
                        </span>
                    </h2>

                    <div className='flex justify-center mt-5'>
                        <div
                            className='w-52 h-[2] rounded-full'
                            style={{
                                background: `
                                    linear-gradient(
                                        to right,
                                        transparent,
                                        #8c670a,
                                        #d4af37,
                                        #f5df8b,
                                        #d4af37,
                                        #8c670a,
                                        transparent
                                    )
                                `
                            }}
                        />
                    </div>

                </div>

                {/* Footer Grid */}
                <div
                    className='
                        grid
                        lg:grid-cols-[20%_45%_auto]
                        md:grid-cols-2
                        grid-cols-1
                        lg:gap-14
                        sm:gap-7
                        gap-5
                        lg:pb-10
                        pb-5
                    '
                >

                    {/* Quick Links */}
                    <div>

                        <h2
                            className='
                                text-2xl
                                font-bold
                                lg:mb-8
                                mb-2
                                text-[#f5df8b]
                                relative
                                w-fit
                            '
                        >
                            Quick Links

                            <div style={{
                                background: `
                                                    linear-gradient(
                                                        to left,
                                                        #8c670a,
                                                        #d4af37,
                                                        #f5df8b
                                                    )
                                                `
                            }}
                                className='w-1/3 h-[1] absolute top-[115%] left-0 rounded-full'
                            >
                            </div>
                        </h2>

                        <ul className=''>
                            {QuickLinks.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <li
                                        className='
                                            relative
                                            w-fit
                                            text-[#d9d9d9]
                                            hover:text-[#f5df8b]
                                            duration-300
                                            capitalize
                                            cursor-pointer
                                            group
                                            my-5
                                            text-lg
                                        '
                                    >
                                        {item.title}

                                        <div
                                            className='
                                                absolute
                                                left-0
                                                top-[105%]
                                                w-0
                                                h-[2]
                                                rounded-full
                                                group-hover:w-full
                                                duration-500
                                            '
                                            style={{
                                                background: `
                                                    linear-gradient(
                                                        to right,
                                                        #8c670a,
                                                        #d4af37,
                                                        #f5df8b
                                                    )
                                                `
                                            }}
                                        />
                                    </li>
                                </Link>
                            ))}
                        </ul>

                    </div>

                    {/* Categories */}
                    <div>

                        <h2
                            className='
                                text-2xl
                                font-bold
                                lg:mb-8
                                mb-7
                                text-[#f5df8b]
                                relative
                                w-fit
                            '
                        >
                            Shop By Categories

                            <div style={{
                                background: `
                                                    linear-gradient(
                                                        to left,
                                                        #8c670a,
                                                        #d4af37,
                                                        #f5df8b
                                                    )
                                                `
                            }}
                                className='w-1/3 h-[1] absolute top-[115%] left-0 rounded-full'
                            >
                            </div>
                        </h2>

                        <ul className='grid sm:grid-cols-3 gap-x-10 gap-y-4'>
                            {categories.map((item, index) => (
                                <Link key={index} href={`/categories/${item.category_slug}`}>
                                    <li
                                        key={index}
                                        className='
                                            relative
                                            w-fit
                                            text-[#d9d9d9]
                                            hover:text-[#f5df8b]
                                            duration-300
                                            capitalize
                                            cursor-pointer
                                            group
                                            text-lg
                                        '
                                    >
                                        {item.category_name}

                                        <div
                                            className='
                                                absolute
                                                left-0
                                                top-[105%]
                                                w-0
                                                h-[2]
                                                rounded-full
                                                group-hover:w-full
                                                duration-500
                                            '
                                            style={{
                                                background: `
                                                    linear-gradient(
                                                        to right,
                                                        #8c670a,
                                                        #d4af37,
                                                        #f5df8b
                                                    )
                                                `
                                            }}
                                        />
                                    </li>
                                </Link>
                            ))}
                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h2
                            className='
                                text-2xl
                                font-bold
                                lg:mb-8
                                mb-7
                                text-[#f5df8b]
                                relative
                                w-fit
                            '
                        >
                            Contact Us

                            <div style={{
                                background: `
                                                    linear-gradient(
                                                        to left,
                                                        #8c670a,
                                                        #d4af37,
                                                        #f5df8b
                                                    )
                                                `
                            }}
                                className='w-1/3 h-[1] absolute top-[115%] left-0 rounded-full'
                            >
                            </div>
                        </h2>

                        <div className='space-y-5'>

                            {/* Address */}
                            <Link
                                target='_blank'
                                href='https://maps.app.goo.gl/r1r9LLd13biD4sJh8'
                            >
                                <div
                                    className='
                                    my-5
                                        group
                                        flex
                                        gap-4
                                        items-center
                                        cursor-pointer
                                    '
                                >

                                    <div
                                        className='
                                            min-w-12
                                            h-12
                                            rounded-2xl
                                            flex
                                            items-center
                                            justify-center
                                            border
                                            group-hover:scale-110
                                            duration-300
                                        '
                                        style={{
                                            borderColor: '#c9971a',
                                            background: `
                                                linear-gradient(
                                                    135deg,
                                                    #4d3900 0%,
                                                    #8c670a 25%,
                                                    #d4af37 50%,
                                                    #f5df8b 65%,
                                                    #8c670a 100%
                                                )
                                            `
                                        }}
                                    >
                                        <FaLocationDot
                                            className='text-black'
                                            size={18}
                                        />
                                    </div>

                                    <p className='text-[#d9d9d9] text-lg leading-7 group-hover:text-white duration-300'>
                                        Shop No.4 Inda Market Pal Pasu Mela Road Pal Jodhpur, Rajasthan
                                    </p>

                                </div>
                            </Link>

                            {/* Phone */}
                            <div className='flex gap-4 items-center'>

                                <div
                                    className='
                                        min-w-12
                                        h-12
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        border
                                    '
                                    style={{
                                        borderColor: '#c9971a',
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #8c670a 25%,
                                                #d4af37 50%,
                                                #f5df8b 65%,
                                                #8c670a 100%
                                            )
                                        `
                                    }}
                                >
                                    <FaPhoneAlt
                                        className='text-black'
                                        size={16}
                                    />
                                </div>

                                <div className='text-[#d9d9d9] text-lg leading-8 flex items-center gap-1'>
                                    <a
                                        href='tel:+916378853062'
                                        className='hover:text-[#f5df8b] duration-300 block'
                                    >
                                        6378853062 ,
                                    </a>
                                    <a
                                        href='tel:+916378370372'
                                        className='hover:text-[#f5df8b] duration-300 block'
                                    >
                                        6378370372
                                    </a>
                                </div>

                            </div>

                            {/* Email */}
                            <div className='flex gap-4 items-center group'>

                                <div
                                    className='
                                        min-w-12
                                        h-12
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        border
                                        group-hover:scale-110 duration-300
                                        
                                    '
                                    style={{
                                        borderColor: '#c9971a',
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #8c670a 25%,
                                                #d4af37 50%,
                                                #f5df8b 65%,
                                                #8c670a 100%
                                            )
                                        `
                                    }}
                                >
                                    <MdEmail
                                        className='text-black '
                                        size={18}
                                    />
                                </div>

                                <a
                                    href='mailto:kritikafashionpoint6@gmail.com'
                                    className='
                                        text-[#d9d9d9]
                                        hover:text-[#f5df8b]
                                        duration-300
                                        break-all
                                        text-lg
                                    '
                                >
                                    kritikafashionpoint6@gmail.com
                                </a>

                            </div>

                            {/* Live Location */}
                            <Link
                                target='_blank'
                                href='https://maps.app.goo.gl/r1r9LLd13biD4sJh8'
                            >
                                <div
                                    className='
                                        group
                                        flex
                                        gap-4
                                        items-center
                                        cursor-pointer
                                    '
                                >

                                    <div
                                        className='
                                            min-w-12
                                            h-12
                                            rounded-2xl
                                            flex
                                            items-center
                                            justify-center
                                            border
                                            group-hover:scale-110
                                            duration-300
                                        '
                                        style={{
                                            borderColor: '#c9971a',
                                            background: `
                                                linear-gradient(
                                                    135deg,
                                                    #4d3900 0%,
                                                    #8c670a 25%,
                                                    #d4af37 50%,
                                                    #f5df8b 65%,
                                                    #8c670a 100%
                                                )
                                            `
                                        }}
                                    >
                                        <BiLocationPlus
                                            className='text-black'
                                            size={22}
                                        />
                                    </div>

                                    <span
                                        className='
                                            text-[#d9d9d9]
                                            group-hover:text-[#f5df8b]
                                            duration-300
                                            text-lg
                                        '
                                    >
                                        Open Live Location
                                    </span>

                                </div>
                            </Link>

                            <Link target="_blank" href={'https://wa.me/6378370372'}>
                                <div className='flex gap-4 items-center group my-5'>

                                    <div
                                        className='
                                        min-w-12
                                        h-12
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        border
                                        group-hover:scale-110 duration-300
                                        
                                    '
                                        style={{
                                            borderColor: '#c9971a',
                                            background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #8c670a 25%,
                                                #d4af37 50%,
                                                #f5df8b 65%,
                                                #8c670a 100%
                                            )
                                        `
                                        }}
                                    >
                                        <BsWhatsapp
                                            className='text-black '
                                            size={18}
                                        />
                                    </div>

                                    <p
                                        className='
                                        text-[#d9d9d9]
                                        hover:text-[#f5df8b]
                                        duration-300
                                        break-all
                                        text-lg
                                    '
                                    >
                                        +91 6378370372
                                    </p>

                                </div>
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div
                    className='
                       
                        pt-8
                        border-t
                        border-[#c9971a]/10
                        flex
                        md:flex-row
                        flex-col
                        items-center
                        justify-between
                        gap-4
                    '
                >

                    <p className='text-[#8b8b8b] text-sm tracking-wide'>
                        © 2026 Kritika Fashion Point. All Rights Reserved.
                    </p>

                    <p className='text-[#d4af37] text-sm tracking-[4px] uppercase'>
                        Luxury • Royal • Premium
                    </p>

                </div>

            </div>

        </footer>
    )
}