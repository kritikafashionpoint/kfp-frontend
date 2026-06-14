"use client"
import React from 'react'
import { Gem, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { gold } from '../colors/color'

export default function WhyChooseUs() {

    const features = [
        {
            icon: <Gem size={28} />,
            title: "Premium Collection",
            desc: "Luxury artificial jewellery crafted with elegant detailing."
        },
        {
            icon: <Sparkles size={28} />,
            title: "Modern Designs",
            desc: "Trending styles inspired by royal and modern fashion."
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Trusted Quality",
            desc: "Premium finishing with long-lasting shine and durability."
        },
        {
            icon: <Truck size={28} />,
            title: "Safe Delivery",
            desc: "Secure packaging with smooth and reliable delivery."
        },
    ]

    return (
        <section className='
            relative
            w-full
            bg-black
            lg:py-20
            py-10
            overflow-hidden
        '>

            {/* Heading */}
            <div className='text-center px-5'>

                <p
                    className='
                        lg:text-2xl
                        text-md
                        md:text-xl
                        tracking-[5px]
                        mb-5
                        uppercase
                    '
                    style={{ color: gold.mid }}
                >
                    Why Choose Us
                </p>

                <h2
                    className='
                        lg:text-5xl
                        md:text-4xl
                        text-3xl
                        font-bold
                        leading-tight
                    '
                    style={{
                        background: `
                            linear-gradient(
                                90deg,
                                ${gold.dark},
                                ${gold.light},
                                ${gold.dark}
                            )
                        `,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Elegance In Every Detail
                </h2>

                <p
                    className='
                        max-w-2xl
                        mx-auto
                        mt-5
                        text-sm
                        sm:text-base
                        leading-7
                        tracking-widest
                    '
                    style={{ color: '#a89a68' }}
                >
                    Discover premium artificial jewellery designed
                    with luxury aesthetics, modern elegance and timeless style.
                </p>
            </div>

            {/* Cards */}
            <div className='
                max-w-7xl
                mx-auto
                grid
                lg:grid-cols-4
                sm:grid-cols-2
                grid-cols-1
                gap-6
                mt-16
                px-5
            '>

                {features.map((item, index) => (
                    <div
                        key={index}
                        className='
                            border
                            rounded-[24]
                            p-8
                            duration-300
                            hover:-translate-y-1
                        '
                        style={{
                            borderColor: 'rgba(245,223,139,0.12)',
                            background: `
                                linear-gradient(
                                    180deg,
                                    rgba(255,255,255,0.03),
                                    rgba(255,255,255,0.01)
                                )
                            `
                        }}
                    >

                        {/* Icon */}
                        <div
                            className='
                                w-14
                                h-14
                                rounded-full
                                flex
                                items-center
                                justify-center
                                mb-6
                            '
                            style={{
                                color: gold.light,
                                background: `
                                    linear-gradient(
                                        to top right,
                                        ${'black'},
                                        ${gold.dark},
                                        ${'black'}

                                    )
                                `
                            }}
                        >
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h3
                            className='
                                text-xl
                                font-semibold
                                mb-3
                            '
                            style={{ color: gold.light }}
                        >
                            {item.title}
                        </h3>

                        {/* Desc */}
                        <p
                            className='
                                text-sm
                                leading-7
                            '
                            style={{ color: '#9f9160' }}
                        >
                            {item.desc}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}