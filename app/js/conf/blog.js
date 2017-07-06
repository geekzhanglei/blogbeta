define('conf/blog', function(require, exports, module) {
    var Vue = require('vue');
    var router = require('mods/router');

    require('comp/common/header');

    require('mods/layout');
    require('mods/list');
    // require('mods/article');
    // require('mods/about');

    // 这里应该是放置路由的位置
    require('comp/common/footer');

    // 引入bootstrap插件
    require('jquery');
    require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#blog',
        router
    });
});
