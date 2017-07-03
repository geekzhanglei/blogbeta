define('comp/common/footer', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/common/footer');

    var data = {
        isTrue1: false
    };

    var comp = Vue.component('blog-footer', {
        template: tpl,
        data: function() {
            return data;
        }
    });
    module.exports = comp;
});
