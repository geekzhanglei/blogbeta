var projectConfig = require('./config');
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;

module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        files: [{
            expand: true,
            cwd: srcPath,
            src: '**/*.html',
            dest: buildPath
        }]
    }
};
