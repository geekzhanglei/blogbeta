define('comp/common/header', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/common/header');

    var data = {};

    var comp = Vue.component('blog-header', {
        template: tpl,
        data: function() {
            return data;
        }
    });
    module.exports = comp;
});
