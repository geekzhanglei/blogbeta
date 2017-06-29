/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/msg', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/msg');

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
        pagingData: {}
    };

    var comp = Vue.component('blog-msg', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 回复按钮
            displayInput: function(index) {
                if (this.items[index].isAnswer == "回复") {
                    this.items[index].isAnswer = "取消回复";
                    this.items[index].isShowInput = true;
                } else {
                    this.items[index].isAnswer = "回复";
                    this.items[index].isShowInput = false;
                }
            },
            // 查看回复
            displayAnswers: function(index) {
                if (this.items[index].isUnfoldAnswers == "查看回复") {
                    this.items[index].isUnfoldAnswers = "收起回复";
                    this.items[index].isShowAnswers = true;
                } else {
                    this.items[index].isUnfoldAnswers = "查看回复";
                    this.items[index].isShowAnswers = false;
                }
            },
            // 删除留言
            deleteAnswer: function(index) {
                // 页面先消失
                this.items.splice(index, 1);
                // 再请求删除留言接口
            },
            init: function() {
                var i, itemsLen = this.items.length;
                // 请求查询留言接口

                // 初始化每个评论下会用到的属性
                for (i = 0; i < itemsLen; i++) {
                    Vue.set(this.items[i], 'isAnswer', '回复');
                    Vue.set(this.items[i], 'isUnfoldAnswers', '查看回复');
                    Vue.set(this.items[i], 'isShowInput', false);
                    Vue.set(this.items[i], 'isShowAnswers', false);
                }
                // 初始化分页组件
                // handlePage({

                // });
            }
        },
        created: function() {
            this.init();
        }
    });
    return comp;
});
