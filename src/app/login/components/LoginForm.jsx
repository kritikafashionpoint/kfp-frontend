'use client'
import { post_api } from "@/app/api_helper/api_helper";
import { loginSuccess } from "@/app/redux/slices/userSlice";
import {
    Mail,
    Lock,
    ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const LoginForm = ({ PremiumIcon, premiumGoldGradient }) => {

    const dispatch = useDispatch();

    const token = useSelector((store) => store.user.token)

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = loginData;

        if (!email.trim()) {
            return toast.warning("Please enter email");
        }

        if (!password.trim()) {
            return toast.warning("Please enter password");
        }

        try {
            setLoading(true);

            const response = await post_api({
                body: loginData,
                params: null,
                path: "user/login",
            });

            if (response.data.status) {

                toast.success(
                    response.data.message || "Login Successful"
                );

                dispatch(
                    loginSuccess({
                        user: response.data.data,
                        token: response.data.token,
                    })
                );
                // setTimeout(() => {
                //     router.push("/dashboard");
                // }, 1000);

            } else {
                toast.error(response.data.message);
            }

        } catch (error) {

            toast.error(
                error?.response?.data?.message ||
                error?.message ||
                "Login Failed"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="animate-in fade-in duration-500">

            <h2
                className="
                                        text-3xl
                                        md:text-4xl
                                        lg:text-5xl
                                        font-bold
                                        mb-3
                                        text-[#f8e7a1]
                                    "
            >
                Welcome Back
            </h2>

            <p className="text-[#9e9e9e] mb-10 text-lg">
                Login to continue shopping
            </p>

            <form
                onSubmit={handleSubmit}
                className="space-y-6">

                {/* Email */}
                <div>

                    <label className="text-sm text-[#d6d6d6] mb-3 block">
                        Email Address
                    </label>

                    <div
                        className="
                                                flex
                                                items-center
                                                gap-4
                                                bg-[#0b0b0b]
                                                border
                                                rounded-2xl
                                                px-5
                                                hover:border-[#e6c766]
                                                focus-within:border-[#f5df8b]
                                                duration-300
                                            "
                        style={{
                            borderColor: "rgba(230,199,102,0.18)"
                        }}
                    >

                        <PremiumIcon>
                            <Mail
                                size={17}
                                className="text-black"
                            />
                        </PremiumIcon>

                        <input
                            name="email"
                            value={loginData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-5 py-4
                                                    text-white
                                                    tracking-wider
                                                    text-lg
                                                    placeholder:text-[#8f8f8f]
                                                "
                        />

                    </div>

                </div>

                {/* Password */}
                <div>

                    <label className="text-sm text-[#d6d6d6] mb-3 block">
                        Password
                    </label>

                    <div
                        className="
                                                flex
                                                items-center
                                                gap-4
                                                bg-[#0b0b0b]
                                                border
                                                rounded-2xl
                                                px-5
                                                hover:border-[#e6c766]
                                                focus-within:border-[#f5df8b]
                                                duration-300
                                            "
                        style={{
                            borderColor: "rgba(230,199,102,0.18)"
                        }}
                    >

                        <PremiumIcon>
                            <Lock
                                size={17}
                                className="text-black"
                            />
                        </PremiumIcon>

                        <input
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Enter password"
                            className="
                                                    w-full
                                                    bg-transparent
                                                    outline-none
                                                    lg:py-5 py-4
                                                    tracking-wider
                                                    text-lg
                                                    text-white
                                                    placeholder:text-[#8f8f8f]
                                                "
                        />

                    </div>


                </div>

                <p className="text-right text-lg hover:text-amber-300 duration-300 cursor-pointer">Forgot Password ?</p>


                {/* Button */}
                <button
                    className="
                                            relative
                                            group
                                            overflow-hidden
                                            w-full
                                            mt-4
                                            lg:py-4 py-3
                                            rounded-2xl
                                            text-black
                                            font-bold
                                            text-lg
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                            hover:scale-[1.015]
                                            duration-300
                                        "
                    style={{
                        background: premiumGoldGradient
                    }}
                >

                    <div
                        className="
                                                absolute
                                                top-0
                                                -left-full
                                                w-full
                                                h-full
                                                rotate-12
                                                group-hover:left-full
                                                duration-700
                                            "
                        style={{
                            background:
                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)"
                        }}
                    />

                    <span className="relative z-10">
                        {loading ? "Logging In..." : "Login"}
                    </span>

                    <ArrowRight
                        size={20}
                        className="relative z-10"
                    />

                </button>

            </form>

        </div>
    )
}