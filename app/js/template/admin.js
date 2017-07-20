/**
 * @fileoverview 后台管理模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/18
 */
define('template/admin', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div>',
            '<div class="admin-header">',
                '<div class="ad-title col-md-2">博客后台</div>',
                '<div class="ad-info">',
                    '<div v-on:click="isDisplayMenu()">',
                        '<img src="../img/avatar.png" alt="avatar">',
                        '<span class="avatarName">李寻欢</span>',
                    '</div>',
                    '<ul class="admsg" v-show="isShowMenu">',
                        '<li><a href="#">设置</a></li>',
                        '<li role="separator" class="divider"></li>',
                        '<li><a>退出登录</a></li>',
                    '</ul>',
                '</div>',
            '</div>',
            '<aside class="admin-sidebar col-md-2" v-if="isCollapse">',
                '<ul class="ad-sidebar-normal">',
                    '<li><i class="glyphicon glyphicon-list-alt"></i><span>发表文章</span>',
                    '</li>',
                '</ul>',
                '<div class="ad-sidebar-footer">',
                    '<span v-on:click="isSidebar()"><i class="glyphicon glyphicon-circle-arrow-left"></i></span>',
                '</div>',
            '</aside>',
            '<aside class="admin-sidebar" v-else>',
                '<ul class="ad-sidebar-collapse">',
                    '<li><span><i class="glyphicon glyphicon-list-alt"></i></span></li>',
                '</ul>',
                '<div class="ad-sidebar-footer">',
                    '<span v-on:click="isSidebar()"><i class="glyphicon glyphicon-circle-arrow-right"></i></span>',
                '</div>',
            '</aside>',
            '<section class="admin-content col-md-10">',
                '<div class="ad-editor-wrap">',
                    '<div class="tips">',
                        '<span><i class="glyphicon glyphicon-list-alt"></i> 写文章</span>',
                    '</div>',
                    '<div class="ad-header input-group-lg">',
                        '<input type="text" class="input-h form-control">',
                    '</div>',
                    '<div class="ad-editor"></div>',
                '</div>',
            '</section>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
