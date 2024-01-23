// /** @type {import('next').NextConfig} */
// const path = require("path");

const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  // async generateStaticPaths() {
  //   // Use this function to specify the paths for static HTML export
  //   return {
  //     "/": { page: "/" },
  //     // Add other paths as needed
  //   };
  // },
};

module.exports = nextConfig;
