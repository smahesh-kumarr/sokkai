/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'st4.depositphotos.com'], // Allowed image domains
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET_TOKEN: process.env.JWT_SECRET_TOKEN,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    TWILIO_WHATSAPP_NUMBER: process.env.TWILIO_WHATSAPP_NUMBER,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Use SWC for minifying JavaScript
};

export default nextConfig;

