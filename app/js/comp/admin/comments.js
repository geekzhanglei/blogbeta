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

    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    var data = {
        items: [],
        selectedPage: '1',
        flag: 1,
        bool: false,
        // 分页数据
        showPages: true,
        pagesize: 4,
        pagingData: {
            total: 5,
            pages: [],
            page: 1,
            page_total: 5
        }
    };

    var comp = Vue.component('blog-comments', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 显示隐藏文章评论
            showCom: function(item, index) {
                if (item.markNum) {
                    item.showComments = !item.showComments;
                }
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
            requestArticle: function(e) {
                var _this = this;
                $.ajax({
                    url: "http://blog.feroad.com/article/getArticleListWithMark",
                    type: "POST",
                    dataType: "json",
                    data: {
                        curpage: e,
                        perpage: _this.pagesize,
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        if (res.result.status) {
                            _this.items = res.result.data;
                            _this.items.forEach(function(item) {
                                _this.$set(item, "showComments", false);
                            })
                            // 分页初始化
                            _this.initPage(res.result);
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
            initPage: function(data) {
                var _this = this;
                // 分页组件赋值
                this.pagingData.total = data.rows;
                var _temp = parseInt(this.pagingData.total) / this.pagesize;
                var page_total = Math.ceil(_temp);
                // 获取分页组件数据
                this.pagingData = handlePage({
                    page: 1,
                    total: data.rows,
                    page_total: page_total,
                    clickPageCb: function(targetPage) {
                        _this.requestArticle(targetPage);
                    }
                });
            },
            changeStatus: function() {
                if (this.selectedPage == 1) {
                    this.pagesize = 5;
                    this.showPages = true;
                } else {
                    this.pagesize = 9999;
                    this.showPages = false;
                }
                this.requestArticle(1);
            },
            changePageNum: function(e) {
                var _this = this;
                this.pagesize = e.target.value;
                if (!this.pagesize) {
                    return;
                }
                if (this.flag) {
                    console.log('输出')
                    this.flag = 0;
                    setTimeout(function() {
                        _this.flag = 1;
                        console.log('延迟半秒')
                    }, 500);
                    this.requestArticle(1);
                }
            },
            // 排序
            sort: function(e) {
                console.log(e);
                console.log(e.target)
                if (!e.target.id) {
                    return;
                }
                this.bool = !this.bool;
                this.sortByKey(this.items, e.target.id, this.bool);
            },
            sortByKey: function(array, key, bool) {
                return array.sort(function(a, b) {
                    var x = a[key];
                    var y = b[key];
                    // NaN唯一不和自身严格相等
                    if (Number(x) === Number(x)) {
                        x = Number(x);
                        y = Number(y);
                    }
                    return bool ? x > y : x < y;
                });
            },
            init: function() {
                this.requestArticle(1);
            }
        },
        mounted: function() {
            this.init();
        }
    });
    return comp;
});
