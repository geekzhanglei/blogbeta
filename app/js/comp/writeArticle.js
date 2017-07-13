/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/13
 */

define('comp/writeArticle', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/writeArticle');

    // require('lib/simplemde/simplemde.debug');

    console.log(require('lib/simplemde/simplemde.debug'));

    var data = {};

    var comp = Vue.component('blog-add', {
        template: tpl,
        data: function() {
            return data;
        }
    });
    // var simplemde = new SimpleMDE({
    //     element: document.getElementById("writeArticle")
    // });
    return comp;
});
