/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages — no Node.js server available there.
  output: "export",
  images: {
    // next/image optimization needs a server; unoptimized serves images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
