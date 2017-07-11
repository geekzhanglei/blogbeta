/**
 * @fileoverview 布局模板，放路由到的内容
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/05
 */
define('template/layout', function(require, exports, module) {
    /* beautify ignore:start */
    /* eslint-disable */

    var tpl = [
            '<div>',
                '<slot name="header"></slot>',
                '<slot name="list"></slot>',
                '<slot name="article"></slot>',
                '<slot name="msg"></slot>',
                '<slot name="about"></slot>',
                '<slot name="footer"></slot>',
            '</div>'
        ].join("")

    /* beautify ignore:end */
    /* eslint-disable */
    module.exports = tpl;
});
