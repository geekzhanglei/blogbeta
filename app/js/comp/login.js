/**
 * @fileoverview 文章编辑发布页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */

define('comp/login', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/login');
    var $ = require('jquery');
    var router = require('mods/router');

    var data = {
        loginname: '',
        loginpwd: '',
        isErr: false,
        tips: 'tips：随便填，非空即可'
    };

    var comp = Vue.component('blog-login', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            loginConfirm: function() {
                if (this.loginname && this.loginpwd) {
                    this.tips = "tips：随便填，非空即可";
                    this.isErr = false;
                    // $.ajax({
                    //     url: '',
                    //     type: 'GET',
                    //     dataType: 'json',
                    //     success: function(res) {
                    //         console.log('成功');
                    router.replace({
                        path: 'admin'
                    });
                    //     },
                    //     error: function() {
                    //         console.log('失败');
                    //     }
                    // });
                } else {
                    // 错误信息提示
                    this.isErr = true;
                    this.tips = "帐号或密码不能为空";
                    return;
                }
            }
        },
        mounted: function() {
            console.log('加载login模块');
        }
    });
    return comp;
});
