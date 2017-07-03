define('comp/common/header', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/common/header');

    var data = {
        isCurrentCls: ''
    };

    var comp = Vue.component('blog-header', {
        template: tpl,
        data: function() {
            return data;
        },
        created: function() {
            switch (window.location.pathname) {
                case '/':
                    this.isCurrentCls = 1;
                    break;
                case '/html/msg.html':
                    this.isCurrentCls = 2;
                    break;
                case '/about':
                    this.isCurrentCls = 3;
                    break;
                default:
                    break;
            }
        }
    });
    module.exports = comp;
});
