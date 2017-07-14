/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/13
 */

define('comp/writeArticle', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/writeArticle');
    var simplemde = require('lib/simplemde/simplemde.min');
    // var x;

    var data = {
        inputArticle: '',
        x: ''
    };

    var comp = Vue.component('blog-add', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            loadMde: function() {
                this.x = new simplemde({
                    // config位置
                    element: document.getElementById("inputArticle"),
                });
            }
        },
        mounted: function() {
            this.loadMde();
            var _this = this;
            console.log(_this.x.value())
        }
    });
    return comp;
});
