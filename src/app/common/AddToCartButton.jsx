"use client";

import React, { useEffect, useState } from "react";
import { ShoppingCart, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { post_api } from "../api_helper/api_helper";
import { gold } from "../colors/color";
import { fetchCartData } from "../redux/thunks/cartThunk";
import { redirect } from "next/navigation";

export default function AddToCartButton({
    quantity,
    customClasses,
    icon,
    item,
}) {

    const dispatch = useDispatch();

    const user = useSelector(
        (state) => state.user.user
    );

    const token = useSelector(
        (state) => state.user.token
    );

    const [loading, setLoading] = useState(false);


    const handleAddToCart = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (loading) return;

        if (!user?.user_id) {
            toast.warning("Please login to add products to cart");
            redirect('/login')
        }

        if (item.p_quantity == 0) {
            toast.warning("Out Of Stock Please Come Back Later !")
            return;
        }

        try {

            setLoading(true);

            const response = await post_api({
                path: "user/add-to-cart",
                params: null,
                body: {
                    product_id: item.id,
                    quantity: quantity || 1,
                },
                token,
            });

            const res = response?.data
                ? response.data
                : response;

            if (res?.success) {

                toast.success(
                    res?.message ||
                    "Product added to cart successfully"
                );

                await dispatch(
                    fetchCartData(token)
                );

                return;
            }

            switch (res?.code) {

                case 400:
                    toast.error(
                        res?.message ||
                        "Invalid request"
                    );
                    break;

                case 401:
                    toast.error(
                        "Please login again"
                    );
                    break;

                case 404:
                    toast.error(
                        res?.message ||
                        "Product not found"
                    );
                    break;

                case 409:
                    toast.warning(
                        res?.message ||
                        "Item already exists"
                    );
                    break;

                default:
                    toast.error(
                        res?.message ||
                        "Something went wrong"
                    );
            }

        } catch (error) {

            console.error(
                "ADD TO CART ERROR:",
                error
            );

            const status =
                error?.response?.status;

            const message =
                error?.response?.data?.message;

            switch (status) {

                case 400:
                    toast.error(
                        message ||
                        "Invalid request"
                    );
                    break;

                case 401:
                    toast.error(
                        message ||
                        "Unauthorized access"
                    );
                    break;

                case 403:
                    toast.error(
                        message ||
                        "Access denied"
                    );
                    break;

                case 404:
                    toast.error(
                        message ||
                        "Product not found"
                    );
                    break;

                case 409:
                    toast.warning(
                        message ||
                        "Item already exists"
                    );
                    break;

                case 500:
                    toast.error(
                        message ||
                        "Server error"
                    );
                    break;

                default:
                    toast.error(
                        message ||
                        "Failed to add item to cart"
                    );
            }

        } finally {

            setLoading(false);

        }
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={loading}
            className={`
                ${customClasses}
                py-1
                rounded-full
                text-lg
                border
                flex
                items-center
                justify-center
                cursor-pointer
                gap-2
                duration-300
                hover:scale-[1.02]
                disabled:opacity-70
                disabled:cursor-not-allowed
            `}
            style={{
                borderColor: gold.base,
                color: gold.light,
            }}
        >
            {loading ? (
                <Loader2
                    size={18}
                    className="animate-spin"
                />
            ) : (
                <ShoppingCart size={18} />
            )}

            {loading
                ? "Adding..."
                : "Cart"}
        </button>
    );
}