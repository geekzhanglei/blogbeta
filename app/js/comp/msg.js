/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/msg', function(require, exports, module) {
    var Vue = require('vue');
    var $ = require('jquery');
    var tpl = require('template/msg');

    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    var data = {
        list: [],
        // itemss: [{
        //     uid: "1",
        //     nickname: "神话",
        //     time: "2017年3月5日 22:22",
        //     cont: "这是假数据--这是假数据--这是假数据--",
        //     answersNum: '2',
        //     answers: [{
        //         uid: "1-1",
        //         nickname: "神话-1",
        //         time: "2017年3月5日 22:26",
        //         cont: "这是假数据--这是假数据--这是假数据--"
        //     }, {
        //         uid: "1-2",
        //         nickname: "神话-2",
        //         time: "2017年3月5日 22:29",
        //         cont: "这是假数据--这是假数据--这是假数据--"
        //     }]
        // }, {
        //     uid: "2",
        //     nickname: "神话1",
        //     time: "2017年3月5日 22:23",
        //     cont: "这是假数据--这是假数据--这是假数据--",
        //     answersNum: '3',
        //     answers: [{
        //         uid: "1-1",
        //         nickname: "神话1-1",
        //         time: "2017年3月6日 11:26",
        //         cont: "这是假数据--这是假数据--这是假数据--"
        //     }, {
        //         uid: "1-2",
        //         nickname: "神话1-2",
        //         time: "2017年3月6日 21:29",
        //         cont: "这是假数据--这是假数据--这是假数据--"
        //     }, {
        //         uid: "1-2",
        //         nickname: "神话1-2",
        //         time: "2017年3月6日 22:39",
        //         cont: "这是假数据--这是假数据--这是假数据--"
        //     }]
        // }],
        pagingData: {
            total: 50,
            pages: [1],
            page: 1,
            page_total: 1
        }
    };

    var comp = Vue.component('blog-msg', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 回复按钮
            displayInput: function(index) {
                if (this.list[index].isAnswer == "回复") {
                    this.list[index].isAnswer = "取消回复";
                    this.list[index].isShowInput = true;
                } else {
                    this.list[index].isAnswer = "回复";
                    this.list[index].isShowInput = false;
                }
            },
            // 查看回复
            displayAnswers: function(index) {
                if (this.list[index].isUnfoldAnswers == "查看回复") {
                    this.list[index].isUnfoldAnswers = "收起回复";
                    this.list[index].isShowAnswers = true;
                } else {
                    this.list[index].isUnfoldAnswers = "查看回复";
                    this.list[index].isShowAnswers = false;
                }
            },
            // 删除留言
            deleteAnswer: function(index) {
                // 页面先消失
                this.list.splice(index, 1);
                // 再请求删除留言接口
            },
            // 请求留言数据接口
            reqMsgDataApi: function(e) {
                var _this = this;
                $.ajax({
                    url: 'http://blog.feroad.com/query',
                    type: 'GET',
                    dataType: 'json',
                    // data: {
                    //     page: e,
                    //     pagesize: 10
                    // },
                    success: function(res) {
                        var flag = res.result.status;
                        if (flag === 1) {
                            _this.list = res.result.data;
                            _this.pagingData.total = res.result.data.length;
                            // _this.pagingData.page = res.bean.page;
                        } else {
                            _this.list = [];
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
            showLayer: function() {
                console.log("应该有弹层，交互");
            },
            // 分页组件
            init: function() {
                var _this = this;
                var i, listLen = this.list.length;
                var page_total,
                    page = _this.pagingData.page;
                var _temp = parseInt(_this.pagingData.total) / 10;
                page_total = Math.ceil(_temp);

                // 初始化每个评论下会用到的私有属性
                for (i = 0; i < listLen; i++) {
                    Vue.set(this.list[i], 'isAnswer', '回复');
                    Vue.set(this.list[i], 'isUnfoldAnswers', '查看回复');
                    Vue.set(this.list[i], 'isShowInput', false);
                    Vue.set(this.list[i], 'isShowAnswers', false);
                }
                // 获取分页组件数据
                this.pagingData = handlePage({
                    page: page,
                    total: _this.pagingData.total,
                    page_total: page_total,
                    clickPageCb: function(targetPage) {
                        _this.reqMsgDataApi(targetPage);
                    }
                });
            }
        },
        created: function() {
            // 后期接口放这里，请求一遍接口就完成初始化了
            this.reqMsgDataApi();
        }
    });
    return comp;
});
