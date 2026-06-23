'use client'

import { post_api } from "@/app/api_helper/api_helper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

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