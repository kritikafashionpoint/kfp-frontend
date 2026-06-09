export default async function sitemap() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE;

    const res = await fetch(
        `${apiBaseUrl}/admin/product/view-products`
    );

    const json = await res.json();
    const products = json.data || [];

    const productUrls = products.map((product) => ({
        url: `https://www.kritikafashionpoint.com/categories/${product.p_slug}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: 'https://www.kritikafashionpoint.com',
            lastModified: new Date(),
        },
        {
            url: 'https://www.kritikafashionpoint.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://www.kritikafashionpoint.com/categories',
            lastModified: new Date(),
        },
        {
            url: 'https://www.kritikafashionpoint.com/contact-us',
            lastModified: new Date(),
        },
        {
            url: 'https://www.kritikafashionpoint.com/shop-now',
            lastModified: new Date(),
        },
        ...productUrls,
    ];
}