/**
 * @fileoverview 后台管理个人信息模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/24
 */
define('template/admin/info', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
        var tpl = [
                '<div class="ad-admin-manage-wrap">',
                    '<div class="tips">',
                        '<span><i class="glyphicon glyphicon-user"></i> 用户信息-修改管理员信息</span>',
                    '</div>',
                    '<div class="wrap-info clearfix">',
                        '<div class="info-sidebar">',
                            '<ul class="list-group" @click="switchBar">',
                                '<li :class="{visited:visitedNum == 1}">基础信息</li>',
                                '<li :class="{visited:visitedNum == 2}">修改密码</li>',
                            '</ul>',
                        '</div>',
                        '<div class="info-main">',
                            '<div v-if="visitedNum==1" class="base-info">',
                                '<div v-if="!showEditInfo" class="info-headinfo">',
                                    '<span @click="editInfo" class="edit-link">编辑</span>',
                                    '<div class="info-avatar">',
                                        '<img :src="imgsrc" alt="img is gone">',
                                    '</div>',
                                    '<div class="info-nickname">{{nickname}}</div>',
                                '</div>',
                                '<div v-else class="edit-info">',
                                    '<div class="info-avatar">',
                                        '<div @click="clickInput" class="info-img">',
                                            '<img :src="imgsrc">',
                                        '</div>',
                                        '<input @change="uploadImg" type="file" style="display:none" ref="input">',
                                        '<div class="edit-username">',
                                            '<input type="text" v-model="inputName" placeholder="请输入您的昵称">',
                                            '<em v-if="showNicknameErr&&showNameErr" class="err">昵称不能为空</em>',
                                        '</div>',
                                        '<div class="edit-confirm">',
                                            '<a @click="saveName" href="javascript:;">保存</a>',
                                            '<a @click="editInfo" href="javascript:;">取消</a>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                            '<div v-if="visitedNum==2" class="modify-pswd">',
                                '<dl v-if="!showModifyPwOK">',
                                    '<dt>',
                                        '<p>当前账号：{{nickname}}</p>',
                                    '</dt>',
                                    '<dd>',
                                        '<input type="password" v-model="oldPswd" @input="showPwErr(1)" placeholder="请输入当前密码">',
                                        '<span v-if="errTip.one" class="info-err">请输入6-16位密码，字母区分大小写</span>',
                                        '<span v-if="errTip.pswdErr" class="info-err">原密码输入错误，请核对后再输入</span>',
                                    '<dd>',
                                        '<input type="password" v-model="newPswd" @input="showPwErr(2)" placeholder="请输入新密码">',
                                        '<span v-if="errTip.two" class="info-err">请输入6-16位密码，字母区分大小写</span>',
                                    '</dd>',
                                    '<dd>',
                                        '<input type="password" v-model="confirmPswd" @input="showPwErr(3)" placeholder="确认新密码">',
                                        '<span v-if="errTip.three" class="info-err">两次输入的密码不一致，请重新输入</span>',
                                    '</dd>',
                                    '<dd>',
                                        '<input @click="savePswd" type="submit" value="保存">',
                                    '</dd>',
                                '</dl>',
                                '<div v-else class="updatePw">',
                                '<h3>修改密码成功，请重新登录</h3>',
                                    '<h4>',
                                        '<span>{{countdown}}</span>s后自动退出',
                                    '</h4>',
                                    '<a href="javascript:;" @click="loginout()" class="modifyPw-btn">直接退出</a>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
                '</div>'
        ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
