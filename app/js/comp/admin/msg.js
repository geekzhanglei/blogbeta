/**
 * @fileoverview 后台管理页--留言管理
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/17
 */

define('comp/admin/msg', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/msg');
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
        pagesize: 5,
        flag: 1,
        // 分页数据
        showPages: true,
        pagingData: {
            total: 5,
            pages: [],
            page: 1,
            page_total: 5
        }
    };

    var comp = Vue.component('blog-msg', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 显示隐藏留言回复
            showMsg: function(item, index) {
                if (item.reply.length) {
                    item.showMesg = !item.showMesg;
                }
            },
            // 请求留言数据接口
            reqMsgData: function(e) {
                var _this = this;
                $.ajax({
                    url: 'http://blog.feroad.com/page',
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
                            _this.items.forEach(function(item) {
                                _this.$set(item, "showMesg", false);
                            })
                            // 分页初始化
                            _this.initPage(res.result);
                        } else {
                            _this.list = [];
                        }
                    },
                    error: function(e) {
                        console.log("接口请求失败，错误码：" + e.status);
                    }
                });
            },
            // 删除留言
            deleteAnswer: function(index, id) {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                // 页面先消失
                this.items.splice(index, 1);
                // 再请求删除留言接口
                $.ajax({
                    url: 'http://blog.feroad.com/delete/' + id,
                    type: 'GET',
                    dataType: 'json',
                    success: function(res) {
                        console.log(res.result.data);
                    }
                });
            },
            // 时间戳转换
            transferTime: function(unixTime) {
                return atom.transfer(unixTime);
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
                        _this.reqMsgData(targetPage);
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
                this.reqMsgData(1);
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
                    this.reqMsgData(1);
                }
            },
            init: function() {
                this.reqMsgData(1);
            }
        },
        mounted: function() {
            this.init();
        }
    });
    return comp;
});
