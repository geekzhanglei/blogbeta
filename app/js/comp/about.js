/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */

define('comp/about', function(require, exports, module) {
    // var Vue = require('vue');
    var tpl = require('template/about');

    var data = {};

    var comp = Vue.component('blog-about', {
        template: tpl,
        data: function() {
            return data;
        },
        created: function() {
            console.log('加载about模块');
            if (document.images) {
                var img = new Image();
                img.src = "img/aboutbg.gif";
                console.log(document.images);
            }
        }
    });
    return comp;
});
