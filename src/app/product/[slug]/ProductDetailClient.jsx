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


    if (products_loading) {
        return (
            <div
                style={{ fontFamily: "Poppins" }}
                className="text-black text-lg lg:px-6 px-4 lg:py-10 py-5 animate-pulse max-w-330 mx-auto"
            >
                Loading Product...
            </div>
        );
    }

    if (!ProductBySlug) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 text-4xl">
                    🔍
                </div>

                <h2 className="text-3xl Poppins font-bold text-black mb-4">
                    Product Not Found
                </h2>

                <p className="text-gray-400 max-w-xl mb-8 Poppins">
                    The product you're looking for may have been removed,
                    renamed, or the URL may contain a spelling mistake.
                    Please check the link or browse our latest collection.
                </p>

                <Link
                    href="/shop-now"
                    className="px-8 py-3 bg-linear-to-b from-amber-300 to-amber-800 text-black font-semibold hover:bg-amber-400 transition rounded-full"
                >
                    Continue Shopping
                </Link>
            </div>
        );
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
            <section
                className="w-full min-h-screen bg-white text-black"
            >
                {getNowModel && <Overlay />}
                <GetNow quantity={quantity}
                    getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

                <div className="max-w-330 mx-auto px-4 lg:px-6 py-10">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-lg text-black mb-5">
                        <Link href={'/'} className="hover:text-[#FFF2B3] cursor-pointer"><span>Home</span></Link>
                        <span>/</span>
                        <Link href={'/categories'}><span className="hover:text-[#FFF2B3] cursor-pointer">Category </span></Link>
                        <span>/</span>
                        <span className="capitalize" style={{ color: gold.dark }}>
                            {p_title}
                        </span>
                    </div>

                    {/* Mai Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-[35%_auto] gap-10">

                        {/* LEFT IMAGES */}
                        <div className="w-full">

                            {/* Main Image */}
                            <div
                                className="relative overflow-hidden rounded-3xl border-2 p-3"
                                style={{ borderColor: gold.dark }}
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
                                className="text-3xl lg:text-5xl text-black capitalize font-bold leading-tight"
                            >
                                {p_title}
                            </h1>


                            {/* Price */}
                            <div className="flex items-center gap-4 mt-6">
                                <h2
                                    className="text-4xl font-bold text-black"
                                >
                                    ₹{p_customer_price}
                                </h2>

                                <span className="line-through text-gray-800 text-xl">
                                    ₹{p_sale_price}
                                </span>

                                <span
                                    className="px-3 py-1 rounded-full text-sm font-semibold"
                                    style={{
                                        backgroundColor: "#1a1a1a",
                                        color: gold.light,
                                    }}
                                >
                                    {p_discount}% OFF
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 leading-8 mt-6 text-lg whitespace-pre-line">
                                {p_short_description}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 leading-8 mt-6 text-lg whitespace-pre-line">
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
                                        className="w-14 h-14 flex items-center justify-center hover:bg-[#111] hover:text-white duration-300"
                                    >
                                        <Minus />
                                    </button>

                                    <div className="w-16 text-center text-xl font-semibold">
                                        {quantity}
                                    </div>

                                    <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 hover:text-white flex items-center justify-center hover:bg-[#111] duration-300">
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
                                    quantity={quantity}
                                    setSelectedProduct={setSelectedProduct} item={ProductBySlug} getNowModel={getNowModel} setGetNowModel={setGetNowModel} customClasses={'py-3'} />
                            </div>

                            <Link
                                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                                target="_blank"
                            >
                                <button className="cursor-pointer hover:text-black duration-300 w-full h-full py-0.5 bg-green-500 text-black Poppins font-semibold text-lg mt-4 rounded">Whatsapp पर खरीदें </button>
                            </Link>

                            {/* Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

                                <div
                                    className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                    style={{ borderColor: gold.dark }}
                                >
                                    <Truck
                                        size={35}
                                        style={{ color: 'black' }}
                                    />
                                    <h4
                                        className="mt-3 font-semibold"
                                        style={{ color: 'black' }}
                                    >
                                        Safe Delivery
                                    </h4>
                                </div>

                                <div
                                    className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                    style={{ borderColor: gold.dark }}
                                >
                                    <ShieldCheck
                                        size={35}
                                        style={{ color: 'black' }}
                                    />
                                    <h4
                                        className="mt-3 font-semibold"
                                        style={{ color: 'black' }}
                                    >
                                        Premium Quality
                                    </h4>
                                </div>

                                <div
                                    className="border rounded-2xl p-5 flex flex-col items-center text-center"
                                    style={{ borderColor: gold.dark }}
                                >
                                    <RotateCcw
                                        size={35}
                                        style={{ color: 'black' }}
                                    />
                                    <h4
                                        className="mt-3 font-semibold"
                                        style={{ color: 'black' }}
                                    >
                                        Advance Booking
                                    </h4>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 mt-20">

                        {/* Product Details Card */}
                        {/* Product Details Card */}
                        <div
                            className="relative overflow-hidden rounded-[30px] border border-yellow-200 bg-linear-to-br from-white via-[#fffdf8] to-[#fff8ea] shadow-xl"
                        >

                            {/* Soft Glow */}
                            <div
                                className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-30"
                                style={{
                                    background: "radial-gradient(circle,#fde68a,transparent)"
                                }}
                            ></div>

                            <div className="relative h-full rounded-[30px] p-6 lg:p-8">

                                {/* Heading */}
                                <div className="flex items-center gap-4 mb-8">

                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                                        style={{
                                            background: `linear-gradient(135deg, ${gold.base}, ${gold.light})`,
                                            color: "#fff"
                                        }}
                                    >
                                        ✨
                                    </div>

                                    <div>

                                        <h2
                                            className="lg:text-3xl text-2xl font-bold"
                                            style={{ color: gold.dark }}
                                        >
                                            Product Details
                                        </h2>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Premium handcrafted jewellery information
                                        </p>

                                    </div>

                                </div>

                                {/* Details Grid */}

                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">

                                    {/* Left */}

                                    <div className="space-y-5">

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-1">
                                                Category
                                            </p>

                                            <h4 className="text-gray-900 text-lg font-semibold">
                                                {category_name || "Artificial Jewellery"}
                                            </h4>

                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-1">
                                                Type
                                            </p>

                                            <h4 className="text-gray-900 text-lg font-semibold capitalize">
                                                {p_title}
                                            </h4>

                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-2">
                                                Material
                                            </p>

                                            <ul className="flex flex-wrap gap-2">

                                                {material.map((item, index) => (

                                                    <li
                                                        key={index}
                                                        className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-sm font-medium text-gray-800 capitalize"
                                                    >
                                                        {item}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-2">
                                                Finish
                                            </p>

                                            <ul className="flex flex-wrap gap-2">

                                                {finishing.map((item, index) => (

                                                    <li
                                                        key={index}
                                                        className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-sm font-medium text-gray-800 capitalize"
                                                    >
                                                        {item}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                    </div>

                                    {/* Right */}

                                    <div className="space-y-5">

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-2">
                                                Occasion
                                            </p>

                                            <ul className="flex flex-wrap gap-2">

                                                {occasions.map((item, index) => (

                                                    <li
                                                        key={index}
                                                        className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-sm font-medium text-gray-800 capitalize"
                                                    >
                                                        {item}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-2">
                                                Package Includes
                                            </p>

                                            <ul className="flex flex-wrap gap-2">

                                                {include_items.map((item, index) => (

                                                    <li
                                                        key={index}
                                                        className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-sm font-medium text-gray-800 capitalize"
                                                    >
                                                        {item}
                                                    </li>

                                                ))}

                                            </ul>

                                        </div>

                                        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                            <p className="text-gray-500 text-sm mb-1">
                                                Dispatch Time
                                            </p>

                                            <h4 className="text-gray-900 text-lg font-semibold">
                                                2–3 Working Days
                                            </h4>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Read Before Use */}
                        <div
                            className="relative overflow-hidden rounded-[30px] border border-yellow-200 bg-linear-to-br from-white via-[#fffdf8] to-[#fff8ea] shadow-xl"
                        >

                            {/* Soft Glow */}
                            <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full blur-3xl opacity-30 bg-yellow-200"></div>

                            <div className="relative w-full h-full rounded-[30px] p-6 lg:p-8">

                                {/* Heading */}

                                <div className="flex items-center gap-4 mb-8">

                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-md"
                                        style={{
                                            background: `linear-gradient(135deg, ${gold.base}, ${gold.light})`,
                                            color: "#fff"
                                        }}
                                    >
                                        ⚜️
                                    </div>

                                    <div>

                                        <h2
                                            className="lg:text-3xl text-2xl font-bold"
                                            style={{ color: gold.dark }}
                                        >
                                            Read Before Use
                                        </h2>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Jewellery care instructions & important notes
                                        </p>

                                    </div>

                                </div>

                                {/* Notes */}

                                <div className="space-y-5">

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                        <div className="flex gap-4 items-start">

                                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-lg">
                                                💧
                                            </div>

                                            <p className="text-gray-700 leading-7">
                                                Keep the jewellery away from water, perfume,
                                                sweat and chemicals to maintain its shine,
                                                polish and long-lasting finish.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                        <div className="flex gap-4 items-start">

                                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-lg">
                                                📦
                                            </div>

                                            <p className="text-gray-700 leading-7">
                                                Store your jewellery in an airtight box or a
                                                soft pouch after every use to protect it from
                                                scratches and discoloration.
                                            </p>

                                        </div>

                                    </div>

                                    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">

                                        <div className="flex gap-4 items-start">

                                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-lg">
                                                ✨
                                            </div>

                                            <p className="text-gray-700 leading-7">
                                                This jewellery is specially crafted for fashion,
                                                weddings, festivals and occasional wear. Avoid
                                                rough daily usage for longer durability.
                                            </p>

                                        </div>

                                    </div>

                                    <div
                                        className="rounded-2xl p-6 shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${gold.base}, ${gold.light})`
                                        }}
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                                                🚚
                                            </div>

                                            <div>

                                                <h4 className="text-black font-bold text-lg">
                                                    Safe Packaging & Fast Delivery
                                                </h4>

                                                <p className="text-black text-sm mt-1">
                                                    Every jewellery piece is packed carefully to
                                                    ensure safe delivery across India.
                                                </p>

                                            </div>

                                        </div>

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
                                        className="lg:text-5xl md:text-4xl text-3xl font-extrabold tracking-wide leading-tight"
                                    >
                                        You May Also Like
                                    </h2>

                                </div>
                            </div>

                            <p className="text-black lg:text-base text-lg tracking-wider leading-7">
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
        </>
    );
}