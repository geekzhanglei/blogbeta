/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/25
 */

define('comp/admin/delete', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/delete');
    var $ = require('jquery');
    var router = require('mods/router');

    var data = {
        items: []
    };

    var comp = Vue.component('blog-delete', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 请求文章列表
            reqArticleList: function(e) {
                var _this = this;
                $.ajax({
                    url: 'http://blog.feroad.com/article/getArticleList',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        curpage: 1,
                        // perpage默认不传值，则显示总文章数
                        perpage: 20
                    },
                    success: function(res) {
                        var flag = res.result.status;
                        if (flag) {
                            _this.items = res.result.data;

                        } else {
                            _this.items = [];
                        }
                    }
                });
            },
            // 时间戳转换
            transferTime: function(unixTime) {
                var date = new Date(unixTime * 1000);
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
                return Y + M + D + h + m + s;
            },
            // 删除文章
            deleteArticle: function(id) {
                var _this = this;

                $.ajax({
                    url: 'http://blog.feroad.com/article/deleteArticleById/' + id,
                    type: 'GET',
                    dataType: 'json',
                    success: function(res) {
                        console.log(res.result.data);
                        // 清空输入
                        _this.reqArticleList();
                    },
                    error: function() {
                        console.log('删除出错！文章不存在');
                    }
                });
            },
            // 处理过长的文章简介
            handleIntro: function(inputHTML) {
                if (typeof inputHTML === "string" && inputHTML.constructor === String) {
                    console.log(inputHTML.length);
                    if (inputHTML.length > 100) {
                        inputHTML = inputHTML.slice(0, 100);
                        return inputHTML + " ...";
                    }
                    return inputHTML;
                }
            }
        },
        created: function() {
            this.reqArticleList();
        }
    });
    return comp;
});
