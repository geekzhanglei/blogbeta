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
                '<div class="ad-info btn-group">',
                    '<div class="dropdown-toggle" data-toggle="dropdown">',
                        '<img src="../img/avatar.png" alt="avatar">',
                        '<span class="avatarName">李寻欢</span>',
                    '</div>',
                    '<ul class="ad-msg dropdown-menu">',
                        '<li><a href="#">设置</a></li>',
                        '<li role="separator" class="divider"></li>',
                        '<li><a>退出登录</a></li>',
                    '</ul>',
                '</div>',
            '</div>',
            '<aside class="admin-sidebar">',
                '<ul class="ad-sidebar-normal" v-if="isCollapse" >',
                    '<li><i class="glyphicon glyphicon-list-alt"></i><span>发表文章</span>',
                    '</li>',
                '</ul>',
                '<ul class="ad-sidebar-collapse" v-else>',
                    '<li><span><i class="glyphicon glyphicon-list-alt"></i></span></li>',
                '</ul>',
                '<div class="ad-sidebar-footer">',
                    '<span v-if="isCollapse"><i class="glyphicon glyphicon-circle-arrow-left"></i></span>',
                    '<span v-else><i class="glyphicon glyphicon-circle-arrow-right"></i></span>',
                '</div>',
            '</aside>',
            '<section class="admin-content"></section>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
