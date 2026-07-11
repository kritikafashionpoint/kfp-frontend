"use client";
import React, { useEffect, useState } from "react";
import { gold } from "../colors/color";
import {
    Heart,
    ShoppingBag,
    ShoppingBagIcon,
    ShoppingCart,
    Trash2,
    X,
} from "lucide-react";
import Image from "next/image";
import BuyNowButton from "./BuyNowButton";
import Link from "next/link";
import GetNow from "./GetNow";
import { useDispatch, useSelector } from "react-redux";
import { post_api } from "../api_helper/api_helper";
import { toast } from "react-toastify";

import {
    setCartData,
    removeFromCart as removeFromCartAction
} from "../redux/slices/cartSlice";
import Loading from "../../../Loading";

export default function CartModel({ cartModelOpen, setCartModelOpen }) {
    const CartData = useSelector((state) => state.cart.cartData);
    const TotalAmount = useSelector((state) => state.cart.total_amount_of_cart);

    const token = useSelector((state) => state.user.token)

    const [getNowModel, setGetNowModel] = useState(false);
    const [removingId, setRemovingId] = useState(null);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [quantity, setQuantity] = useState(null)


    const cartDataLoading = useSelector((state) => state.cart.cart_data_loading)

    const dispatch = useDispatch()


    const removeFromCart = async (id) => {

        try {
            setRemovingId(id);

            const response = await post_api({
                body: {},
                params: id,
                path: "user/remove-from-cart",
                token,
            });

            const message =
                response?.data?.message ||
                response?.message ||
                "Item removed successfully";

            toast.success(message);

            dispatch(removeFromCartAction(id))

        } catch (error) {
            console.error("Remove cart error:", error);

            const errorMessage =
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong";

            toast.error(errorMessage);
        } finally {
            setRemovingId(null);
        }
    };

    return (
        <>
            <GetNow quantity={quantity} getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            {/* Overlay */}
            <div
                onClick={() => setCartModelOpen(false)}
                className={`
                    fixed inset-0 z-105
                    bg-black/90 backdrop-blur-sm
                    duration-1000
                    top-0 left-0
                    ${cartModelOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />

            {/* Model */}
            <div
                className={`
                    fixed top-0 right-0
                    lg:w-[350] md:w-[300] sm:w-[300] w-[300]
                    h-screen
                    z-110
                    bg-white
                    duration-500
                    overflow-hidden
                    ${cartModelOpen ? "translate-x-0" : "translate-x-full"}
                  
                `}

            >
                {/* Glow */}
                <div
                    style={{ background: gold.base }}
                    className="absolute top-0 right-0 w-[250] h-[250] rounded-full blur-[120px] opacity-10"
                />

                {/* Header */}
                <div
                    style={{
                        borderBottom: `1px solid ${gold.base}25`,
                    }}
                    className="flex items-center justify-between px-6 py-5 relative z-10"
                >
                    <div className="flex items-center gap-3">
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
                                )`,
                            }}
                            className="w-12 h-12 rounded-full flex items-center justify-center "
                        >
                            <ShoppingCart className="text-black fill-black" size={22} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black Poppins tracking-wide">
                                Cart
                            </h2>

                            <p className="text-sm text-black tracking-wide">
                                Your Premium Collection
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setCartModelOpen(false)}
                        className="
                            w-10 h-10
                            rounded-full
                            bg-black/5
                            border border-white/10
                            flex items-center justify-center
                            text-black
                            hover:rotate-90
                            hover:bg-[#d4af37]
                            hover:text-black
                            duration-300
                            cursor-pointer
                        "
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Cart Items */}
                {cartDataLoading ?
                    (<div className="lg:p-10 p-5 text-white text-lg tracking-wide">
                        Loading Cart...
                    </div>)
                    :
                    (
                        <div>
                            <div>
                                {CartData.length == 0 ?
                                    <CartEmpty setCartModelOpen={setCartModelOpen} />
                                    :
                                    <div className="h-[calc(100vh-180px)] overflow-y-auto px-5 py-5 space-y-5 custom-scrollbar">
                                        {CartData.map((item, index) => {
                                            return (

                                                <Link
                                                    key={index}
                                                    href={`/product/${item.p_slug}`}
                                                    className="block h-fit"
                                                >
                                                    <article
                                                        key={`${item.cart_id}-${index}`}
                                                        className="
            bg-white
            border
            border-gray-300
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
                                                        <div className="bg-white relative">
                                                            <div
                                                                onClick={() => setCartModelOpen(false)}
                                                                className="relative h-47.5 overflow-hidden "
                                                            >
                                                                <Image
                                                                    loading='lazy'

                                                                    src={item?.images?.index_image}
                                                                    alt={item.p_title}
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
                bg-white
                flex
                flex-col
            "
                                                        >

                                                            <div className="flex-1">

                                                                <h2
                                                                    className="
                        text-xl
                        text-black
                        Poppins
                        
                        capitalize
                    "
                                                                >
                                                                    {item.p_title}

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
                            w-12.5
                            h-[2]
                            mt-2
                            rounded-full
                            duration-500
                            group-hover:w-[90]
                        "
                                                                    />
                                                                </h2>

                                                                <p
                                                                    style={{ fontFamily: "Poppins" }}
                                                                    className="
                        text-sm
                        mt-4
                        text-gray-800
                        line-clamp-2
                        min-h-10
                    "
                                                                >
                                                                    {item.p_short_description}
                                                                </p>

                                                                {/* QUANTITY */}
                                                                <div className="mt-0 flex items-center gap-2">

                                                                    <span className="text-gray-800
                                                                    Poppins  text-sm">
                                                                        Quantity
                                                                    </span>

                                                                    <div
                                                                        className="
                            w-6
                            h-6
                            flex
                            items-center
                            justify-center
                            rounded-full
                            text-sm
                            bg-green-800
                            text-white
                            border
                            border-green-700
                        "
                                                                        style={{
                                                                            fontFamily: "Poppins",
                                                                        }}
                                                                    >
                                                                        {item.quantity}
                                                                    </div>

                                                                </div>

                                                            </div>

                                                            {/* PRICE */}
                                                            <div className="flex items-center gap-3 mt-4">

                                                                <p
                                                                    className="text-2xl text-black Poppins font-semibold"
                                                                >
                                                                    ₹ {item.p_customer_price}
                                                                </p>

                                                                <p className="text-sm text-gray-800 Poppins line-through">
                                                                    ₹ {item.p_sale_price}
                                                                </p>

                                                            </div>

                                                        </div>

                                                        {/* BUTTONS */}
                                                        <div className="grid grid-cols-2 gap-2 px-5 pb-5 bg-white">

                                                            <button
                                                                disabled={removingId === item.product_id}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    removeFromCart(item.product_id);
                                                                }}
                                                                className="
                    w-full
                    cursor-pointer
                    px-4
                    py-2
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    font-bold
                    duration-300
                "
                                                            >
                                                                {removingId === item.product_id
                                                                    ? "लोडिंग..."
                                                                    : "हटाएं"}
                                                            </button>

                                                            <BuyNowButton
                                                                setQuantity={setQuantity}
                                                                setSelectedProduct={setSelectedProduct}
                                                                item={item}
                                                                getNowModel={getNowModel}
                                                                setGetNowModel={setGetNowModel}
                                                            />

                                                        </div>

                                                    </article>
                                                </Link>
                                            );
                                        })}

                                        <div className="flex items-center justify-between px-5 py-5 rounded-2xl bg-white border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                                            <div
                                                style={{ fontFamily: "Poppins" }}
                                                className="text-lg font-semibold tracking-wide text-amber-700"
                                            >
                                                Total
                                            </div>

                                            <span
                                                style={{ fontFamily: "Poppins" }}
                                                className="text-3xl font-semibold tracking-normal text-amber-700"
                                            >
                                                ₹ {TotalAmount}.00
                                            </span>
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>
                    )
                }

            </div>
        </>
    );
}

export function CartEmpty({ setCartModelOpen }) {
    return (
        <div className="flex flex-col items-center justify-center h-[68vh] py-10 px-6 text-center">
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
                Your Cart is Empty
            </h2>

            {/* Subtitle */}


            {/* Button */}
            <Link href="/shop-now">
                <button
                    onClick={() => setCartModelOpen(false)}
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
