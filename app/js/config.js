/**
 * @fileoverview lithe配置文件
 * @author 1103307205@qq.com
 */
(function(global, undef) {

    var mod = {
        // basepath: basepath,
        alias: {
            'vue': 'lib/vue/vue',
            'vue-router': 'lib/vue/vue-router',
            'jquery': 'lib/jquery/jquery',
            // 'bootstrap': 'lib/bootstrap/bootstrap',
            'axios': 'lib/axios/axios'
        }
    };
    if (global.define && typeof window) {
        define('config', function() {
            return mod;
        });
    } else {
        module.exports = mod;
    }
})(this);
