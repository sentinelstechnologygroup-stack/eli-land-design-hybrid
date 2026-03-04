/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // ✅ Legacy PascalCase routes from the old Vite build
      { source: "/DesignCommercial", destination: "/design/commercial", permanent: true },
      { source: "/DesignResidential", destination: "/design/residential", permanent: true },

      // ✅ Old contact paths
      { source: "/contact/reviews", destination: "/reviews", permanent: true },
      { source: "/contact/testimonials", destination: "/reviews", permanent: true },

      // ✅ Legacy gallery slug redirects
      {
        source: "/design/commercial/galleries/:slug",
        destination: "/design/commercial",
        permanent: true,
      },
      {
        source: "/design/residential/galleries/:slug",
        destination: "/design/residential",
        permanent: true,
      },

      // ✅ Idea Center legacy route
      { source: "/idea-center", destination: "/design", permanent: true },
    ];
  },
};

module.exports = nextConfig;