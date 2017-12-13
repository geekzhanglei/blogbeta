/**
 * @fileoverview 后台管理模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */
define('template/admin/delete', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
            '<div class="admin-admin-manage-wrap">',
                '<div class="tips">',
                    '<span><i class="glyphicon glyphicon-trash"></i> 删除文章-删除不需要的文章</span>',
                '</div>',
                '<ul class="manage-articles clearfix">',
                    '<li v-for="item in items">',
                        '<h4 class="adm-title" :title="item.title">{{item.title}}</h4>',
                        '<div class="adm-meta">{{transferTime(item.createTime)}}</div>',
                        '<div class="adm-cont" v-html="handleIntro(item.introduction)"></div>',
                        // '<div class="adm-footer clearfix"><button class="btn btn-default" v-on:click="deleteArticle(item.id)">删除文章</button></div>',
                        '<div class="adm-footer clearfix"><button class="btn btn-default" data-toggle="modal" data-target="#confirmTip" @click="triggerModal(item.id)">删除文章</button></div>',
                    '</li>',
                '</ul>',
                // modal
                '<div id="confirmTip" class="modal fade" tabindex="-1" role="dialog">',
                    '<div class="modal-dialog modal-sm" role="document">',
                        '<div class="modal-content">',
                            '<div class="modal-header">',
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
                                '<h4 class="modal-title">删除警告</h4>',
                            '</div>',
                            '<div class="modal-body">',
                                '<h5>确认删除此篇文章吗？该操作不可恢复</h5>',
                            '</div>',
                            '<div class="modal-footer">',
                                '<button type="button" class="btn btn-default" data-dismiss="modal">再想想</button>',
                                '<button type="button" class="btn btn-danger" @click="deleteArticle">我确定</button>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
