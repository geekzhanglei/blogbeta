define('conf/admin', function(require, exports, module) {
    var Vue = require('vue');
    // var router = require('mods/router');


    // 登录组件
    require('mods/login');
    // 写文章页
    // require('mods/writeArticle');
    // 这里应该是放置路由的位置


    // 引入bootstrap插件
    // require('jquery');
    // require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#login'
        // router: router
    });
});
