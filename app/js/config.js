/**
 * @fileoverview lithe配置文件
 * @author 1103307205@qq.com
 */
(function(global, undef) {

    var mod = {
        // basepath: basepath,
        alias: {
            'vue': 'lib/vue/vue.min',
            'jquery': 'lib/jquery/jquery.min',
            'bootstrap': 'lib/bootstrap/js/bootstrap.min'
        },
        router: {},
        basepath: 'http://blog.feroad.com'
        // 中间件,记录cdn入口地址
        // middleware: function(id, path) {
        //     var prefix = 'dist/js/',
        //         currUrl;
        //     if (/\.js$/.test(id)) {
        //         currUrl = router[prefix + id];
        //     } else {
        //         currUrl = router[prefix + id + '.js'];
        //     }
        //     if (currUrl) {
        //         path = basepath + '/';
        //         id = currUrl.replace(path, '');
        //     }
        //     return {
        //         id: id,
        //         path: path
        //     }
        // }
    };
    if (global.define && typeof window) {
        define('config', function() {
            return mod;
        });
    } else {
        module.exports = mod;
    }
})(this);
