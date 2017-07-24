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
                    '<div class="display-menu">',
                        '<img class="xxx" src="../img/avatar.png" alt="avatar">',
                        '<span class="avatarName">李寻欢</span>',
                    '</div>',
                    '<ul class="admsg">',
                        '<li><a href="#">设置</a></li>',
                        '<li role="separator" class="divider"></li>',
                        '<li><router-link to="/login" replace>退出登录</router-link></li>',
                    '</ul>',
                '</div>',
            '</div>',
            '<aside class="admin-sidebar" v-bind:class="{sidebarWidth:isCollapse}">',
                '<ul class="ad-sidebar-normal" v-if="isCollapse">',
                    '<li><i class="glyphicon glyphicon-list-alt"></i><span>发表文章</span>',
                    '</li>',
                '</ul>',
                '<ul class="ad-sidebar-collapse" v-else>',
                    '<li><span><i class="glyphicon glyphicon-list-alt"></i></span></li>',
                '</ul>',
                '<div class="ad-sidebar-footer">',
                    '<span v-on:click="isSidebar()" v-if="isCollapse"><i class="glyphicon glyphicon-circle-arrow-left"></i></span>',
                    '<span v-on:click="isSidebar()" v-else><i class="glyphicon glyphicon-circle-arrow-right"></i></span>',
                '</div>',
            '</aside>',
            '<section class="admin-content" v-bind:class="{adminContWidth:isCollapse}">',
                '<div class="ad-editor-wrap">',
                    '<div class="tips">',
                        '<span><i class="glyphicon glyphicon-list-alt"></i> 写文章</span>',
                    '</div>',
                    '<div class="ad-header input-group-lg">',
                        '<input type="text" class="input-h form-control" v-model="title" autofocus>',
                    '</div>',
                    '<div class="ad-editor"></div>',
                '</div>',
                '<textarea id="adminText" ref="adminText"></textarea>',
                '<button class="btn btn-default pull-right" @click="saveArticle()">确认发表</button>',
            '</section>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
