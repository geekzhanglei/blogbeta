/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */

define('comp/login', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/login');

    var data = {
        loginname: '',
        loginpwd: ''
    };

    var comp = Vue.component('blog-login', {
        template: tpl,
        data: function() {
            return data;
        },
        created: function() {
            console.log('加载login模块');
        }
    });
    return comp;
});
