/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/25
 * @update 2018/06/30
 */

define('comp/admin/delete', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/delete');
    var router = require('mods/router');
    var atom = require('comp/util/atom');
    var vars = require('comp/util/vars');

    var comp = Vue.component('blog-delete', {
        template: tpl,
        data: function() {
            return {
                deleteId: -1,
                items: [],
                perpage: 6,
                curpage: 1,
                endFetch: false,
                showLoadMore: true
            }
        },
        methods: {
            // 请求文章列表
            reqArticleList: function(curpage) {
                var _this = this;
                fetch(vars.url + '/admin/getArticleIntroList?curpage=' + curpage + '&perpage=' + this.perpage)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(res) {
                        var flag = res.result.status;
                        if (flag) {
                            _this.items = _this.items.concat(res.result.data);
                            if (_this.curpage * _this.perpage > res.result.rows) {
                                _this.endFetch = true;
                                _this.showLoadMore = false;
                            }
                        }
                    })
                    .catch(function(e) {
                        console.log("Oops, error:", e)
                    });
            },
            // 时间戳转换
            transferTime: function(unixTime) {
                return atom.transfer(unixTime);
            },
            triggerModal: function(id) {
                this.deleteId = id;
                console.log('test id' + this.deleteId)
            },
            // 删除文章
            deleteArticle: function() {
                var _this = this;
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                // 模态框关闭方法，借jquery
                $('#confirmTip').modal('hide');
                if (this.id == -1) {
                    console.log('删除终止，非法id');
                    return;
                }
                $.ajax({
                    url: vars.url + '/article/deleteArticleById/' + _this.deleteId,
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
            },
            loadMore: function() {
                if (!this.endFetch) { // 假如到最后一页了，不再请求
                    this.reqArticleList(this.curpage++);
                }
            }
        },
        created: function() {
            this.reqArticleList(this.curpage++);
        }
    });
    return comp;
});
