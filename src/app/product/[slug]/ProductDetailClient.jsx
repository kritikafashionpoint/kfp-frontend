"use client"

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
    Heart,
    ShoppingCart,
    Star,
    Truck,
    ShieldCheck,
    RotateCcw,
    Minus,
    Plus
} from "lucide-react";
import { gold } from "@/app/colors/color";
import Link from "next/link";
import AddToCartButton from "@/app/common/AddToCartButton";
import BuyNowButton from "@/app/common/BuyNowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import Overlay from "@/app/common/Overlay";
import GetNow from "@/app/common/GetNow";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import ProductCardSkeleton from "./ProductSkelaton";
import { useParams } from "next/navigation";
import Loading from "../../../../Loading";
import WishListButton from "@/app/common/WishListButton";
import { NoNewArrFound } from "@/app/home-page/NewArrivals";

export default function ProductDetailClient() {

    const swiperRef = useRef(null);

    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const [selectedProduct, setSelectedProduct] = useState(null);


    const [getNowModel, setGetNowModel] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const slug = useParams().slug;

    const ProductBySlug = products.find(
        (item) => item.p_slug === slug
    );

    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (ProductBySlug?.index_image) {
            setSelectedImage(ProductBySlug?.index_image || null);
        }
    }, [ProductBySlug]);


    if (!ProductBySlug) {
        return <div style={{ fontFamily: 'Poppins' }} className="text-white text-lg lg:px-6 px-4 lg:py-10 py-5 animate-pulse max-w-330 mx-auto">Loading Product...</div>;
    }

    const {
        index_image,
        gallery_images,
        p_title,
        p_customer_price,
        p_sale_price,
        p_material,
        p_finishing,
        p_occasion,
        p_include_items,
        is_top_selling,
        p_advance_payment,
        p_discount,
        category_name,
        p_full_description,
        p_short_description,
        p_quantity
    } = ProductBySlug;

    const allImages = [index_image, ...(gallery_images || [])];

    const occasions = p_occasion.split(" ")
    const include_items = p_include_items.split(" ")
    const finishing = p_finishing.split(" ")
    const material = p_material.split(" ")

    return (
        <>
            {ProductBySlug ?
                <section
                    className="w-full min-h-screen bg-black text-white"
                >
                    {getNowModel && <Overlay />}
                    <GetNow quantity={quantity}
                        getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

                    <div className="max-w-330 mx-auto px-4 lg:px-6 py-10">

                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-lg text-white mb-5">
                            <Link href={'/'} className="hover:text-[#FFF2B3] cursor-pointer"><span>Home</span></Link>
                            <span>/</span>
                            <Link href={'/categories'}><span className="hover:text-[#FFF2B3] cursor-pointer">Category</span></Link>
                            <span>/</span>
                            <span className="capitalize" style={{ color: gold.light }}>
                                {p_title}
                            </span>
                        </div>

                        {/* Main Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-[35%_auto] gap-10">

                            {/* LEFT IMAGES */}
                            <div className="w-full">

                                {/* Main Image */}
                                <div
                                    className="relative overflow-hidden rounded-3xl border-2 p-3"
                                    style={{ borderColor: gold.base }}
                                >
                                    <Image
                                        loading='lazy'
                                        sizes="full"
                                        src={selectedImage || '/preview.jpg'}
                                        alt={p_title}
                                        width={400}
                                        height={400}
                                        className="w-full lg:h-[400] h-full object-cover rounded-2xl"
                                    />
                                    <WishListButton ProductBySlug={ProductBySlug} />
                                </div>

                                {/* Thumbnail Images */}
                                <div className="grid grid-cols-4 gap-4 mt-5">
                                    {allImages.map((img, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            className={`border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300
                ${selectedImage === img
                                                    ? "border-amber-500 scale-105"
                                                    : "border-gray-700 hover:border-amber-400"
                                                }`}
                                        >
                                            <Image
                                                loading='lazy'

                                                src={img}
                                                alt={`thumb-${index}`}
                                                width={200}
                                                height={200}
                                                className="w-full h-24 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT DETAILS */}
                            <div className="flex flex-col justify-start">

                                {/* Badge */}
                                <div
                                    className="w-fit px-5 py-2 rounded-full text-sm font-semibold mb-4"
                                    style={{
                                        background:
                                            "linear-gradient(to right,#8B6B00,#F7E7A1,#8B6B00)",
                                        color: "#000",
                                    }}
                                >
                                    Premium Collection
                                </div>

                                {/* Title */}
                                <h1
                                    className="text-3xl lg:text-5xl capitalize font-bold leading-tight"
                                    style={{ color: gold.light }}
                                >
                                    {p_title}
                                </h1>


                                {/* Price */}
                                <div className="flex items-center gap-4 mt-6">
                                    <h2
                                        className="text-4xl font-bold"
                                        style={{ color: gold.light }}
                                    >
                                        ₹{p_customer_price}
                                    </h2>

                                    <span className="line-through text-gray-500 text-xl">
                                        ₹{p_sale_price}
                                    </span>

                                    <span
                                        className="px-3 py-1 rounded-full text-sm font-semibold"
                                        style={{
                                            backgroundColor: "#1a1a1a",
                                            color: gold.light,
                                            border: `1px solid ${gold.base}`,
                                        }}
                                    >
                                        {p_discount}% OFF
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 leading-8 mt-6 text-lg whitespace-pre-line">
                                    {p_short_description}
                                </p>

                                {/* Description */}
                                <p className="text-gray-300 leading-8 mt-6 text-lg whitespace-pre-line">
                                    {p_full_description}
                                </p>

                                {/* Out Of Stock Handler */}
                                {
                                    p_quantity === 0 && (
                                        <div
                                            className="
                                                inline-flex
                                                items-center
                                                gap-2
                                                px-4
                                                w-fit mt-4
                                                py-2
                                                rounded-full
                                                bg-linear-to-r
                                                from-red-700
                                                via-red-600
                                                to-red-800
                                                text-white
                                                text-sm
                                                font-semibold
                                                tracking-wider
                                                shadow-lg
                                                shadow-red-900/40
                                                border
                                                border-red-400/20
                                                backdrop-blur-md
                                                animate-pulse
                                            "
                                        >
                                            <span className="w-2 h-2 rounded-full bg-white"></span>
                                            OUT OF STOCK
                                        </div>
                                    )
                                }

                                {/* Quantity */}
                                <div className="mt-8">
                                    <h3
                                        className="text-lg font-semibold mb-4"
                                        style={{ color: gold.light }}
                                    >
                                        Quantity
                                    </h3>

                                    <div
                                        className="flex items-center w-fit border rounded-xl overflow-hidden"
                                        style={{
                                            borderColor: gold.base,
                                        }}
                                    >
                                        <button
                                            onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                                            className="w-14 h-14 flex items-center justify-center hover:bg-[#111] duration-300"
                                        >
                                            <Minus />
                                        </button>

                                        <div className="w-16 text-center text-xl font-semibold">
                                            {quantity}
                                        </div>

                                        <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 flex items-center justify-center hover:bg-[#111] duration-300">
                                            <Plus />
                                        </button>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="grid md:grid-cols-2 gap-5 mt-10">

                                    {/* Add to Cart */}
                                    <AddToCartButton item={ProductBySlug} customClasses={'py-3'} quantity={quantity} />

                                    {/* Buy Now */}
                                    <BuyNowButton
                                        setSelectedProduct={setSelectedProduct} item={ProductBySlug} getNowModel={getNowModel} setGetNowModel={setGetNowModel} customClasses={'py-3'} />
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

                                    <div
                                        className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                        style={{ borderColor: gold.base }}
                                    >
                                        <Truck
                                            size={35}
                                            style={{ color: gold.light }}
                                        />
                                        <h4
                                            className="mt-3 font-semibold"
                                            style={{ color: gold.light }}
                                        >
                                            Safe Delivery
                                        </h4>
                                    </div>

                                    <div
                                        className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                        style={{ borderColor: gold.base }}
                                    >
                                        <ShieldCheck
                                            size={35}
                                            style={{ color: gold.light }}
                                        />
                                        <h4
                                            className="mt-3 font-semibold"
                                            style={{ color: gold.light }}
                                        >
                                            Premium Quality
                                        </h4>
                                    </div>

                                    <div
                                        className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                        style={{ borderColor: gold.base }}
                                    >
                                        <RotateCcw
                                            size={35}
                                            style={{ color: gold.light }}
                                        />
                                        <h4
                                            className="mt-3 font-semibold"
                                            style={{ color: gold.light }}
                                        >
                                            Advance Booking
                                        </h4>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 mt-20">

                            {/* Product Details Card */}
                            <div
                                className="relative overflow-hidden rounded-[30px] border p-px shadow-2xl"
                                style={{
                                    borderColor: gold.base,
                                    background: `linear-gradient(135deg, ${gold.dark}30, transparent, ${gold.base}40)`
                                }}
                            >

                                {/* Glow Effect */}
                                <div
                                    className="absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-20"
                                    style={{ background: gold.base }}
                                ></div>

                                <div className="relative h-full rounded-[30px] bg-[#050505]/95 backdrop-blur-2xl p-6 lg:p-8">

                                    {/* Heading */}
                                    <div className="flex items-center gap-3 mb-8">

                                        <div
                                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                                            style={{
                                                background: `linear-gradient(135deg, ${gold.base}, ${gold.light})`,
                                                color: "#000"
                                            }}
                                        >
                                            ✨
                                        </div>

                                        <div>
                                            <h2
                                                className="lg:text-3xl text-2xl font-extrabold tracking-wide"
                                                style={{ color: gold.base }}
                                            >
                                                Product Details
                                            </h2>

                                            <p className="text-gray-500 text-sm mt-1 tracking-wide">
                                                Premium handcrafted jewellery information
                                            </p>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">

                                        {/* Left */}
                                        <div className="space-y-4">

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Category</p>
                                                <h4 className="text-white text-lg font-semibold mt-1">
                                                    {category_name || 'Artificial Jwellery'}
                                                </h4>
                                            </div>

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Type</p>
                                                <h4 className="text-white text-lg font-semibold mt-1 capitalize">
                                                    {p_title}
                                                </h4>
                                            </div>

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Material</p>
                                                <ul className="text-white text-lg font-semibold mt-1 flex items-center capitalize tracking-wide flex-wrap ">
                                                    {material.map((item, index) => {
                                                        return (
                                                            <li className="flex gap-3 flex-wrap" key={index}>{item}, <span>{" "}</span></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Finish</p>
                                                <ul className="text-white text-lg font-semibold mt-1 flex items-center capitalize tracking-wide flex-wrap ">
                                                    {finishing.map((item, index) => {
                                                        return (
                                                            <li className="flex gap-3 flex-wrap" key={index}>{item}, <span>{" "}</span></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                        </div>

                                        {/* Right */}
                                        <div className="space-y-4">

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Occasion</p>
                                                <ul className="text-white text-lg font-semibold mt-1 flex items-center capitalize tracking-wide flex-wrap ">
                                                    {occasions.map((item, index) => {
                                                        return (
                                                            <li className="flex gap-3 flex-wrap" key={index}>{item}, <span>{" "}</span></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Package Includes</p>
                                                <ul className="text-white text-lg font-semibold mt-1 flex items-center capitalize tracking-wide flex-wrap ">
                                                    {include_items.map((item, index) => {
                                                        return (
                                                            <li className="flex gap-3 flex-wrap" key={index}>{item}, <span>{" "}</span></li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="bg-white/3 border border-white/5 rounded-2xl p-4">
                                                <p className="text-gray-400 text-sm">Dispatch Time</p>
                                                <h4 className="text-white text-lg font-semibold mt-1">
                                                    2-3 Working Days
                                                </h4>
                                            </div>

                                            {/* <div
                                                className="rounded-2xl p-4"
                                                style={{
                                                    background: `linear-gradient(135deg, ${gold.base}, ${gold.light})`
                                                }}
                                            >
                                                <p className="text-black text-sm font-medium">
                                                    Payment Option
                                                </p>

                                                <h4 className="text-black text-lg font-extrabold mt-1">
                                                    Pay Advance for Your Item
                                                </h4>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Read Before Use */}
                            <div
                                className="relative overflow-hidden rounded-[30px] p-[1] shadow-2xl"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #8A6A01, #F7E7A1, #8A6A01)"
                                }}
                            >

                                {/* Glow */}
                                <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-yellow-200/20 blur-3xl"></div>

                                <div className="relative w-full h-full rounded-[30px] bg-black text-white p-6 lg:p-8">

                                    {/* Heading */}
                                    <div className="flex items-center gap-3 mb-8">

                                        <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-2xl">
                                            ⚜️
                                        </div>

                                        <div>
                                            <h2 style={{ color: gold.mid }} className="lg:text-3xl text-2xl font-extrabold text-black">
                                                Read Before Use
                                            </h2>

                                            <p style={{ color: gold.base }} className="text-black/60 text-sm mt-1 tracking-wide">
                                                Jewellery care instructions & important notes
                                            </p>
                                        </div>
                                    </div>

                                    {/* Notes */}
                                    <div className="space-y-4 text-white">

                                        <div className="bg-black/5 rounded-2xl p-4 border border-white">
                                            <p className=" leading-7">
                                                ✨ Keep the jewellery away from water, perfume, and chemicals
                                                to maintain its shine and finish.
                                            </p>
                                        </div>

                                        <div className="bg-black/5 rounded-2xl p-4 border border-white">
                                            <p className=" leading-7">
                                                ✨ Store the product in an airtight box or soft pouch after use
                                                to avoid scratches and tarnishing.
                                            </p>
                                        </div>

                                        <div className="bg-black/5 rounded-2xl p-4 border border-white">
                                            <p className=" leading-7">
                                                ✨ Crafted for fashion and occasional wear, not intended for
                                                rough daily usage.
                                            </p>
                                        </div>

                                        <div className="bg-black border border-white text-white rounded-2xl p-5">
                                            <p className="font-semibold tracking-wide">
                                                🚚 Safe Packaging & Fast Delivery Available
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='max-w-330 mx-auto  lg:my-10 my-5'>

                        <div className="flex items-center justify-between mb-8 lg:px-6 px-4 ">

                            <div className="">

                                <div className="flex items-center gap-3 mb-3 ">

                                    <div
                                        style={{
                                            background: `linear-gradient(to bottom, ${gold.light}, ${gold.dark})`
                                        }}
                                        className="w-2 h-14 rounded-full"
                                    ></div>

                                    <div>

                                        <h2
                                            style={{
                                                background: `linear-gradient(to right, ${gold.dark}, ${gold.light}, ${gold.base})`,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                            className="lg:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide leading-tight"
                                        >
                                            You May Also Like
                                        </h2>

                                    </div>
                                </div>

                                <p className="text-gray-200 lg:text-base text-lg tracking-wider leading-7">
                                    Discover more timeless jewellery pieces crafted to elevate your elegance and complete your luxury collection.
                                </p>

                            </div>

                        </div>

                        <div>
                            {products_loading ? (

                                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 sm:gap-y-8'>
                                    {[...Array(10)].map((_, index) => (
                                        <ProductCardSkeleton key={index} />
                                    ))}
                                </div>

                            ) : products.length === 0 ? (

                                <NoNewArrFound title="No Related Products Yet" />

                            ) : (

                                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 sm:gap-y-8'>
                                    {products.map((item, index) => (
                                        <ProductCard
                                            key={item.id || index}
                                            setSelectedProduct={setSelectedProduct}
                                            item={item}
                                            index={index}
                                            getNowModel={getNowModel}
                                            setGetNowModel={setGetNowModel}
                                        />
                                    ))}
                                </div>

                            )}
                        </div>

                    </div>
                </section>

                :
                <div>
                    hello
                </div>

            }
        </>
    );
}