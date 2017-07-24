/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */

define('comp/admin/delete', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/delete');
    var $ = require('jquery');
    var router = require('mods/router');

    var data = {};

    var comp = Vue.component('blog-admin', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            saveArticle: function() {
                var _this = this;

                // $.ajax({
                //     url: 'http://blog.feroad.com/article/add',
                //     type: 'POST',
                //     dataType: 'json',
                //     data: {
                //         username: _this.username,
                //         title: _this.title,
                //         introduction: _this.intro,
                //         content: contStr
                //     },
                //     success: function(res) {
                //         console.log(res.result.data);
                //         // 清空输入
                //         _this.title = '';
                //         simplemde.value('');

                //     },
                //     error: function() {
                //         console.log('接口请求失败');
                //     }
                // });
            }
        },
        mounted: function() {}
    });
    return comp;
});
