"use client";

import React, { useState } from "react";

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

export default function Dashboard() {

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

        {
            title: "Profile",
            slug: "profile",
            icon: <FaUser size={18} />,
        },

        {
            title: "Coupons",
            slug: "coupons",
            icon: <FaGift size={18} />,
        },

        {
            title: "Support",
            slug: "support",
            icon: <FaHeadset size={18} />,
        },

        {
            title: "Logout",
            slug: "logout",
            icon: <FaSignOutAlt size={18} />,
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
                                Tarun Mehra
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

                            <h2 className="text-2xl font-bold text-white">
                                Tarun Mehra
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

                        {activeTab === "profile" && (
                            <Profile />
                        )}

                        {activeTab === "coupons" && (
                            <Coupons />
                        )}

                        {activeTab === "support" && (
                            <Support />
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

            <div className="mb-8">

                <h2 className="lg:text-4xl text-3xl font-black text-white uppercase">
                    Dashboard
                </h2>

                <p className="text-gray-400 mt-2 text-sm lg:text-base">
                    Welcome back to Kritika Fashion Point
                </p>

            </div>

            {/* STATS */}
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="
                            rounded-3xl
                            border
                            border-[#2a2a2a]
                            bg-linear-to-br
                            from-[#1a1405]
                            via-black
                            to-[#1a1405]
                            p-6
                        "
                    >

                        <p className="text-gray-400 uppercase text-xs tracking-widest">
                            {item.title}
                        </p>

                        <h3 className="text-[#D4AF37] text-3xl lg:text-4xl font-black mt-3">
                            {item.value}
                        </h3>

                    </div>
                ))}
            </div>

        </div>
    );
}

/* =======================================================
   ORDERS
======================================================= */

function Orders() {
    return (
        <div>

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-6">
                My Orders
            </h2>

            <div className="overflow-x-auto rounded-3xl border border-[#1f1f1f]">

                <table className="w-full min-w-[650]">

                    <thead className="bg-[#111111]">

                        <tr>

                            <th className="p-5 text-left text-[#D4AF37]">
                                Order ID
                            </th>

                            <th className="p-5 text-left text-[#D4AF37]">
                                Date
                            </th>

                            <th className="p-5 text-left text-[#D4AF37]">
                                Status
                            </th>

                            <th className="p-5 text-left text-[#D4AF37]">
                                Amount
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr className="border-t border-[#1f1f1f]">

                            <td className="p-5">
                                #KF1023
                            </td>

                            <td className="p-5">
                                12 Aug 2025
                            </td>

                            <td className="p-5 text-green-400">
                                Delivered
                            </td>

                            <td className="p-5">
                                ₹4,500
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    );
}

/* =======================================================
   WISHLIST
======================================================= */

function Wishlist() {
    return (
        <div>

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-5">
                Wishlist
            </h2>

            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">

                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="
                            rounded-3xl
                            overflow-hidden
                            border
                            border-[#1f1f1f]
                            bg-[#0b0b0b]
                        "
                    >

                        <div className="h-72 bg-[#111111]"></div>

                        <div className="p-5">

                            <h3 className="text-xl font-bold text-white">
                                Gold Necklace
                            </h3>

                            <p className="text-[#D4AF37] mt-2">
                                ₹2,500
                            </p>

                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

/* =======================================================
   ADDRESSES
======================================================= */

function Addresses() {

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

    return (
        <div>

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-6">
                Addresses
            </h2>

            <div className="grid lg:grid-cols-2 gap-5">

                <input
                    placeholder="Full Name"
                    className={inputClass}
                />

                <input
                    placeholder="Phone Number"
                    className={inputClass}
                />

                <input
                    placeholder="City"
                    className={inputClass}
                />

                <input
                    placeholder="Pincode"
                    className={inputClass}
                />

                <textarea
                    placeholder="Full Address"
                    className={`${inputClass} lg:col-span-2 min-h-40`}
                />

            </div>

            <button
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
   PROFILE
======================================================= */

function Profile() {

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

    return (
        <div>

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-6">
                Profile
            </h2>

            <div className="grid lg:grid-cols-2 gap-5">

                <input
                    placeholder="Full Name"
                    className={inputClass}
                />

                <input
                    placeholder="Email Address"
                    className={inputClass}
                />

                <input
                    placeholder="Phone Number"
                    className={inputClass}
                />

                <input
                    placeholder="Date Of Birth"
                    className={inputClass}
                />

            </div>

            <button
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
                Update Profile
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

/* =======================================================
   SUPPORT
======================================================= */

function Support() {
    return (
        <div>

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-6">
                Support
            </h2>

            <textarea
                placeholder="Describe your issue..."
                className="
                    w-full
                    min-h-52
                    rounded-3xl
                    bg-[#111111]
                    border
                    border-[#2a2a2a]
                    p-5
                    outline-none
                    focus:border-[#D4AF37]
                    duration-300
                "
            />

            <button
                className="
                    mt-5
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
                Submit Ticket
            </button>

        </div>
    );
}