

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['media.rawg.io'],
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(ts)x?$/] },
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgoConfig: { plugins: [{ removeViewBox: false }] },
                    },
                },
            ],
        });

        return config;
    }
}