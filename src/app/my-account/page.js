"use client";

import React, { useEffect, useState } from "react";

import {
    FaBoxOpen,
    FaHeart,
    FaUser,
    FaMapMarkerAlt,
    FaSignOutAlt,
    FaGift,
    FaHeadset,
    FaBars,
    FaTimes,
} from "react-icons/fa";

import {
    MdDashboard,
    MdKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { post_api } from "../api_helper/api_helper";
import BuyNowButton from "../common/BuyNowButton";
import AddToCartButton from "../common/AddToCartButton";
import Image from "next/image";
import WishListModel, { WishlistEmpty } from "../common/WishListModel";
import Link from "next/link";
import { gold } from "../colors/color";
import GetNow from "../common/GetNow";
import { logout } from "../redux/slices/userSlice";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();


    const user_points = [
        {
            title: "Dashboard",
            slug: "dashboard",
            icon: <MdDashboard size={22} />,
        },

        {
            title: "My Orders",
            slug: "orders",
            icon: <FaBoxOpen size={18} />,
        },

        {
            title: "Wishlist",
            slug: "wishlist",
            icon: <FaHeart size={18} />,
        },

        {
            title: "Addresses",
            slug: "addresses",
            icon: <FaMapMarkerAlt size={18} />,
        },
    ];

    const [activeTab, setActiveTab] =
        useState("dashboard");

    const [mobileSidebar, setMobileSidebar] =
        useState(false);

    const handleTabChange = (slug, title) => {

        setActiveTab(slug);
        setMobileSidebar(false);
    };
    const dispatch = useDispatch()



    const logoutUser = () => {
        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        try {
            dispatch(logout());

            toast.success("Logged out successfully!");

            setTimeout(() => {
                router.push("/");
            }, 1500);
        } catch (error) {
            toast.error("Failed to logout");
        }
    };
    const user_data = useSelector((store) => store.user.user)
    const user_name = user_data?.name || 'User'

    return (
        <section className="w-full min-h-screen bg-black py-5 lg:py-10 overflow-hidden">

            <div className="max-w-330 mx-auto lg:px-8 px-4">

                {/* TOP HEADING */}
                <div className="mb-8">

                    <p className="text-[#D4AF37] tracking-[4px] lg:tracking-[6px] uppercase text-[11px] lg:text-sm mb-3">
                        Premium Jewellery Collection
                    </p>

                    <h1
                        style={{ fontFamily: "Poppins" }}
                        className="
                            text-white
                            font-black
                            uppercase
                            lg:text-4xl
                            md:text-3xl
                            text-2xl
                        "
                    >
                        My Account
                    </h1>

                    <div className="w-32 h-[2] bg-[#D4AF37] mt-4"></div>

                </div>

                {/* MOBILE TOP BAR */}
                <div className="lg:hidden mb-5">

                    <button
                        onClick={() =>
                            setMobileSidebar(true)
                        }
                        className="
                            flex
                            items-center
                            gap-3
                            bg-[#0a0a0a]
                            border
                            border-[#2a2a2a]
                            text-white
                            px-5
                            py-4
                            rounded-2xl
                            w-full
                        "
                    >

                        <FaBars className="text-[#D4AF37]" />

                        <span className="font-semibold tracking-wider uppercase">
                            Open Menu
                        </span>

                    </button>

                </div>

                {/* MOBILE SIDEBAR OVERLAY */}
                <div
                    className={`
                        fixed
                        inset-0
                        bg-black/70
                        z-50
                        duration-300
                        lg:hidden
                        ${mobileSidebar
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }
                    `}
                >

                    {/* MOBILE SIDEBAR */}
                    <div
                        className={`
                            absolute
                            top-0
                            left-0
                            h-full
                            w-[85%]
                            max-w-[320px]
                            bg-[#060808]
                            border-r
                            border-[#1d1d1d]
                            p-5
                            overflow-y-auto
                            duration-300
                            ${mobileSidebar
                                ? "translate-x-0"
                                : "-translate-x-full"
                            }
                        `}
                    >

                        {/* CLOSE */}
                        <div className="flex items-center justify-between mb-6">

                            <h2 className="text-white text-2xl font-black uppercase">
                                Menu
                            </h2>

                            <button
                                onClick={() =>
                                    setMobileSidebar(false)
                                }
                                className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-[#111]
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <FaTimes />
                            </button>

                        </div>

                        {/* USER CARD */}
                        <div
                            className="
                                rounded-3xl
                                p-5
                                border
                                border-[#2a2a2a]
                                bg-linear-to-br
                                from-[#1a1405]
                                via-black
                                to-[#1a1405]
                                mb-6
                            "
                        >

                            <div
                                className="
                                    w-16
                                    h-16
                                    rounded-full
                                    bg-[#D4AF37]
                                    flex
                                    items-center
                                    justify-center
                                    text-black
                                    font-black
                                    text-2xl
                                    mb-4
                                "
                            >
                                T
                            </div>

                            <h2 className="text-xl font-bold text-white">
                                {user_name}
                            </h2>

                            <p className="text-gray-400 text-sm mt-1">
                                Premium Customer
                            </p>

                        </div>

                        {/* MENU */}
                        <ul className="flex flex-col gap-2">

                            {user_points.map((item, index) => {

                                const isActive =
                                    activeTab === item.slug;

                                return (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            handleTabChange(
                                                item.slug, item.title
                                            )
                                        }
                                        className={`
                                            flex
                                            items-center
                                            justify-between
                                            px-4
                                            py-4
                                            rounded-2xl
                                            cursor-pointer
                                            duration-300
                                            group
                                            border
                                            ${isActive
                                                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                                                : "bg-[#0a0a0a] text-white border-[#1e1e1e]"
                                            }
                                        `}
                                    >

                                        <div className="flex items-center gap-3">

                                            {item.icon}

                                            <span
                                                className="
                                                    uppercase
                                                    tracking-wider
                                                    font-semibold
                                                    text-sm
                                                "
                                            >
                                                {item.title}
                                            </span>

                                        </div>

                                        <MdKeyboardArrowRight
                                            size={22}
                                        />

                                    </li>
                                );
                            })}
                            <li>hkdf</li>


                        </ul>

                    </div>

                </div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-[320px_auto] gap-6">

                    {/* DESKTOP SIDEBAR */}
                    <div
                        className="
                            hidden
                            lg:block
                            bg-[#060808]
                            border
                            border-[#1d1d1d]
                            rounded-3xl
                            p-4
                            h-fit
                            sticky
                            top-5
                        "
                    >

                        {/* USER CARD */}
                        <div
                            className="
                                rounded-3xl
                                p-5
                                border
                                border-[#2a2a2a]
                                bg-linear-to-br
                                from-[#1a1405]
                                via-black
                                to-[#1a1405]
                                mb-6
                            "
                        >

                            <div
                                className="
                                    w-18
                                    h-18
                                    rounded-full
                                    bg-[#D4AF37]
                                    flex
                                    items-center
                                    justify-center
                                    text-black
                                    font-black
                                    text-2xl
                                    mb-4
                                "
                            >
                                T
                            </div>

                            <h2 className="text-2xl font-bold text-white capitalize">
                                {user_name}
                            </h2>

                            <p className="text-gray-400 text-sm mt-1">
                                Premium Customer
                            </p>

                        </div>

                        {/* MENU */}
                        <ul className="flex flex-col gap-2">

                            {user_points.map((item, index) => {

                                const isActive =
                                    activeTab === item.slug;

                                return (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            setActiveTab(
                                                item.slug
                                            )
                                        }
                                        className={`
                                            flex
                                            items-center
                                            justify-between
                                            px-5
                                            py-4
                                            rounded-2xl
                                            cursor-pointer
                                            duration-300
                                            group
                                            border
                                            ${isActive
                                                ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                                                : "bg-[#0a0a0a] text-white border-[#1e1e1e] hover:border-[#D4AF37] hover:bg-[#111111]"
                                            }
                                        `}
                                    >

                                        <div className="flex items-center gap-3">

                                            {item.icon}

                                            <span
                                                className="
                                                    uppercase
                                                    tracking-wider
                                                    font-semibold
                                                    text-sm
                                                "
                                            >
                                                {item.title}
                                            </span>

                                        </div>

                                        <MdKeyboardArrowRight
                                            className="
                                                group-hover:translate-x-1
                                                duration-300
                                            "
                                            size={22}
                                        />

                                    </li>
                                );
                            })}

                            <li onClick={logoutUser} className="w-full h-full bg-red-700 text-white rounded-xl py-3 cursor-pointer mt-3 text-center Poppins capitalize">logout</li>

                        </ul>

                    </div>

                    {/* CONTENT */}
                    <div
                        className="
                            bg-[#060808]
                            border
                            border-[#1d1d1d]
                            rounded-3xl
                            lg:p-8
                            md:p-6
                            p-4
                            overflow-hidden
                        "
                    >

                        {activeTab === "dashboard" && (
                            <UserDashboard />
                        )}

                        {activeTab === "orders" && (
                            <Orders />
                        )}

                        {activeTab === "wishlist" && (
                            <Wishlist />
                        )}

                        {activeTab === "addresses" && (
                            <Addresses />
                        )}


                    </div>
                </div>
            </div>
        </section>
    );
}

/* =======================================================
   DASHBOARD
======================================================= */

function UserDashboard() {

    const fetchDashboardData = async () => {
        try {

        } catch (error) {

        }
    }

    const token = useSelector((store) => store.user.token)

    useEffect(() => {
        if (token) {
            fetchDashboardData()
        }
    }, [])

    const stats = [
        {
            title: "Total Orders",
            value: "12",
        },

        {
            title: "Wishlist Items",
            value: "08",
        },

        {
            title: "Reward Points",
            value: "1,450",
        },

        {
            title: "Coupons",
            value: "04",
        },
    ];

    return (
        <div>

            <div className="rounded-3xl border border-[#2a2a2a] bg-[#0a0a0a] p-8 lg:p-12">

                <h2 className="lg:text-5xl text-3xl font-black text-white uppercase">
                    Welcome Back
                </h2>

                <p className="text-[#D4AF37] text-lg lg:text-xl font-semibold mt-3">
                    Kritika Fashion Point
                </p>

                <p className="text-gray-400 mt-6 leading-relaxed max-w-3xl">
                    Manage your orders, wishlist, saved addresses and account
                    details from one place. Stay updated with your latest purchases
                    and enjoy a seamless shopping experience with Kritika Fashion
                    Point.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                    <div className="px-5 py-3 rounded-2xl bg-[#111111] border border-[#2a2a2a]">
                        <span className="text-[#D4AF37] font-semibold">
                            ✨ Premium Fashion Collection
                        </span>
                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-[#111111] border border-[#2a2a2a]">
                        <span className="text-[#D4AF37] font-semibold">
                            🚚 Fast Delivery
                        </span>
                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-[#111111] border border-[#2a2a2a]">
                        <span className="text-[#D4AF37] font-semibold">
                            💎 Exclusive Offers
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}

/* =======================================================
   ORDERS
======================================================= */

function Orders() {
    const orders = useSelector((state) => state.order.orders)
    const order_loading = useSelector((state) => state.order.order_loading)

    return (
        <div className="space-y-8">

            {order_loading ? (

                <div className="text-center py-20 text-gray-400">
                    Loading Orders...
                </div>

            ) : orders?.length === 0 ? (

                <div className="text-center py-20 text-gray-400">
                    No Orders Found
                </div>

            ) : (

                orders.map((order) => (

                    <div
                        key={order.order_id}
                        className="
                    bg-[#0f0f0f]
                    border
                    border-[#252525]
                    rounded-3xl
                    overflow-hidden
                "
                    >

                        {/* Header */}

                        <div
                            className="
                        flex
                        flex-wrap
                        gap-5
                        justify-between
                        items-center
                        p-6
                        border-b
                        border-[#252525]
                    "
                        >

                            <div>

                                <h3 className="text-white text-xl font-bold">
                                    Order #{order.order_id}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {new Date(order.created_at).toLocaleString()}
                                </p>

                            </div>

                            <div className="flex items-center gap-4">

                                <span
                                    className={`
                                px-4 py-2 Poppins rounded-full text-sm font-medium
                                ${order.order_status === "delivered"
                                            ? "bg-green-500/10 text-green-400"
                                            : order.order_status === "cancelled"
                                                ? "bg-red-500/10 text-red-400"
                                                : "bg-green-500 text-black "
                                        }
                            `}
                                >
                                    {order.order_status}
                                </span>

                                <div className="text-right">

                                    <p className="text-gray-400 text-xs">
                                        Total Amount
                                    </p>

                                    <p className="text-[#D4AF37] font-bold text-xl">
                                        ₹{order.total_amount}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Products */}

                        <div className="p-6">

                            <div className="grid lg:grid-cols-2 gap-5">

                                {order.items.map((item) => (

                                    <div
                                        key={item.order_item_id}
                                        className="
                                    bg-black
                                    border
                                    border-[#252525]
                                    rounded-2xl
                                    overflow-hidden
                                "
                                    >

                                        <div className="flex gap-4 p-4">

                                            <img
                                                src={item.product.image}
                                                alt={item.product.title}
                                                className="
                                            w-32
                                            h-32
                                            object-cover
                                            rounded-xl
                                        "
                                            />

                                            <div className="flex-1">

                                                <h4 className="text-white font-bold text-lg">
                                                    {item.product.title}
                                                </h4>

                                                <p className="text-gray-400 text-sm mt-1">
                                                    {item.product.short_description}
                                                </p>

                                                <div className="mt-3 flex flex-wrap gap-2">

                                                    <span className="text-xs bg-[#1a1a1a] px-3 py-1 rounded-full text-gray-300">
                                                        {item.product.material}
                                                    </span>

                                                    <span className="text-xs bg-[#1a1a1a] px-3 py-1 rounded-full text-gray-300">
                                                        {item.product.finishing}
                                                    </span>

                                                    <span className="text-xs bg-[#1a1a1a] px-3 py-1 rounded-full text-gray-300">
                                                        {item.product.category.name}
                                                    </span>

                                                </div>

                                                <div className="mt-4">

                                                    <p className="text-sm text-gray-400">
                                                        Quantity: {item.quantity}
                                                    </p>

                                                    <p className="text-sm text-gray-400">
                                                        Ordered Price: ₹{item.ordered_price}
                                                    </p>

                                                    <div className="flex items-center gap-3 mt-2">

                                                        <span className="text-[#D4AF37] font-bold text-lg">
                                                            ₹{item.product.customer_price}
                                                        </span>

                                                        <span className="line-through text-gray-500 text-sm">
                                                            ₹{item.product.sale_price}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>



                            {order.order_status !== "cancelled" &&
                                order.order_status !== "delivered" && (

                                    <div className="mt-6 flex justify-end">

                                        <button
                                            onClick={() => handleCancelOrder(order.order_id)}
                                            className="
                                        px-5
                                        py-3
                                        rounded-xl
                                        bg-red-600
                                        hover:bg-red-700
                                        text-white
                                        font-medium
                                        transition
                                    "
                                        >
                                            Cancel Order
                                        </button>

                                    </div>

                                )}


                        </div>



                    </div>

                ))

            )}

        </div>
    );
}

/* =======================================================
   WISHLIST
======================================================= */

function Wishlist() {

    const wishListDataList = useSelector((store) => store.wishlist.wishlistData)
    const wishListLoading = useSelector((state) => state.wishlist.wishlist_data_loading)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <div>

            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-5">
                Wishlist
            </h2>




            {wishListLoading ?
                (<div className="lg:p-10 p-5 text-white text-lg tracking-wide">
                    Loading Cart...
                </div>)
                :
                (

                    wishListDataList.length == 0 ?
                        <WishlistEmpty />
                        :
                        (
                            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">

                                {wishListDataList.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/product/${item.p_slug}`}
                                        className="block h-fit"
                                    >
                                        <article
                                            style={{ borderColor: gold.dark }}
                                            className="
                    bg-white
                    border
                    cursor-pointer
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
                                            <div className="bg-black relative">
                                                <div className="relative h-[190] overflow-hidden">

                                                    <Image
                                                        loading='lazy'

                                                        src={item.index_image || "/images/no-image.png"}
                                                        alt={item.p_title || "Product Image"}
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
                                            <div style={{ borderColor: gold.dark }}
                                                className="sm:border-x sm:border-b">
                                                <div
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
                                                            {item.p_title || "Untitled Product"}

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
                                                            {item.p_short_description || "Best Artificial Premium Jwellery For your special Occasion"}
                                                        </p>
                                                    </div>

                                                    {/* PRICE */}
                                                    <div className="flex items-center sm:gap-3 gap-1.5">

                                                        <p
                                                            style={{ color: gold.base }}
                                                            className="sm:text-2xl text-xl font-extrabold"
                                                        >
                                                            ₹{item.p_customer_price || 0}
                                                        </p>

                                                        {!!item.p_customer_price && (
                                                            <p className="text-sm text-gray-400 line-through">
                                                                ₹{item.p_sale_price}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* BUTTONS */}
                                                <div className="grid grid-cols-2 sm:gap-2 gap-4 px-5 pb-5 bg-black">

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
                                ))
                                }
                            </div>

                        )

                )
            }

        </div>
    );
}

/* =======================================================
   ADDRESSES
======================================================= */


export function Addresses() {

    const token = useSelector((store) => store.user.token)
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        city: "",
        pincode: "",
        address: "",
    });

    const inputClass = `
        w-full
        rounded-2xl
        bg-[#111111]
        border
        border-[#2a2a2a]
        p-4
        outline-none
        text-white
        focus:border-[#D4AF37]
        duration-300
    `;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const getUserAddress = async () => {
        try {
            const response = await post_api({
                body: {},
                params: null,
                path: "user/get-user-address",
                token: token,
            });

            if (response?.data?.success) {
                setFormData({
                    name: response.data.data.name || "",
                    mobile: response.data.data.mobile || "",
                    city: response.data.data.city || "",
                    pincode: response.data.data.pincode || "",
                    address: response.data.data.address || "",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (token) {
            getUserAddress();
        }
    }, [token]);

    const handleSaveAddress = async () => {
        try {
            if (
                !formData.name ||
                !formData.mobile ||
                !formData.city ||
                !formData.pincode ||
                !formData.address
            ) {
                return toast.error("Please fill all fields");
            }

            const response = await post_api({
                body: formData,
                params: null,
                path: "user/save-address",
                token: token
            });

            if (response?.data?.success) {
                toast.success(
                    response?.data?.message || "Address saved successfully"
                );

            } else {
                toast.error(
                    response?.data?.message || "Failed to save address"
                );
            }
        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong"
            );
        }
    };

    return (
        <div>
            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-6">
                Addresses
            </h2>

            <div className="grid lg:grid-cols-2 gap-5">
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={inputClass}
                />

                <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputClass}
                />

                <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={inputClass}
                />

                <input
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className={inputClass}
                />

                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full Address"
                    className={`${inputClass} lg:col-span-2 min-h-40`}
                />
            </div>

            <button
                onClick={handleSaveAddress}
                className="
                    mt-6
                    bg-[#D4AF37]
                    text-black
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                    w-full
                    sm:w-fit
                "
            >
                Save Address
            </button>
        </div>
    );
}



/* =======================================================
   COUPONS
======================================================= */

function Coupons() {
    return (
        <div>

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-6">
                Coupons
            </h2>

            <div
                className="
                    rounded-3xl
                    border
                    border-dashed
                    border-[#D4AF37]
                    p-6
                    lg:p-8
                "
            >

                <h3 className="text-3xl font-black text-[#D4AF37]">
                    FLAT20
                </h3>

                <p className="text-gray-400 mt-3 text-sm lg:text-base">
                    Get flat 20% off on premium jewellery
                </p>

            </div>

        </div>
    );
}

