/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/list', function(require, exports, module) {
    var Vue = require('vue');
    var $ = require('jquery');
    var tpl = require('template/list');

    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    var data = {
        // 每页展示多少条
        pagesize: 2,
        items: [],
        pagingData: {
            total: 5,
            pages: [],
            page: 1,
            page_total: 5
        }
    };

    var comp = Vue.component('blog-articlelist', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 请求文章数据接口
            reqArticleDataApi: function(e) {
                var _this = this;
                $.ajax({
                    url: 'http://blog.feroad.com/article/getArticleList',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        curpage: e,
                        perpage: _this.pagesize
                    },
                    success: function(res) {
                        var flag = res.result.status;
                        if (flag) {
                            _this.items = res.result.data;
                            _this.pagingData.total = res.result.rows;
                            _this.pagingData.page = e;
                        } else {
                            _this.items = [];
                            _this.pagingData.total = 0;
                            _this.pagingData.page = 0;
                        }
                        _this.init();
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
            // 分页组件
            init: function() {
                var _this = this;
                var i, itemsLen = this.items.length;
                var page_total,
                    page = _this.pagingData.page;
                var _temp = parseInt(_this.pagingData.total) / _this.pagesize;
                page_total = Math.ceil(_temp);

                // 初始化每个评论下会用到的私有属性
                for (i = 0; i < itemsLen; i++) {
                    Vue.set(this.items[i], 'isAnswer', '回复');
                    Vue.set(this.items[i], 'isUnfoldAnswers', '查看回复');
                    Vue.set(this.items[i], 'isShowInput', false);
                    Vue.set(this.items[i], 'isShowAnswers', false);
                }
                // 获取分页组件数据
                this.pagingData = handlePage({
                    page: page,
                    total: _this.pagingData.total,
                    page_total: page_total,
                    clickPageCb: function(targetPage) {
                        _this.reqArticleDataApi(targetPage);
                    }
                });
            }
        },
        created: function() {
            var _this = this;
            console.log('list加载');
            // 后期接口放这里，请求一遍接口就完成初始化了
            this.reqArticleDataApi(_this.pagingData.page);
        }
    });
    return comp;
});
