define('conf/admin', function(require, exports, module) {
    var Vue = require('vue');
    var router = require('mods/router');

    // 登录组件
    require('mods/login');
    // 管理后台
    require('mods/admin');

    // 引入bootstrap插件
    // require('jquery');
    // require('bootstrap');

    // 初始化根实例
    new Vue({
        el: '#admin',
        router: router
    });
});
