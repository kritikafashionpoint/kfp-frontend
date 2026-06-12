'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function BuyNowButton({ setQuantity, getNowModel, item, setGetNowModel, customClasses, setSelectedProduct }) {

    const user = useSelector((store) => store.user.user)

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                if (!user?.user_id) {
                    toast.warning("Please login to add products to cart");
                    redirect('/login')
                }

                if (item.p_quantity == 0) {
                    return toast.warning("Out Of Stock Please Come Back Later !")
                }

                setSelectedProduct(item)
                setGetNowModel(true)
                setQuantity && setQuantity(item.quantity)

            }}
            className={`${customClasses} relative px-6 py-2 text-black font-bold rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95`}
            style={{
                background: `
                linear-gradient(
                                                    145deg,
                                                    #3a2a00 0%,
                                                    #5a4200 12%,
                                                    #7a5a08 24%,
                                                    #a8790a 36%,
                                                    #c9971a 46%,
                                                    #dcb94a 54%,
                                                    #e8cf6a 60%,
                                                    #dcb94a 66%,
                                                    #c9971a 74%,
                                                    #8c670a 86%,
                                                    #5a4200 94%,
                                                    #3a2a00 100%
                                                )
                                            `
            }}
        >
            <span className="relative z-10 uppercase font-extrabold">Buy</span>

            {/* Shine Effect */}
            <span
                className="absolute top-0 left-full w-full h-full"
                style={{
                    background: 'linear-gradient(120deg, transparent, #FFFFFF99, transparent)',
                    transition: 'all 1s'
                }}
            ></span>
        </button>
    )
}
