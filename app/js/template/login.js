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
            '<div class="login-panel">',
                '<input class="login-name" v-model="loginname" placeholder="username" maxlength="14">',
                '<input class="login-pwd" v-model="loginpwd" placeholder="password" maxlength="12">',
                '<button class="login-submit" v-on:click="loginConfirm()">Login</button>',
                '<div class="case-number">测试账号:admin 测试密码: admin</div>',
            '</div>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
