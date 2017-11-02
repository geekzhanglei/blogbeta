/**
 * @fileoverview 常用选项模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/11/02
 */
define('template/admin/option', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="ad-admin-manage-wrap admin-options-wrap">',
            '<div class="tips">',
                '<span><i class="glyphicon glyphicon-th"></i> 常用选项-博客基本选项设置</span>',
            '</div>',
            '<div class="admin-options clearfix">',
                '<button class="option-save btn btn-primary" @click="saveConfig">保存设置</button>',
            '</div>',
            '<div class="tips">',
                '<span><i class="glyphicon glyphicon-th-large"></i> 文章列表设置</span>',
            '</div>',
            '<form class="form-inline clearfix">',
                '<div class="form-group col-sm-6">',
                    '<label for="msgAdminSel" class="control-label">是否分页</label>',
                    '<select id="msgAdminSel" class="form-control" @change="changeStatus($event,1)">',
                        '<option value="1">分页</option>',
                        '<option value="0">不分页</option>',
                    '</select>',
                '</div>',
                '<div class="form-group col-sm-6">',
                    '<label for="pagesize1" class="control-label">每页条数</label>',
                    '<input type="text" id="pagesize1" class="form-control" :disabled="selectedArtPage==2" @input="changePageNum($event,1)" placeholder="输入整数（当前值为5）">',
                '</div>',
            '</form>',
            '<div class="tips">',
                '<span><i class="glyphicon glyphicon-th-large"></i> 留言板设置</span>',
            '</div>',
            '<form class="form-inline clearfix">',
                '<div class="form-group col-sm-6">',
                    '<label for="pagesize2" class="control-label">是否分页</label>',
                    '<select id="pagesize2" class="form-control" @change="changeStatus($event,2)">',
                        '<option value="1">分页</option>',
                        '<option value="0">不分页</option>',
                    '</select>',
                '</div>',
                '<div class="form-group col-sm-6">',
                    '<label for="msgAdminInput" class="control-label">每页条数</label>',
                    '<input type="text" id="msgAdminInput" class="form-control" :disabled="selectedMsgPage==2" @input="changePageNum($event,2)" placeholder="输入整数（当前值为5）">',
                '</div>',
            '</form>',
            '<form class="form-inline clearfix">',
                '<div class="form-group col-sm-6">',
                    '<label for="msgName" class="control-label">留言默认昵称</label>',
                    '<input type="text" id="msgName" class="form-control" :disabled="selectedMsgPage==2" @input="modifyName($event,1)" placeholder="输入留言默认昵称">',
                '</div>',
                '<div class="form-group col-sm-6">',
                    '<label for="replyName" class="control-label">回复默认昵称</label>',
                    '<input type="text" id="replyName" class="form-control" :disabled="selectedMsgPage==2" @input="modifyName($event,2)" placeholder="输入回复默认昵称">',
                '</div>',
            '</form>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
