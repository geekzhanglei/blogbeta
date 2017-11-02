define('conf/admin', function(require, exports, module) {
    var Vue = require('vue');
    var router = require('mods/router');

    // 登录组件
    require('comp/admin/login');
    // 管理后台
    require('comp/admin/admin');
    // 发布文章组件
    require('comp/admin/release');
    // 删除文章组件
    require('comp/admin/delete');
    // 管理评论组件
    require('comp/admin/comments');
    // 留言管理组件
    require('comp/admin/msg');
    // 个人信息组件
    require('comp/admin/info');
    // 常用选项组件
    require('comp/admin/option');
    // 引入bootstrap插件
    // require('jquery');
    // require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#admin',
        created: function() {
            if (router.currentRoute.path === "/") {
                router.replace({
                    path: '/login'
                });
            }
        },
        router: router
    });
});
