var projectConfig = require('./config');
var srcPath = projectConfig.global.srcPath;

module.exports = {
    watch: {
        files: [srcPath + '/**/*.*'],
        options: {
            livereload: true
        }

    }
};
