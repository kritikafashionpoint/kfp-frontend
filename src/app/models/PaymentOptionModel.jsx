import { useState } from "react";
import { BankTransferModel } from "./BankTransferModel";
import { QrCodeModel } from "./QrCodeModel";

export function PaymentOption({ paymentOptionModel, setPaymentOptionModel, selectedProduct, selectedTabPaymentTab }) {
    const [bankTransferModel, setBankTransferModel] = useState(null);
    const [QrCodeOpen, setQrCodeOpen] = useState(false);


    const HandleUpiPayment = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        const title = selectedProduct?.p_title || "Exclusive Jwellery with Premium Design";
        const shortDesc = selectedProduct?.p_short_description || "";
        const amount = selectedProduct?.p_customer_price || selectedProduct?.p_advance_payment;

        const transactionNote = encodeURIComponent(
            `${title} - ${shortDesc}`
        );

        const upiLink =
            `upi://pay?pa=mehratarun80@ybl` +
            `&pn=${encodeURIComponent("Kritika Fashion Point")}` +
            `&am=${amount}` +
            `&tn=${transactionNote}` +
            `&cu=INR`;

        if (isMobile) {
            window.location.href = upiLink;
        } else {
            setQrCodeOpen(true);
        }
    };

    return (
        <>
            <QrCodeModel
                selectedTabPaymentTab={selectedTabPaymentTab}
                QrCodeOpen={QrCodeOpen}
                setQrCodeOpen={setQrCodeOpen}
                selectedProduct={selectedProduct}
            />
            <BankTransferModel
                bankTransferModel={bankTransferModel}
                setBankTransferModel={setBankTransferModel}
            />

            {/* Overlay */}
            <div
                onClick={() => setPaymentOptionModel(false)}
                className={`
                    fixed inset-0 z-125
                    bg-black/80 backdrop-blur-sm
                    duration-300
                    ${paymentOptionModel
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
                    z-130 
                    duration-300
                    sm:w-[70%] w-full max-w-[520]
                    ${paymentOptionModel
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"
                    }
                `}
            >
                <div
                    className="
                        relative
                        overflow-hidden
                        sm:rounded-[32]
                        rounded-none
                        sm:h-fit
                        h-screen 
                        py-10
                        px-5
                        border
                        md:p-8
                    "
                    style={{
                        borderColor: "rgba(212,175,55,0.18)",
                        background: `
                            linear-gradient(
                                180deg,
                                #050505 0%,
                                #0b0b0b 45%,
                                #120d02 100%
                            )
                        `,
                        boxShadow: "0 0 60px rgba(212,175,55,0.08)",
                    }}
                >
                    {/* Glow */}
                    <div
                        className="
                            absolute
                            top-[-120]
                            right-[-80]
                            w-[260]
                            h-[260]
                            rounded-full
                            blur-[120px]
                            opacity-10
                            pointer-events-none
                        "
                        style={{
                            background: "#d4af37",
                        }}
                    />

                    {/* Close */}
                    <button
                        onClick={() => setPaymentOptionModel(false)}
                        className="
                            absolute
                            top-5
                            right-5
                            w-10
                            h-10
                            rounded-full
                            border
                            flex
                            items-center
                            justify-center
                            text-[#f5df8b]
                            hover:bg-[#d4af37]
                            hover:text-black
                            duration-300
                            cursor-pointer
                        "
                        style={{
                            borderColor: "rgba(245,223,139,0.18)",
                            background: "rgba(255,255,255,0.03)",
                        }}
                    >
                        ✕
                    </button>

                    {/* Heading */}
                    <div className="text-center mb-8">
                        <p className="text-[#c9971a] tracking-[5px] uppercase text-xs mb-3">
                            Secure Payment
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Choose
                            <span className="text-[#f5df8b] ml-2">Payment Method</span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mt-5">
                            <div
                                className="w-16 h-[1]"
                                style={{
                                    background: "linear-gradient(to right, transparent, #d4af37)",
                                }}
                            />

                            <div
                                className="w-2 h-2 rounded-full"
                                style={{
                                    background: "#d4af37",
                                    boxShadow: "0 0 15px #d4af37",
                                }}
                            />

                            <div
                                className="w-16 h-[1]"
                                style={{
                                    background: "linear-gradient(to left, transparent, #d4af37)",
                                }}
                            />
                        </div>
                    </div>

                    {/* Options */}
                    <div className="space-y-5">
                        {/* UPI */}
                        <button
                            onClick={HandleUpiPayment}
                            className="
                                w-full
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                p-5
                                text-left
                                cursor-pointer
                                duration-300
                                hover:-translate-y-1
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.18)",
                                background: `
                                    linear-gradient(
                                        to bottom,
                                        rgba(255,255,255,0.03),
                                        rgba(255,255,255,0.01)
                                    )
                                `,
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
                                    group-hover:left-full
                                    duration-1000
                                "
                                style={{
                                    background:
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-5">
                                <div
                                    className="
                                        min-w-[65]
                                        h-[65]
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        text-3xl
                                    "
                                    style={{
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #7a5a08 20%,
                                                #d4af37 50%,
                                                #fff2b3 70%,
                                                #7a5a08 100%
                                            )
                                        `,
                                    }}
                                >
                                    💳
                                </div>

                                <div>
                                    <h3 className="text-[#f5df8b] text-xl font-bold tracking-wide">
                                        Pay with UPI / Scanner
                                    </h3>
                                    <p className="text-red-400 text-sm tracking-wide mt-2">After Payment Take a Screenshot for confirmation
                                        <br />
                                        Check The Name Before Payment (Kritika Fashion Point)</p>

                                    {/* <p className="text-gray-400 text-sm mt-2 leading-6">
                                        Fast & secure payment using any UPI app or scan QR code
                                        instantly.
                                    </p> */}
                                </div>
                            </div>
                        </button>

                        {/* Bank Transfer */}
                        <button
                            onClick={() => {
                                setBankTransferModel(true)
                            }}
                            className="
                                w-full
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                p-5
                                text-left
                                cursor-pointer
                                duration-300
                                hover:-translate-y-1
                            "
                            style={{
                                borderColor: "rgba(212,175,55,0.18)",
                                background: `
                                    linear-gradient(
                                        to bottom,
                                        rgba(255,255,255,0.03),
                                        rgba(255,255,255,0.01)
                                    )
                                `,
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
                                    group-hover:left-full
                                    duration-1000
                                "
                                style={{
                                    background:
                                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-5">
                                <div
                                    className="
                                        min-w-[65]
                                        h-[65]
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        text-3xl
                                    "
                                    style={{
                                        background: `
                                            linear-gradient(
                                                135deg,
                                                #4d3900 0%,
                                                #7a5a08 20%,
                                                #d4af37 50%,
                                                #fff2b3 70%,
                                                #7a5a08 100%
                                            )
                                        `,
                                    }}
                                >
                                    🏦
                                </div>

                                <div>
                                    <h3 className="text-[#f5df8b] text-xl font-bold tracking-wide">
                                        Pay with Bank Transfer
                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2 leading-6">
                                        Transfer payment directly to our bank account with complete
                                        security.
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-xs tracking-wide mt-7">
                        100% Secure • Trusted Payment Gateway
                    </p>
                </div>
            </div>
        </>
    );
}