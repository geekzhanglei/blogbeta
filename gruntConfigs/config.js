/**
 * @fileoverview lithe的项目配置
 */
var path = require('path');
var pkg = require('../package.json');

module.exports = {
    // 全局
    global: {
        // 项目名称,英文
        projectName: pkg.name || 'projectName',
        // 项目开发目录
        basePath: path.resolve('./app/'),
        // 源码目录
        srcPath: './app/',
        // 项目打包目录
        buildPath: './dist/',
        // 项目缓存目录
        tempPath: './.tmp/'
    },
    // connect
    connect: {
        // 项目域名,将host绑到本地（127.0.0.1）
        host: '127.0.0.1',
        // 前端测试域名
        port: 3000,
        // 代理服务器,使用代理需要中间件部分处理
        // proxy: {
        //     // 后端测试机
        //     host: 'blog.feroad.com',
        //     port: 80
        // },
        // 路由规则
        rewrite: ''
    }
}
