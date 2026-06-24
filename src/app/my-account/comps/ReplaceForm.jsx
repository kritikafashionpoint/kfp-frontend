import React from "react";

export default function ReplaceForm({
    replaceModel,
    setReplaceModel,
}) {
    return (
        <div
            className={`
                fixed inset-0 z-9999
                flex items-center justify-center
                bg-black/70 backdrop-blur-sm
                transition-all duration-300
                ${replaceModel
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }
            `}
            onClick={() => setReplaceModel(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    w-[95%]
                    max-w-lg
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
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#D4AF37]">
                        Replace Product
                    </h2>

                    <button
                        onClick={() => setReplaceModel(false)}
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

                {/* Content */}
                <div className="space-y-4">
                    <p className="text-gray-400 Poppins">
                        Please select the reason for replacement.
                    </p>

                    <select
                        className="
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
                        <option>Damaged Product</option>
                        <option>Wrong Product Received</option>
                        <option>Missing Item</option>
                        <option>Quality Issue</option>
                        <option>Other</option>
                    </select>

                    <textarea
                        rows={4}
                        placeholder="Additional details..."
                        className="
                            w-full
                            bg-black
                            border
                            border-[#252525]
                            rounded-xl
                            p-3
                            text-white
                            resize-none
                            outline-none
                            focus:border-[#D4AF37]
                        "
                    />

                    <button
                        className="
                            w-full
                            py-3
                            rounded-xl
                            bg-[#D4AF37]
                            text-black
                            font-semibold
                            hover:opacity-90
                            transition
                            cursor-pointer
                        "
                    >
                        Submit Replacement Request
                    </button>
                </div>
            </div>
        </div>
    );
}