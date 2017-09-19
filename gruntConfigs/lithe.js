var path = require('path');
var projectConfig = require('./config');
var basePath = projectConfig.global.basePath;
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;
var litheConfig = require(basePath + '/js/config.js');

var srcConfPath = srcPath + '/js/conf/';
var buildConfPath = buildPath + '/js/conf/';

// 单独复制不在lithe方式require的js
var srcExtraPath = srcPath + '/js/comp/util/canvas.js'
var buildExtraPath = buildPath + '/js/comp/util/';

var tpl = {
    options: {
        basepath: basePath + '/js/',
        alias: litheConfig.alias
    },
    files: {}
};
tpl.files[buildConfPath] = srcConfPath;
tpl.files[buildExtraPath] = srcExtraPath;
module.exports = {
    tpl: tpl
}
