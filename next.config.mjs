/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  experimental: {
    turbo: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
},
webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
    });

    return config;
},
reactStrictMode: true,

}

export default nextConfig
