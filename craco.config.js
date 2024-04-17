const path = require("path");
const VersionGenerator = require('./src/plugins/AutoReload/versionGenerator');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.plugins.push({
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('GenerateVersionFile', () => {
                        VersionGenerator.generateVersionFile(path.resolve(__dirname, 'build/version.json'));
                    });
                },
            });
            return webpackConfig;
        },
    },
};