/**
 * @fileoverview 后台管理页--评论管理
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */

define('comp/admin/comments', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/comments');
    var router = require('mods/router');
    var atom = require('comp/util/atom');

    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    var data = {
        // 展示层
        items: [],
        // 中间数据层
        list: [],
        // 交互
        selectedPage: '1',
        flag: 1,
        bool: false,
        // 分页数据
        showPages: true,
        pagesize: 5,
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
                            _this.list = res.result.data;
                            _this.list.forEach(function(item) {
                                _this.$set(item, "showComments", false);
                            })
                            // 转换数据中所有unix时间戳
                            _this.transferTime(_this.list);
                            _this.items = _this.list;
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
            transferTime: function(obj) {
                var _this = this;
                for (var i = 0; i < obj.length; i++) {
                    for (var j in obj[i]) {
                        if (j == "created_at") {
                            obj[i][j] = atom.transfer(obj[i][j]);
                        }
                        if (j == "create_time") {
                            obj[i][j] = atom.transfer(obj[i][j]);
                        }
                        if (j == "marks") {
                            if (obj[i][j]) {
                                _this.transferTime(obj[i][j]);
                            }
                        }

                    }
                }
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
            search: function(e) {
                var searchBool, inValue = e.target.value,
                    _this = this;
                var tempObj = this.list;
                this.items = tempObj.filter(function(currentValue, index, arr) {
                    return _this.traversalObj(currentValue, inValue);
                });
            },
            traversalObj: function(curValue, inValue) {
                var i, j, k, tostr, _this = this;
                for (i in curValue) {
                    if (curValue.hasOwnProperty(i)) {
                        switch (i) {
                            case "marks":
                                for (j in curValue[i]) {
                                    for (k in curValue[i][j]) {
                                        switch (k) {
                                            case "website":
                                            case "status":
                                            case "email":
                                                break;
                                            default:
                                                tostr = curValue[i][j][k].toString();
                                                if (tostr.indexOf(inValue) != -1) {
                                                    console.log(tostr)
                                                    return true;
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            case "showComments":
                                break;
                            default:
                                tostr = curValue[i].toString();
                                if (tostr.indexOf(inValue) != -1) {
                                    return true;
                                }
                                break;
                        }
                    }
                }

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
