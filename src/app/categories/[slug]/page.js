'use client'
import { gold } from '@/app/colors/color'
import { NoNewArrFound } from '@/app/home-page/NewArrivals'
import ProductCard from '@/app/product/[slug]/ProductCard'
import ProductCardSkeleton from '@/app/product/[slug]/ProductSkelaton'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function page() {
    const { products, products_loading } = useSelector(
        (state) => state.products
    );
    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );

    const [getNowModel, setGetNowModel] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const slug = useParams().slug;
    console.log('slug', slug)

    const slugCategory = categories.find(
        (cat) => cat.category_slug === slug
    );

    console.log('slugCategory', slugCategory)

    const category_product = products.filter(
        (product) => product.category_id === slugCategory?.category_id
    );


    console.log('slug_categoroy', slugCategory);


    return (
        <div className='w-full lg:my-16 my-10'>
            <div className='max-w-330 mx-auto lg:px-6 sm:px-4 '>

                <div className="text-center">
                    <span className="inline-block px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm tracking-widest uppercase">
                        Premium Collection
                    </span>

                    <h1 style={{ color: gold.base }} className="mt-6 text-5xl capitalize md:text-6xl font-bold">
                        {slugCategory?.category_name}
                    </h1>

                    <p className="Poppins max-w-3xl mx-auto my-7 tracking-wider text-gray-300 text-md leading-relaxed">
                        Discover elegant and trendy artificial jewellery crafted to enhance every
                        occasion. Explore our premium collection designed with style, beauty, and
                        affordability in mind.
                    </p>
                </div>

                <div>
                    {products_loading ? (

                        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 gap-y-8'>
                            {[...Array(5)].map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))}
                        </div>

                    ) : category_product.length === 0 ? (

                        <NoNewArrFound title={'No Product Available in this Category Yet'} />

                    ) :

                        (
                            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-x-5 gap-y-8'>
                                {category_product?.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        setSelectedProduct={setSelectedProduct}
                                        item={item}
                                        index={index}
                                        getNowModel={getNowModel}
                                        setGetNowModel={setGetNowModel}
                                    />
                                ))}
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
