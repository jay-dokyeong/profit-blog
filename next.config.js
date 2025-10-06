/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
images: { unoptimized: true }, // (정적 배포 호환용)
};
module.exports = nextConfig;
