/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/article', function(require, exports, module) {
    var Vue = require('vue');
    var $ = require('jquery');
    var tpl = require('template/article');

    var data = {
        items: [{
            uid: "1",
            title: "白领的幻觉",
            time: "2017年6月4日 22:22",
            cont: "现在有一个很大的误区就是：办公室的白领们自以为自己的表现优于自己的父母，其实这不过是因为经济结构转型造成的误会而已。现在在公司的格子间里面哼哧哼哧做PPT的那些人，和当年踩着缝纫机的女工们，其实没有本质区别。"
        }]
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
            }
        },
        created: function() {
            console.log('article加载');
            // 后期接口放这里，请求一遍接口就完成初始化了
            // this.reqArticleDataApi();
        }
    });
    return comp;
});
