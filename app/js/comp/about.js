/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */

define('comp/writeArticle', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/about');

    var data = {};

    var comp = Vue.component('blog-about', {
        template: tpl,
        data: function() {
            return data;
        }
    });
    return comp;
});
