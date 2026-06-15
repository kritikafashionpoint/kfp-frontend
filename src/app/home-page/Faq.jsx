"use client"

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { gold } from "../colors/color";

export default function Faq() {

    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is the jewellery anti-tarnish?",
            answer:
                "Our premium jewellery collections are crafted with high-quality plating and finishing to provide long-lasting shine. Proper care helps maintain the beauty for a longer time.",
        },
        {
            question: "Do you offer Cash on Delivery?",
            answer:
                "Yes, Cash on Delivery is available on selected locations across India.",
        },
        {
            question: "How many days does delivery take?",
            answer:
                "Orders are usually dispatched within 2-3 working days and delivered within 5-7 business days depending on your location.",
        },
        {
            question: "Can I return or exchange products?",
            answer:
                "Yes, we provide easy exchange support for damaged or incorrect items. Please contact us within 48 hours after delivery.",
        },
        {
            question: "Is the jewellery suitable for sensitive skin?",
            answer:
                "Our jewellery is skin-friendly and made with premium-quality materials, but customers with extremely sensitive skin should review material details before purchase.",
        },
        {
            question: "Will the product look exactly like the images?",
            answer:
                "Yes, we use real product photography. Slight color variations may occur due to lighting and screen settings.",
        },
        {
            question: "Do you provide bridal jewellery collections?",
            answer:
                "Yes, we offer exclusive bridal jewellery sets including chokers, kundan sets, temple jewellery, jhumkas, and more.",
        },
        {
            question: "How should I store the jewellery?",
            answer:
                "Store your jewellery in a dry airtight box or soft pouch away from moisture, perfumes, and chemicals.",
        },
        {
            question: "Can I wear the jewellery daily?",
            answer:
                "Our jewellery is mainly designed for occasional, festive, and wedding wear. Daily rough usage may reduce the plating life.",
        },
        {
            question: "How can I contact customer support?",
            answer:
                "You can contact us through WhatsApp, Instagram, email, or the Contact Us page for quick assistance.",
        },
    ];

    return (
        <section className="w-screen overflow-x-hidden bg-black lg:my-15 md:my-10 my-5 relative">

            {/* Background Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500] h-[500] blur-3xl opacity-10 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, #d4af37, transparent 70%)",
                }}
            />

            <div className="max-w-5xl mx-auto lg:px-6 px-4 relative z-10">

                {/* Heading */}
                <div className="text-center lg:mb-14 mb-10">

                    {/* Heading */}
                    <h2 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                        {/* Main Heading */}
                        <span
                            className="relative z-10 lg:text-4xl text-3xl font-extrabold tracking-wide inline-block bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, #7a5a0a 0%, #b8860b 25%, #d4af37 50%, #c9971a 75%, #8a6a12 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block",
                                fontFamily: "serif",
                                textShadow: "0px 2px 10px rgba(212,175,55,0.22)"
                            }}
                        >
                            Frequently Asked Questions
                        </span>

                        {/* Glow Effect
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 w-72 h-16 rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #d4af37, #fff2b3, #d4af37)"
                        }}
                    /> */}

                        {/* Decorative Line */}
                        <div className="relative mt-5 w-full flex items-center justify-center">

                            {/* Left Line */}
                            <div
                                className="h-px lg:w-52 w-20"
                                style={{
                                    background:
                                        "linear-gradient(to right, transparent, #d4af37)"
                                }}
                            />

                            {/* Diamond Center */}
                            <div
                                className="mx-4 w-3 h-3 rotate-45 rounded-sm"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #fff2b3, #d4af37, #8a6a12)",
                                    boxShadow: "0 0 12px rgba(212,175,55,0.6)"
                                }}
                            />

                            {/* Right Line */}
                            <div
                                className="h-px lg:w-52 w-20"
                                style={{
                                    background:
                                        "linear-gradient(to left, transparent, #d4af37)"
                                }}
                            />
                        </div>
                    </h2>


                </div>

                {/* FAQ Items */}
                <div className="">

                    {faqs.map((faq, index) => {

                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="
                                    rounded-[28px]
                                    overflow-hidden
                                    border
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    lg:my-7
                                    my-5
                                "
                                style={{
                                    borderColor: isOpen
                                        ? gold.light
                                        : "rgba(212,175,55,0.25)",
                                    background:
                                        "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                                    boxShadow: isOpen
                                        ? "0 0 30px rgba(212,175,55,0.18)"
                                        : "none",
                                }}
                            >

                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? null : index
                                        )
                                    }
                                    className="
                                        w-full
                                        cursor-pointer
                                        flex
                                        items-center
                                        justify-between
                                        text-left
                                        lg:px-8
                                        px-5
                                        lg:py-3
                                        py-2
                                    "
                                >

                                    <h2
                                        className="
                                            lg:text-lg
                                            text-base
                                            font-semibold
                                            pr-5
                                        "
                                        style={{
                                            color: gold.light,
                                        }}
                                    >
                                        {faq.question}
                                    </h2>

                                    <div
                                        className="
                                            min-w-[40]
                                            h-[40]
                                            rounded-full
                                            flex
                                            items-center
                                            justify-center
                                            duration-500
                                        "
                                        style={{
                                            background: isOpen
                                                ? "linear-gradient(135deg,#8a6a12,#d4af37,#fff2b3)"
                                                : "rgba(255,255,255,0.05)",
                                        }}
                                    >

                                        <ChevronDown
                                            size={22}
                                            className={`duration-200 ${isOpen
                                                ? "rotate-180 text-black"
                                                : ""
                                                }`}
                                            style={{
                                                color: isOpen
                                                    ? "#000"
                                                    : gold.light,
                                            }}
                                        />

                                    </div>

                                </button>

                                {/* Answer */}
                                <div
                                    className={`
                                        grid
                                        transition-all
                                        duration-200
                                        ease-in-out
                                        relative
                                        ${isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }
                                    `}
                                >

                                    <div className="overflow-hidden">

                                        <p
                                            className="
                                                lg:px-8
                                                px-5
                                                pb-5
                                                text-gray-300
                                                leading-8
                                                lg:text-base
                                                text-sm
                                            "
                                        >
                                            {faq.answer}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}