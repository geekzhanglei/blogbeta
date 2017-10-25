/**
 * @fileoverview 后台管理模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/18
 */
define('template/admin/admin', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div>',
            '<div class="admin-header">',
                '<div class="ad-title"><a href="http://test.feroad.com">博客后台</a></div>',
                '<div class="ad-info">',
                    '<div class="display-menu">',
                        '<img class="xxx" src="../img/avatar.png" alt="avatar">',
                        '<span class="avatarName">李寻欢</span>',
                    '</div>',
                    '<div class="admsg">',
                    '<i class="arrow"></i>',
                    '<ul>',
                        '<li><a href="#">设置</a></li>',
                        '<li role="separator" class="divider"></li>',
                        '<li><a @click="loginout">退出登录</a></li>',
                    '</ul>',
                    '</div>',
                '</div>',
            '</div>',
            '<div class="admin-wrap">',
            // '<aside class="admin-sidebar">',
            '<aside class="admin-sidebar" v-bind:class="{sidebarWidth:isCollapse}">',
                     '<ul class="ad-sidebar-normal" v-if="isCollapse">',
                        '<router-link tag="li" to="info" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-user"></i><span>个人信息</span></a>',
                        '</router-link>',
                        '<router-link tag="li" to="release" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-edit"></i><span>发表文章</span></a>',
                        '</router-link>',
                        '<router-link tag="li" to="delete" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-trash"></i><span>删除文章</span></a>',
                        '</router-link>',
                        '<router-link tag="li" to="comments" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-wrench"></i><span>评论管理</span></a>',
                        '</router-link>',
                        '<router-link tag="li" to="msg" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-pencil"></i><span>留言管理</span></a>',
                        '</router-link>',
                    '</ul>',
                    '<ul class="ad-sidebar-collapse" v-else>',
                        '<router-link tag="li" to="info" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-user"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" to="release" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-edit"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" to="delete" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-trash"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" to="comments" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-wrench"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" to="msg" replace><a class="ad-sidebar-li-a"><i class="glyphicon glyphicon-pencil"></i></a>',
                        '</router-link>',
                    '</ul>',
                    '<div class="ad-sidebar-footer">',
                        '<span v-on:click="isSidebar()" v-if="isCollapse"><i class="glyphicon glyphicon-circle-arrow-left"></i></span>',
                        '<span v-on:click="isSidebar()" v-else><i class="glyphicon glyphicon-circle-arrow-right"></i></span>',
                    '</div>',
                '</aside>',
                '<section class="admin-content">',
                    '<router-view name="release"></router-view>',
                    '<router-view name="delete"></router-view>',
                    '<router-view name="comments"></router-view>',
                    '<router-view name="msg"></router-view>',
                    '<router-view name="info"></router-view>',
                '</section>',
            '</div>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
