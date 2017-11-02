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
                '<div class="tips">',
                '<span><i class="glyphicon glyphicon-th-large"></i> 选项</span>',
                '</div>',
                '<form class="form-inline clearfix">',
                    '<div class="form-group col-sm-6">',
                        '<label for="msgAdminSel" class="control-label">是否分页</label>',
                        '<select id="msgAdminSel" class="form-control" v-model="selectedPage" @change="changeStatus">',
                            '<option value="1">分页</option>',
                            '<option value="2">不分页</option>',
                        '</select>',
                    '</div>',
                    '<div class="form-group col-sm-6">',
                        '<label for="pagesize" class="control-label">每页条数</label>',
                        '<input type="text" id="pagesize" class="form-control" :disabled="selectedPage==2" @input="changePageNum" placeholder="输入整数（默认值5）">',
                    '</div>',
                '</form>',
                '<div class="tips">',
                    '<span><i class="glyphicon glyphicon-menu-hamburger"></i> 列表</span>',
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
                                    '<td>{{item.title}}</td>',
                                    '<td>{{item.username}}</td>',
                                    '<td>{{transferTime(item.created_at)}}</td>',
                                    '<td>{{item.markNum}}</td>',
                                '</tr>',
                                '<tr v-if="item.showComments">',
                                    '<th>评论id</th>',
                                    '<th>内容</th>',
                                    '<th>作者</th>',
                                    '<th>创建时间</th>',
                                    '<th>操作</th>',
                                '</tr>',
                                '<tr class="active" v-if="item.showComments" v-for="inner in item.marks">',
                                    '<td>{{inner.id}}</td>',
                                    '<td>{{inner.content}}</td>',
                                    '<td>{{inner.nickname}}</td>',
                                    '<td>{{transferTime(inner.create_time)}}</td>',
                                    '<td><div>',
                                        '<button v-if="inner.status == 1" class="btn btn-sm btn-success" @click="deleteCet(inner,inner.id)">删除</button>',
                                        '<button v-else class="btn btn-sm btn-danger">已删除</button>',
                                    '</div></td>',
                                '</tr>',
                        '</tbody>',
                    '</table>',
                '</div>',
                '<div v-if="showPages" class="blog-page">',
                    '<paging v-bind:datasource="pagingData"></paging>',
                '</div>',
            '</div>'
        ].join('');
        /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
