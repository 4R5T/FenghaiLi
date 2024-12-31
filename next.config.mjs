const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

const nextConfig = {
  basePath: useCustomDomain ? '' : '/myweb',
  assetPrefix: useCustomDomain ? '' : '/myweb/',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
