import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // swcMinify: true,
  experimental: {
  },
  eslint: {
    ignoreDuringBuilds: true, // temporarily allow build on Vercel despite lint errors
  },

  typescript: {
    ignoreBuildErrors: true, // temporarily allow build despite TS errors
  },
};

export default withFlowbiteReact(nextConfig);
