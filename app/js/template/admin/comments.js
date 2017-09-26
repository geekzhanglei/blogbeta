/**
 * @fileoverview 后台管理模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */
define('template/admin/comments', function(require, exports, module) {

    /* beautify ignore:start */
        /* eslint-disable */
        var tpl = [
            '<div class="ad-admin-manage-wrap">',
                '<div class="tips">',
                    '<span><i class="glyphicon glyphicon-wrench"></i> 评论管理-删除文章评论</span>',
                '</div>',
                '<div class="comments-table table-responsive">',
                    '<table class="table table-hover">',
                        '<thead>',
                            '<tr class="info">',
                                '<th>ID</th>',
                                '<th>文章名</th>',
                                '<th>作者</th>',
                                '<th>创建时间</th>',
                                '<th>评论数</th>',
                            '</tr>',
                        '</thead>',
                        '<tbody v-for="(item,index) in items">',
                                '<tr class="success" @click="showCom(item,index)">',
                                    '<td>{{item.id}}</td>',
                                    '<td>{{item.article}}</td>',
                                    '<td>{{item.author}}</td>',
                                    '<td>{{item.time}}</td>',
                                    '<td>{{item.nums}}</td>',
                                '</tr>',
                                '<tr v-if="item.showComments">',
                                    '<th>评论id</th>',
                                    '<th>内容</th>',
                                    '<th>作者</th>',
                                    '<th>创建时间</th>',
                                    '<th>操作</th>',
                                '</tr>',
                                '<tr class="active" v-if="item.showComments" v-for="inner in item.cets">',
                                    '<td>{{inner.id}}</td>',
                                    '<td>{{inner.cont}}</td>',
                                    '<td>{{inner.author}}</td>',
                                    '<td>{{inner.time}}</td>',
                                    '<td><div>',
                                        '<button v-if="inner.status ===\'删除\'" class="btn btn-sm btn-success" @click="deleteCet(inner,inner.id)">{{inner.status}}</button>',
                                        '<button v-else class="btn btn-sm btn-danger">{{inner.status}}</button>',
                                    '</div></td>',
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
