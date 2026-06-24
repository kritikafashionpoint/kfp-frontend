import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../Loading";
import { post_api } from "@/app/api_helper/api_helper";
import ReplaceForm from "./ReplaceForm";

export function Orders() {
    const orders = useSelector((state) => state.order.orders)
    const order_loading = useSelector((state) => state.order.order_loading)

    const [replaceModel, setReplaceModel] = useState(false)
    const [loading, setloading] = useState(false)

    const handleReplaceForm = (order) => {
        try {
            setloading(true)

        } catch (error) {
            console.log(error.message)
        }
        finally {
            setloading(false)
        }
    }

    const HandleReplcaeRequest = async (order) => {
        try {
            setReplaceModel(true)
            handleReplaceForm(order)
        } catch (error) {
            console.log(error.message)
        }
        finally {
            setloading(false)
        }
    }



    const response = post_api({
        body: {},
        params: null,
        path: 'user/replace-order',
    })

    return (
        <div className="space-y-8 ">

            {loading && <Loading />}

            <ReplaceForm replaceModel={replaceModel} setReplaceModel={setReplaceModel} />

            {order_loading ? (

                <div className="text-center py-20 text-gray-400">
                    Loading Orders...
                </div>

            ) : orders?.length === 0 ? (

                <div className="text-center py-20 text-gray-400">
                    No Orders Found
                </div>

            ) : (

                orders.map((order) => (

                    <div
                        key={order.order_id}
                        className="
                    bg-[#0f0f0f]
                    border
                    border-[#252525]
                    rounded-3xl
                    overflow-hidden
                "
                    >

                        {/* Header */}

                        <div
                            className="
                        flex
                        flex-wrap
                        gap-5
                        justify-between
                        items-center
                        p-6
                        border-b
                        border-[#252525]
                    "
                        >

                            <div>

                                <h3 className="text-white text-xl font-bold">
                                    Order #{order.order_id}
                                </h3>

                                <p className="text-gray-400 text-sm">
                                    {new Date(order.created_at).toLocaleString()}
                                </p>

                            </div>

                            <div className="flex items-center gap-4">

                                <span
                                    className={`
                                px-4 py-2 Poppins rounded-full text-sm font-medium
                                ${order.order_status === "delivered"
                                            ? "bg-green-500/10 text-green-400"
                                            : order.order_status === "cancelled"
                                                ? "bg-red-500/10 text-red-400"
                                                : "bg-green-500 text-black "
                                        }
                            `}
                                >
                                    {order.order_status}
                                </span>

                                <div className="text-right">

                                    <p className="text-gray-400 text-xs">
                                        Total Amount
                                    </p>

                                    <p className="text-[#D4AF37] font-bold text-xl">
                                        ₹{order.total_amount}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Products */}

                        <div className="p-6">

                            <div className="gap-5">


                                {order.items.map((item) => (

                                    <div
                                        key={item.order_item_id}
                                        className="
                                    bg-black
                                    border
                                    border-[#252525]
                                    rounded-2xl
                                    flex justify-between items-start
                                    overflow-hidden
                                "
                                    >

                                        <div className="flex gap-4 p-4">

                                            <img
                                                src={item.product.image}
                                                alt={item.product.title}
                                                className="
                                            w-32
                                            h-32
                                            object-cover
                                            rounded-xl
                                        "
                                            />

                                            <div className="flex-1">

                                                <h4 className="text-white capitalize Poppins font-bold text-lg">
                                                    {item.product.title}
                                                </h4>

                                                <p className="text-gray-400 Poppins text-sm mt-1">
                                                    {item.product.short_description}
                                                </p>

                                                <div className="mt-4">

                                                    <p className="text-sm  Poppins text-gray-400">
                                                        Quantity: {item.quantity}
                                                    </p>

                                                    <p className="text-sm  Poppins text-gray-400">
                                                        Ordered Price: ₹{item.ordered_price}
                                                    </p>

                                                    <div className="flex items-center gap-3 mt-2">

                                                        <span className="text-[#D4AF37] Poppins font-bold text-lg">
                                                            ₹{item.product.customer_price}
                                                        </span>

                                                        <span className="line-through Poppins text-gray-500 text-sm">
                                                            ₹{item.product.sale_price}
                                                        </span>

                                                    </div>

                                                </div>



                                            </div>

                                        </div>


                                        <div className="p-3 flex items-center gap-4">

                                            {/* cancel button */}
                                            {order.order_status !== "cancelled" &&
                                                order.order_status !== "delivered" && (

                                                    <button
                                                        onClick={() => handleCancelOrder(order.order_id)}
                                                        className="
                                        px-4
                                        py-2
                                        
                                        rounded-md
                                        bg-red-600
                                        Poppins
                                        text-sm cursor-pointer
                                        hover:bg-red-700
                                        text-white
                                        font-medium
                                        transition
                                    "
                                                    >
                                                        Cancel
                                                    </button>

                                                )}

                                            {order.order_status == 'out_for_delivery' &&
                                                (
                                                    <button
                                                        onClick={() => HandleReplcaeRequest(order)}

                                                        className="bg-green-700 hover:bg-green-800 duration-100  Poppins cursor-pointer text-white px-3 py-1.5 rounded-md text-md">
                                                        Replace
                                                    </button>
                                                )
                                            }

                                        </div>


                                    </div>

                                ))}



                            </div>






                        </div>



                    </div>

                ))

            )}

        </div>
    );
}