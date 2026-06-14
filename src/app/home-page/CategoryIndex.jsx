'use client'

import React, { useEffect, useState } from 'react'
import CategoryWiseSections from './CategoryWiseSection'
import { get_api } from '../api_helper/api_helper'

export default function CategoryIndex() {

    const [category_products_loading, set_category_products_loading] = useState(false)

    const [category_products, set_category_products] = useState([])


    const fetchAllcategoryProducts = async () => {

        try {

            set_category_products_loading(true)

            const response = await get_api({
                params: null,
                path: 'category/view-category-wise-products'
            })

            const data = response?.data

            if (data?.success) {

                set_category_products(data.data || [])

            } else {

                set_category_products([])
            }

        } catch (error) {

            console.log(error?.message || 'Server Error')

            set_category_products([])

        } finally {

            set_category_products_loading(false)
        }
    }

    useEffect(() => {
        fetchAllcategoryProducts()
    }, [])

    return (
        <section className='w-full h-full text-white'>

            <div className="max-w-330 mx-auto lg:px-6 px-4 lg:my-10 my-5">

                {
                    category_products
                        ?.filter(category => category.products?.length > 0)
                        .map((category) => (
                            <CategoryWiseSections
                                category_products_loading={category_products_loading}
                                key={category.category_id}
                                item={category}
                            />
                        ))
                }
            </div>
        </section>
    )
}