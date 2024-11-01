/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: "your_db_url"
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.freepik.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
