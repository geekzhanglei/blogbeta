/**
 * @fileoverview 留言板组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */

define('comp/msg', function(require, exports, module) {
    var Vue = require('vue');
    var $ = require('jquery');
    var tpl = require('template/msg');

    var atom = require('comp/util/atom');
    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    // 私有变量
    var _l, _q;

    var data = {
        //输入内容与名字
        inputMsg: '',
        inputName: '',
        // 显示留言列表
        showMsgCont: true,
        // 留言列表
        list: [],
        // 非法留言提示
        errTips: '',
        //模态框关闭参数
        isActive: '',
        // 留言和回复的默认用户名
        phcont: '土包子',
        // 每页条数
        pagesize: 4,
        // 分页组件数据
        showPages: true,
        pagingData: {
            total: 1,
            pages: [1],
            page: 1,
            page_total: 1
        },
        clickFlag: 1
    };

    var comp = Vue.component('blog-msg', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 回复按钮
            displayInput: function(item) {
                if (item.isAnswer === "回复") {
                    this.closeAnswerList(item);
                    item.isAnswer = "取消回复";
                    item.isShowInput = true;
                } else {
                    item.isAnswer = "回复";
                    item.isShowInput = false;
                }
            },
            // 回复的回复按钮
            displayReplyInput: function(item, index) {
                if (item.reply[index].isShowReplyInput === false) {
                    // 关闭回复留言框
                    item.isAnswer = "回复";
                    item.isShowInput = false;
                    this.closeAnswerList(item);
                    // 自身逻辑
                    item.reply[index].isAnswer = "取消回复";
                    item.reply[index].isShowReplyInput = true;
                } else {
                    item.reply[index].isShowReplyInput = false;
                    item.reply[index].isAnswer = "回复";
                }
            },
            // 展开回复列表
            displayAnswers: function(item) {
                if (item.isUnfoldAnswers === "查看回复") {
                    this.closeAnswerList(item);
                    item.isUnfoldAnswers = "收起回复";
                    item.isShowAnswers = true;
                } else {
                    item.isUnfoldAnswers = "查看回复";
                    item.isShowAnswers = false;
                }
            },
            // 关闭回复列表清空回复数据
            closeAnswerList: function(item) {
                _l = item.reply.length;
                if (_l) {
                    for (_q = 0; _q < _l; _q++) {
                        item.reply[_q].isShowReplyInput = false;
                        item.reply[_q].isAnswer = "回复";
                    }
                }
                item.replyName = "";
                item.replyCont = "";
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
                            _this.list = res.result.data;
                            _this.pagingData.total = res.result.rows;
                            _this.pagingData.page = e;
                            _this.showPages = true;
                            _this.showMsgCont = true;
                        } else {
                            _this.list = [];
                            _this.pagingData.total = 0;
                            _this.pagingData.page = 0;
                            _this.showPages = false;
                            _this.showMsgCont = false;
                        }
                        _this.init();
                    },
                    error: function(e) {
                        _this.showMsgCont = false;
                        _this.showPages = false;
                        console.log("接口请求失败，错误码：" + e.status);
                    }
                });
            },
            // 时间戳转换
            transferTime: function(unixTime) {
                return atom.transfer(unixTime);
            },
            // 添加回复
            addReply: function(id, item, index) {
                var _this = this;
                var data = {};
                item.replyErr = "";
                if (item.replyCont === "") {
                    item.replyErr = "总得写点啥吧";
                    return;
                }
                // 默认名字
                if (item.replyName === "") {
                    item.replyName = this.phcont;
                }
                if (typeof(index) !== "undefined") {
                    data = {
                        'username': item.replyName,
                        'content': item.replyCont,
                        'comment_id': id,
                        'reply_id': item.reply[index].rId,
                        'reply_type': 2,
                        'reply_username': item.reply[index].replyUserName
                    };
                } else {
                    data = {
                        'username': item.replyName,
                        'content': item.replyCont,
                        'comment_id': id,
                        'reply_id': id,
                        'reply_type': 1,
                        'reply_username': item.userName
                    };
                }
                $.ajax({
                    url: 'http://blog.feroad.com/reply/add',
                    type: 'POST',
                    dataType: 'json',
                    data: data,
                    success: function(res) {
                        console.log(res.result.data);
                        item.replyName = "";
                        item.replyCont = "";
                        // 刷新列表
                        _this.reqMsgData(_this.pagingData.page);
                    },
                    error: function(err) {
                        console.log(err.result.data);
                    }
                });
            },
            // 增加留言
            sendComment: function() {
                var _this = this;
                this.errTips = "";

                var commentLength = _this.inputMsg.length;
                var comNameLength = _this.inputName.length;
                if (commentLength === 0 || commentLength > 400 || comNameLength > 10) {
                    this.errTips = "总得写点啥吧";
                    return;
                }

                // 默认名字为东方三侠
                if (this.inputName === "") {
                    this.inputName = this.phcont;
                }

                $.ajax({
                    url: 'http://blog.feroad.com/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        'content': _this.inputMsg,
                        'username': _this.inputName
                    },
                    success: function(res) {
                        console.log(res.result.data);
                        // 清空留言输入框
                        _this.inputMsg = "";
                        // 刷新列表
                        _this.reqMsgData(_this.pagingData.page);
                    },
                    error: function(err) {
                        console.log(err.result.data);
                    }
                });

                // 成功之后关闭模态框
                this.isActive = 'modal';
            },
            // 点赞
            support: function(item) {
                var _this = this,
                    bool = false,
                    storage = window.localStorage,
                    id = item.id || item.rId,
                    category;
                // 判断点击是评论1还是回复2
                item.id ? typeid = 1 : typeid = 2;
                if (item.isVisited) {
                    item.isVisited = false;
                    if (item.commentId) {
                        window.localStorage.removeItem('msgMarkRid' + item.rId);
                    } else {
                        window.localStorage.removeItem('msgMarkId' + item.id);
                    }
                } else {
                    item.isVisited = true;
                    // 根据commentId判断是回复的回复还是评论的回复
                    if (item.commentId) {
                        storage.setItem('msgMarkRid' + item.rId, item.rId);
                    } else {
                        storage.setItem('msgMarkId' + item.id, item.id);
                    }
                }
                item.agrees = Number(item.agrees);
                item.isVisited ? item.agrees += 1 : item.agrees -= 1;
                item.isVisited ? category = 1 : category = 2;

                // 请求接口，修改点赞信息
                if (this.clickFlag) {
                    this.clickFlag = 0;
                    // 请求接口
                    $.ajax({
                        url: 'http://blog.feroad.com/agree/' + id,
                        data: {
                            type: typeid,
                            category: category
                        },
                        dataType: 'json',
                        success: function(res) {
                            console.log(res.result.data);
                        }
                    })
                    var tId = setTimeout(function() {
                        _this.clickFlag = 1;
                    }, 1000);
                }
            },
            // 初始化数据与分页组件
            init: function() {
                var _this = this;
                var i, j, replyLen, id, rId, listLen = this.list.length;
                var page_total,
                    page = _this.pagingData.page;
                var _temp = parseInt(_this.pagingData.total) / this.pagesize;
                page_total = Math.ceil(_temp);

                // 初始化每个评论下会用到的私有属性
                for (i = 0; i < listLen; i++) {
                    Vue.set(this.list[i], 'isAnswer', '回复');
                    Vue.set(this.list[i], 'isUnfoldAnswers', '查看回复');
                    Vue.set(this.list[i], 'isShowInput', false);
                    Vue.set(this.list[i], 'isShowAnswers', false);
                    Vue.set(this.list[i], 'replyErr', "");
                    Vue.set(this.list[i], 'replyName', "");
                    Vue.set(this.list[i], 'replyCont', "");
                    Vue.set(this.list[i], 'isVisited', false);
                    // 回复用到的私有属性，开启关闭回复框用
                    replyLen = this.list[i].reply.length;
                    if (replyLen) {
                        for (j = 0; j < replyLen; j++) {
                            Vue.set(this.list[i].reply[j], 'isShowReplyInput', false);
                            Vue.set(this.list[i].reply[j], 'isAnswer', '回复');
                            Vue.set(this.list[i].reply[j], 'isVisited', false);
                        }
                    }
                }
                // 判断当前游客有的点赞记录
                for (i = 0; i < listLen; i++) {
                    id = this.list[i].id;
                    if (id == window.localStorage['msgMarkId' + id]) {
                        this.list[i].isVisited = true;
                    }
                    replyLen = this.list[i].reply.length;
                    if (replyLen) {
                        for (j = 0; j < replyLen; j++) {
                            rId = this.list[i].reply[j].rId;
                            if (rId == window.localStorage['msgMarkRid' + rId]) {
                                this.list[i].reply[j].isVisited = true;
                            }
                        }
                    }
                }
                // 获取分页组件数据
                this.pagingData = handlePage({
                    page: page,
                    total: _this.pagingData.total,
                    page_total: page_total,
                    clickPageCb: function(targetPage) {
                        _this.reqMsgData(targetPage);
                    }
                });
            }
        },
        mounted: function() {
            console.log('msg加载');
            var _this = this;
            this.reqMsgData(_this.pagingData.page);
        }
    });
    return comp;
});
