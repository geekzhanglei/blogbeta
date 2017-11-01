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
    var bus = require('mods/bus');

    bus.$on("info", function(name, img) {
        data.imgsrc = img;
        data.nickname = name;
    });
    var data = {
        isCollapse: true,
        nickname: '管理员',
        imgsrc: '../img/avatar.png'
    };

    var comp = Vue.component('blog-admin', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 收起展开侧边栏
            isSidebar: function() {
                if (this.isCollapse) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            },
            loginout: function() {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                // 通知后台注销
                $.ajax({
                    url: 'http://blog.feroad.com/admin/loginout',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        console.log('请求成功')
                        if (res.stat) {
                            // 清除本地token
                            window.localStorage.removeItem('token');
                            router.replace({
                                path: '/login'
                            });
                        }
                    },
                    error: function() {
                        console.log('接口请求失败');
                    }
                });
            }
        },
        mounted: function() {
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
