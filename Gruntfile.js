/**
 * @fileoverview 自动化脚本
 */
module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: pkg,
        // 本地静态服务
        connect: require('./gruntConfigs/connect'),
        // 合并lithe项目依赖（vue.jquery.bootstrap）和从入口(conf)开始的全部js文件
        lithe: require('./gruntConfigs/lithe'),
        // 合并lithe包与配置的代码(lithe.js和lithe的config.js)到.temp临时目录
        concat: require('./gruntConfigs/concat'),
        // 复制相关文件，.temp中合并的lithe.js复制到dist，html复制到dist
        copy: require('./gruntConfigs/copy'),
        // 压缩js代码
        uglify: require('./gruntConfigs/uglify'),
        // 压缩html
        htmlmin: require('./gruntConfigs/htmlmin'),
        // 压缩css代码
        cssmin: require('./gruntConfigs/cssmin'),
        //清理文件和目录
        clean: require('./gruntConfigs/clean'),
        // 实时修改加载livereload服务（监控服务器实现）
        watch: require('./gruntConfigs/watch')
        // 上传项目代码到线上

    });

    grunt.registerTask('packjs', [
        // lithe依赖包与js代码
        'lithe:tpl',
        // lithe文件与config配置合并到.tmp
        'concat:config',
        // 将上一步.tmp的文件复制到dist
        'copy:js',
        // 在dist中压缩以上两步中的js
        'uglify:lithe'
    ]);
    grunt.registerTask('packcss', ['cssmin']);
    grunt.registerTask('packhtml', ['htmlmin']);
    grunt.registerTask('build', ['clean', 'packhtml', 'packcss', 'packjs', 'copy:img']);
    grunt.registerTask('release', function() {
        // release比build多了发布到线上的环节
        // grunt.task.run(['build', 'w:css', 'lefdupload:js']);
    });
    grunt.registerTask('serve', '', function(target) {
        if (target == 'dist') {
            grunt.log.writeln('server for dist...');
            return grunt.task.run([
                'configureProxies',
                'connect:dist:keepalive'
            ]);
        }
        grunt.log.writeln('server for devEnviroment...');
        // grunt.task.run用于一个任务内部执行其他任务
        grunt.task.run([
            // configureProxies是grunt-contrib-proxy的默认任务
            'configureProxies',
            // 以下命令（:keepalive）使得上述命令保持，不会退出，因此会阻塞其他任务执行
            'connect:livereload',
            // 监听是否有文件改变，改变则会刷新页面
            'watch'
        ]);
    });

};
