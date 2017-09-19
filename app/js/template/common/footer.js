/**
 * @fileoverview 页面底部
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */
define('template/common/footer', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="footer" v-bind:class="{fixedfooter:isActive}">',
            '<p>京ICP备16014645号-1</p>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
