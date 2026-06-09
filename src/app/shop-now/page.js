import React, { Suspense } from 'react'
import ShopNowClient from './ShopNowClient'

export const metadata = {
    title: 'Shop Now | Kritika Fashion Point Jodhpur',
    description: 'new'
}

export default function page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ShopNowClient />
        </Suspense>)
}
