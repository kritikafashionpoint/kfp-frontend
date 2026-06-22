import { Heart } from 'lucide-react'
import React, { useState } from 'react'
import { gold } from '../colors/color'
import { get_api, post_api } from '../api_helper/api_helper'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { fetchCartData } from '../redux/thunks/cartThunk'
import { fetchwishlistData } from '../redux/thunks/wishListThunk'

export default function WishListButton({ ProductBySlug }) {

    const token = useSelector((store) => store.user.token)

    const wishlist = useSelector(
        (store) => store.wishlist.wishlistData
    );

    const wishlistCheck = wishlist?.some(
        (item) => item.id === ProductBySlug.id
    );

    const dispatch = useDispatch()
    const addtoWishList = async (id) => {
        try {
            const response = await post_api({
                body: {},
                params: id,
                path: "user/add-to-wishlist",
                token,
            });

            if (response?.data?.success) {
                await dispatch(
                    fetchwishlistData(token)
                );


                return toast.success(response.data.message);
            }
            else {
                return toast.error('Something Went Wrong')
            }

        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Something went wrong"
            );
        }
    };


    return (
        <button
            onClick={() => {
                addtoWishList(ProductBySlug.id)
            }}
            className="cursor-pointer bg-black  absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border hover:scale-110  duration-200"
            style={{
                borderColor: gold.mid
            }}
        >
            <Heart
                size={22}
                fill={wishlistCheck ? "#D4AF37" : "transparent"}
                color={wishlistCheck ? "#D4AF37" : gold.base}
            />

        </button>
    )
}
