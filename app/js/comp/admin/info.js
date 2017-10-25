/**
 * @fileoverview 后台管理个人信息组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/24
 */

define('comp/admin/info', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/info');
    var $ = require('jquery');
    var router = require('mods/router');
    var atom = require('comp/util/atom');

    var data = {};

    var comp = Vue.component('blog-info', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {},
        created: function() {}
    });
    return comp;
});
