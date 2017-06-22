var projectConfig = require('./config');
var buildPath = projectConfig.global.buildPath;

module.exports = {
    clean: [buildPath, buildPath + './../.tmp']
};
