define('conf/index', function(require, exports, module) {
    var Vue = require('vue');
    var router = require('mods/router');

    require('comp/common/header');

    // 布局组件
    require('mods/layout');
    // 文章摘要列表（默认）
    require('mods/list');
    // 文章详情
    require('mods/article');
    // 留言页
    require('mods/msg');
    // 关于页
    require('mods/about');
    // 写文章页
    // require('mods/writeArticle');
    // 这里应该是放置路由的位置
    require('comp/common/footer');

    // 引入bootstrap插件
    require('jquery');
    require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#blog',
        router: router
    });
});
