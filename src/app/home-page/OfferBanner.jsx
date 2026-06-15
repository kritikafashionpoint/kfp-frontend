import Image from 'next/image'
import React from 'react'
import { gold } from '../colors/color'

export default function OfferBanner() {
    return (
        <section className='w-full lg:h-[70vh] md:h-[60vh] h-[40vh] lg:my-10 my- relative '>
            <div className='w-full h-full absolute top-0 left-0 bg-linear-to-r from-black/50 via-transparent to-black/50 z-50'></div>
            <Image
                style={{ borderColor: gold.dark }}
                loading='lazy'
                src={'/banner/offer.png'}
                className='absolute border-y top-0 left-0 w-full h-full object-contain object-center'
                fill
                sizes='full'
                alt='Kritika Fashion Point luxury jewellery sale banner with 50% off discount on premium gold jewellery, exclusive offers, elegant black background, gold necklace set, earrings, bracelet, and red promotional badge.'
            />
        </section>
    )
}
