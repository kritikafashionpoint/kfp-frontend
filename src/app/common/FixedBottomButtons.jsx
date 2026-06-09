'use client'
import { FaPhone } from 'react-icons/fa6'
import { IoChatbubble } from 'react-icons/io5'
import Link from 'next/link'

export function FixedButtons() {
    const Phone_Number = process.env.NEXT_PUBLIC_PHONE_NUMBER
    return (
        <div className='relative z-80'>
            <Link href={`tel:+91${Phone_Number}`}>
                <div
                    className="lg:w-14 lg:h-14 w-12 h-12 rounded-full cursor-pointer fixed md:bottom-[115] bottom-[95] shadow-sm shadow-amber-300 lg:right-7 md:right-5 right-3 z-40 
                    flex items-center justify-center
                    shadow-[0_0_25px_rgba(0,0,  0,0.25)]
                    hover:scale-110 transition-all duration-300 ease-in-out
                    border border-white/10"
                    style={{
                        background: `
                    linear-gradient(
                        to bottom right,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}}
                >
                    <FaPhone size={25} className="text-black" />
                </div>
            </Link>

            <div
                className="lg:w-14 lg:h-14 w-12 h-12 rounded-full fixed md:bottom-[40] bottom-[30] lg:right-7 md:right-5 right-3 z-40 
                    flex items-center justify-center
                    shadow-amber-300
                    shadow-sm
                    hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out
                    border border-white/10"
                style={{
                    background: `
                    linear-gradient(
                        to bottom right,
                        #8a6a12 0%,
                        #b8860b 20%,
                        #d4af37 40%,
                        #fff2b3 50%,
                        #d4af37 60%,
                        #b8860b 80%,
                        #8a6a12 100%
                    )`}}
            >
                <IoChatbubble size={25} className="text-black" />
            </div>
        </div>
    )
}