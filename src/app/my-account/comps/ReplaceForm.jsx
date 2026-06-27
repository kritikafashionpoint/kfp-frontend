'use client'
import { post_api } from "@/app/api_helper/api_helper";
import { fetchOrders } from "@/app/redux/thunks/orderThunk";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function ReplaceForm({
    replaceModel,
    setReplaceModel,
    selectedOrder,
    setSelectedOrder
}) {

    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);

    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (preview) {
            URL.revokeObjectURL(preview);
        }

        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const removeImage = () => {
        setImage(null);
        setPreview("");
    }

    const submitReplacement = async (e) => {
        e.preventDefault();

        if (!selectedOrder) {
            return toast.error("Please select a product.");
        }

        if (!reason)
            return toast.error("Select reason");

        if (!description.trim())
            return toast.error("Enter description");

        if (!image)
            return toast.error("Upload product image");

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("order_id", selectedOrder.order_id);
            formData.append("order_item_id", selectedOrder.order_item_id);
            formData.append("reason", reason);
            formData.append("description", description);
            formData.append("image", image);

            const response = await post_api({
                body: formData,
                params: null,
                path: "user/replace-order",
                token,
            });

            if (response.data.success) {
                toast.success("Replacement request submitted");

                dispatch(fetchOrders(token));

                resetForm()
            }

        } catch (err) {
            toast.error(
                err?.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setReason("");
        setDescription("");
        setImage(null);
        setPreview("");
        setReplaceModel(false);
        setSelectedOrder(null)
    };

    return (
        <div
            className={`
                w-full h-screen
                
                overflow-y-scroll
                fixed inset-0 z-9999
                flex items-center justify-center
                bg-black/70 backdrop-blur-sm
                transition-all duration-300
                ${replaceModel
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }
            `}
            onClick={resetForm}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    w-[95%]
                    max-w-lg
                    py-10
                    bg-[#0d0d0d]
                    border
                    border-[#D4AF37]/20
                    rounded-3xl
                    shadow-[0_20px_80px_rgba(0,0,0,0.8)]
                    p-6
                    transition-all
                    duration-300
                    ${replaceModel
                        ? "scale-100 translate-y-0 opacity-100"
                        : "scale-90 translate-y-10 opacity-0"
                    }
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-[#D4AF37]">
                        Replace Product
                    </h2>

                    <button
                        onClick={resetForm}
                        className="
                            w-9 h-9
                            rounded-full
                            bg-[#1a1a1a]
                            text-gray-300
                            hover:bg-red-600
                            hover:text-white
                            transition
                            cursor-pointer
                        "
                    >
                        ✕
                    </button>
                </div>

                {selectedOrder && (
                    <div className="flex items-center gap-4 bg-[#111] border border-[#252525] rounded-xl p-3 mb-5">

                        <img
                            src={selectedOrder.product.image}
                            alt={selectedOrder.product.title}
                            className="w-16 h-16 rounded-lg object-cover"
                        />

                        <div>
                            <h3 className="text-white font-semibold Poppins">
                                {selectedOrder.product.title}
                            </h3>

                            <p className="text-gray-400 text-sm Poppins">
                                Order #{selectedOrder.order_id}
                            </p>
                        </div>

                    </div>
                )}

                {/* Content */}
                <form onSubmit={submitReplacement} className="space-y-4">
                    <p className="text-gray-400 Poppins">
                        Please select the reason for replacement.
                    </p>

                    <select
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="
                        Poppins
                        cursor-pointer
                            w-full
                            bg-black
                            border
                            border-[#252525]
                            rounded-xl
                            p-3
                            text-white
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    >
                        <option className="Poppins" value="">Select Reason</option>
                        <option className="Poppins" value="Damaged Product">Damaged Product</option>
                        <option className="Poppins" value="Wrong Product Received">Wrong Product Received</option>
                        <option className="Poppins" value="Missing Item">Missing Item</option>
                        <option className="Poppins" value="Quality Issue">Quality Issue</option>
                        <option className="Poppins" value="Other">Other</option>
                    </select>

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        placeholder="Additional details..."
                        className="
                            w-full
                            bg-black
                            border
                            Poppins
                            tracking-wide
                            text-gray-400
                            border-[#252525]
                            rounded-xl
                            p-3
                            resize-none
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    />

                    <label className="border-2 border-dashed border-[#D4AF37]/30 rounded-xl h-48 flex items-center justify-center cursor-pointer overflow-hidden">

                        {preview ?

                            <img

                                src={preview}
                                className="w-full h-fit object-cover object-center"
                            />

                            :

                            <div className="text-center">

                                <p className="text-white">
                                    Upload Product Image
                                </p>

                                <p className="text-gray-500 text-sm">
                                    JPG, PNG
                                </p>

                            </div>

                        }

                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleImage}
                        />

                    </label>

                    {preview &&

                        <button
                            onClick={removeImage}
                            className="mt-3 bg-red-600 text-white cursor-pointer px-3 py-2 rounded-lg">

                            Remove Image

                        </button>

                    }

                    <button
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-amber-400 cursor-pointer hover:bg-white duration-300 text-black font-semibold">

                        {
                            loading
                                ?
                                "Submitting..."
                                :
                                "Submit Replacement Request"
                        }

                    </button>
                </form>
            </div>
        </div>
    );
}