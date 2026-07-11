import Link from "next/link";
import { gold } from "../colors/color";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export default function LuxuryGlowBanner() {
    return (
        <div className="w-screen lg:h-[130vh] sm:h-[70vh] md:h-[99vh] h-[46vh] bg-white relative ">

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
            <div className="w-full lg:h-[130vh] sm:h-[70vh] md:h-[99vh] h-[46vh]">
                <img src="/b4.png" className="w-screen h-full object-cover object-bottom" />
            </div>
        </div>


    )
}
