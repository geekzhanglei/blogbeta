var projectConfig = require('./config');
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;

module.exports = {
    minify: {
        expand: true,
        cwd: srcPath + '/css/conf/',
        src: ['*.css', '!*.min.css'],
        dest: buildPath + '/css/conf',
        ext: '.css'
    }
};
