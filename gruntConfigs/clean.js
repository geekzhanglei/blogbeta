var projectConfig = require('./config');
var buildPath = projectConfig.global.buildPath;
var tempPath = projectConfig.global.tempPath;
module.exports = {
    clean: [buildPath, tempPath]
};
