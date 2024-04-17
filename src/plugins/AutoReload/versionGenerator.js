const path = require('path');
const fs = require('fs-extra');

// module.exports = {
//     /**
//      * генерировать файл с версией сборки
//      * @param {String} filename путь к файлу версии
//      */
//     generateVersionFile: function (filename) {
//         // извлекаем версию из файла package.json
//         const packageJson = fs.readFileSync('./package.json');
//         const version = JSON.parse(packageJson).version || 0;

//         fs.writeFileSync(filename, `{
//     "AppVersion": "${version}",
//     "Build": "${process.env.NODE_ENV}",
//     "BundleVersion": "${new Date().toISOString()}"
// }
// `);
//     }
// }

function generateVersionFile(filePath) {
    const version = '1.0.0'; // здесь вы можете поменять версию на нужную вам
    
    const versionObject = {
        version: version,
    };

    fs.outputJsonSync(filePath, versionObject);
}

module.exports = {
    generateVersionFile,
};