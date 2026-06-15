import React from "react";

export default function AboutUs() {
    const cards = [
        {
            image: "/designs/d1.png",
            title: "Luxury Fashion",
            desc: "Elegant designs crafted to elevate your everyday style.",
        },
        {
            image: "/designs/d2.png",
            title: "Premium Quality",
            desc: "Every piece is selected with attention to detail and comfort.",
        },
        {
            image: "/designs/d3.png",
            title: "Timeless Elegance",
            desc: "Fashion that stays relevant beyond seasonal trends.",
        },
    ];

    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-[var(--gold-base)] uppercase tracking-[5px] text-sm">
                        About Us
                    </span>

                    <h2 className="text-white text-4xl md:text-5xl font-bold mt-4 mb-5">
                        Kritika Fashion Point
                    </h2>

                    <p className="text-gray-400 leading-7">
                        Bringing together luxury, elegance, and premium fashion
                        to create collections that inspire confidence and
                        timeless style.
                    </p>
                </div>

                {/* Premium Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group max-w-[330px] bg-zinc-950 border border-[var(--gold-base)]/15 rounded-3xl overflow-hidden hover:border-[var(--gold-base)]/40 transition-all duration-500"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-white text-xl font-semibold mb-3">
                                    {card.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-7">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Highlight */}
                <div className="mt-14 text-center">
                    <div className="inline-flex items-center gap-8 px-8 py-5 rounded-full border border-[var(--gold-base)]/20 bg-zinc-950">
                        <div>
                            <h4 className="text-[var(--gold-base)] text-2xl font-bold">
                                500+
                            </h4>
                            <p className="text-gray-500 text-xs">
                                Designs
                            </p>
                        </div>

                        <div className="w-px h-10 bg-[var(--gold-base)]/20" />

                        <div>
                            <h4 className="text-[var(--gold-base)] text-2xl font-bold">
                                10K+
                            </h4>
                            <p className="text-gray-500 text-xs">
                                Customers
                            </p>
                        </div>

                        <div className="w-px h-10 bg-[var(--gold-base)]/20" />

                        <div>
                            <h4 className="text-[var(--gold-base)] text-2xl font-bold">
                                100%
                            </h4>
                            <p className="text-gray-500 text-xs">
                                Quality
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}