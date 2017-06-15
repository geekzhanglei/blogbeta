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
        // 合并lithe项目依赖
        lithe: require('./gruntConfigs/lithe'),
        // 合并非lithe的代码
        concat: require('./gruntConfigs/concat'),
        // 复制相关文件到dist
        copy: require('./gruntConfigs/copy'),
        // 压缩js代码
        uglify: require('./gruntConfigs/uglify'),
        // 压缩css代码
        cssmin: require('./gruntConfigs/cssmin'),
        // 上传项目代码到线上
        // lefdupload: require('./gruntConfigs/lefdupload')
    });

    grunt.registerTask('packjs', [
        // 'eslint',
        'lithe:tpl',
        'concat:config',
        'copy:js',
        'uglify:lithe'
    ]);

    grunt.registerTask('packcss', ['cssmin']);

    grunt.registerTask('build', ['packcss', 'packjs', 'copy:html']);

    grunt.registerTask('release', function(target) {
        if (target == 'js') {
            grunt.task.run(['packjs', 'lefdupload:js']);
            return;
        }
        if (target == 'css') {
            grunt.task.run(['packcss', 'lefdupload:css']);
            return;
        }
        grunt.task.run(['build', 'lefdupload:css', 'lefdupload:js']);
    });

    grunt.registerTask('serve', '', function(target) {
        if (target == 'dist') {
            grunt.log.writeln('server for dist...');
            return grunt.task.run([
                'configureProxies',
                'connect:dist:keepalive'
            ]);
        }
        // grunt.task.run用于一个任务内部执行其他任务
        grunt.task.run([
            // configureProxies是grunt-contrib-proxy的默认任务
            'configureProxies',
            // 以下命令使得上述命令保持，不会退出，因此会阻塞其他任务执行
            'connect:livereload:keepalive'
        ]);
    });

};
