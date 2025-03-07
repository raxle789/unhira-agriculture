/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "docs.material-tailwind.com"],
  },
  async redirects() {
    return [
      {
        source: "/supplier-sayur-dan-buah-bekasi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
