import { X } from "lucide-react";

export function QrCodeModel({ QrCodeOpen, setQrCodeOpen, selectedProduct, selectedTabPaymentTab }) {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setQrCodeOpen(false)}
                className={`
                    fixed inset-0 z-130
                    bg-black/90 backdrop-blur-md
                    duration-300
                    ${QrCodeOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }
                `}
            />

            {/* QR Modal */}
            <div
                className={`
                    fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    z-140
                    duration-500
                    ${QrCodeOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75 pointer-events-none"
                    }
                `}
            >
                <div
                    className="
                        lg:w-[520]
                        w-[95vw]
                        rounded-[32]
                        p-[1]
                        relative
                        overflow-hidden
                    "
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                #4d3900 0%,
                                #8c670a 18%,
                                #d4af37 38%,
                                #f5df8b 50%,
                                #c9971a 72%,
                                #4d3900 100%
                            )
                        `,
                        boxShadow: "0 0 60px rgba(212,175,55,0.15)",
                    }}
                >
                    {/* Main Box */}
                    <div
                        className="
                            bg-[#050505]
                            rounded-[31px]
                            lg:p-6 p-4
                            relative
                            overflow-hidden
                        "
                    >
                        {/* Glow Effects */}
                        <div
                            className="
                                absolute
                                top-[-80]
                                right-[-80]
                                w-55
                                h-55
                                rounded-full
                                blur-[120px]
                                opacity-20
                            "
                            style={{
                                background: "#d4af37",
                            }}
                        />

                        <div
                            className="
                                absolute
                                -bottom-25
                                -left-25
                                w-60
                                h-60
                                rounded-full
                                blur-[120px]
                                opacity-10
                            "
                            style={{
                                background: "#f5df8b",
                            }}
                        />

                        {/* Border Shine */}
                        <div
                            className="
                                absolute
                                top-0
                                -left-full
                                w-full
                                h-full
                                rotate-12
                                animate-[shine_1s_linear_infinite]
                            "
                            style={{
                                background:
                                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
                            }}
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setQrCodeOpen(false)}
                            className="
                            bg-amber-300
                                absolute
                                top-5
                                right-5
                                z-50
                                p-3
                                rounded-full
                                border
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                duration-300
                                hover:rotate-90
                                hover:scale-110
                            "
                            style={{
                                borderColor: "rgba(245,223,139,0.25)",
                                background: "linear-gradient(to bottom, #111, #050505)",
                                color: "#f5df8b",
                            }}
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Brand */}
                        <div className="text-center mb-4 relative z-10">
                            <p
                                className="
                                    text-xs
                                    tracking-[6px]
                                    uppercase
                                    mb-2
                                "
                                style={{
                                    color: "#d4af37",
                                }}
                            >
                                Premium Jewellery
                            </p>

                            <h1
                                className="
                                    lg:text-4xl
                                    text-3xl
                                    font-extrabold
                                    tracking-[2px]
                                "
                                style={{
                                    color: "#fff2b3",
                                    textShadow: "0 0 20px rgba(245,223,139,0.15)",
                                }}
                            >
                                KRITIKA <span style={{ color: "#d4af37" }}>FASHION POINT</span>
                            </h1>

                            <div className="flex items-center justify-center gap-3 my-3">
                                <div
                                    className="w-14 h-[1]"
                                    style={{
                                        background:
                                            "linear-gradient(to right, transparent, #d4af37)",
                                    }}
                                />

                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{
                                        background: "#d4af37",
                                        boxShadow: "0 0 15px rgba(212,175,55,0.8)",
                                    }}
                                />

                                <div
                                    className="w-14 h-[1]"
                                    style={{
                                        background:
                                            "linear-gradient(to left, transparent, #d4af37)",
                                    }}
                                />
                            </div>

                            {
                                selectedTabPaymentTab == 'advance' ?
                                    (
                                        <span className="text-white font-bold text-2xl"> Pay Advance For Book Your Jwellery At
                                            <span className="text-amber-300 text-4xl"><br /> ₹{selectedProduct?.p_advance_payment}.00</span>
                                        </span>
                                    )
                                    :
                                    (

                                        <span className="text-white font-bold text-2xl"> Pay Full Get Payment For Your Jwellery At
                                            <span className="text-amber-300 text-4xl"><br /> ₹{selectedProduct?.p_customer_price}</span>
                                        </span>
                                    )
                            }


                        </div>

                        {/* QR Section */}
                        <div
                            className="
                                relative
                                w-fit
                                mx-auto
                                p-[2]
                                rounded-[28]
                            "
                            style={{
                                background: `
                                    linear-gradient(
                                        135deg,
                                        #4d3900,
                                        #d4af37,
                                        #fff2b3,
                                        #b8860b
                                    )
                                `,
                                boxShadow: "0 0 40px rgba(212,175,55,0.18)",
                            }}
                        >
                            <div
                                className="
                                    bg-[#0b0b0b]
                                    rounded-[26px]
                                    p-5
                                    relative
                                    overflow-hidden
                                "
                            >

                                {/* Inner Glow */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        opacity-10
                                    "
                                    style={{
                                        background:
                                            "radial-gradient(circle at top, rgba(245,223,139,0.3), transparent 70%)",
                                    }}
                                />



                                <div className="bg-white rounded-2xl p-4 relative z-10">
                                    <img
                                        src="/other/qr.png"
                                        alt="QR Code"
                                        className="
                                            lg:w-[260]
                                            lg:h-[260]
                                            w-[220]
                                            h-[220]
                                            object-contain
                                        "
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-7 text-center relative z-10">
                            <p
                                className="
                                    text-xs
                                    tracking-[4px]
                                    uppercase
                                "
                                style={{
                                    color: "#b8860b",
                                }}
                            >
                                Secure • Trusted • Quick Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}