/**
 * @fileoverview 留言板模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */
define('template/login', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="login-wrap">',
            '<div class="login-title">博客管理后台</div>',
            '<div class="login-panel" @keyup.13="loginConfirm()">',
                '<input class="login-name" v-model="loginname" placeholder="username" maxlength="14">',
                '<input class="login-pwd" v-model="loginpwd" placeholder="password" maxlength="12" type="password">',
                '<button class="login-submit one" v-on:click="loginConfirm()">登录</button>',
                '<button class="login-submit two" v-on:click="visitorLogin()">游客登录</button>',
                '<div class="case-number" :class="{errTip:isErr}">{{tips}}</div>',
            '</div>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
