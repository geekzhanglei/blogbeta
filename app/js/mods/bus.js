/**
 * @fileoverview 非父子组件通信
 * @author 1103307205@qq.com
 * @date 2017/10/31
 */
define('mods/bus', function(require, exports, module) {
    var Vue = require('vue');
    var bus = new Vue();
    module.exports = bus;
});
