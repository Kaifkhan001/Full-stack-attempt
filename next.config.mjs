/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: async function (defaultPathMap) {
        return {
          '/': { page: '/' },
          '/about-us': { page: '/about-us' },
          '/contact-us': { page: '/contact-us' },
          // Add other pages here
        };
      },
};

  

export default nextConfig;

