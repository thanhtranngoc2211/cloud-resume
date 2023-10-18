/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
        'media.giphy.com',
        'puraenvidia.com'    
    ]
    },
    output: 'export',
    reactStrictMode: false
}

module.exports = nextConfig