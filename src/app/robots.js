export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/cart', '/my-account', '/login'],
        },
        sitemap: 'https://www.kritikafashionpoint.com/sitemap.xml',
    };
}