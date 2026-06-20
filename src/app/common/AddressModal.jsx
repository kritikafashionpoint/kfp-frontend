"use client";

import React, { useEffect, useState } from "react";
import { FaTimes, FaMapMarkerAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { post_api } from "../api_helper/api_helper";

export default function AddressModal({
    addressModal,
    setAddressModal,
}) {
    const token = useSelector(
        (store) => store.user.token
    );

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        city: "",
        pincode: "",
        address: "",
    });

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setAddressModal(false);
            }
        };

        window.addEventListener(
            "keydown",
            handleEsc
        );

        return () =>
            window.removeEventListener(
                "keydown",
                handleEsc
            );
    }, []);

    if (!addressModal) return null;

    const inputClass = `
        w-full
        rounded-2xl
        bg-[#111111]
        Poppins
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

    const handleSaveAddress = async () => {
        try {
            if (
                !formData.name ||
                !formData.mobile ||
                !formData.city ||
                !formData.pincode ||
                !formData.address
            ) {
                return toast.error(
                    "Please fill all fields"
                );
            }

            setLoading(true);

            const response = await post_api({
                body: formData,
                params: null,
                path: "user/save-address",
                token,
            });

            if (response?.data?.success) {
                toast.success(
                    response?.data?.message ||
                    "Address saved successfully"
                );

                setAddressModal(false);
            } else {
                toast.error(
                    response?.data?.message ||
                    "Failed to save address"
                );
            }
        } catch (error) {
            console.log(error);

            toast.error(
                error?.response?.data?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            onClick={() =>
                setAddressModal(false)
            }
            className="
                fixed
                inset-0
                z-[9999]
                bg-black/70
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-4
                animate-fadeIn
            "
        >
            <div
                onClick={(e) =>
                    e.stopPropagation()
                }
                className="
                    w-full
                    max-w-3xl
                    bg-[#050505]
                    border
                    border-[#D4AF37]/20
                    rounded-3xl
                    p-6
                    lg:p-8
                    shadow-[0_0_40px_rgba(212,175,55,0.15)]
                    animate-[modalPop_.25s_ease]
                    max-h-[90vh]
                    overflow-y-auto
                "
            >
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl Poppins lg:text-3xl font-black text-white">
                            Delivery Address
                        </h2>

                        <p className="text-gray-400 Poppins mt-1">
                            Please add your shipping
                            address before payment.
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            setAddressModal(false)
                        }
                        className="
                            h-10
                            w-10
                            rounded-full
                            bg-[#111]
                            text-white
                            flex
                            items-center
                            justify-center
                            hover:bg-red-500
                            duration-300
                        "
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="flex items-center gap-3 bg-[#0f0f0f] border border-[#222] rounded-2xl p-4 mb-6">
                    <FaMapMarkerAlt className="text-[#D4AF37] text-xl" />

                    <p className="text-gray-300 text-sm Poppins">
                        Your address is required to
                        continue with the order.
                    </p>
                </div>

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
                        className={`${inputClass} lg:col-span-2 min-h-36`}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                        onClick={() =>
                            setAddressModal(false)
                        }
                        className="
                            flex-1
                            border
                            border-[#333]
                            text-white
                            py-4
                            rounded-2xl
                            Poppins
                            cursor-pointer hover:scale-105 duration-300
                            font-semibold
                        "
                    >
                        Cancel
                    </button>

                    <button
                        disabled={loading}
                        onClick={handleSaveAddress}
                        className="
                            flex-1
                            cursor-pointer hover:scale-105
                            bg-[#D4AF37]
                            text-black
                            py-4
                            Poppins
                            rounded-2xl
                            font-bold
                            hover:scale-[1.02]
                            duration-300
                            disabled:opacity-60
                        "
                    >
                        {loading
                            ? "Saving..."
                            : "Save Address"}
                    </button>
                </div>
            </div>
        </div>
    );
}