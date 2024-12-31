const isProd = process.env.NODE_ENV === 'production';
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

const nextConfig = {
  basePath: useCustomDomain ? '' : '/myweb',
  assetPrefix: isProd && !useCustomDomain ? '/myweb/' : undefined,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
