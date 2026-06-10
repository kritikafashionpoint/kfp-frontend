// app/product/[slug]/page.jsx

import ProductDetailClient from "./ProductDetailClient";

export async function generateMetadata({ params }) {

    const { slug } = await params;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/admin/product/slug/${slug}`,
        {
            cache: "no-store",
        }
    );

    const data = await response.json();

    const product = data?.data;

    return {
        title:
            product?.p_meta_title ||
            product?.p_title ||
            "Product Detail",

        description:
            product?.p_meta_description ||
            product?.p_short_description ||
            "",

        openGraph: {
            title:
                product?.p_meta_title ||
                product?.p_title,

            description:
                product?.p_meta_description ||
                product?.p_short_description,

            images: [
                product?.index_image,
            ],
        },

        twitter: {
            card: "summary_large_image",
            title:
                product?.p_meta_title ||
                product?.p_title,

            description:
                product?.p_meta_description ||
                product?.p_short_description,

            images: [
                product?.index_image,
            ],
        },
    };
}


export default function Page({ params }) {

    return (
        <ProductDetailClient />
    );
}