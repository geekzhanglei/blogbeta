define('conf/index', function(require, exports, module) {
    var Vue = require('vue');
    var router = require('mods/router');

    require('comp/common/header');

    // 布局组件
    require('comp/layout');
    // 文章摘要列表（默认）
    require('comp/list');
    // 文章详情
    require('comp/article');
    // 留言页
    require('comp/msg');
    // 关于页
    require('comp/about');

    require('comp/common/footer');

    // 引入bootstrap插件
    window.$ = require('jquery');
    require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#blog',
        router: router,
        created: function() {
            console.log("这渣代码是我写的\r\n 你居然还要扒开了看\r\n我表示略尴尬\r\n 非要看源码的话：\r\n\r\n\r\n%cfollow me %c https://github.com/geekzhanglei/blogbeta", "color:red", "color:green");
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState == "hidden") {
                    document.title = "这里有bug，快看！";
                } else {
                    document.title = "欢迎回到博客";
                }
            })
        }
    });
});
