'use client'
import React from 'react'
import { gold } from '../colors/color'
import Image from 'next/image'

export default function AboutClient() {

    const data = [
        {
            title: 'Premium Quality',
            desc: 'Crafted with fine detailing, luxury finish, and long-lasting shine for every occasion.',
            src: '/banner/b1.jpg'
        },
        {
            title: 'High Contrast Items',
            desc: 'Elegant designs with rich color combinations that create a bold and royal appearance.',
            src: '/banner/b3.jpg'
        },
        {
            title: 'Trusted Products',
            desc: 'Thousands of happy customers trust our quality, authenticity, and premium craftsmanship.',
            src: '/banner/b4.jpg'
        },
    ]

    const premiumGoldGradient = `
        linear-gradient(
            145deg,
            #3a2a00 0%,
            #5a4200 12%,
            #7a5a08 24%,
            #a8790a 36%,
            #c9971a 46%,
            #dcb94a 54%,
            #e8cf6a 60%,
            #dcb94a 66%,
            #c9971a 74%,
            #8c670a 86%,
            #5a4200 94%,
            #3a2a00 100%
        )
    `

    return (
        <section
            className='
                w-full
                min-h-screen
                overflow-hidden
                relative
                bg-white
                text-black
            '
        >


            <div className='max-w-330 mx-auto lg:px-6 px-4 relative z-10'>

                {/* ABOUT SECTION */}
                <div className='w-full lg:py-20 py-12'>

                    <div
                        className='
                            rounded-[36px]
                            overflow-hidden
                            border
                            relative
                            backdrop-blur-xl
                            lg:p-14
                            p-6
                        '
                        style={{
                            borderColor: 'rgba(230,199,102,0.15)',

                            boxShadow: `
                                0 0 50px rgba(212,175,55,0.08),
                                inset 0 0 40px rgba(255,215,120,0.03)
                            `
                        }}
                    >

                        {/* Heading */}
                        <div className='relative z-10 mb-16'>

                            <p
                                className='
                                    text-center
                                    uppercase
                                    text-md
                                    leading-8
                                    tracking-[8px]
                                    mb-5
                                    text-black
                                '
                            >
                                Luxury • Elegance • Trust
                            </p>

                            <h2
                                className='
                                    lg:text-5xl
                                    md:text-4xl
                                    text-3xl
                                    text-center
                                    font-semibold
                                    Poppins
                                    tracking-wide
                                    leading-tight
                                '
                                style={{
                                    color: 'black'
                                }}
                            >
                                About Us
                            </h2>

                            <div className='flex justify-center'>
                                <div
                                    className='w-20 h-[2] mt-2 rounded-full'
                                    style={{
                                        background: `
                                            linear-gradient(
                                                to right,
                                                transparent,
                                                #000000,
                                                transparent
                                            )
                                        `
                                    }}
                                />
                            </div>

                        </div>

                        {/* Main Grid */}
                        <div className='grid lg:grid-cols-2 gap-12 items-center relative z-10'>

                            {/* LEFT */}
                            <div>

                                <p
                                    className='
                                        text-gray-800
                                        Poppins
                                        lg:text-lg
                                        text-base
                                        leading-9
                                        tracking-wide
                                    '
                                >

                                    Kritika Fashion Point is a destination for women who love
                                    elegance, premium fashion, and timeless jewellery designs.
                                    Our collection is crafted to bring luxury and confidence
                                    into every look with a perfect blend of tradition and
                                    modern style.

                                    <br /><br />

                                    We focus on premium quality, royal finishing, and carefully
                                    selected designs that make every occasion feel special.
                                    From statement jewellery to fashionable accessories,
                                    every product reflects beauty, trust, and sophistication.

                                    <br /><br />

                                    With thousands of happy customers, our goal is to deliver
                                    not just products, but a premium shopping experience that
                                    feels luxurious from start to finish.

                                </p>

                                {/* Stats */}
                                <div className='grid sm:grid-cols-2 gap-5 mt-12'>

                                    <div
                                        className='
                                            border
                                            rounded-3xl
                                            p-6
                                            relative
                                            overflow-hidden
                                            group
                                            border-gray-300
                                            hover:scale-[1.03]
                                            duration-300
                                        '

                                    >

                                        <div
                                            className='
                                                absolute
                                                inset-0
                                                opacity-0
                                                group-hover:opacity-100
                                                duration-500
                                            '
                                            style={{
                                                background:
                                                    'radial-gradient(circle, rgba(255,235,160,0.10) 0%, transparent 70%)'
                                            }}
                                        />

                                        <h2
                                            className='
                                                text-3xl
                                                font-bold
                                                mb-2
                                                relative
                                                z-10
                                            '
                                            style={{
                                                color: 'black'
                                            }}
                                        >
                                            100k+
                                        </h2>

                                        <p className='text-gray-700 tracking-wide relative z-10'>
                                            Instagram Family
                                        </p>

                                    </div>

                                    <div
                                        className='
                                            border
                                            rounded-3xl
                                            p-6
                                            relative
                                            overflow-hidden
                                            group
                                            hover:scale-[1.03]
                                            duration-300
                                            border-gray-300
                                        '
                                    >

                                        <div
                                            className='
                                                absolute
                                                inset-0
                                                opacity-0
                                                group-hover:opacity-100
                                                duration-500
                                          '
                                        />

                                        <h2
                                            className='
                                                text-3xl
                                                font-bold
                                                mb-2
                                                relative
                                                z-10
                                            '
                                            style={{
                                                color: 'black'
                                            }}
                                        >
                                            Premium
                                        </h2>

                                        <p className='text-gray-700 tracking-wide relative z-10'>
                                            Luxury Collection
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT CARD */}
                            <div
                                className='
                                    border
                                    border-gray-300
                                    rounded-[34px]
                                    lg:p-10
                                    p-6
                                    relative
                                    overflow-hidden
                                    backdrop-blur-xl
                                '
                            >


                                <h2
                                    className='
                                        text-4xl
                                        font-semibold
                                        mb-10
                                        tracking-wide
                                        relative
                                        z-10
                                        Poppins
                                    '
                                >
                                    Why Choose Us
                                </h2>

                                <div className='space-y-8 relative z-10'>

                                    {[
                                        {
                                            title: 'Premium Quality',
                                            desc: 'Finest quality products with elegant and luxurious finishing.'
                                        },
                                        {
                                            title: 'Trusted Fashion Store',
                                            desc: 'Trusted by customers for authenticity and premium service.'
                                        },
                                        {
                                            title: 'Royal Designs',
                                            desc: 'Unique and elegant styles crafted for every special occasion.'
                                        }
                                    ].map((item, index) => (

                                        <div
                                            key={index}
                                            className='flex gap-5 items-start'
                                        >

                                            <div
                                                className='
                                                    min-w-4
                                                    h-4
                                                    bg-amber-500
                                                    rounded-full
                                                    mt-2
                                                '
                                            />

                                            <div>

                                                <h3
                                                    className='
                                                        text-2xl
                                                        mb-2
                                                        font-semibold
                                                        text-black
                                                    '
                                                >
                                                    {item.title}
                                                </h3>

                                                <p className='text-gray-800 leading-8'>
                                                    {item.desc}
                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* FACILITIES */}
                <div className='w-full lg:pb-20 pb-12'>

                    <h2
                        className='
                            lg:text-5xl
                            md:text-4xl
                            text-3xl
                            text-center
                            font-bold
                            tracking-wide
                            text-gray-800
                        '
                    >
                        Our
                        <span
                            className='ml-4 text-black'
                        >
                            Facilities
                        </span>
                    </h2>

                    <div className='flex justify-center mb-14'>
                        <div
                            className='w-60 h-[1] mt-2 rounded-full'
                            style={{
                                background: `
                                    linear-gradient(
                                        to right,
                                        transparent,
                                        #000000,
                                        transparent
                                    )
                                `
                            }}
                        />
                    </div>

                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-6'>

                        {data.map((item, index) => {

                            return (
                                <div
                                    key={index}
                                    className='
                                        border
                                        rounded-[30px]
                                        overflow-hidden
                                        group
                                        hover:-translate-y-2
                                        duration-500
                                        backdrop-blur-xl
                                    '
                                    style={{
                                        borderColor: 'rgba(230,199,102,0.15)',
                                        background: `
                                            linear-gradient(
                                                145deg,
                                                rgba(8,8,8,0.98),
                                                rgba(20,15,5,1)
                                            )
                                        `
                                    }}
                                >

                                    {/* Image */}
                                    <div className='relative w-full h-[320] overflow-hidden'>

                                        <Image
                                            loading='lazy'
                                            alt='desiimages'
                                            src={item.src}
                                            fill
                                            sizes='full'
                                            className='
                                                w-full
                                                h-full
                                                object-cover
                                                object-top
                                                group-hover:scale-110
                                                duration-700
                                            '
                                        />

                                        {/* Overlay */}
                                        <div
                                            className='
                                                absolute
                                                inset-0
                                            '
                                            style={{
                                                background:
                                                    'linear-gradient(to top, rgba(0,0,0,0.88), transparent)'
                                            }}
                                        />

                                    </div>

                                    {/* Content */}
                                    <div className='p-7 relative'>

                                        <div
                                            className='
                                                absolute
                                                top-0
                                                left-0
                                                w-full
                                                h-[1]
                                            '
                                            style={{
                                                background: premiumGoldGradient
                                            }}
                                        />

                                        <h2
                                            className='
                                                text-3xl
                                                font-bold
                                                tracking-wide
                                                mb-4
                                            '
                                            style={{
                                                color: '#f5df8b'
                                            }}
                                        >
                                            {item.title}
                                        </h2>

                                        <p className='text-[#b8b8b8] leading-8'>
                                            {item.desc}
                                        </p>

                                    </div>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </section>
    )
}