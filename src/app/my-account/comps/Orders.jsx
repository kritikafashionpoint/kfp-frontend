import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../../../Loading";
import { post_api } from "@/app/api_helper/api_helper";
import ReplaceForm from "./ReplaceForm";
import { fetchOrders } from "@/app/redux/thunks/orderThunk";

export function Orders() {
    const orders = useSelector((state) => state.order.orders)
    console.log(orders)
    const order_loading = useSelector((state) => state.order.order_loading)

    const [replaceModel, setReplaceModel] = useState(false)
    const [loading, setloading] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null)

    const HandleReplcaeRequest = (order, item) => {
        setSelectedOrder({
            order_id: order.order_id,
            order_item_id: item.order_item_id,
            product: item.product,
        });

        setReplaceModel(true);
    };



    return (
        <div className="space-y-8 ">

            {loading && <Loading />}

            <ReplaceForm selectedOrder={selectedOrder} replaceModel={replaceModel} setReplaceModel={setReplaceModel} />

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

                                <h3 className="text-white Poppins text-xl font-bold">
                                    Order #{order.order_id}
                                </h3>

                                <p className="text-gray-400 Poppins text-sm">
                                    {new Date(order.created_at).toLocaleString()}
                                </p>

                            </div>

                            <div className="flex items-center gap-4">

                                <span
                                    className={`
        px-4 py-2 Poppins capitalize rounded-full text-sm font-medium

        ${
                                        // Positive
                                        [
                                            "delivered",
                                            "approved",
                                            "replacement_approved",
                                            "completed"
                                        ].includes(order.order_status)
                                            ? "bg-green-500/10 text-green-400"

                                            // Negative
                                            : [
                                                "cancelled",
                                                "rejected",
                                                "replacement_rejected",
                                                "replace_rejected",
                                                "failed",
                                                "returned"
                                            ].includes(order.order_status)
                                                ? "bg-red-500/10 text-red-400"

                                                // Warning
                                                : [
                                                    "pending",
                                                    "processing",
                                                    "out_for_delivery",
                                                    "replace_requested",
                                                    "replacement_requested"
                                                ].includes(order.order_status)
                                                    ? "bg-yellow-500/10 text-yellow-400"

                                                    // Default
                                                    : "bg-gray-500/10 text-gray-400"
                                        }
    `}
                                >
                                    {order.order_status
                                        ?.replace(/_/g, " ")
                                        ?.replace(/\b\w/g, (char) => char.toUpperCase())}
                                </span>

                                <div className="text-right">

                                    <p className="Poppins text-gray-400 text-xs">
                                        Total Amount
                                    </p>

                                    <p className="Poppins text-[#D4AF37] font-bold text-xl">
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

                                            {order.order_status == 'out_for_delivery' &&
                                                (
                                                    <button
                                                        onClick={() => HandleReplcaeRequest(order, item)}
                                                        className="bg-green-700 hover:bg-green-800 duration-100 Poppins cursor-pointer text-white px-3 py-1.5 rounded-md text-md"
                                                    >
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