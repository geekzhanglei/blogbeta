/**
 * @fileoverview 页面底部
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */
define('template/common/header', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<nav class="navbar navbar-default nav-bgcolor">',
            '<div class="navbar-header">',
                '<a href="javascript:;" class="navbar-brand">测试博客</a>',
                '<button class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">',
                    '<span class="sr-only">Toggle navigation</span>',
                    '<span class="icon-bar"></span>',
                    '<span class="icon-bar"></span>',
                    '<span class="icon-bar"></span>',
                '</button>',
            '</div>',
            '<div class="collapse navbar-collapse">',
                '<ul class="nav navbar-nav navbar-right">',
                    '<li><a href="#">留言板</a></li>',
                    '<li><a href="#">关于</a></li>',
                '</ul>',
            '</div>',
        '</nav>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
