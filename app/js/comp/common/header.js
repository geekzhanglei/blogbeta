define('comp/common/header', function(require, exports, module) {
    // var Vue = require('vue');
    // var Vue = new Vue();
    var tpl = require('template/common/header');

    var data = {};

    var comp = Vue.component('blog-header', {
        template: tpl,
        data: function() {
            return data;
        },
        created: function() {
            console.log('header加载');
        }
    });
    module.exports = comp;
});
