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
import { Orders } from "./comps/Orders";
import { Addresses } from "./comps/Addresses";
import { UserDashboard } from "./comps/UserDashboard";
import { Wishlist } from "./comps/Wishlist";

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
