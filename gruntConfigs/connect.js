var serveStatic = require('serve-static');
var projectConfig = require('./config');
var connectConfig = projectConfig.connect;
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;

//require('path').resolve(dir)解析为当前路径
var mountFolder = function(connect, dir) {
    return serveStatic(require('path').resolve(dir));
};
// 中间件的意思是：用connect-livereload服务刷新客户端，connect中的另一个端口监听app所在的绝对路径
var middleware = function(connect) {
    return [
        require('connect-livereload')(),
        mountFolder(connect, 'app')
    ];
};

module.exports = {
    options: {
        hostname: connectConfig.host,
        port: connectConfig.port,
        base: srcPath,
        open: true
    },
    livereload: {
        options: {
            base: {
                path: srcPath,
                options: {}
            },
            debug: false,
            livereload: false,
            middleware: middleware
        }
    },
    dist: {
        options: {
            base: buildPath,
            livereload: false,
            open: true
        }
    }
};
