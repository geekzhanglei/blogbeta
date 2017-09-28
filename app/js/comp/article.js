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
            content: '',
            errTip: '',
            state: false
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
                            _this.username = _data.username;
                            _this.time = atom.transfer(_data.updated_at);
                            _this.cont = _data.content;
                            _this.intro = _data.introduction;
                            _this.comments = _data.comments;
                            // 读取cookie填写评论内容
                            _this.comment.email = _this.getCookie("email");
                            _this.comment.nickname = _this.getCookie("nickname");
                            _this.comment.website = _this.getCookie("website");
                            console.log("cookie取的值：" + _this.getCookie("email"))
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
            // 发表评论
            updateComments: function() {
                var _this = this;
                if (!this.verifyInput(this.comment)) {
                    console.log("输入合法性校验失败");
                    return;
                } else {
                    this.comment.errTip = "";
                    if (this.comment.website) {
                        this.comment.website = "http://" + this.comment.website;
                    }
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
                            _this.comment.email = "";
                            _this.comment.nickname = "";
                            _this.comment.website = "";
                            _this.comment.content = "";
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
            // 用户输入校验
            verifyInput: function(cet) {
                var _reg, res = true;
                if (cet.content.length === 0 || cet.content.length > 1000) {
                    res = false;
                    this.comment.errTip = "评论内容不可为空或过长";
                    return res;
                }
                if (cet.nickname.length <= 0 || cet.nickname.length > 12) {
                    res = false;
                    this.comment.errTip = "您的大名不可为空或过长";
                    return res;
                }
                if (cet.email && cet.email.length < 30) {
                    _reg = /^(\w)+(\.(\w)+)*@((\w)+)+((\.\w+)+)$/
                    res = _reg.test(cet.email);
                    if (!res) {
                        this.comment.errTip = "email格式不合法";
                    }
                } else {
                    res = false;
                    this.comment.errTip = "email不可为空或过长";
                }
                if (cet.website) {
                    reg = /^(\w)+(\.(\w)+)+/g
                    res = reg.test(cet.website);
                    this.comment.errTip = "网址格式错误，需直接输入类似www.baidu.com的网址"
                }
                return res;
            },
            transferTime: function(unixtime) {
                return atom.transfer(unixtime);
            },
            saveCookie: function() {
                var time, date, UTCtime;

                this.comment.errTip = "";
                this.comment.state = !this.comment.state;

                if (this.comment.state) {
                    if (!this.verifyInput(this.comment)) {
                        console.log('输入校验失败，数据不合法');
                        return;
                    }
                    // 设置30天为过期时间
                    time = 3600 * 24 * 30 * 1000;
                    date = new Date();
                    date.setTime(date.getTime() + time);
                    UTCtime = date.toUTCString();

                    this.setCookie("email", this.comment.email, UTCtime);
                    this.setCookie("nickname", this.comment.nickname, UTCtime);
                    this.setCookie("website", this.comment.website, UTCtime);
                } else {
                    this.deleteCookie("email", "");
                    this.deleteCookie("nickname", "");
                    this.deleteCookie("website", "");
                }
            },
            // cookie操作
            setCookie: function(name, value, expires, path, domain, secure) {
                document.cookie = name + "=" + encodeURI(value) +
                    ((expires) ? "; expires=" + expires : "") +
                    ((path) ? "; path=" + path : "") +
                    ((domain) ? "; domain=" + domain : "") +
                    ((secure) ? "; secure=" + secure : "");
            },
            getCookie: function(name) {
                var cookies = decodeURI(document.cookie).split(';');
                var c;
                for (var i = 0; i < cookies.length; i++) {
                    c = cookies[i].split('=');
                    if (c[0].replace(' ', '') == name) {
                        return c[1];
                    }
                    // 当undefined时候怎么处理
                }
            },
            deleteCookie: function(name, value) {
                var date = new Date();
                date.setTime(date.getTime() - 1000);
                this.setCookie(name, value, date.toGMTString(), "", "", "");
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
