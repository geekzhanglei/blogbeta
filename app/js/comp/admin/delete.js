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
    var atom = require('comp/util/atom');

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
                return atom.transfer(unixTime);
            },
            // 删除文章
            deleteArticle: function(id) {
                var _this = this;
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                $.ajax({
                    url: 'http://blog.feroad.com/article/deleteArticleById/' + id,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        if (res.result.status) {
                            // 清空输入
                            _this.reqArticleList();
                        } else {
                            router.replace({
                                'path': '/login'
                            })
                        }
                    },
                    error: function() {
                        console.log('删除出错！文章不存在');
                    }
                });
            },
            // 处理过长的文章简介
            handleIntro: function(inputHTML) {
                if (typeof inputHTML === "string" && inputHTML.constructor === String) {
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
