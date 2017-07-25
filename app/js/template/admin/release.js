/**
 * @fileoverview 后台管理模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */
define('template/admin/release', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div>',
            '<div class="ad-editor-wrap">',
                '<div class="tips">',
                    '<span><i class="glyphicon glyphicon-list-alt"></i>  写文章</span>',
                '</div>',
                '<div class="ad-header input-group-lg">',
                    '<input type="text" class="input-h form-control" v-model="title" autofocus>',
                '</div>',
                '<div class="ad-editor"></div>',
            '</div>',
            '<textarea id="adminText" ref="adminText"></textarea>',
            '<button class="btn btn-default pull-right" @click="saveArticle()">确认发表</button>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
