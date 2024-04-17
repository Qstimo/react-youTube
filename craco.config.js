const path = require("path");
const AutoReloadUtils = require('./src/plugins/AutoReload/versionGenerator');
module.exports = {
    // ...
    webpack: {
        alias: { /* ... */ },
        plugins: {
            add: [ /* ... */ ],
            remove: [ /* ... */ ],
        },
        configure: (webpackConfig, { env, paths }) => {
            // Вставляем код сюда
            webpackConfig.plugins.push({
                apply: (compiler) => {
                    compiler.hooks.afterEmit.tap('GenerateVersionFile', (compilation) => {
                        AutoReloadUtils.generateVersionFile(path.resolve(__dirname, 'public/version.json'));
                    });
                },
            });
            // Возвращаем обновленный webpackConfig
            return webpackConfig;
        },
    },
};
