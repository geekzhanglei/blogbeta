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
    require('jquery');
    require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#blog',
        router: router
    });
});
