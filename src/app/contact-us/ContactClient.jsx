"use client";
import React, { useState } from "react";
import { gold } from "../colors/color";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";
import Loading from "../../../Loading";
import { post_api } from "../api_helper/api_helper";
import { toast } from "react-toastify";

export default function ContactClient() {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            return toast.warning("Please enter your name");
        }

        if (!formData.phone.trim()) {
            return toast.warning("Please enter your phone number");
        }

        if (!formData.message.trim()) {
            return toast.warning("Please enter your message");
        }

        try {
            setLoading(true);

            const response = await post_api({
                body: formData,
                params: null,
                path: "contact/save-contact",
            });

            switch (response.data.status) {
                case true:
                case 200:
                case 201:
                    toast.success(response.data.message);

                    setFormData({
                        name: "",
                        phone: "",
                        message: "",
                    });
                    break;

                case 400:
                    toast.error(response.data.message || "Bad Request");
                    break;

                case 401:
                    toast.error(response.data.message || "Unauthorized");
                    break;

                case 403:
                    toast.error(response.data.message || "Forbidden");
                    break;

                case 404:
                    toast.error(response.data.message || "Resource Not Found");
                    break;

                case 409:
                    toast.error(response.data.message || "Conflict");
                    break;

                case 422:
                    toast.error(response.data.message || "Validation Failed");
                    break;

                case 500:
                    toast.error(response.data.message || "Internal Server Error");
                    break;

                default:
                    toast.error(
                        response.data.message || "Something went wrong"
                    );
            }
        } catch (error) {
            console.error(error);

            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        toast.error(
                            error.response.data?.message || "Bad Request"
                        );
                        break;

                    case 401:
                        toast.error(
                            error.response.data?.message || "Unauthorized"
                        );
                        break;

                    case 403:
                        toast.error(
                            error.response.data?.message || "Forbidden"
                        );
                        break;

                    case 404:
                        toast.error(
                            error.response.data?.message ||
                            "Resource Not Found"
                        );
                        break;

                    case 500:
                        toast.error(
                            error.response.data?.message ||
                            "Internal Server Error"
                        );
                        break;

                    default:
                        toast.error(
                            error.response.data?.message ||
                            "Something went wrong"
                        );
                }
            } else if (error.request) {
                toast.error("Server is not responding");
            } else {
                toast.error(
                    error.message || "Unexpected error occurred"
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full bg-black text-white relative overflow-hidden">

            {loading && <Loading />}

            {/* Background Texture */}
            <div className="absolute inset-0 -z-20 opacity-[0.035]">
                <Image
                    sizes='full'
                    src={"/designs/d3.png"}
                    fill
                    alt="design"
                    className="object-cover object-center"
                />
            </div>

            {/* Premium Glow */}
            <div
                className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                    w-[700]
                    h-[350]
                    rounded-full
                    blur-3xl
                    opacity-[0.08]
                    -z-10
                "
                style={{
                    background: "#d4af37"
                }}
            />

            <div className="max-w-330 mx-auto lg:px-6 px-4 lg:py-16 md:py-12 py-10">

                {/* Heading */}
                <div className="text-center mb-14">

                    <p
                        className="
                            uppercase
                            tracking-[8px]
                            text-xs
                            mb-4
                        "
                        style={{
                            color: "#c9971a"
                        }}
                    >
                        Contact Us
                    </p>

                    <h2
                        style={{ fontFamily: 'Poppins' }}
                        className="
                            lg:text-6xl
                            md:text-5xl
                            text-4xl
                            font-extrabold
                            tracking-wide
                            leading-tight
                        "
                    >
                        Visit Our
                        <span
                            className="ml-4"
                            style={{
                                color: "#e6c766",
                                fontFamily: 'Poppins'
                            }}
                        >
                            Store
                        </span>
                    </h2>

                    <div className="flex my-3 items-center justify-center gap-4 mt-6">

                        <div
                            className="w-20 h-[1]"
                            style={{
                                background:
                                    "linear-gradient(to right, transparent, #d4af37)"
                            }}
                        />

                        <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                                background: "#d4af37",
                                boxShadow: "0 0 20px #d4af37"
                            }}
                        />

                        <div
                            className="w-20 h-[1]"
                            style={{
                                background:
                                    "linear-gradient(to left, transparent, #d4af37)"
                            }}
                        />

                    </div>

                </div>

                {/* Map */}
                <div
                    className="
                        overflow-hidden
                        border
                        rounded-4xl
                        lg:h-[520]
                        md:h-[420]
                        h-[300]
                        lg:p-6
                        p-3
                        backdrop-blur-xl
                        relative
                    "
                    style={{
                        borderColor: "rgba(212,175,55,0.18)",
                        background: `
                            linear-gradient(
                                145deg,
                                rgba(10,10,10,0.98) 0%,
                                rgba(16,16,16,0.98) 35%,
                                rgba(28,20,5,0.98) 100%
                            )
                        `,
                        boxShadow: `
                            0 0 50px rgba(212,175,55,0.08),
                            inset 0 0 40px rgba(255,255,255,0.02)
                        `
                    }}
                >

                    {/* Inner Glow */}
                    <div
                        className="
                            absolute
                            -top-16
                            -right-16
                            w-52
                            h-52
                            rounded-full
                            blur-3xl
                            opacity-10
                            pointer-events-none
                        "
                        style={{
                            background: "#d4af37"
                        }}
                    />

                    <iframe
                        className="
                            w-full
                            h-full
                            rounded-[24]
                            border
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.12)"
                        }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.615315924874!2d72.95737832394734!3d26.21720004176421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418900516b59c7%3A0x6e9bade8be3a59da!2sKritika%20fashion%20point!5e1!3m2!1sen!2sin!4v1778667101417!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                </div>

                {/* Cards */}
                <div className="lg:mt-16 md:mt-12 mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

                    {/* Visit Us */}
                    <div
                        className="
                            border
                            rounded-4xl
                            md:p-8
                            p-5
                            backdrop-blur-xl
                            relative
                            overflow-hidden
                            hover:-translate-y-2
                            hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
                            duration-500
                            group
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.18)",
                            background: `
                                linear-gradient(
                                    145deg,
                                    rgba(8,8,8,0.98) 0%,
                                    rgba(16,16,16,0.98) 35%,
                                    rgba(28,20,5,0.98) 100%
                                )
                            `
                        }}
                    >

                        {/* Glow */}
                        <div
                            className="
                                absolute
                                -top-10
                                -right-10
                                w-40
                                h-40
                                rounded-full
                                blur-3xl
                                opacity-10
                            "
                            style={{
                                background: "#d4af37"
                            }}
                        />

                        <div
                            className="
                                w-18
                                h-18
                                rounded-[22px]
                                flex
                                items-center
                                justify-center
                                mb-6
                                border
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.18)",
                                background: `
                                    linear-gradient(
                                        135deg,
                                        rgba(212,175,55,0.12),
                                        rgba(212,175,55,0.03)
                                    )
                                `,
                                color: "#e6c766"
                            }}
                        >
                            <MapPin size={30} />
                        </div>

                        <h2
                            className="text-3xl font-bold mb-6"
                            style={{
                                color: "#e6c766",
                                fontFamily: 'Poppins'
                            }}
                        >
                            Visit Us
                        </h2>

                        <p className="text-gray-300 leading-8 text-lg">
                            Shop No.4 Inda Market Pal Pasu Mela Road Pal Jodhpur, Rajasthan 342014
                        </p>

                        <div className="mt-8 space-y-5">
                            <a
                                href='tel:+916378853062'>
                                <div className="flex my-3 items-center gap-4 text-gray-300">
                                    <Phone size={18} color="#d4af37" />
                                    <span style={{ fontFamily: 'Poppins' }}>+91 6378853062</span>
                                </div>
                            </a>

                            <a
                                href='tel:+916378370372'>
                                <div className="flex my-3 items-center gap-4 text-gray-300">
                                    <Phone size={18} color="#d4af37" />
                                    <span style={{ fontFamily: 'Poppins' }}>+91 6378370372</span>
                                </div>
                            </a>

                            <div className="flex my-3 items-center gap-4 text-gray-300 break-all">
                                <Mail size={18} color="#d4af37" />
                                <span style={{ fontFamily: 'Poppins' }}>kritikafashionpoint6@gmail.com</span>
                            </div>

                        </div>

                    </div>

                    {/* Instagram */}
                    <div
                        className="
                            border
                            rounded-[32]
                            md:p-8
                            p-5
                            backdrop-blur-xl
                            relative
                            overflow-hidden
                            hover:-translate-y-2
                            hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
                            duration-500
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.18)",
                            background: `
                                linear-gradient(
                                    145deg,
                                    rgba(8,8,8,0.98) 0%,
                                    rgba(16,16,16,0.98) 35%,
                                    rgba(28,20,5,0.98) 100%
                                )
                            `
                        }}
                    >

                        {/* Glow */}
                        <div
                            className="
                                absolute
                                -bottom-10
                                -left-10
                                w-40
                                h-40
                                rounded-full
                                blur-3xl
                                opacity-10
                            "
                            style={{
                                background: "#d4af37"
                            }}
                        />

                        <div
                            className="
                                w-18
                                h-18
                                rounded-[22px]
                                flex
                                items-center
                                justify-center
                                mb-6
                                border
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.18)",
                                background: `
                                    linear-gradient(
                                        135deg,
                                        rgba(212,175,55,0.12),
                                        rgba(212,175,55,0.03)
                                    )
                                `,
                                color: "#e6c766"
                            }}
                        >
                            <BsInstagram size={30} />
                        </div>

                        <h2
                            className="text-3xl font-bold mb-2"
                            style={{
                                color: "#e6c766",
                                fontFamily: 'Poppins'
                            }}
                        >
                            Follow Us
                        </h2>

                        <p className="text-sm tracking-[3px] text-gray-400 uppercase mb-5">
                            Trending Designs & Updates
                        </p>

                        <Link
                            target="_blank"
                            href={'https://www.instagram.com/kritika_fashion_point/'}
                        >
                            <h2
                                style={{ fontFamily: 'Poppins' }}
                                className="
                                    text-lg
                                    cursor-pointer
                                    hover:text-[#e6c766]
                                    hover:translate-x-1
                                    duration-300
                                    font-semibold
                                    tracking-widest
                                    mb-6
                                "
                            >
                                @kritika_fashion_point
                            </h2>
                        </Link>

                        <div
                            className="
                                p-4
                                rounded-[24]
                                border
                                overflow-hidden
                                bg-[#0b0b0b]
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.12)"
                            }}
                        >

                            <Link
                                target="_blank"
                                href={'https://www.instagram.com/kritika_fashion_point/'}
                            >
                                <img
                                    src="/other/instagram.png"
                                    className="
                                    w-full
                                    h-[240]
                                    object-cover
                                    object-top
                                    rounded-[18px]
                                    cursor-pointer
                                    hover:scale-[1.03]
                                    duration-500
                                "
                                />
                            </Link>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div
                        className="
                            border
                            rounded-[32]
                            md:p-8
                            p-5
                            backdrop-blur-xl
                            relative
                            overflow-hidden
                            hover:-translate-y-2
                            hover:shadow-[0_0_40px_rgba(212,175,55,0.12)]
                            duration-500
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.18)",
                            background: `
                                linear-gradient(
                                    145deg,
                                    rgba(8,8,8,0.98) 0%,
                                    rgba(16,16,16,0.98) 35%,
                                    rgba(28,20,5,0.98) 100%
                                )
                            `
                        }}
                    >

                        {/* Glow */}
                        <div
                            className="
                                absolute
                                top-0
                                right-0
                                w-32
                                h-32
                                rounded-full
                                blur-3xl
                                opacity-10
                            "
                            style={{
                                background: "#d4af37"
                            }}
                        />

                        <h2
                            className="text-3xl font-bold mb-3"
                            style={{
                                color: "#e6c766",
                                fontFamily: 'Poppins'
                            }}
                        >
                            Send Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-2">

                            <div>
                                <label style={{ fontFamily: 'Poppins' }} className="text-sm text-[#f5df8b] tracking-wide mb-3 block">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        bg-[#0c0c0c]
                                        border
                                        rounded-2xl
                                        px-5
                                        py-4
                                        outline-none
                                        text-white
                                        placeholder:text-gray-500
                                        focus:border-[#d4af37]
                                        duration-300
                                    "
                                    style={{
                                        fontFamily: 'Poppins',
                                        borderColor: "rgba(212,175,55,0.12)"
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ fontFamily: 'Poppins' }} className="text-sm text-[#f5df8b] tracking-wide mb-3 block">
                                    Phone Number
                                </label>

                                <input
                                    onChange={handleChange}
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    placeholder="Enter phone number"
                                    className="
                                        w-full
                                        bg-[#0c0c0c]
                                        border
                                        rounded-2xl
                                        px-5
                                        py-4
                                        outline-none
                                        text-white
                                        placeholder:text-gray-500
                                        focus:border-[#d4af37]
                                        duration-300
                                    "
                                    style={{
                                        fontFamily: 'Poppins',
                                        borderColor: "rgba(212,175,55,0.12)"
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ fontFamily: 'Poppins' }} className="text-sm text-[#f5df8b] tracking-wide mb-3 block">
                                    Message
                                </label>

                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="
                                        w-full
                                        bg-[#0c0c0c]
                                        border
                                        rounded-2xl
                                        px-5
                                        py-4
                                        outline-none
                                        resize-none
                                        text-white
                                        placeholder:text-gray-500
                                        focus:border-[#d4af37]
                                        duration-300
                                    "
                                    style={{
                                        borderColor: "rgba(212,175,55,0.12)",
                                        fontFamily: 'Poppins'
                                    }}
                                ></textarea>
                            </div>

                            <button
                                className="
                                    relative
                                    overflow-hidden
                                    w-full
                                    py-4
                                    rounded-2xl
                                    text-black
                                    font-bold
                                    text-lg
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
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
                                            #e6c766 62%,
                                            #c9971a 78%,
                                            #7a5a08 100%
                                        )
                                    `,
                                    boxShadow:
                                        "0 0 25px rgba(212,175,55,0.18)"
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

                                <span style={{ fontFamily: 'Poppins' }} className="relative z-10 flex items-center gap-3">
                                    <Send size={20} />
                                    Send Message
                                </span>

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}