/**
 * @fileoverview 后台管理个人信息组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/24
 */

define('comp/admin/info', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/info');
    var router = require('mods/router');
    var bus = require('mods/bus');
    var vars = require('comp/util/vars');

    var data = {
        visitedNum: 1,
        showEditInfo: false,
        nickname: '管理员',
        inputName: '',
        showNameErr: false,
        showModifyPwOK: false,
        imgsrc: "../img/avatar.png",
        errTip: {
            one: false,
            two: false,
            three: false,
            pswdErr: false
        },
        oldPswd: '',
        newPswd: '',
        confirmPswd: '',
        countdown: 5,
        file: ''
    };

    var comp = Vue.component('blog-info', {
        template: tpl,
        data: function() {
            return data;
        },
        computed: {
            showNicknameErr: function() {
                if (this.showNameErr && this.inputName) {
                    return false;
                } else {
                    return true;
                }
            },
            countdownJump: function() {
                console.log(typeof this.countdown);
                console.log('测试')
                if (!this.countdown) {
                    this.countdown = 5;
                    this.loginout();
                }
            }
        },
        methods: {
            switchBar: function(e) {
                var name = e.target.innerText;
                this.showEditInfo = false;
                switch (name) {
                    case "基础信息":
                        this.visitedNum = 1;
                        break;
                    case "修改密码":
                        this.visitedNum = 2
                        break;
                    default:
                        break;
                }
            },
            editInfo: function() {
                this.showNameErr = false;
                this.showEditInfo = !this.showEditInfo;
                this.inputName = "";
            },
            saveName: function() {
                if (this.inputName) {
                    // 请求接口
                    this.nickname = this.inputName;
                    // 请求头像接口
                    // xhr2标准实现的FormData接口通过ajax上传二进制文件信息
                    var formdata = new FormData();
                    var ajax = new XMLHttpRequest();
                    formdata.append('headImg', this.file);
                    formdata.append('nickname', this.nickname);
                    formdata.append('token', window.localStorage.token);
                    console.log(formdata.get('headImg'))
                    ajax.open('POST', vars.url + '/admin/modityAdministerInfo', true);
                    ajax.send(formdata);
                    ajax.onreadystatechange = function(res) {
                        if (ajax.readyState == 4) {
                            if (ajax.status == 200) {
                                // 预览放在这里
                                console.log(JSON.parse(ajax.responseText).result.data);
                            } else {
                                console.log(JSON.parse(ajax.responseText).result.data);
                            }
                        }
                    }
                    // 更新个人信息到页眉右上角
                    bus.$emit('info', this.nickname, this.imgsrc);
                    this.showEditInfo = false;
                } else {
                    this.showNameErr = true;
                }
            },
            clickInput: function() {
                this.$refs.input.click();
            },
            uploadImg: function(e) {
                this.file = e.target.files[0];
                // 图片预览
                this.imgsrc = window.URL.createObjectURL(this.file);
            },
            showPwErr: function(n) {
                switch (n) {
                    case 1:
                        if (this.oldPswd.length < 6 || this.oldPswd.length > 16) {
                            this.errTip.pswdErr = false;
                            this.errTip.one = true;
                        } else {
                            this.errTip.one = false;
                        }
                        break;
                    case 2:
                        if (this.newPswd.length < 6 || this.newPswd.length > 16) {
                            this.errTip.two = true;
                        } else {
                            this.errTip.two = false;
                        }
                        break;
                    case 3:
                        if (this.newPswd != this.confirmPswd) {
                            this.errTip.three = true;
                        } else {
                            this.errTip.three = false;
                        }
                        break;
                    default:
                        break;
                }
            },
            savePswd: function() {
                var _this = this;
                var bool = this.errTip.one && this.errTip.two && this.errTip.three;
                if (!bool) {
                    if (_this.oldPswd == _this.newPswd) {
                        alert('新密码不能与旧密码相同')
                    }
                    // 发送原密码和新密码，原密码是否正确，不正确给提示
                    $.ajax({
                        url: vars.url + '/admin/modifyPassword',
                        dataType: 'json',
                        type: 'POST',
                        data: {
                            token: window.localStorage.token,
                            password: Base64.encode(_this.oldPswd),
                            newpassword: Base64.encode(_this.newPswd)
                        },
                        success: function(res) {
                            if (res.result.status == 2) {
                                _this.errTip.pswdErr = true;

                                console.log(res.result.data)
                            } else if (res.result.status == 1) {
                                console.log(res.result.data)
                                _this.oldPswd = "";
                                _this.newPswd = "";
                                _this.confirmPswd = "";
                                _this.showModifyPwOK = true;
                                _this.countStart(_this.countdown);
                            } else {
                                _this.errTip.pswdErr = true;
                                console.log(res.result.data)
                            }
                        }
                    })
                }
            },
            countStart: function(n) {
                var timeId;
                var _this = this;
                for (var i = 1; i <= n; i++) {
                    timeId = setTimeout(function() {
                        _this.countdown -= 1;
                        console.log(_this.countdown);
                        if (_this.countdown == 0) {
                            _this.loginout();
                        }
                    }, 1000 * i);
                }
            },
            loginout: function() {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                // 通知后台注销
                $.ajax({
                    url: vars.url + '/admin/loginout',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        console.log('请求成功')
                        if (res.stat) {
                            // 清除本地token
                            window.localStorage.clear();
                            router.replace({
                                path: '/login'
                            });
                        }
                    },
                    error: function() {
                        console.log('接口请求失败');
                    }
                });
            }
        },
        mounted: function() {
            var _this = this;
            _this.showModifyPwOK = false;
            _this.visitedNum = 1;
            bus.$on("downloadInfo", function(res) {
                _this.nickname = res.name;
                _this.imgsrc = vars.url + res.img;
            })
        }
    });
    return comp;
});
