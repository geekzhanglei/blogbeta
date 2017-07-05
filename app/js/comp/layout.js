/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/layout', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/layout');

    var data = {};

    var comp = Vue.component('blog-layout', {
        template: tpl,
        data: function() {
            return data;
        }
    });
    return comp;
});
