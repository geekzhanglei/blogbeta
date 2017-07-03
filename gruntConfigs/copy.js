var projectConfig = require('./config');
var tempPath = projectConfig.global.tempPath;
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;

module.exports = {
    // html: {
    //     files: [{
    //         expand: true,
    //         src: ['./**/*.html'],
    //         dest: buildPath,
    //         cwd: srcPath
    //     }]
    // },
    js: {
        expand: true,
        src: ['./lithe.js'],
        dest: buildPath + '/js/',
        cwd: tempPath + '/js/'
    },
    img: {
        expand: true,
        src: ['./*.*'],
        dest: buildPath + '/img/',
        cwd: srcPath + '/img/'
    }
};
