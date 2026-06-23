'use client'
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function UserDashboard() {
    const token = useSelector((store) => store.user.token)

    const fetchDashboardData = async () => {
        try {

        } catch (error) {

        }
    }

    useEffect(() => {
        if (token) {
            fetchDashboardData()
        }
    }, [])

    const stats = [
        {
            title: "Total Orders",
            value: "12",
        },

        {
            title: "Wishlist Items",
            value: "08",
        },

        {
            title: "Reward Points",
            value: "1,450",
        },

        {
            title: "Coupons",
            value: "04",
        },
    ];

    return (
        <div>

            <div className="rounded-3xl border border-[#2a2a2a] bg-[#0a0a0a] p-8 lg:p-12">

                <h2 className="lg:text-5xl text-3xl font-black text-white uppercase">
                    Welcome Back
                </h2>

                <p className="text-[#D4AF37] text-lg lg:text-xl font-semibold mt-3">
                    Kritika Fashion Point
                </p>

                <p className="text-gray-400 mt-6 leading-relaxed max-w-3xl">
                    Manage your orders, wishlist, saved addresses and account
                    details from one place. Stay updated with your latest purchases
                    and enjoy a seamless shopping experience with Kritika Fashion
                    Point.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                    <div className="px-5 py-3 rounded-2xl bg-[#111111] border border-[#2a2a2a]">
                        <span className="text-[#D4AF37] font-semibold">
                            ✨ Premium Fashion Collection
                        </span>
                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-[#111111] border border-[#2a2a2a]">
                        <span className="text-[#D4AF37] font-semibold">
                            🚚 Fast Delivery
                        </span>
                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-[#111111] border border-[#2a2a2a]">
                        <span className="text-[#D4AF37] font-semibold">
                            💎 Exclusive Offers
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}