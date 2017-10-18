/**
 * @fileoverview 管理评论模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/17
 */
define('template/admin/msg', function(require, exports, module) {

    /* beautify ignore:start */
            /* eslint-disable */
            var tpl = [
                '<div class="ad-admin-manage-wrap">',
                    '<div class="tips">',
                        '<span><i class="glyphicon glyphicon-pencil"></i> 评论管理-删除文章评论</span>',
                    '</div>',
                    '<div class="comments-table table-responsive">',
                        '<table class="table table-hover">',
                            '<thead>',
                                '<tr class="info">',
                                    '<th>ID</th>',
                                    '<th>评论内容</th>',
                                    '<th>作者</th>',
                                    '<th>创建时间</th>',
                                    '<th>操作</th>',
                                '</tr>',
                            '</thead>',
                            '<tbody v-for="(item,index) in items">',
                                    '<tr class="success" @click="showMsg(item,index)">',
                                        '<td>{{item.id}}</td>',
                                        '<td>{{item.content}}</td>',
                                        '<td>{{item.userName}}</td>',
                                        '<td>{{transferTime(item.createTime)}}</td>',
                                        '<td><div>',
                                            '<button class="btn btn-sm btn-success" @click.stop="deleteAnswer(index,item.id)">删除</button>',
                                        '</div></td>',
                                    '</tr>',
                                    '<tr v-if="item.showMesg">',
                                        '<th>回复id</th>',
                                        '<th>回复内容</th>',
                                        '<th>回复作者</th>',
                                        '<th>回复对象</th>',
                                        '<th>回复时间</th>',
                                        '</tr>',
                                    '<tr class="active" v-if="item.showMesg" v-for="inner in item.reply">',
                                        '<td>{{inner.rId}}</td>',
                                        '<td>{{inner.content}}</td>',
                                        '<td>{{inner.replyUserName}}</td>',
                                        '<td>{{inner.toReplyUserName}}</td>',
                                        '<td>{{transferTime(inner.createTime)}}</td>',
                                    '</tr>',
                            '</tbody>',
                        '</table>',
                    '</div>',
                '</div>'
            ].join('');
            /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
