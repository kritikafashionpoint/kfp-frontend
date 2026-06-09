'use client'
import { useState } from "react"

export function FilterModel({ products, filterModelOpen, setFilterModelOpen, categories, filteredProducts, setFilteredProducts }) {


    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPriceRange, setSelectedPriceRange] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [priceType, setPriceType] = useState("");


    const checkPriceRange = (price) => {
        switch (selectedPriceRange) {
            case "0-499":
                return price >= 0 && price <= 499;

            case "499-999":
                return price > 499 && price <= 999;

            case "999-1499":
                return price > 999 && price <= 1499;

            case "1499-1999":
                return price > 1499 && price <= 1999;

            case "1999+":
                return price > 1999;

            default:
                return true;
        }
    };


    const applyFilter = () => {
        let filtered = [...products].filter((product) => {

            const categoryMatch = selectedCategory
                ? String(product.category_id) === String(selectedCategory)
                : true;

            const typeMatch = selectedType
                ? product.p_type?.toLowerCase() === selectedType.toLowerCase()
                : true;

            const priceMatch = selectedPriceRange
                ? checkPriceRange(Number(product.p_customer_price))
                : true;

            return (
                categoryMatch &&
                typeMatch &&
                priceMatch
            );
        });

        if (priceType === "low-high") {
            filtered.sort(
                (a, b) =>
                    Number(a.p_customer_price) -
                    Number(b.p_customer_price)
            );
        }

        if (priceType === "high-low") {
            filtered.sort(
                (a, b) =>
                    Number(b.p_customer_price) -
                    Number(a.p_customer_price)
            );
        }

        setFilteredProducts(filtered);
        setFilterModelOpen(false);
    };

    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setFilterModelOpen(false)}
                className={`
                    fixed inset-0 bg-black/20 backdrop-blur-sm z-120
                    duration-300
                    ${filterModelOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"}
                `}
            />

            {/* Modal */}
            <div
                className={`
                    sm:h-fit h-[90vh] rounded-sm lg:overflow-y-hidden overflow-y-scroll
                    custom-scrollbar
                    fixed top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    z-130
                    duration-300
                    sm:w-[90%] w-full max-w-[500]
                    sm:rounded-3xl  overflow-hidden
                    border
                    ${filterModelOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 pointer-events-none"}
                `}
                style={{
                    borderColor: "#b8860b",
                    background: `
                        linear-gradient(
                            145deg,
                            #050505 0%,
                            #111111 35%,
                            #1a1405 100%
                        )
                    `,
                    boxShadow: "0 0 40px rgba(212,175,55,0.15)"
                }}
            >

                {/* Header */}
                <div
                    className="flex items-center justify-between px-6 py-5 border-b"
                    style={{
                        borderColor: "rgba(212,175,55,0.15)"
                    }}
                >
                    <div>
                        <h2 className="text-2xl font-bold text-[#E6C766] tracking-wide">
                            Filter Collection
                        </h2>

                        {/* <p className="text-sm text-gray-400 mt-1 lg:block hidden">
                            Find your perfect jewellery style
                        </p> */}
                    </div>

                    <button
                        onClick={() => setFilterModelOpen(false)}
                        className="w-10 h-10 rounded-full bg-[#1a1a1a] text-[#E6C766] hover:rotate-90 duration-300 cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 lg:space-y-3 space-y-1">

                    {/* Category */}
                    <div
                        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        p-5
        bg-white/2
        backdrop-blur-xl
    "
                        style={{
                            borderColor: "rgba(245,223,139,0.08)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                        }}
                    >

                        {/* Top Glow */}
                        <div
                            className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[180]
            h-[80]
            blur-[60px]
            opacity-15
            pointer-events-none
        "
                            style={{
                                background: "#d4af37"
                            }}
                        />

                        <div className="relative z-10">

                            <div className="mb-4">



                                <h3
                                    style={{ fontFamily: "Poppins" }}
                                    className="
                    text-[#f5df8b]
                    font-semibold
                    text-lg
                    tracking-wide
                "
                                >
                                    Select Category
                                </h3>

                                <div
                                    className="mt-2 h-[2] w-24 rounded-full"
                                    style={{
                                        background: `
                        linear-gradient(
                            to right,
                            #7a5a08,
                            #d4af37,
                            #f5df8b
                        )
                    `
                                    }}
                                />
                            </div>

                            <div
                                className="
                flex
                flex-wrap
                gap-3
                lg:h-[120]
                sm:h-[90]
                h-[120]
                overflow-y-auto
                pr-2
                custom-scrollbar
            "
                            >

                                <button
                                    style={{
                                        fontFamily: "Poppins",
                                        background:
                                            selectedCategory === null
                                                ? `linear-gradient(
                                135deg,
                                #7a5a08,
                                #d4af37,
                                #f5df8b
                            )`
                                                : "transparent",
                                        borderColor: "#b8860b"
                                    }}
                                    onClick={() => setSelectedCategory(null)}
                                    className={`
                    px-5
                    py-1
                    font-semibold
                    rounded-full
                    border
                    text-sm
                    backdrop-blur-xl
                    hover:scale-105
                    duration-300
                    cursor-pointer
                    shadow-lg
                    ${selectedCategory === null
                                            ? "text-black"
                                            : "text-[#f5df8b] hover:text-black hover:bg-amber-300"}
                `}
                                >
                                    All
                                </button>

                                {
                                    categories.map((item, index) => (
                                        <button
                                            onClick={() => setSelectedCategory(item.category_id)}
                                            style={{
                                                fontFamily: "Poppins",
                                                background:
                                                    selectedCategory == item.category_id
                                                        ? `linear-gradient(
                                        135deg,
                                        #7a5a08,
                                        #d4af37,
                                        #f5df8b
                                    )`
                                                        : "transparent",
                                                borderColor: "#b8860b"
                                            }}
                                            key={index}
                                            className={`
                            px-5
                            py-1
                            font-semibold
                            rounded-full
                            border
                            text-sm
                            backdrop-blur-xl
                            hover:scale-105
                            duration-300
                            cursor-pointer
                            shadow-lg
                            ${selectedCategory == item.category_id
                                                    ? "text-black"
                                                    : "text-[#f5df8b] hover:text-white hover:bg-amber-300"}
                        `}
                                        >
                                            {item.category_name}
                                        </button>
                                    ))
                                }

                            </div>

                        </div>

                    </div>
                    {/* Price */}
                    <div>
                        <h3 className="text-[#E6C766] font-semibold mb-3 tracking-wide">
                            Price Range
                        </h3>

                        <div className="relative">
                            <select
                                value={selectedPriceRange}
                                onChange={(e) => setSelectedPriceRange(e.target.value)}
                                className="
                                w-full
                                appearance-none
                                bg-[#0f0f0f]
                                border
                                border-[#7a5a08]
                                text-[#E6C766]
                                px-5
                                py-3
                                rounded-xl
                                outline-none
                                cursor-pointer
                                tracking-wide
                                focus:border-[#d4af37]
                                focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                                duration-300
                            "
                            >
                                <option value={""} className="bg-black text-white">
                                    Select Price Range
                                </option>

                                <option value={"0-499"} className="bg-black text-white">
                                    ₹0 - ₹499
                                </option>

                                <option value={"499-999"} className="bg-black text-white">
                                    ₹499 - ₹999
                                </option>

                                <option value={"999-1499"} className="bg-black text-white">
                                    ₹999 - ₹1499
                                </option>

                                <option value={"1499-1999"} className="bg-black text-white">
                                    ₹1499 - ₹1999
                                </option>

                                <option value={"1999+"} className="bg-black text-white">
                                    ₹1999 Above
                                </option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#E6C766] text-sm">
                                ▼
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-[#E6C766] font-semibold mb-3 tracking-wide">
                            Price Type
                        </h3>

                        <div className="relative">
                            <select
                                value={priceType}
                                onChange={(e) => setPriceType(e.target.value)}
                                className="
                                w-full
                                appearance-none
                                bg-[#0f0f0f]
                                border
                                border-[#7a5a08]
                                text-[#E6C766]
                                px-5
                                py-3
                                rounded-xl
                                outline-none
                                cursor-pointer
                                tracking-wide
                                focus:border-[#d4af37]
                                focus:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                                duration-300
                            "
                            >
                                <option value={""} className="bg-black text-white">
                                    Select Price Type
                                </option>

                                <option value={"low-high"} className="bg-black text-white">
                                    Low To High
                                </option>

                                <option value={"high-low"} className="bg-black text-white">
                                    High To Low
                                </option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#E6C766] text-sm">
                                ▼
                            </div>
                        </div>
                    </div>

                    {/* combo and single */}
                    {/* Item Type */}
                    <div>
                        <h3 className="text-[#E6C766] font-semibold mb-3 tracking-wide">
                            Item Type
                        </h3>

                        <div className="grid grid-cols-2 gap-4">

                            {/* Single */}
                            <label
                                className="
                                    relative
                                    flex items-center justify-center gap-3
                                    border border-[#7a5a08]
                                    bg-[#0f0f0f]
                                    rounded-xl
                                    py-3 px-4
                                    cursor-pointer
                                    hover:border-[#d4af37]
                                    hover:bg-[#151515]
                                    duration-300
                                    group
                                "
                            >
                                <input
                                    type="radio"
                                    name="item-type"
                                    value="single"
                                    checked={selectedType === "single"}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="hidden peer"
                                />
                                {/* Custom Radio */}
                                <div
                                    className="
                            w-5 h-5 rounded-full
                            border-2 border-[#b8860b]
                            flex items-center justify-center
                            bg-[#111]
                            peer-checked:bg-[#6b4f00]
                            peer-checked:border-[#d4af37]
                            duration-300
                        "
                                >
                                    <div
                                        className="
                                w-2.5 h-2.5 rounded-full
                                bg-[#f5d76e]
                                scale-0
                                peer-checked:scale-100
                                duration-300
                            "
                                    />
                                </div>
                                <span className="text-[#E6C766] tracking-wide font-medium">
                                    Single
                                </span>
                            </label>

                            {/* Combo */}
                            <label
                                className="
                                    relative
                                    flex items-center justify-center gap-3
                                    border border-[#7a5a08]
                                    bg-[#0f0f0f]
                                    rounded-xl
                                    py-3 px-4
                                    cursor-pointer
                                    hover:border-[#d4af37]
                                    hover:bg-[#151515]
                                    duration-300
                                "
                            >
                                <input
                                    type="radio"
                                    name="item-type"
                                    value="combo"
                                    checked={selectedType === "combo"}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="hidden peer"
                                />

                                {/* Custom Radio */}
                                <div
                                    className="
                            w-5 h-5 rounded-full
                            border-2 border-[#b8860b]
                            flex items-center justify-center
                            bg-[#111]
                            peer-checked:bg-[#6b4f00]
                            peer-checked:border-[#d4af37]
                            duration-300
                        "
                                >
                                    <div
                                        className="
                                w-2.5 h-2.5 rounded-full
                                bg-[#f5d76e]
                                scale-0
                                peer-checked:scale-100
                                duration-300
                            "
                                    />
                                </div>

                                <span className="text-[#E6C766] tracking-wide font-medium">
                                    Combo
                                </span>
                            </label>

                        </div>
                    </div>


                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-3">

                        <button
                            onClick={() => {
                                setSelectedCategory(null);
                                setSelectedPriceRange("");
                                setSelectedType("");
                                setPriceType("");
                                setFilteredProducts(products);
                                setFilterModelOpen(false);
                            }}
                            className="
                                py-3 rounded-xl
                                bg-[#111]
                                border border-[#333]
                                text-white
                                hover:border-[#b8860b]
                                duration-300
                                cursor-pointer
                            "
                        >
                            Reset
                        </button>

                        <button
                            onClick={applyFilter}
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
                            className="
                                py-3 rounded-xl
                                text-black
                                font-bold
                                hover:scale-[1.03]
                                duration-300
                                cursor-pointer
                            "
                        >
                            Show Results
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}