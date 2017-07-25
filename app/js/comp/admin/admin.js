/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */

define('comp/admin/admin', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/admin');
    var $ = require('jquery');
    var router = require('mods/router');

    var data = {
        isCollapse: true
    };

    var comp = Vue.component('blog-admin', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            isLogin: function() {
                //    判断是否已经登录
                $.ajax();
            },
            // 收起展开侧边栏
            isSidebar: function() {
                if (this.isCollapse) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            }
        },
        mounted: function() {
            var _this = this;
            if (_this.isLogin === "no") {
                router.replace({
                    path: '/login'
                });
            }
            // 跳转到文章发布页
            if (router.currentRoute.path === "/admin") {
                router.replace({
                    path: '/admin/release'
                });
            }
        }
    });
    return comp;
});
