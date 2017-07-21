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
    var s = require('lib/simplemde/simplemde.min');
    console.log(s);
    var data = {
        isCollapse: true,
        isShowMenu: false
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
            },
            // 右上角个人信息菜单显隐
            isDisplayMenu: function() {
                var t = this;
                console.log(t.isShowMenu);
                if (this.isShowMenu) {
                    this.isShowMenu = false;
                } else {
                    this.isShowMenu = true;
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
            // 插件引入方法
            new SimpleMDE({
                element: this.$refs.adminText
            });
        }
    });
    return comp;
});
