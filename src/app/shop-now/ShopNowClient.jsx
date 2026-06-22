'use client'
import React, { useEffect, useState } from 'react'
import { gold } from '../colors/color'
import Link from 'next/link'
import Image from 'next/image';
import Overlay from '../common/Overlay';
import GetNow from '../common/GetNow';
import { FaSortAmountUp } from 'react-icons/fa';
import AddToCartButton from '../common/AddToCartButton';
import BuyNowButton from '../common/BuyNowButton';
import { FilterModel } from '../common/FilterModel';
import { BiSolidCategory } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import ProductCard from '../product/[slug]/ProductCard';
import ProductCardSkeleton from '../product/[slug]/ProductSkelaton';
import NoProductFound from './NoProductFound';
import { useSearchParams } from 'next/navigation';

export default function ShopNowClient() {

    const { categories, category_loading } = useSelector(
        (state) => state.categories
    );
    const { products, products_loading } = useSelector(
        (state) => state.products
    );

    const searchParams = useSearchParams();

    const search = searchParams.get("search") || "";

    const [getNowModel, setGetNowModel] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState(null);

    const [filterModelOpen, setFilterModelOpen] = useState(false)

    const [filteredProducts, setFilteredProducts] = useState(products)

    useEffect(() => {
        if (!products?.length) return;

        if (!search.trim()) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter((item) => {
            const query = search.toLowerCase();

            const searchableText = `
        ${item.p_title || ""}
        ${item.p_short_description || ""}
        ${item.p_full_description || ""}
    `.toLowerCase();

            return searchableText.includes(query);
        });

        setFilteredProducts(filtered);

    }, [products, search]);

    return (
        <section className='w-full h-full bg-black text-white'>

            <GetNow selectedProduct={selectedProduct} getNowModel={getNowModel} setGetNowModel={setGetNowModel} />

            <FilterModel
                products={products}
                categories={categories}
                filterModelOpen={filterModelOpen}
                setFilterModelOpen={setFilterModelOpen}

                filteredProducts={filteredProducts}
                setFilteredProducts={setFilteredProducts}
            />


            {getNowModel && <Overlay />}

            <div className='max-w-330 mx-auto '>
                <div className='lg:my-10 my-5'>
                    <div className='flex gap-3 justify-between items-center lg:px-6 px-4'>
                        <div>
                            <h2
                                className='lg:text-5xl md:text-4xl text-3xl  sm:text-center font-semibold tracking-wide text-white leading-tight'
                            >
                                <span className='sm:inline hidden'>Our</span>
                                <span style={{ color: gold.mid }} className='ml-2'>
                                    Collection
                                </span>


                            </h2>


                            <div
                                style={{
                                    background: `linear-gradient(to right, ${gold.dark}, transparent)`
                                }}
                                className='w-52 h-[2] mt-2'
                            >

                            </div>

                            {
                                search && (
                                    <p
                                        style={{ color: 'white' }}
                                        className="mt-4 text-lg tracking-wide"
                                    >
                                        Search Result For: "{search}"
                                    </p>
                                )
                            }
                        </div>

                        <div className='flex items-center sm:gap-5 gap-3'>
                            <Link href={'/categories'}>
                                <button
                                    // onClick={() => setFilterModelOpen(true)}
                                    style={{
                                        background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`
                                    }}

                                    className='flex text-black  hover:scale-[1.05] duration-300 ease-in-out items-center sm:px-10 px-3 py-2.5 rounded-md cursor-pointer gap-2 text-lg'>
                                    <BiSolidCategory />
                                    <span style={{ fontFamily: 'Poppins' }} className='sm:block hidden font-semibold'>Categories
                                    </span>
                                </button>
                            </Link>


                            <button
                                onClick={() => setFilterModelOpen(true)}
                                style={{
                                    background: `linear-gradient(
                                    135deg,
                                    #4d3900 0%,
                                    #7a5a08 18%,
                                    #b8860b 38%,
                                    #d4af37 50%,
                                    #e8cf6a 58%,
                                    #c9971a 72%,
                                    #7a5a08 88%,
                                    #4d3900 100%
                                )`
                                }}
                                className='flex text-black  hover:scale-[1.05] duration-300 ease-in-out items-center sm:px-10 px-3 py-2.5 rounded-md cursor-pointer gap-2 text-lg'>
                                <span style={{ fontFamily: 'Poppins' }} className='sm:block hidden font-semibold'>Filter
                                </span>
                                <FaSortAmountUp />
                            </button>


                        </div>
                    </div>


                    <div className='lg:my-10 my-5'>
                        {products_loading ? (

                            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
                                {[...Array(10)].map((_, index) => (
                                    <ProductCardSkeleton key={index} />
                                ))}
                            </div>

                        ) : filteredProducts.length === 0 ? (

                            <NoProductFound />

                        ) : (

                            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-x-5 sm:gap-y-8'>
                                {filteredProducts.map((item, index) => (
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

                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}


