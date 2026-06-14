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
            href={`/categories/${p_slug}`}
            className="h-fit"
        >
            <article
                className="
                    bg-transparent
                    sm:border
                    border-[#8A6A12]
                    cursor-pointer
                    sm:rounded-xl
                    shadow-sm
                    shadow-gray-950
                    transition-all
                    duration-300
                    group
                    h-full
                    flex
                    flex-col
                    overflow-hidden
                    relative
                    hover:shadow-xl
                "
            >

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
                <div className="bg-white relative overflow-hidden">
                    <div className="relative h-[230] bg-white overflow-hidden rounded-t-xl">

                        <Image
                            loading='lazy'

                            src={index_image || "/images/no-image.png"}
                            alt={p_title || "Product Image"}
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
                <div
                    style={{ borderTopColor: gold.dark }}
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
                            {p_title || "Untitled Product"}

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
                            {p_short_description || "Best Artificial Premium Jwellery For your special Occasion"}
                        </p>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-center gap-3">

                        <p
                            style={{ color: gold.base }}
                            className="text-2xl font-extrabold"
                        >
                            ₹{p_customer_price || 0}
                        </p>

                        {!!p_customer_price && (
                            <p className="text-sm text-gray-400 line-through">
                                ₹{p_sale_price}
                            </p>
                        )}
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

            </article>
        </Link>
    );
}