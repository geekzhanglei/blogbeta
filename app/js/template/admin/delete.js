/**
 * @fileoverview 后台管理模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */
define('template/admin/delete', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
            '<div class="ad-admin-manage-wrap">',
                '<div class="tips">',
                    '<span><i class="glyphicon glyphicon-list-alt"></i> 删除文章</span>',
                '</div>',
                '<ul class="manage-articles clearfix">',
                    '<li v-for="item in items">',
                        '<h4 class="adm-title" :title="item.title">{{item.title}}</h4>',
                        '<div class="adm-meta">{{transferTime(item.createTime)}}</div>',
                        '<div class="adm-cont" v-html="handleIntro(item.introduction)"></div>',
                        '<div class="adm-footer clearfix"><button class="btn btn-default" v-on:click="deleteArticle(item.id)">删除文章</button></div>',
                    '</li>',
                '</ul>',
                 '</div>',
            '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
