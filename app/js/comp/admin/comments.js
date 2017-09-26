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

    var data = {
        items: [{
                id: '1234',
                article: '论雷峰塔的倒掉',
                nums: 9,
                time: '2011年12月2号 12:44',
                author: '尼古丁泡芙',
                cets: [{
                    id: 13435,
                    author: 'hehe',
                    cont: '这是好文章啊，千古好文章',
                    time: '2月2号',
                    status: "删除"
                }, {
                    id: 34,
                    author: '雷迅',
                    cont: '什么鬼，我是好评论',
                    time: '2011年12月2号 12:44',
                    status: "删除"
                }],
                showComments: false,
            },
            {
                id: '2342',
                article: '中国工业现状',
                nums: 7,
                time: '11年1月',
                author: '张全蛋',
                cets: [{
                    id: 13435,
                    author: 'hehe',
                    cont: '这是好文章啊，千古好文章',
                    time: '2月2号',
                    status: "删除"
                }, {
                    id: 34,
                    author: '雷迅',
                    cont: '什么鬼，我是好评论',
                    time: '12月2号',
                    status: "删除"
                }],
                showComments: false,
            }
        ]
    };

    var comp = Vue.component('blog-comments', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 显示隐藏文章评论
            showCom: function(item, index) {
                item.showComments = !item.showComments;
            },
            deleteCet: function(item, cetId) {
                item.status = "已删除";
            },
            // requestArticle: function() {
            //     var _this = this;
            //     $.ajax({
            //         url: ""
            //     })
            // },
            init: function() {
                // requestArticle();
            }
        },
        mounted: function() {
            var _this = this;
            if (_this.isLogin === "no") {
                router.replace({
                    path: '/login'
                });
            }
            this.init();
        }
    });
    return comp;
});
