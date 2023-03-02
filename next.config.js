/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "media.istockphoto.com",
      "www.etutor.pl",
      "i.pinimg.com",
      "i.ytimg.com",
      "lingtip.pl",
      "images.ctfassets.net",
      "static.wixstatic.com",
      "lh3.googleusercontent.com",
      "undefined",
      "www.grammar.cl",
      "photos.google.com",
      "i.imgur.com",
      "www.ang.pl",
      "cdn.pixabay.com",
      "theme-stall.com",
    ],
  },
};

module.exports = nextConfig;
