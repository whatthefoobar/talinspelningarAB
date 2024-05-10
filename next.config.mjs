/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost:3000",
        port: "",
      },
    ],
  },
};

export default nextConfig;
