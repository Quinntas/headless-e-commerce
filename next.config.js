/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'i.postimg.cc', 'cdn.shopify.com', 'tailwindui.com'],
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true
    }
}

module.exports = nextConfig
