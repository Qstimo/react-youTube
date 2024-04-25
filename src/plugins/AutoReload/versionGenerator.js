const fs = require('fs-extra');

function generateVersionFile(filePath) {
    const packageJson = fs.readFileSync('./package.json');
    const version = JSON.parse(packageJson).version || 0;
    
    const versionObject = {
        AppVersion: version,
        Build: process.env.NODE_ENV,
        BundleVersion: new Date().toISOString()
    };


    fs.outputJsonSync(filePath, versionObject);
}

module.exports = {
    generateVersionFile,
};