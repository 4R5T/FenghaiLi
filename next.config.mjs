const isProd = process.env.NODE_ENV === 'production';
const repoName = 'myweb'; 

const nextConfig = {
  basePath: `/${repoName}`, 
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
