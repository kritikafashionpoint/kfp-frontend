import Link from "next/link";
import { gold } from "../colors/color";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function LuxuryGlowBanner() {
    return (
        <div className="w-full h-full bg-white relative ">

            <FixedButtons />

            <div className="sm:hidden block py-3">
                <div className="flex items-center justify-center z-49 w-full">
                    <Link href={`tel:-${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>

                        <div className="flex w-full items-center gap-2 bg-[#ffe44b] rounded-2xl py-1 text-lg px-6">
                            <FaPhone className="rotate-90" size={17} />
                            <p className="font-semibold Poppins text-[14px]">दुकानदार भाई संपर्क करें : <span className="text-[14px] Poppins font-bold">6378370372</span></p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="sm:block hidden w-full  ">
                <div className="z-49 w-full flex justify-center bg-[#ffe44b] py-1">
                    <Link href={`tel:-${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>

                        <div className="flex w-full items-center gap-2 py-1 text-lg px-3">
                            <FaPhone className="rotate-90" size={19} />
                            <p className="font-semibold Poppins text-[17px]">दुकानदार भाई संपर्क करें : <span className="text-[17px] Poppins font-bold">6378370372</span></p>
                        </div>
                    </Link>
                </div>
            </div>
            <section className="relative w-full aspect-19/12">
                <Image
                    src="/b4.png"
                    alt="Kritika Fashion Point"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </section>
        </div>
    )
}

export function FixedButtons() {
    return (
        <div>
            <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                target="_blank"
            >
                <div className="fixed hover:scale-115 duration-300 bottom-6 right-6 cursor-pointer z-999 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <BsWhatsapp className="text-white" size={26} />
                </div>
            </Link>
            <Link href={'https://www.instagram.com/kritika_fashion_point/'}
            target="_blank"
            >
                <div className="fixed hover:scale-115 duration-300 bottom-6 left-6 cursor-pointer z-999 w-12 h-12 rounded-full bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center">
                    <BsInstagram className="text-white" size={26} />
                </div>
            </Link>
        </div>
    )
}
