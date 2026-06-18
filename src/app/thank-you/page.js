import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Page() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
            <div
                className="
                max-w-330
                w-full
                text-center
                rounded-3xl
                p-8
                md:p-12
                border
                relative
                overflow-hidden
            "
                style={{
                    borderColor: "rgba(201,162,39,0.25)",
                    background:
                        "linear-gradient(180deg,#050505 0%,#0b0b0b 50%,#120d02 100%)",
                    boxShadow: "0 0 60px rgba(201,162,39,0.12)",
                }}
            >
                {/* Gold Glow */}
                <div
                    className="
                    absolute
                    top-30
                    right-30
                    w-65
                    h-65
                    rounded-full
                    blur-[120px]
                    opacity-10
                    pointer-events-none
                "
                    style={{
                        background: "#D4AF37",
                    }}
                />

                {/* Success Icon */}
                <div className="flex justify-center mb-8 relative z-10">
                    <div
                        className="
                        w-28
                        h-28
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border
                    "
                        style={{
                            background: "rgba(212,175,55,0.08)",
                            borderColor: "rgba(212,175,55,0.25)",
                        }}
                    >
                        <CheckCircle
                            size={64}
                            style={{
                                color: "#D4AF37",
                            }}
                        />
                    </div>
                </div>

                {/* Heading */}
                <p
                    className="
                    uppercase
                    tracking-[4px]
                    text-xs
                    mb-3
                "
                    style={{
                        color: "#C9A227",
                    }}
                >
                    Order Confirmed
                </p>

                <h1
                    className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    mb-5
                "
                    style={{
                        color: "#F5DF8B",
                    }}
                >
                    Thank You!
                </h1>

                {/* Message */}
                <p className="text-white text-lg md:text-xl mb-4">
                    Your order has been placed successfully.
                </p>

                <p className="text-gray-400 leading-8 mb-10 max-w-xl mx-auto">
                    Thank you for shopping with{" "}
                    <span
                        className="font-semibold"
                        style={{
                            color: "#D4AF37",
                        }}
                    >
                        Kritika Fashion Point
                    </span>
                    . We have received your order and our team will begin
                    processing it shortly.
                </p>

                {/* Status Box */}
                <div
                    className="
                    rounded-2xl
                    p-6
                    mb-10
                    border
                "
                    style={{
                        borderColor: "rgba(201,162,39,0.15)",
                        background:
                            "linear-gradient(to bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.01))",
                    }}
                >
                    <p className="text-gray-300 leading-7">
                        A confirmation email and order details have been
                        sent to your registered email address. Our team
                        will contact you soon regarding your order.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="
                        px-8
                        py-3
                        rounded-xl
                        font-semibold
                        duration-300
                    "
                        style={{
                            background: "#D4AF37",
                            color: "#000",
                        }}
                    >
                        Continue Shopping
                    </Link>

                    <Link
                        href="/my-account"
                        className="
                        px-8
                        py-3
                        rounded-xl
                        border
                        font-semibold
                        duration-300
                    "
                        style={{
                            borderColor: "#D4AF37",
                            color: "#D4AF37",
                        }}
                    >
                        View Orders
                    </Link>
                </div>

                {/* Footer */}
                <div
                    className="
                    mt-10
                    pt-6
                    border-t
                "
                    style={{
                        borderColor: "rgba(201,162,39,0.12)",
                    }}
                >
                    <p className="text-gray-500 text-sm">
                        Need help? Contact our support team anytime.
                    </p>
                </div>
            </div>
        </div>
    );
}