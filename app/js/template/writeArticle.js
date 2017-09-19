/**
 * @fileoverview 文章编辑模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/13
 */
define('template/writeArticle', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div id="wArticleWrap" class="container">',
            '<textarea id="inputArticle" v-model="inputArticle">测试</textarea>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
