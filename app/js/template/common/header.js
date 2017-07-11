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
                    '<router-link tag="li" to="/list" class="h_article ani-menulist" exact>',
                        '<a>文章</a>',
                    '</router-link>',
                    '<router-link tag="li" to="/msg" class="h_msg ani-menulist" exact>',
                        '<a>留言板</a>',
                    '</router-link>',
                    '<router-link tag="li" to="/about" class="h_msg ani-menulist" exact>',
                        '<a>关于</a>',
                    '</router-link>',
                '</ul>',
            '</div>',
        '</nav>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
