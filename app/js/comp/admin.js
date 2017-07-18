/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/18
 */

define('comp/admin', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin');
    var $ = require('jquery');
    var router = require('mods/router');

    var data = {};

    var comp = Vue.component('blog-admin', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            isLogin: function() {
                //    判断是否已经登录
                $.ajax();
            }
        },
        created: function() {
            var _this = this;
            if (_this.isLogin === "no") {
                router.replace({
                    path: '/login'
                });
            }
        }
    });
    return comp;
});
