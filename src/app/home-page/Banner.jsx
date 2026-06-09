import Link from "next/link";
import { gold } from "../colors/color";
import Image from "next/image";

export default function LuxuryGlowBanner() {
    return (
        <div className="w-full h-[80vh] relative ">

            <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-[1] w-32 rounded-full"
                style={{
                    background: `
                        linear-gradient(
                            90deg,
                            transparent 0%,
                            #8b6b1f 15%,
                            #d4af37 50%,
                            #8b6b1f 85%,
                            transparent 100%
                        )
                            `
                }}
            />
            <div className="bg-black pb-10 w-screen lg:h-[75vh] md:h-[70vh] sm:h-[50vh] h-[55vh] relative">

                <div className="lg:block hidden w-[350] h-[400] absolute -bottom-30 left-10 opacity-5 rotate-x-180 z-50">
                    <Image fill sizes="full" alt="designs" src={'/designs/d1.png'} className="absolute top-0 left-0 object-contain object-center w-full h-full " />
                </div>

                <div className="lg:block hidden w-[350] h-[400] absolute -bottom-30 right-10 opacity-5 rotate-180 z-50">
                    <Image fill sizes="full" alt="designs" src={'/designs/d1.png'} className="absolute top-0 left-0 object-contain object-center w-full h-full " />
                </div>

                <section style={{
                    backgroundImage: "url('/banner/b5.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                    className="w-full lg:pb-10 mb-10 lg:h-[45vh] md:h-[60vh] sm:h-[40vh] h-[50vh] py-16 lg:py-24 relative z-40">


                    {/* overlay */}
                    <div className="absolute top-0 left-0 bg-linear-to-t from-black via-black/90 to-black/10 w-full h-full">

                    </div>
                    <div className="text-white absolute top-3/5 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4">

                        {/* Premium Tag */}
                        <div
                            style={{
                                borderColor: gold.base,
                                color: gold.light,
                                background: "rgba(255,255,255,0.08)",
                                boxShadow: `0 0 10px ${gold.base}30`
                            }}
                            className="inline-flex items-center gap-2 border px-5 py-2 rounded-full backdrop-blur-md mb-5 lg:text-sm text-[10px] tracking-[4px] uppercase font-medium"
                        >
                            ✨ Premium Luxury Collection
                        </div>

                        {/* Main Heading */}
                        <div className="flex items-center justify-center">
                            <h1
                                style={{
                                    background: `linear-gradient(to left, ${gold.dark}, ${gold.light}, ${gold.dark})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                                className="lg:text-6xl md:text-5xl text-3xl w-fit font-extrabold tracking-wide leading-tight"
                            >
                                Luxury Artificial
                                <span className="block lg:mt-2 mt-1 tracking-wider  ">
                                    Jewellery Accessories
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p
                            style={{ color: gold.light }}
                            className="text-center mt-4 lg:text-lg md:text-base text-sm tracking-[5px] uppercase font-light"
                        >
                            Look • Shine • Elegance
                        </p>

                        {/* Decorative Golden Divider */}
                        <div className="flex items-center justify-center gap-3 mt-5">

                            <div
                                style={{
                                    background: `linear-gradient(to right, transparent, ${gold.base})`
                                }}
                                className="w-16 h-[1]"
                            ></div>

                            <div
                                style={{
                                    background: gold.base,
                                    boxShadow: `0 0 20px ${gold.base}`
                                }}
                                className="w-2 h-2 rounded-full"
                            ></div>

                            <div
                                style={{
                                    background: `linear-gradient(to left, transparent, ${gold.base})`
                                }}
                                className="w-16 h-[1]"
                            ></div>

                        </div>
                        <div className="flex items-center gap-4 justify-center mt-6 lg:text-lg text-md">
                            <Link href={'/shop-now'}><button
                                style={{
                                    background: `
                    linear-gradient(
                        to left,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}}
                                className="px-8 py-3 rounded-full cursor-pointer text-black font-extrabold tracking-wide hover:scale-105 duration-300"
                            >
                                Shop <span className="sm:inline hidden">Now</span>
                            </button></Link>

                            <Link href={'/categories'}><button
                                style={{
                                    border: `1px solid ${gold.base}`,
                                    color: gold.light
                                }}
                                className="px-8 py-3 rounded-full cursor-pointer backdrop-blur-md font-medium tracking-wide hover:bg-white/10 duration-300"
                            >
                                Explore <span className="sm:inline hidden">All</span>
                            </button></Link>
                        </div>
                    </div>
                </section>

            </div>

        </div>


    )
}
