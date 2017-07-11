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
        items: [{
            uid: "1",
            title: "白领的幻觉",
            time: "2017年6月4日 22:22",
            cont: "现在有一个很大的误区就是：办公室的白领们自以为自己的表现优于自己的父母，其实这不过是因为经济结构转型造成的误会而已。现在在公司的格子间里面哼哧哼哧做PPT的那些人，和当年踩着缝纫机的女工们，其实没有本质区别。"
        }, {
            uid: "2",
            title: "富人的由来",
            time: "2017年6月5日 22:23",
            cont: "小孩问富翁：叔叔为什么你这么有钱呢？富翁说：我给你讲个故事吧。很小的时候，我注意到楼下的矿泉水卖一块钱，而三站地外的篮球场上，要卖一块五。我拿着一个大书包，从楼下买水带到球场去卖，卖一块二。一个月我挣了十块钱。小孩说：我好像明白了。富翁说：你明白个屁。后来我爸死了，把钱留给我了。",
        }],
        pagingData: {
            total: 50,
            pages: [1, 2, 3, 4, 5],
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
            console.log('list加载');
            // 后期接口放这里，请求一遍接口就完成初始化了
            this.reqArticleDataApi();
        },
        mounted: function() {

        }
    });
    return comp;
});
