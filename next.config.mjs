/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: "/priority-dispatch",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
