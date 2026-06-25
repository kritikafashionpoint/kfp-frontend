"use client";

import React, { useState } from "react";
import {
    X,
    Wallet,
    BadgeIndianRupee,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";
import { Package2 } from "lucide-react";


import { PaymentOption } from "../models/PaymentOptionModel";
import Link from "next/link";
import { post_api } from "../api_helper/api_helper";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AddressModal from "./AddressModal";

export default function GetNow({ getNowModel, setGetNowModel, selectedProduct, quantity }) {
    const [paymentOptionModel, setPaymentOptionModel] = useState(false);
    const router = useRouter()
    const [selectedTabPaymentTab, setSelectedPaymentTab] = useState(null)
    const actualQuantity = quantity ? quantity : 1

    const token = useSelector((store) => store.user.token)
    const user = useSelector((store) => store.user.user)
    // console.log('selectedProduct from frontend', selectedProduct)


    const [addressModal, setAddressModal] = useState(false)

    const HandleRazorpayPayment = async (paymentType) => {
        try {

            const addressResponse = await post_api({
                path: "user/check-address",
                token
            });

            if (!addressResponse?.data?.success) {
                toast.error("Unable to verify address");
                return;
            }

            if (!addressResponse.data.address_exists) {

                toast.error("Please add delivery address first");

                setAddressModal(true);

                return;
            }

            const orderResponse = await post_api({
                path: "user/create-order",
                body: {
                    product_id:
                        selectedProduct.id ||
                        selectedProduct.product_id,

                    payment_type: paymentType,

                    total_quantity:
                        actualQuantity
                },
                token
            });

            if (!orderResponse?.data?.success) {
                toast.error(
                    orderResponse?.data?.message ||
                    "Unable to create order"
                );
                return;
            }

            const data = orderResponse.data;
            console.log("Backend Response:", data);

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

                amount: data.amount * actualQuantity,

                currency: data.currency,

                order_id: data.razorpay_order_id,

                name: "Kritika Fashion Point",

                description:
                    paymentType === "advance"
                        ? "Advance Payment"
                        : "Full Payment",

                prefill: {
                    name: user?.name || "",
                    email: user?.email || "",
                    contact: user?.mobile || ""
                },

                theme: {
                    color: "#D4AF37"
                },

                handler: async function (response) {

                    try {

                        const verifyResponse =
                            await post_api({
                                path: "user/verify-order",
                                token,
                                body: {
                                    order_id: data.order_id,
                                    razorpay_order_id:
                                        response.razorpay_order_id,
                                    razorpay_payment_id:
                                        response.razorpay_payment_id,
                                    razorpay_signature:
                                        response.razorpay_signature
                                }
                            });

                        if (verifyResponse?.data?.success) {

                            toast.success(
                                "Payment Successful"
                            );

                            router.push("/thank-you");

                        } else {

                            toast.error(
                                "Payment Verification Failed"
                            );
                        }

                    } catch (error) {

                        console.log(error);

                        toast.error(
                            "Verification Failed"
                        );
                    }
                }
            };

            const razorpay =
                new window.Razorpay(options);

            razorpay.open();

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");
        }
    };


    return (
        <>

            <AddressModal addressModal={addressModal} setAddressModal={setAddressModal} />
            {/* payment option model */}
            <PaymentOption

                setSelectedPaymentTab={setSelectedPaymentTab}
                selectedTabPaymentTab={selectedTabPaymentTab}
                selectedProduct={selectedProduct}
                paymentOptionModel={paymentOptionModel}
                setPaymentOptionModel={setPaymentOptionModel}
            />

            {/* Backdrop */}
            <div
                onClick={() => setGetNowModel(false)}
                className={`
                    fixed inset-0 z-120
                    bg-black/50 backdrop-blur-sm
                    duration-300
                    ${getNowModel
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />

            {/* Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    z-120
                    lg:w-[500]
                    sm:h-fit
                    sm:w-[65%]
                    w-full
                    h-screen
                    bg-black
                    border
                    sm:rounded-[32]
                    overflow-hidden
                    duration-300
                    origin-center
                    
                    ${getNowModel
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 pointer-events-none"
                    }
                `}
                style={{
                    borderColor: "#d4af37",
                    boxShadow: "0 0 40px rgba(212,175,55,0.18)",
                }}
            >
                {/* Top Gradient */}
                <div
                    className="h-1 w-full"
                    style={{
                        background:
                            "linear-gradient(to right,#8a6a12,#d4af37,#fff2b3,#b8860b)",
                    }}
                />

                <div className="sm:px-10 px-5 py-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <h2
                                className="lg:text-3xl text-2xl font-bold"
                                style={{
                                    color: "#f5d97b",
                                }}
                            >
                                Complete Your Order
                            </h2>

                            <p className="text-gray-400 mt-2 text-sm">
                                Choose your preferred payment option
                            </p>
                        </div>

                        {/* Close */}
                        <button
                            onClick={() => setGetNowModel(false)}
                            className="
                                w-11 h-11 rounded-full
                                flex items-center justify-center
                                bg-white/5 hover:bg-white/10
                                duration-200 cursor-pointer  hover:rotate-90
                            "
                        >
                            <X size={22} color="#f5d97b" />
                        </button>
                    </div>

                    {/* Product Summary */}
                    <div
                        className="
                            rounded-2xl
                            border
                            p-3
                            mb-7
                        "
                        style={{
                            borderColor: "rgba(212,175,55,0.25)",
                            background:
                                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3
                                    className="text-lg font-semibold"
                                    style={{
                                        color: "#f5d97b",
                                    }}
                                >
                                    Premium Jewellery Set
                                </h3>

                                <p className="text-gray-400 text-sm mt-1">Luxury Collection</p>
                            </div>

                            <h2
                                className="text-2xl font-bold"
                                style={{
                                    color: "#d4af37",
                                }}
                            >
                                <span> ₹{selectedProduct?.p_customer_price * actualQuantity}</span>

                            </h2>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="space-y-4">
                        {/* Advance Payment */}
                        <button
                            onClick={() => HandleRazorpayPayment('advance')}
                            className="
                                w-full
                                rounded-2xl
                                border
                                p-3
                                flex items-center justify-between
                                hover:scale-[1.02]
                                duration-300
                                cursor-pointer
                                group
                            "
                            style={{
                                borderColor: "#d4af37",
                                background:
                                    "linear-gradient(to right, rgba(212,175,55,0.08), transparent)",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="
                                        w-10 h-10 sm:w-14 sm:h-14 rounded-full
                                        flex items-center justify-center
                                    "
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#8a6a12,#d4af37,#fff2b3)",
                                    }}
                                >
                                    <Wallet color="#000" />
                                </div>

                                <div className="text-left">
                                    <h3
                                        className="font-bold text-lg"
                                        style={{
                                            color: "#f5d97b",
                                        }}
                                    >
                                        Pay Advance
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        Book product with partial payment
                                    </p>
                                </div>
                            </div>

                            <span
                                className="font-bold text-2xl"
                                style={{
                                    color: "#d4af37",
                                }}
                            >
                                ₹{selectedProduct?.p_advance_payment * actualQuantity}.00
                            </span>
                        </button>

                        {/* Quantity */}

                        <div
                            className="
        relative
        overflow-hidden
        py-4
        px-5
        rounded-2xl
        border
        flex
        items-center
        justify-between
        group
    "
                            style={{
                                background:
                                    "linear-gradient(135deg,#14001f 0%,#220033 40%,#120018 100%)",
                                borderColor: "rgba(192,132,252,0.35)",
                                boxShadow: "0 0 30px rgba(168,85,247,0.15)",
                            }}
                        >
                            {/* Glow */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20"
                                style={{
                                    background: "#a855f7",
                                }}
                            />

                            <div className="flex items-center gap-4 relative z-10">
                                <div
                                    className="
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
            "
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#7e22ce,#a855f7,#d8b4fe)",
                                    }}
                                >
                                    <Package2 size={22} className="text-white" />
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-lg">
                                        Quantity
                                    </h3>

                                    <p className="text-purple-300 text-sm">
                                        Selected Items
                                    </p>
                                </div>
                            </div>

                            <div
                                className="
                                    min-w-11
                                    h-11
                                    px-4
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-2xl
                                    font-bold
                                    text-white
                                "
                                style={{
                                    background:
                                        "linear-gradient(135deg,#6b21a8,#9333ea,#c084fc)"
                                }}
                            >
                                {actualQuantity}
                            </div>
                        </div>

                        {/* Full Payment */}
                        <button
                            onClick={() => HandleRazorpayPayment('full')}
                            className="
                                w-full
                                rounded-2xl
                                p-3
                                flex items-center justify-between
                                hover:scale-[1.02]
                                duration-300
                                cursor-pointer
                                group
                                overflow-hidden
                                relative
                            "
                            style={{
                                background:
                                    "linear-gradient(to right,#8a6a12,#b8860b,#d4af37,#fff2b3,#d4af37)",
                            }}
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <div
                                    className="
                                        w-10 h-10 sm:w-14 sm:h-14 rounded-full
                                        bg-black/20
                                        flex items-center justify-center
                                    "
                                >
                                    <BadgeIndianRupee color="#000" />
                                </div>

                                <div className="text-left">
                                    <h3 className="font-bold text-lg text-black">
                                        Pay Full Payment
                                    </h3>

                                    <p className="text-black/70 text-sm">
                                        Instant order confirmation
                                    </p>
                                </div>
                            </div>


                            <span className="font-bold text-2xl text-black relative z-10">
                                <span>₹{selectedProduct?.p_customer_price * actualQuantity}</span>
                            </span>
                        </button>

                        {/* WhatsApp */}

                        <Link target="_blank" href={'https://wa.me/6378370372'}>
                            <button
                                className="
                                w-full
                                rounded-2xl
                                border
                                p-3
                                flex items-center justify-between
                                hover:scale-[1.02]
                                duration-300
                                cursor-pointer
                            "
                                style={{
                                    borderColor: "#25D366",
                                    background:
                                        "linear-gradient(to right, rgba(37,211,102,0.15), transparent)",
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="
                                        w-10 h-10 sm:w-14 sm:h-14 rounded-full
                                        bg-[#25D366]
                                        flex items-center justify-center
                                    "
                                    >
                                        <MessageCircle color="#fff" />
                                    </div>

                                    <div className="text-left">
                                        <h3 className="font-bold text-lg text-white">
                                            Order via WhatsApp
                                        </h3>

                                        <p className="text-gray-400 text-sm">
                                            Talk directly with our team
                                        </p>
                                    </div>
                                </div>

                                <span className="bg-[#25D366] text-gray-900 px-4 py-1 rounded-xl font-semibold">
                                    Chat
                                </span>
                            </button>
                        </Link>
                    </div>

                    {/* Secure Info */}

                    <div className="lg:block hidden">
                        <div
                            className="
                        
                            mt-7
                            flex items-center gap-3
                            rounded-xl
                            p-4
                        "
                            style={{
                                background: "rgba(212,175,55,0.08)",
                            }}
                        >
                            <ShieldCheck size={22} color="#d4af37" />

                            <p className=" text-sm text-gray-300 leading-6">
                                100% secure checkout with premium customer support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}







