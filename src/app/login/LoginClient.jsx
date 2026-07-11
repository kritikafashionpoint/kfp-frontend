"use client";

import React, { useState } from "react";
import {
    Mail,
    Lock,
    User,
    Phone,
    ArrowRight
} from "lucide-react";

import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";

export default function LoginClient() {

    const [activeTab, setActiveTab] = useState("login");

    const premiumGoldGradient = `
        linear-gradient(
            135deg,
            #4d3900 0%,
            #8c670a 18%,
            #d4af37 38%,
            #f5df8b 50%,
            #e6c766 58%,
            #c9971a 72%,
            #7a5a08 88%,
            #4d3900 100%
        )
    `;

    const PremiumIcon = ({ children }) => (
        <div
            className="
                relative
                min-w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                overflow-hidden
            "
            style={{
                background: premiumGoldGradient,
            }}
        >
            {children}
        </div>
    );

    return (
        <section
            className="
                min-h-screen
                text-white
                flex
                items-center
                justify-center
                px-4
                py-10
                overflow-hidden
                relative
            "
        >



            {/* Main Card */}
            <div
                className="
                    relative
                    w-full
                    max-w-7xl
                    overflow-hidden
                    border-y-4
                    backdrop-blur-xl
                    grid
                    lg:grid-cols-2
                    border-amber-300                    
                "
            >

                {/* Left */}
                <div
                    className="
                        flex
                        items-center
                        justify-center
                        p-5
                        sm:p-10
                        lg:p-16
                    "
                >

                    <div className="w-full max-w-xl">

                        {/* Tabs */}
                        <div
                            className="
                                flex
                            rounded-2xl
                                p-1.5
                                mb-10
                                border
                                bg-[#ffffff]
                            "
                        >

                            <button
                                onClick={() => setActiveTab("login")}
                                className={`
                                    flex-1
                                    py-3
                                    text-md
                                    lg:text-lg
                                    uppercase
                                    font-semibold
                                    duration-300
                                    ${activeTab === "login"
                                        ? "text-black"
                                        : "text-black"
                                    }
                                `}
                                style={
                                    activeTab === "login"
                                        ? { background: premiumGoldGradient }
                                        : { background: 'white' }
                                }
                            >
                                Login
                            </button>

                            <button
                                onClick={() => setActiveTab("register")}
                                className={`
                                    flex-1
                                    py-3
                                    text-md
                                    lg:text-lg
                                    uppercase
                                    font-semibold
                                    duration-300
                                    ${activeTab === "register"
                                        ? "text-black"
                                        : "text-black"
                                    }
                                `}
                                style={
                                    activeTab === "register"
                                        ? { background: premiumGoldGradient }
                                        : {}
                                }
                            >
                                Register
                            </button>

                        </div>

                        {/* LOGIN */}
                        {activeTab === "login" &&

                            <LoginForm PremiumIcon={PremiumIcon} premiumGoldGradient={premiumGoldGradient} />
                        }



                        {/* REGISTER */}
                        {activeTab === 'register' && <RegisterForm setActiveTab={setActiveTab} />}

                    </div>

                </div>

                {/* Right */}
                <div
                    className="
                        
                        lg:flex
                        flex-col
                        justify-center
                        px-5
                        lg:px-10
                        lg:py-20
                        py-10
                        relative
                        overflow-hidden
                        border-l
                    "
                    style={{
                        borderColor: "rgba(230,199,102,0.10)"
                    }}
                >

                    <div
                        className="
                            absolute
                            top-10
                            right-10
                            w-52
                            h-52
                            rounded-full
                            blur-3xl
                            opacity-20
                        "
                        style={{
                            background: "#d4af37"
                        }}
                    />

                    <div className="relative z-10">

                        <p
                            className="
                                uppercase
                                text-sm
                                mb-6
                            "
                            style={{
                                color: "black",
                                letterSpacing: "8px"
                            }}
                        >
                            Kritika Fashion Point
                        </p>

                        <h2
                            className="
                                lg:text-6xl
                                md:text-4xl
                                text-2xl
                                font-bold
                                lg:leading-[1.15]
                                leading-normal
                                mb-8
                                text-black
                            "
                        >
                            Luxury Jewellery
                            <br />
                            Shopping
                            <br />
                            Experience
                        </h2>

                        <p
                            className="
                                text-gray-800
                                text-lg
                                leading-9
                                max-w-lg
                            "
                        >
                            Login or create your account to access premium
                            jewellery collections, wishlist, orders and
                            exclusive fashion offers.
                        </p>

                    </div>

                </div>
            </div>

        </section>
    );
}






