import { post_api } from "@/app/api_helper/api_helper";
import {
    Mail,
    Lock,
    User,
    Phone,
    ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const RegisterForm = ({ setActiveTab }) => {


    const [loading, setLoading] = useState(false);



    const [registerData, setRegisterData] = useState({
        name: "",
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegisterData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            name,
            mobile,
            email,
            password,
        } = registerData;

        if (!name.trim()) {
            return toast.warning("Please enter your name");
        }

        if (!mobile.trim()) {
            return toast.warning("Please enter mobile number");
        }

        if (!/^[6-9]\d{9}$/.test(mobile)) {
            return toast.warning("Please enter valid mobile number");
        }

        if (!password.trim()) {
            return toast.warning("Please enter password");
        }

        if (password.length < 6) {
            return toast.warning(
                "Password must be at least 6 characters"
            );
        }

        try {
            setLoading(true);

            const response = await post_api({
                body: registerData,
                params: null,
                path: "user/create-user",
            });

            if (response.data.status) {

                toast.success(response.data.message);

                setRegisterData({
                    name: "",
                    mobile: "",
                    password: "",
                });

                setActiveTab('login')


            } else {
                toast.error(response.data.message);
            }

        } catch (error) {

            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                error?.message ||
                "Something went wrong"
            );

        } finally {
            setLoading(false);
        }
    };





    return (
        <div
            className="
                w-full
                overflow-hidden
                relative
                "
        >

            {/* Glow */}
            <div
                className="
                    absolute
                    -top-24
                    -right-24
                    w-72
                    h-72
                    rounded-full
                    blur-3xl
                    opacity-20
                    pointer-events-none
                "
            />

            {/* Heading */}
            <div className="relative z-10 mb-8">

                <p
                    className="
                        uppercase
                        tracking-[6px]
                        text-xs
                        mb-3
                    "
                    style={{
                        color: "#c9971a"
                    }}
                >
                    Premium Account
                </p>

                <h2
                    className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        leading-tight
                    "
                >
                    Create Your
                    <span
                        className="ml-3"
                        style={{
                            color: "#e6c766"
                        }}
                    >
                        Account
                    </span>
                </h2>

                <div
                    className="w-32 h-[2] mt-4 rounded-full"
                    style={{
                        background: `
                            linear-gradient(
                                to right,
                                #6a4f00,
                                #d4af37,
                                transparent
                            )
                        `
                    }}
                />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                {/* Full Name */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Full Name
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            rounded-2xl
                            border
                            px-5
                            bg-[#0d0d0d]
                            hover:border-[#d4af37]
                            focus-within:border-[#e6c766]
                            duration-300
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.15)"
                        }}
                    >

                        <input
                            name="name"
                            onChange={handleChange}
                            value={registerData.name}
                            type="text"
                            placeholder="Enter your full name"
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                py-3
                                tracking-wider
                                text-lg
                                text-white
                                placeholder:text-gray-500
                            "
                        />

                    </div>

                </div>

                {/* Mobile */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Mobile Number
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            rounded-2xl
                            border
                            px-5
                            bg-[#0d0d0d]
                            hover:border-[#d4af37]
                            focus-within:border-[#e6c766]
                            duration-300
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.15)"
                        }}
                    >

                        <input
                            name="mobile"
                            onChange={handleChange}
                            value={registerData.mobile}
                            type="text"
                            placeholder="Enter mobile number"
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                py-3
                                tracking-wider
                                text-lg
                                text-white
                                placeholder:text-gray-500
                            "
                        />

                    </div>

                </div>


                {/* password */}
                <div>

                    <label className="text-[#f5df8b] text-sm tracking-wide mb-3 block">
                        Create a Strong Password
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            rounded-2xl
                            border
                            px-5
                            bg-[#0d0d0d]
                            hover:border-[#d4af37]
                            focus-within:border-[#e6c766]
                            duration-300
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.15)"
                        }}
                    >

                        <input
                            name="password"
                            onChange={handleChange}
                            value={registerData.password}
                            type="text"
                            placeholder="Create a Strong Password"
                            className="
                                w-full
                                bg-transparent
                                outline-none
                                py-3
                                tracking-wider
                                text-lg
                                text-white
                                placeholder:text-gray-500
                            "
                        />

                    </div>

                </div>

                {/* Register Button */}
                <button
                    type="submit"
                    className="
                        relative
                        overflow-hidden
                        w-full
                        py-3
                        rounded-2xl
                        font-bold
                        text-lg
                        text-black
                        mt-3
                        cursor-pointer
                        hover:scale-[1.01]
                        active:scale-[0.99]
                        duration-300
                    "
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                #5c4300 0%,
                                #8c670a 15%,
                                #b8860b 35%,
                                #d4af37 50%,
                                #f5df8b 60%,
                                #c9971a 78%,
                                #7a5a08 100%
                            )
                        `,
                        boxShadow:
                            "0 0 30px rgba(212,175,55,0.18)"
                    }}
                >

                    {/* Shine */}
                    <div
                        className="
                            absolute
                            top-0
                            -left-full
                            w-full
                            h-full
                            rotate-12
                            hover:left-full
                            duration-1000
                        "
                        style={{
                            background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent)"
                        }}
                    />

                    <span className="relative z-10">
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </span>

                </button>

            </form>

        </div>
    )
}