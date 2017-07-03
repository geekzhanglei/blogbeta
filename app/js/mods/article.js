// 模块文件，模块由vue组件组成，实现模块化开发
define('mods/article', function(require, exports, module) {
    var Vue = require('vue');

    require('comp/common/header');
    require('comp/article');
    require('comp/common/footer');

    // 引入bootstrap插件
    require('jquery');
    require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#article'
    });
});
