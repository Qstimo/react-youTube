const path = require("path");
const AutoReloadUtils = require('./src/plugins/AutoReload/versionGenerator');

module.exports = {
    webpack: {
        // alias: { /* ... */ },
        // plugins: {

        // },
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.plugins.push({
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('GenerateVersionFile', (compilation) => {
                        AutoReloadUtils.generateVersionFile(path.resolve(__dirname, 'public/version.json'));
                    });
                },
            });
            return webpackConfig;
        },
    },
};
