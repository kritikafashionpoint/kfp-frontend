"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { gold } from "@/app/colors/color";
import AddToCartButton from "@/app/common/AddToCartButton";
import BuyNowButton from "@/app/common/BuyNowButton";

export default function ProductCard({
    item,
    index,
    getNowModel,
    setGetNowModel,
    setSelectedProduct

}) {

    if (!item) return null;

    const {
        p_slug,
        p_title,
        p_short_description,
        p_sale_price,
        p_customer_price,
        p_discount,
        index_image,
        is_top_selling,
    } = item;

    return (
        <Link
            href={`/product/${p_slug}`}
            className="h-fit"
        >
            <article
                className="
    bg-[#050505]
    sm:border
    border-[#8A6A12]/40
    sm:rounded-2xl
    overflow-hidden
    flex flex-col
    h-full
    relative
    transition-all
    duration-500
    ease-out
    hover:-translate-y-2
    hover:border-[#D4AF37]
    hover:shadow-[0_5px_10px_rgba(212,175,55,0.18)]
"
            >

                <div
                    className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
        pointer-events-none
    "
                >
                    <div
                        className="
            absolute
            inset-0
            bg-linear-to-br
            from-[#D4AF37]/5
            via-transparent
            to-[#F5DF8B]/10
        "
                    />
                </div>

                {/* TOP SELLING BADGE */}
                {is_top_selling && (
                    <div className="absolute top-3 left-3 z-99">
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
                {p_discount > 0 && (
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
                        -{p_discount}%
                    </div>
                )}

                {/* IMAGE */}
                <div className="relative h-[200] overflow-hidden bg-white">
                    <Image
                        loading="lazy"
                        src={index_image || "/images/no-image.png"}
                        alt={p_title}
                        fill
                        className="
            object-cover
            duration-700
            ease-out
            group-hover:scale-110
        "
                    />

                    <div
                        className="
            absolute
            inset-0
            bg-linear-to-t
            from-black/10
            to-transparent
        "
                    />
                </div>

                {/* CONTENT */}
                <div
                    className="">
                    <div
                        className="
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
                                {p_title || "Untitled Product"}

                                <span
                                    className="
        block
        h-[2]
        w-12
        rounded-full
        mt-2
        bg-linear-to-r
        from-[#8A6A12]
        via-[#D4AF37]
        to-[#F5DF8B]
        transition-all
        duration-500
        group-hover:w-24
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
                                {p_short_description || "Best Artificial Premium Jwellery For your special Occasion"}
                            </p>
                        </div>

                        {/* PRICE */}
                        <div className="flex items-center gap-3 mt-3">
                            <p
                                className="
            text-2xl
            font-black
            bg-linear-to-r
            from-[#D4AF37]
            via-[#F5DF8B]
            to-[#D4AF37]
            bg-clip-text
            text-transparent
        "
                            >
                                ₹{p_customer_price}
                            </p>

                            <p className="text-gray-500 line-through text-sm">
                                ₹{p_sale_price}
                            </p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="grid sm:grid-cols-2  sm:gap-2 gap-4 px-5 pb-5 bg-black">

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
    );
}