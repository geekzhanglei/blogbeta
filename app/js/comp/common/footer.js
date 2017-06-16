define('comp/common/footer', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/common/footer');

    var data = {};

    var comp = Vue.extend({
        template: tpl,
        data: function() {
            return data;
        }

    });
    return comp;
});
