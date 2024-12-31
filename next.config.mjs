/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'myweb';
const nextConfig = {
    basePath: '/myweb',
    output: 'export',
    assetPrefix: isProd ? `/${repoName}/` : undefined,
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
