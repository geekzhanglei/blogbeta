var banner = '/* <%=pkg.name%> | vserion <%=pkg.version%>*/\r\n';
var projectConfig = require('./config');
var tempPath = projectConfig.global.tempPath;
var buildPath = projectConfig.global.buildPath;
module.exports = {
    options: {
        mangle: {
            except: ['require']
        },
        banner: banner
    },
    lithe: {
        files: [{
            expand: true,
            cwd: buildPath + '/js/conf/',
            src: '**/*.js',
            dest: buildPath + '/js/conf'
        }]
    },
    config: {
        files: {
            [tempPath + '/js/lithe.js']: [tempPath + '/js/lithe.js']
        }
    }
};
