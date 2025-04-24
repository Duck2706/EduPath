/** @type {import('next').NextConfig} */
import { env } from "process";

const nextConfig = {
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
};

export default nextConfig;
