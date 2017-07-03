/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/article', function(require, exports, module) {
    var Vue = require('vue');
    var $ = require('jquery');
    var tpl = require('template/article');

    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    var data = {
        items: [{
            uid: "1",
            nickname: "神话",
            time: "2017年3月5日 22:22",
            cont: "这是假数据--这是假数据--这是假数据--",
            answersNum: '2',
            answers: [{
                uid: "1-1",
                nickname: "神话-1",
                time: "2017年3月5日 22:26",
                cont: "这是假数据--这是假数据--这是假数据--"
            }, {
                uid: "1-2",
                nickname: "神话-2",
                time: "2017年3月5日 22:29",
                cont: "这是假数据--这是假数据--这是假数据--"
            }]
        }, {
            uid: "2",
            nickname: "神话1",
            time: "2017年3月5日 22:23",
            cont: "这是假数据--这是假数据--这是假数据--",
            answersNum: '3',
            answers: [{
                uid: "1-1",
                nickname: "神话1-1",
                time: "2017年3月6日 11:26",
                cont: "这是假数据--这是假数据--这是假数据--"
            }, {
                uid: "1-2",
                nickname: "神话1-2",
                time: "2017年3月6日 21:29",
                cont: "这是假数据--这是假数据--这是假数据--"
            }, {
                uid: "1-2",
                nickname: "神话1-2",
                time: "2017年3月6日 22:39",
                cont: "这是假数据--这是假数据--这是假数据--"
            }]
        }],
        pagingData: {
            total: 50,
            pages: [1, 2, 3, 4, 5],
            page: 1,
            page_total: 5
        }
    };

    var comp = Vue.component('blog-article', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 请求文章数据接口
            reqArticleDataApi: function(e) {
                // var _this = this;
                $.ajax({
                    // url: '',
                    // type: 'GET',
                    // dataType: 'jsonp',
                    // data: {
                    //     page: e,
                    //     pagesize: 10
                    // },
                    // success: function(res) {
                    //     // console.log(res.bean.data);
                    //     var flag = res.flag;
                    //     if (flag == "200") {
                    //         _this.list = res.bean.data;
                    //         _this.pagingData.total = res.bean.total;
                    //         _this.pagingData.page = res.bean.page;
                    //         // 初始化页码
                    //         _this.init();
                    //     } else {
                    //         _this.list = [];
                    //         _this.pagingData.total = 0;
                    //         _this.pagingData.page = 0;
                    //         _this.init();
                    //     }
                    // }
                });
                this.init();
            },
            // 分页组件
            init: function() {
                var _this = this;
                var i, itemsLen = this.items.length;
                var page_total,
                    page = _this.pagingData.page;
                var _temp = parseInt(_this.pagingData.total) / 10;
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
                        _this.reqMsgDataApi(targetPage);
                    }
                });
            }
        },
        created: function() {
            // 后期接口放这里，请求一遍接口就完成初始化了
            this.reqArticleDataApi();
        }
    });
    return comp;
});
