/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/msg', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('tmplate/msg');

    var data = {

    };

    var msg = Vue.extend({
        template: tpl,
        data: function() {
            return data;
        }
    });
    return msg;
});
