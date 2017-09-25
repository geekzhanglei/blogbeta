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
    var atom = require('comp/util/atom');

    var data = {
        comment: {
            id: '',
            nickname: '',
            email: '',
            website: '',
            content: ''
        },
        title: '这里一片荒芜',
        username: '没作者',
        cont: '没内容',
        time: '时间没了',
        intro: '介绍丢了',
        comments: []
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
                    url: 'http://blog.feroad.com/article/newGetArticleDetails/' + id,
                    type: 'GET',
                    dataType: 'json',
                    success: function(res) {
                        var flag = res.result.status;
                        var _data = res.result.data;
                        if (flag) {
                            _this.comment.id = _data.id;
                            _this.title = _data.title;
                            _this.username = _data.userName;
                            _this.time = atom.transfer(_data.updated_at);
                            _this.cont = _data.content;
                            _this.intro = _data.introduction;
                            _this.comments = _data.comments;
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
            updateComments: function() {
                var _this = this;
                var boolFlag = this.comment.content && this.comment.nickname && this.comment.email;
                if (!boolFlag) {
                    console.log('必填不能为空');
                    return;
                }
                $.ajax({
                    url: 'http://blog.feroad.com/article/addMark',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        articleId: _this.comment.id,
                        nickname: _this.comment.nickname,
                        email: _this.comment.email,
                        website: _this.comment.website,
                        content: _this.comment.content
                    },
                    success: function(res) {
                        var flag = res.result.status;
                        var _data = res.result.data;
                        if (flag) {
                            var _obj = {
                                id: _this.comment.id,
                                nickname: _this.comment.nickname,
                                website: _this.comment.website,
                                content: _this.comment.content,
                                create_time: Date.parse(new Date()) / 1000
                            }
                            _this.comments.push(_obj);
                            _this.comment = {}
                        } else {
                            console.log('后台返回提示：' + _data);
                        }
                    },
                    error: function() {
                        // 请求地址不存在，则跳转到文章列表
                        console.log('增加评论失败-请求接口失败')
                    }
                });

            },
            transferTime: function(unixtime) {
                return atom.transfer(unixtime);
            }
        },
        created: function() {
            console.log('article加载');
            var article_id = router.currentRoute.params.id;
            this.reqArticleDataApi(article_id);
        }
    });
    return comp;
});
