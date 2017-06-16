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
    };
    if (global.define && typeof window) {
        define('config', function() {
            return mod;
        });
    } else {
        module.exports = mod;
    }
})(this);
