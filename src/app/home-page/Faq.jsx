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
        <section className="w-screen overflow-x-hidden bg-white lg:my-15 md:my-16 my-10 relative">

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

                   <h2 className="relative flex flex-col items-center justify-center lg:mb-14 mb-8">

                    {/* Main Heading */}
                    <span
                        className="capitalize relative Poppins z-10 lg:text-3xl text-2xl font-semibold tracking-wide inline-block text-black"
                    >
                        frequently Asked Questions
                    </span>

                    {/* Decorative Line */}
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
                                    overflow-hidden
                                    border
                                    border-gray-500
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    lg:my-7
                                    my-5
                                "
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
                                    >

                                        <ChevronDown
                                            size={22}
                                            className={`duration-200 ${isOpen
                                                ? "rotate-180 text-black"
                                                : ""
                                                }`}
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
                                                text-gray-700
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