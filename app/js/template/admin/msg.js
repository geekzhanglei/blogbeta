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
                                '<tr class="info" @click="sort">',
                                    '<th id="id">ID ',
                                        '<i id="id" v-if="bool" class="glyphicon glyphicon-sort-by-order"></i>',
                                        '<i id="id" v-else class="glyphicon glyphicon-sort-by-order-alt"></i>',
                                    '</th>',
                                    '<th id="content">评论内容 ',
                                        '<i id="content" v-if="bool" class="glyphicon glyphicon-sort-by-alphabet"></i>',
                                        '<i id="content" v-else class="glyphicon glyphicon-sort-by-alphabet-alt"></i>',
                                    '</th>',
                                    '<th id="userName">作者 ',
                                        '<i id="userName" v-if="bool" class="glyphicon glyphicon-sort-by-alphabet"></i>',
                                        '<i id="userName" v-else class="glyphicon glyphicon-sort-by-alphabet-alt"></i>',
                                    '</th>',
                                    '<th id="createTime">创建时间 ',
                                        '<i id="createTime" v-if="bool" class="glyphicon glyphicon-sort-by-order"></i>',
                                        '<i id="createTime" v-else class="glyphicon glyphicon-sort-by-order-alt"></i>',
                                    '</th>',
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
                    '<div v-if="showPages" class="blog-page">',
                        '<paging v-bind:datasource="pagingData"></paging>',
                    '</div>',
                '</div>'
            ].join('');
            /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
