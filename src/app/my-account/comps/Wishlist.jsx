import AddToCartButton from "@/app/common/AddToCartButton";
import BuyNowButton from "@/app/common/BuyNowButton";
import GetNow from "@/app/common/GetNow";
import { WishlistEmpty } from "@/app/common/WishListModel";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Wishlist() {

    const wishListDataList = useSelector((store) => store.wishlist.wishlistData)
    const wishListLoading = useSelector((state) => state.wishlist.wishlist_data_loading)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [getNowModel, setGetNowModel] = useState(false)

    return (
        <div>

            <GetNow getNowModel={getNowModel} setGetNowModel={setGetNowModel} selectedProduct={selectedProduct} />

            <h2 className="lg:text-4xl text-3xl font-black text-white uppercase mb-5">
                Wishlist
            </h2>

            {wishListLoading ?
                (<div className="lg:p-10 p-5 text-white text-lg tracking-wide">
                    Loading Cart...
                </div>)
                :
                (

                    wishListDataList.length == 0 ?
                        <WishlistEmpty />
                        :
                        (
                            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">

                                {wishListDataList.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/product/${item.p_slug}`}
                                        className="block h-fit"
                                    >
                                        <article
                                            style={{ borderColor: gold.dark }}
                                            className="
                    bg-white
                    border
                    cursor-pointer
                    rounded-xl
                    shadow-md
                    transition-all
                    duration-300
                    group
                    h-fit
                    flex
                    flex-col
                    overflow-hidden
                    relative
                    hover:shadow-xl
                "
                                        >

                                            {/* TOP SELLING BADGE */}
                                            {item.is_top_selling && (
                                                <div className="absolute top-3 left-3 z-40">
                                                    <p
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            background: `linear-gradient(
                        135deg,
    #7a5a08 0%,
    #a67c1b 15%,
    #d4af37 35%,
    #f5d97b 50%,
    #d4af37 65%,
    #a67c1b 85%,
    #7a5a08 100%
                    )`,
                                                        }}
                                                        className="
                                text-black
                                tracking-wide
                                py-1
                                px-3
                                rounded-full
                                font-semibold
                                text-sm
                                shadow-2xl
                                shadow-black/70
                            "
                                                    >
                                                        Top Selling
                                                    </p>
                                                </div>
                                            )}

                                            {/* DISCOUNT BADGE */}
                                            {!!item.p_discount && (
                                                <div
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, #CC1B1B, #540202)",
                                                        fontFamily: "Poppins",
                                                    }}
                                                    className="
                            absolute
                            top-0
                            right-0
                            py-1
                            px-2
                            rounded-bl-lg
                            tracking-wider
                            text-white
                            z-50
                            text-[13px]
                            font-normal
                        "
                                                >
                                                    -{item.p_discount}%
                                                </div>
                                            )}

                                            {/* IMAGE */}
                                            <div className="bg-black relative">
                                                <div className="relative h-[190] overflow-hidden">

                                                    <Image
                                                        loading='lazy'

                                                        src={item.index_image || "/images/no-image.png"}
                                                        alt={item.p_title || "Product Image"}
                                                        fill
                                                        sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 50vw,
                                25vw
                            "
                                                        className="
                                object-cover
                                object-center
                                duration-500
                                group-hover:scale-105
                            "
                                                    />
                                                </div>
                                            </div>

                                            {/* CONTENT */}
                                            <div style={{ borderColor: gold.dark }}
                                                className="sm:border-x sm:border-b">
                                                <div
                                                    className="
                                                                  border-t
                                                                  px-5
                                                                  pt-5
                                                                  pb-3
                                                                  bg-black
                                                                  flex-1
                                                                  flex
                                                                  flex-col
                                                              "
                                                >

                                                    {/* TITLE */}
                                                    <div className="flex-1">

                                                        <h2
                                                            className="
                                                                          text-xl
                                                                          text-[#E6C766]
                                                                          font-extrabold
                                                                          relative
                                                                          line-clamp-1
                                                                      "
                                                        >
                                                            {item.p_title || "Untitled Product"}

                                                            <span
                                                                style={{
                                                                    background: `
                                                                                  linear-gradient(
                                                                                      to left,
                                                                                      #8c670a,
                                                                                      #d4af37,
                                                                                      #f5df8b
                                                                                  )
                                                                              `,
                                                                }}
                                                                className="
                                                                              block
                                                                              w-[50]
                                                                              h-[2]
                                                                              mt-2
                                                                              rounded-full
                                                                              duration-500
                                                                              group-hover:w-[90]
                                                                          "
                                                            />
                                                        </h2>

                                                        {/* DESCRIPTION */}
                                                        <p
                                                            style={{ fontFamily: "Poppins" }}
                                                            className="
                                                                          text-sm
                                                                          mt-2
                                                                          text-gray-300
                                                                          line-clamp-2
                                                                          min-h-[30]
                                                                      "
                                                        >
                                                            {item.p_short_description || "Best Artificial Premium Jwellery For your special Occasion"}
                                                        </p>
                                                    </div>

                                                    {/* PRICE */}
                                                    <div className="flex items-center sm:gap-3 gap-1.5">

                                                        <p
                                                            style={{ color: gold.base }}
                                                            className="sm:text-2xl text-xl font-extrabold"
                                                        >
                                                            ₹{item.p_customer_price || 0}
                                                        </p>

                                                        {!!item.p_customer_price && (
                                                            <p className="text-sm text-gray-400 line-through">
                                                                ₹{item.p_sale_price}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* BUTTONS */}
                                                <div className="grid grid-cols-2 sm:gap-2 gap-4 px-5 pb-5 bg-black">

                                                    <AddToCartButton item={item} />

                                                    <BuyNowButton
                                                        setSelectedProduct={setSelectedProduct}
                                                        item={item}
                                                        getNowModel={getNowModel}
                                                        setGetNowModel={setGetNowModel}
                                                    />
                                                </div>
                                            </div>

                                        </article>
                                    </Link>
                                ))
                                }
                            </div>

                        )

                )
            }

        </div>
    );
}