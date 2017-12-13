/**
 * @fileoverview 常用选项组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/11/02
 */

define('comp/admin/option', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/option');
    var router = require('mods/router');
    var data = {
        selectedArtPage: 1,
        selectedMsgPage: 1,
        artPageSize: 5,
        msgPageSize: 5,
        msgNickname: '管理员',
        replyNickname: '小管理员',
        saveConErr: false,
        saveConOK: false
    };

    var comp = Vue.component('blog-option', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            changeStatus: function(e, n) {
                if (n == 1) {
                    e.target.value == 1 ? this.selectedArtPage = 1 : this.selectedArtPage = 2;
                } else {
                    e.target.value == 1 ? this.selectedMsgPage = 1 : this.selectedMsgPage = 2;
                }
            },
            changePageNum: function(e, n) {
                var value = e.target.value;
                // 判断必须是整数
                if ((parseInt(value) == value) && (value > 0)) {
                    if (n == 1) {
                        this.artPageSize = value;
                    } else {
                        this.msgPageSize = value;
                    }
                }
            },
            modifyName: function(e, n) {
                if (n == 1) {
                    this.msgNickname = e.target.value;
                } else {
                    this.replyNickname = e.target.value;
                }
            },
            saveConfig: function() {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                this.modifyArtInfo();
                this.modifyMsgInfo();
            },
            modifyArtInfo: function() {
                var _this = this;
                // 更新文章接口数据
                $.ajax({
                    url: 'http://blogapi.feroad.com/admin/setDefaultArticlePages',
                    data: {
                        token: window.localStorage.token,
                        type: _this.selectedArtPage,
                        curpage: 1,
                        perpage: _this.artPageSize
                    },
                    type: 'POST',
                    dataType: 'json',
                    success: function(res) {
                        if (res.result.status) {
                            console.log('文章列表设置成功，返回：' + res.result.data);
                            _this.saveConErr = false;
                            _this.saveConOK = true;
                        } else {
                            _this.saveConOK = false;
                            _this.saveConErr = true;
                        }
                    },
                    error: function(res) {
                        _this.saveConOK = false;
                        _this.saveConErr = true;
                        console.log('接口请求失败，后台返回:' + res);
                    }
                })
            },
            modifyMsgInfo: function() {
                var _this = this;
                if (!this.replyNickname) {
                    this.replyNickname = "许攸";
                }
                if (!this.msgNickname) {
                    this.msgNickname = "荀彧";
                }
                // 更新留言板接口数据
                $.ajax({
                    url: 'http://blogapi.feroad.com/admin/setDefaultCommentInfos',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        token: window.localStorage.token,
                        type: _this.selectedMsgPage,
                        perpage: _this.msgPageSize,
                        defaultCommentName: _this.msgNickname,
                        defaultReplyName: _this.replyNickname
                    },
                    success: function(res) {
                        if (res.result.status) {
                            console.log("留言板内容设置成功，返回：" + res.result.data);
                            _this.saveConOK = true;
                            _this.saveConErr = false;
                        } else {
                            _this.saveConOK = false;
                            _this.saveConErr = true;
                        }
                    },
                    error: function(res) {
                        _this.saveConOK = false;
                        _this.saveConErr = true;
                        console.log('请求接口错误，返回:' + res.result.data);
                    }
                });
            }
        },
        created: function() {
            this.saveConErr = false;
            this.saveConOK = false;
        }
    });
    return comp;
});
