'use client'
import React, { useEffect, useState } from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'
import { FixedButtons } from './FixedBottomButtons'
import { setCategories, setCategoryLoading } from '../redux/slices/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { get_api, post_api } from '../api_helper/api_helper'
import { setProductLoading, setProducts } from '../redux/slices/productSlice'
import { setCartData, setCartDataLoading, setTotalAmountOfCart } from '../redux/slices/cartSlice'
import { setwishlistData, setwishlistDataLoading } from '../redux/slices/wishlistSlice'
import { fetchCartData } from '../redux/thunks/cartThunk'
import { fetchwishlistData } from '../redux/thunks/wishListThunk'
import { setOrderError, setOrderLoading, setOrders } from '../redux/slices/orderSlice'

export default function Header() {

    const dispatch = useDispatch();

    const orders = useSelector((state) => state.order.orders)
    console.log('orders', orders)

    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        if (token) {
            dispatch(fetchCartData(token));
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            dispatch(fetchwishlistData(token));
        }
    }, [token]);

    const fetchCategories = async () => {

        try {

            dispatch(setCategoryLoading(true));

            const response = await get_api({
                path: "admin/category/view-categories",
            });

            if (response.data.success) {

                dispatch(
                    setCategories(
                        response.data.data
                    )
                );
            }

        } catch (error) {
            console.log(error);
        } finally {

            dispatch(
                setCategoryLoading(false)
            );
        }
    };

    const fetchProducts = async () => {

        try {

            dispatch(setProductLoading(true));

            const response = await get_api({
                path: "admin/product/view-products",
            });

            if (response.data.success) {

                dispatch(
                    setProducts(
                        response.data.data
                    )
                );
            }

        } catch (error) {

            console.log(error);

        } finally {

            dispatch(
                setProductLoading(false)
            );
        }
    };

    const fetchAllCartItems = async () => {
        try {
            dispatch(setCartDataLoading(true));

            const response = await post_api({
                body: {},
                params: null,
                path: "user/view-cart",
                token,
            })

            if (response?.data?.success) {

                dispatch(
                    setTotalAmountOfCart(
                        response.data.data.total || 0
                    )
                )

                dispatch(
                    setCartData(
                        response?.data?.data?.items || []
                    )
                );
            }

        } catch (error) {
            console.log(error);

        } finally {
            dispatch(setCartDataLoading(false));
        }
    };

    const fetchWishlistItems = async () => {
        try {
            dispatch(setwishlistDataLoading(true));

            const response = await post_api({
                body: {},
                params: null,
                path: "user/view-wishlist",
                token,
            })

            if (response?.data?.success) {

                dispatch(
                    setwishlistData(
                        response?.data?.data || []
                    )
                );
            }

        } catch (error) {
            console.log(error);

        } finally {
            dispatch(setwishlistDataLoading(false));
        }
    }


    const fetchOrders = async () => {
        try {

            dispatch(setOrderLoading(true));
            dispatch(setOrderError(null));

            const response = await post_api({
                body: {},
                params: null,
                path: 'user/view-orders-by-user-id',
                token: token
            });

            if (response?.data?.success) {

                const sortedOrders = (response.data.data || []).sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );

                dispatch(setOrders(sortedOrders));

            } else {

                dispatch(
                    setOrderError(
                        response?.data?.message || 'Failed to fetch orders'
                    )
                );

                dispatch(setOrders([]));
            }

        } catch (error) {

            console.log(error);

            dispatch(
                setOrderError(
                    error?.response?.data?.message ||
                    error?.message ||
                    'Something went wrong'
                )
            );

            dispatch(setOrders([]));

        } finally {

            dispatch(setOrderLoading(false));

        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [])

    useEffect(() => {
        if (token) {
            fetchAllCartItems()
        }
    }, [])

    useEffect(() => {
        if (token) {
            fetchWishlistItems()
        }
    }, [])


    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
            <div className="offer-strip fixed bottom-0 left-0 w-full z-100 bg-black/80 backdrop-blur-md overflow-hidden">

                <div className="marquee-track flex whitespace-nowrap animate-marquee">

                    <div className="marquee-content flex gap-10 px-10 py-2 text-[15px] tracking-wide text-white">
                        ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection ✨
                    </div>

                    <div className="marquee-content flex gap-10 px-10 py-2 text-[15px] tracking-wide text-white">
                        ✨ Exclusive Offers • Up to 70% OFF • Limited Time Deals • Premium Collection ✨
                    </div>

                </div>
            </div>
            <header className='sticky top-0 z-100 shadow-lg'>
                <PcHeader />
                <MobileHeader />
            </header>

            {/* <FixedButtons /> */}
        </>
    )
}

