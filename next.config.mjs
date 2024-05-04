/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sa-east-1.graphassets.com',
            },
        ],
    },
}

export default nextConfig
