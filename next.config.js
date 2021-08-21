const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    images: {
        domains: ['i2.wp.com']
    },
    reactStrictMode: true,
    trailingSlash: true,
    webpackDevMiddleware: config => {
        const newConfig = { ...config };
        newConfig.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
        };

        return newConfig;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    webpack5: true,
    future: {},
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: !debug ? process.env.NEXT_PUBLIC_BASE_PATH : ''
};
