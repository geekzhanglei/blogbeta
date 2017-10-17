/**
 * @fileoverview 后台管理页--留言管理
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/17
 */

define('comp/admin/msg', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/msg');
    var $ = require('jquery');
    var router = require('mods/router');
    var atom = require('comp/util/atom');

    var data = {
        items: [],
        pagesize: 100
    };

    var comp = Vue.component('blog-msg', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 显示隐藏留言回复
            showCom: function(item, index) {
                item.showMesg = !item.showMesg;
            },
            // 请求留言数据接口
            reqMsgData: function(e) {
                var _this = this;
                $.ajax({
                    url: 'http://blog.feroad.com/page',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        curpage: e,
                        perpage: _this.pagesize
                    },
                    success: function(res) {
                        var flag = res.result.status;
                        console.log(res.result.data);
                        if (flag) {
                            _this.items = res.result.data;
                        } else {
                            _this.list = [];
                        }
                    },
                    error: function(e) {
                        console.log("接口请求失败，错误码：" + e.status);
                    }
                });
            },
            // 删除留言
            deleteAnswer: function(index, id) {
                // 页面先消失
                this.items.splice(index, 1);
                // 再请求删除留言接口
                $.ajax({
                    url: 'http://blog.feroad.com/delete/' + id,
                    type: 'GET',
                    dataType: 'json',
                    success: function(res) {
                        console.log(res.result.data);
                    }
                });
            },
            // 时间戳转换
            transferTime: function(unixTime) {
                return atom.transfer(unixTime);
            },
            init: function() {
                this.reqMsgData(1);
            }
        },
        mounted: function() {
            this.init();
        }
    });
    return comp;
});
