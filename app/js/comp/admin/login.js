/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */

define('comp/admin/login', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/login');
    var router = require('mods/router');

    var data = {
        loginname: '',
        loginpwd: '',
        isErr: false,
        tips: '内测，仅允许管理员登陆'
    };

    var comp = Vue.component('blog-login', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            loginConfirm: function() {
                var _this = this;
                if (this.loginname && this.loginpwd) {
                    this.isErr = false;
                    $.ajax({
                        url: 'http://blog.feroad.com/admin/login',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            username: _this.loginname,
                            password: _this.loginpwd
                        },
                        success: function(res) {
                            console.log('成功');
                            if (res.stat) {
                                var storage = window.localStorage;
                                storage.setItem('token', res.token);
                                _this.loginname = '';
                                _this.loginpwd = '';
                                router.replace({
                                    path: 'admin'
                                });
                            } else {
                                _this.isErr = true;
                                _this.tips = "账号或密码错误";
                            }
                        },
                        error: function() {
                            console.log('接口请求失败');
                        }
                    });
                } else {
                    // 错误信息提示
                    this.isErr = true;
                    this.tips = "帐号或密码不能为空";
                    return;
                }
            },
            visitorLogin: function() {
                router.replace({
                    path: "/admin"
                })
            },
            init: function() {
                var _this = this;
                //判断是否登陆,请求后端验证token
                if (window.localStorage.token) {
                    $.ajax({
                        url: 'http://blog.feroad.com/admin/isLogin',
                        type: 'GET',
                        dataType: 'json',
                        data: {
                            token: window.localStorage.token,
                        },
                        success: function(res) {
                            if (res.stat) {
                                console.log(res.data);
                                _this.loginname = '';
                                _this.loginpwd = '';
                                router.replace({
                                    path: 'admin'
                                });
                            } else {
                                console.log('重新登陆');
                            }
                        },
                        error: function() {
                            console.log('接口请求失败');
                        }
                    });
                }
            }
        },
        mounted: function() {
            console.log('加载login模块');
            this.init();
        }
    });
    return comp;
});
