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
                '<div class="admin-title"><a href="https://blog.feroad.com">传送门</a></div>',
                '<div class="admin-info">',
                    '<div class="display-menu">',
                    '<img :src="imgsrc">',
                    '<span class="avatarName">{{nickname}}</span>',
                    '</div>',
                    '<div class="admsg">',
                    '<i class="arrow"></i>',
                    '<ul>',
                        '<li><router-link :to="{name: \'info\'}" replace>设置</router-link></li>',
                        '<li role="separator" class="divider"></li>',
                        '<li><a @click="loginout">退出登录</a></li>',
                    '</ul>',
                    '</div>',
                '</div>',
            '</div>',
            '<div class="admin-wrap">',
            '<aside class="admin-sidebar" v-bind:class="{sidebarWidth:isCollapse}">',
                     '<ul class="admin-sidebar-normal" v-if="isCollapse">',
                        '<router-link tag="li" :to="{name: \'info\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-user"></i><span>个人信息</span></a>',
                        '</router-link>',
                        '<router-link tag="li" :to="{name: \'option\'}"" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-th"></i><span>常用选项</span></a>',
                        '</router-link>',
                        '<li class="admin-sidebar-li-a" @click="toggleAticleAdm"><i class="glyphicon glyphicon-glyphicon glyphicon-list-alt"></i><span>文章管理</span>',
                        '</li>',
                        '<router-link tag="li" v-if="articleAdm" class="admin-sidebar-inner-li" :to="{name: \'release\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-edit"></i><span>发表文章</span></a>',
                        '</router-link>',
                        '<router-link tag="li" v-if="articleAdm" class="admin-sidebar-inner-li" :to="{name: \'delete\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-trash"></i><span>删除文章</span></a>',
                        '</router-link>',
                        '<router-link tag="li" :to="{name: \'comments\'}"" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-wrench"></i><span>评论管理</span></a>',
                        '</router-link>',
                        '<router-link tag="li" :to="{name: \'adminmsg\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-pencil"></i><span>留言管理</span></a>',
                        '</router-link>',
                    '</ul>',
                    '<ul class="admin-sidebar-collapse" v-else>',
                        '<router-link tag="li" :to="{name: \'info\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-user"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" :to="{name: \'option\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-th"></i></a>',
                        '</router-link>',
                        '<li class="admin-sidebar-li-a" @click="toggleAticleAdm"><i class="glyphicon glyphicon-glyphicon glyphicon-list-alt"></i></li>',
                        '<router-link tag="li" v-if="articleAdm" class="admin-sidebar-inner-li" :to="{name: \'release\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-edit"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" v-if="articleAdm" class="admin-sidebar-inner-li" :to="{name: \'delete\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-trash"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" :to="{name: \'comments\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-wrench"></i></a>',
                        '</router-link>',
                        '<router-link tag="li" :to="{name: \'adminmsg\'}" replace><a class="admin-sidebar-li-a"><i class="glyphicon glyphicon-pencil"></i></a>',
                        '</router-link>',
                    '</ul>',
                    '<div class="admin-sidebar-footer">',
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
                    '<router-view name="option"></router-view>',
                '</section>',
            '</div>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
