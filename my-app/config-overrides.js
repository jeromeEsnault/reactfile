const path = require('path');

module.exports = function override(config, error) {
    config["resolve"] = {
        alias: {
            components: path.resolve(__dirname, 'src/Component'),
            core: path.resolve(__dirname, 'src/Component/core'),
            error: path.resolve(__dirname, 'src/error'),
            helmet: path.resolve(__dirname, 'src/Helmet'),
            img: path.resolve(__dirname, 'src/img'),
            interface: path.resolve(__dirname, 'src/interface'),
            pages: path.resolve(__dirname, 'src/pages'),
            css: path.resolve(__dirname, 'src/css'),
            public: path.resolve(__dirname, 'public'),
        },
        extensions: ['.js']
    }

    return config;
}