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
    window.$ = require('jquery');
    require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#admin',
        created: function() {
            console.log("这是初学时期的糟糕代码\r\n 你居然还要扒开了看\r\n这让人感到有点尴尬\r\n 非要看源码的话：\r\n\r\n\r\n%cfollow me %c https://github.com/geekzhanglei/blogbeta", "color:red", "color:green");
            if (router.currentRoute.path === "/") {
                router.replace({
                    path: '/login'
                });
            }
            // 离开、返回当前页title提示
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState == "hidden") {
                    document.title = "404 not found";
                } else {
                    document.title = "欢迎回到管理后台";
                }
            })
        },
        router: router
    });
});
