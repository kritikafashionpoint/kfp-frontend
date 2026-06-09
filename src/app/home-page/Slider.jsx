"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from 'swiper/modules';
import { gold } from '../colors/color';

export default function Slider() {
    return (
        <div className="w-full h-[90vh]">
            <Swiper
                effect="fade"
                modules={[EffectFade, Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                loop={true}
                speed={800} // smoothness control
                className="h-full"
            >
                <SwiperSlide>
                    <div className="h-full flex items-center justify-center bg-red-400 text-white text-3xl">
                        Slide 1
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-full flex items-center justify-center bg-blue-400 text-white text-3xl">
                        Slide 2
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-full flex items-center justify-center bg-green-400 text-white text-3xl">
                        Slide 3
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        // <div style={{ background: gold.base }} className='w-full h-screen  '></div>
    );
}
