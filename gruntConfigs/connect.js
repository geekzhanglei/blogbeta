var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var serveStatic = require('serve-static');
var projectConfig = require('./config');
var connectConfig = projectConfig.connect;
var srcPath = projectConfig.global.srcPath;
var buildPath = projectConfig.global.buildPath;

var mountFolder = function(connect, dir) {
    return serveStatic(require('path').resolve(dir));
};

var middleware = function(connect, options, middlewares) {
    middlewares = [
        //lrSnippet,
        function(req, res, next) {
            var testJsReg = /(\/[^\/]+){5}(.*)\.js/;
            var testCssReg = /(\/[^\/]+){6}(.*)\.css/;
            if (testJsReg.test(req.url)) {
                req.url = req.url.replace(/(\/[^\/]+){5}/, '/js');
            }
            if (testCssReg.test(req.url)) {
                req.url = req.url.replace(/(\/[^\/]+){5}\/reach/, '/css/conf');
                req.url = req.url.replace(/(\/[^\/]+){5}/, '/css');
            }
            next();
        },

        mountFolder(connect, 'app'),

        function(req, res, next) {
            // var path = req.url;
            if (connectConfig.host == req.headers.host) {
                proxySnippet.apply(this, arguments);
            } else {
                next();
            }
        }
    ];

    return middlewares;
};

module.exports = {
    options: {
        hostname: connectConfig.host,
        port: connectConfig.port,
        base: srcPath,
        open: false
    },
    proxies: [{
        context: '/',
        host: connectConfig.proxy.host,
        port: connectConfig.proxy.port,
        https: false,
        xforward: false,
        changeOrigin: true,
        headers: {},
        hideHeaders: ['x-removed-header']
    }],
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
            open: false,
            middleware: middleware
        }
    }
};
