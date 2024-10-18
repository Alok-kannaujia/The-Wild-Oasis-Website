/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vyyxkhxdwzicmbvfxcud.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
    "rules": { "react/no-unescaped-entities": 0 }
  },
  // output: "export",
};

export default nextConfig;
