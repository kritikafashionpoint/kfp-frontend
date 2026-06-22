'use client'
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

    console.log('category_product', category_product);


    return (
        <div className='w-full lg:my-20 my-10'>
            <div className='max-w-330 mx-auto lg:px-6 sm:px-4 '>

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
