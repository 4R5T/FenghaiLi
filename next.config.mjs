const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '' : '/myweb',
  assetPrefix: isProd ? undefined : '/myweb/',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
