"use client"

import { Building2, Check, Copy, CreditCard, Landmark, ShieldCheck, User, X } from "lucide-react";
import { useEffect, useState } from "react";

export function BankTransferModel({ bankTransferModel, setBankTransferModel }) {

    const [copyMessage, setCopyMessage] = useState(false);


    const bankDetails = {
        accountName: "Kritika Fashion Point",
        bankName: "State Bank of India",
        accountNumber: "XXXX XXXX XXXX",
        ifsc: "SBIN0000000",
    };



    const copyText = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            setCopyMessage(true);


        } catch (err) {
            // fallback copy method
            const textArea = document.createElement("textarea");

            textArea.value = text;

            document.body.appendChild(textArea);

            textArea.select();

            document.execCommand("copy");

            document.body.removeChild(textArea);

            setCopyMessage(true);

            setTimeout(() => {
                setCopyMessage(false);
            }, 2000);
        }
    };

    useEffect(() => {

        let timer;

        if (copyMessage) {
            timer = setTimeout(() => {
                setCopyMessage(false)
            }, 2000)
        }

        return () => clearTimeout(timer)

    }, [copyMessage])


    return (
        <>
            <CopyMessageText
                copyMessage={copyMessage}
                setCopyMessage={setCopyMessage}
            />
            {/* Backdrop */}
            <div
                onClick={() => setBankTransferModel(false)}
                className={`
                    fixed inset-0 z-120
                    bg-black/80 backdrop-blur-sm
                    duration-300
                    ${bankTransferModel
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                `}
            />

            {/* Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2 z-140
                    sm:w-[95%] w-full max-w-[520]
                    sm:h-fit h-screen
                    -translate-x-1/2 -translate-y-1/2
                    sm:rounded-3xl overflow-hidden
                    border border-amber-400/30
                    bg-black text-white
                    shadow-[0_0_40px_rgba(251,191,36,0.15)]
                    duration-300
                    ${bankTransferModel
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"
                    }
                `}
            >
                {/* Golden Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-transparent to-yellow-300/10 pointer-events-none" />

                {/* Header */}
                <div className="relative flex items-center justify-between px-6 py-5 border-b border-amber-400/20">
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide text-amber-200">
                            Bank Transfer
                        </h2>

                        <p className="text-sm sm:block hidden text-amber-100/70 mt-1">
                            Secure direct bank payment for your jewellery order
                        </p>
                    </div>

                    <button
                        onClick={() => setBankTransferModel(false)}
                        className="w-10 h-10 rounded-full border border-amber-400/20 flex items-center justify-center hover:bg-amber-400/10 duration-300"
                    >
                        <X size={20} className="text-amber-200" />
                    </button>
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-0">
                    {/* Account Holder */}
                    <div className="border border-amber-400/20 rounded-0 px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <User className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">Account Holder</h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-wide">
                                {bankDetails.accountName}
                            </p>

                            <button
                                onClick={() => copyText(bankDetails.accountName)}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Bank Name */}
                    <div className="border border-amber-400/20 rounded-0 px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <Building2 className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">Bank Name</h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-wide">{bankDetails.bankName}</p>

                            <button
                                onClick={() => copyText(bankDetails.bankName)}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Account Number */}
                    <div className="border border-amber-400/20 rounded-0 px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <CreditCard className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">Account Number</h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-widest">
                                {bankDetails.accountNumber}
                            </p>

                            <button
                                onClick={() => {
                                    copyText(bankDetails.accountNumber);
                                    setCopyMessage(true);
                                }}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* IFSC */}
                    <div className="border border-amber-400/20 rounded-0 px-4 py-3 bg-white/3">
                        <div className="flex items-center gap-3 mb-2">
                            <Landmark className="text-amber-300" size={20} />
                            <h3 className="text-amber-200 font-semibold">IFSC Code</h3>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-white tracking-widest">{bankDetails.ifsc}</p>

                            <button
                                onClick={() => copyText(bankDetails.ifsc)}
                                className="text-amber-300 hover:text-amber-200 duration-300 cursor-pointer hover:scale-110"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Security Note */}
                    <div className="rounded-0 my-6 border border-green-500/20 bg-green-500/10 p-4 flex gap-3">
                        <ShieldCheck className="text-green-400 shrink-0 mt-1" size={22} />

                        <div>
                            <p className="text-green-300 font-semibold">Secure Payment</p>

                            <p className="text-sm text-green-100/70 mt-1 leading-relaxed">
                                After completing your payment, share the payment screenshot with
                                our support team for quick order confirmation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function CopyMessageText({ copyMessage, setCopyMessage }) {
    return (
        <div
            className={`
                fixed top-6 right-6
                z-200
                duration-300
                ${copyMessage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5 pointer-events-none"
                }
            `}
        >
            <div
                className="
                flex items-center gap-3
                bg-black border border-amber-400/30
                px-5 py-3 rounded-2xl
                shadow-[0_0_25px_rgba(251,191,36,0.15)]
                backdrop-blur-md
            "
            >
                <div
                    className="
                    w-8 h-8 rounded-full
                    bg-amber-400/10
                    flex items-center justify-center
                "
                >
                    <Check size={18} className="text-amber-300" />
                </div>

                <p className="text-amber-100 tracking-wide text-sm font-medium">
                    Text Copied Successfully
                </p>
            </div>
        </div>
    );
}