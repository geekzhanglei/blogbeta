var projectConfig = require('./config');
var buildPath = projectConfig.global.buildPath;

module.exports = {
    default: {
        options: {
            username: "gruntftp",
            password: "@zhangleiftp",
            host: "123.206.72.67",
            dest: "",
            port: 21,
            debug: true,
            // 没更新buildPath中的文件执行该命令也会上传
            incrementalUpdates: false
        },
        files: [{
            expand: true,
            // 注意dist和dist/的结果是不同的，dist/会创建dist文件夹，在服务器目录下创建dist文件夹
            cwd: 'dist',
            src: ['**/*.*']
        }]
    }
};
