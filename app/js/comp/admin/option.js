/**
 * @fileoverview 常用选项组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/11/02
 */

define('comp/admin/option', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/option');
    var $ = require('jquery');
    var router = require('mods/router');
    var data = {
        selectedArtPage: 1,
        selectedMsgPage: 1,
        artPageSize: 5,
        msgPageSize: 5,
        msgNickname: '管理员',
        replyNickname: '小管理员'
    };

    var comp = Vue.component('blog-option', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            changeStatus: function(e, n) {
                if (n == 1) {
                    e.target.value == 1 ? this.selectedArtPage = 1 : this.selectedArtPage = 2;
                } else {
                    e.target.value == 1 ? this.selectedMsgPage = 1 : this.selectedMsgPage = 2;
                }
            },
            changePageNum: function(e, n) {
                if (n == 1) {
                    this.artPageSize = e.target.value;
                } else {
                    this.msgPageSize = e.target.value;
                }
            },
            modifyName: function(e, n) {
                if (n == 1) {
                    this.msgNickname = e.target.value;
                } else {
                    this.replyNickname = e.target.value;
                }
            },
            saveConfig: function() {
                // 空字符处理

                // 传递接口，更新数据
            }
        },
        mounted: function() {}
    });
    return comp;
});
