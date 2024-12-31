/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath : '/myweb',
    output : 'export',
    assetPrefix: './', 
    distDir : 'dist',
    images : {
        unoptimized :true,
    },
};

export default nextConfig;
