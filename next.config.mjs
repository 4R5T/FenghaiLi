const isProd = process.env.NODE_ENV === 'production';
const repoName = 'myweb'; // Your repository name

const nextConfig = {
  basePath: `/${repoName}`, // Prefix all paths with the repo name
  assetPrefix: isProd ? `/${repoName}/` : undefined, // Prefix assets for GitHub Pages
  output: 'export', // Enable static export
  distDir: 'dist', // Build output directory
  images: {
    unoptimized: true, // Disable server-side image optimization for static deployment
  },
};

export default nextConfig;
