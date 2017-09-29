/**
 * @fileoverview 后台管理页--评论管理
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */

define('comp/admin/comments', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/comments');
    var $ = require('jquery');
    var router = require('mods/router');
    var atom = require('comp/util/atom');

    var data = {
        items: []
    };

    var comp = Vue.component('blog-comments', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 显示隐藏文章评论
            showCom: function(item, index) {
                item.showComments = !item.showComments;
            },
            deleteCet: function(item, cetId) {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                $.ajax({
                    url: "http://blog.feroad.com/article/deleteMark/" + cetId,
                    type: "POST",
                    dataType: "json",
                    data: {
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        console.log(res);
                        item.status = "已删除";
                        if (res.result.status) {
                            console.log()
                        } else {
                            console.log('请求接口错误');
                        }
                    },
                    error: function(res) {
                        console.log('接口请求错误，错误码：' + res.status);
                    }
                })
            },
            requestArticle: function() {
                var _this = this;
                $.ajax({
                    url: "http://blog.feroad.com/article/getArticleListWithMark",
                    type: "POST",
                    dataType: "json",
                    data: {
                        curpage: 1,
                        perpage: 10,
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        console.log(res);
                        if (res.result.status) {
                            _this.items = res.result.data;
                            _this.items.forEach(function(item) {
                                _this.$set(item, "showComments", false);
                            })
                        } else {
                            console.log('请求接口错误');
                        }
                    },
                    error: function(res) {
                        console.log('接口请求错误，错误码：' + res.status);
                    }
                })
            },
            transferTime: function(unix) {
                return atom.transfer(unix);
            },
            init: function() {
                this.requestArticle();
            }
        },
        mounted: function() {
            this.init();
        }
    });
    return comp;
});
