var path = require('path');
var projectConfig = require('./config');
var basePath = projectConfig.global.basePath;
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;
var litheConfig = require(basePath + '/js/config.js');

var srcConfPath = srcPath + '/js/conf/';
var buildConfPath = buildPath + '/js/conf/';

var tpl = {
    options: {
        basepath: basePath + '/js/',
        alias: litheConfig.alias
    },
    files: {}
};
tpl.files[buildConfPath] = srcConfPath;

module.exports = {
    tpl: tpl
}
