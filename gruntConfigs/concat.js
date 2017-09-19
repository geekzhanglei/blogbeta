var projectConfig = require('./config');
var tempPath = projectConfig.global.tempPath;
var srcPath = projectConfig.global.srcPath;

module.exports = {
    config: {
        files: {
            [tempPath + '/js/lithe.js']: [srcPath + '/js/lithe.js', srcPath + '/js/config.js']
        }
    }
};
