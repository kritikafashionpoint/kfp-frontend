export default async function sitemap() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE;


    // PRODUCTS META DATA FETCHED
    const res = await fetch(
        `${apiBaseUrl}/admin/product/view-products`
    );

    const json = await res.json();
    const products = json.data || [];

    const productUrls = products.map((product) => ({
        url: `https://www.kritikafashionpoint.com/product/${product.p_slug}`,
        lastModified: new Date(),
    }));




    // CATEGORY META DATA FETCHED
    const cat_res = await fetch(
        `${apiBaseUrl}/category/view-categories`
    );
    const cat_json = await cat_res.json();
    const category = cat_json.data || [];
    console.log('cat_json', cat_json)



    const categoryUrls = category.map((category) => ({
        url: `https://www.kritikafashionpoint.com/categories/${category.category_slug}`,
        lastModified: new Date()
    }))



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
        ...categoryUrls
    ];
}