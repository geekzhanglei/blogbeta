/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/article', function(require, exports, module) {
    var Vue = require('vue');
    var $ = require('jquery');
    var tpl = require('template/article');
    var router = require('mods/router');

    var data = {
        title: '这里一片荒芜',
        username: '没作者',
        cont: '没内容',
        time: '时间没了',
        intro: '介绍丢了'
    };

    var comp = Vue.component('blog-article', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 请求文章数据接口
            reqArticleDataApi: function(id) {
                var _this = this;
                $.ajax({
                    url: 'http://blog.feroad.com/article/getArticleDetails/' + id,
                    type: 'GET',
                    dataType: 'json',
                    success: function(res) {
                        var flag = res.result.status;
                        if (flag) {
                            _this.title = res.result.data.title;
                            _this.username = res.result.data.userName;
                            _this.time = _this.transferTime(res.result.data.createTime);
                            _this.cont = res.result.data.content;
                            _this.intro = res.result.data.introduction;
                        } else {
                            console.log('接口请求返回错误');
                        }
                    },
                    error: function() {
                        // 请求地址不存在，则跳转到文章列表
                        router.replace({
                            path: '/article'
                        });
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
        },
        created: function() {
            console.log('article加载');
            var article_id = router.currentRoute.params.id;
            this.reqArticleDataApi(article_id);
        }
    });
    return comp;
});
