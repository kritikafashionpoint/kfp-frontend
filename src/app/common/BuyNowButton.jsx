'use client'
import { redirect } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function BuyNowButton({ quantity, setQuantity, getNowModel, item, setGetNowModel, customClasses, setSelectedProduct }) {

    const user = useSelector((store) => store.user.user)

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()

                if (!user?.user_id) {
                    toast.warning("Please login to Buy Products");
                    redirect('/login')
                }

                if (item.p_quantity == 0) {
                    return toast.warning("Out Of Stock Please Come Back Later !")
                }

                setSelectedProduct(item)
                setGetNowModel(true)
                setQuantity && setQuantity(item.quantity)

            }}
            className={`${customClasses} rounded relative px-6 py-2 bg-amber-400 text-black font-bold cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95`}

        >
            <span className="relative z-10 uppercase font-extrabold">खरीदें</span>

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
