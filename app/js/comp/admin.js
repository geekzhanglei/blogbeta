/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/18
 */

define('comp/admin', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin');
    var $ = require('jquery');
    var router = require('mods/router');
    var simplemde;

    var data = {
        isCollapse: true,
        title: '',
        username: '管理员',
        intro: '暂无简介'
    };

    var comp = Vue.component('blog-admin', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            isLogin: function() {
                //    判断是否已经登录
                $.ajax();
            },
            // 收起展开侧边栏
            isSidebar: function() {
                if (this.isCollapse) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            },
            saveArticle: function() {
                var _this = this;
                var isEmpty = this.title && this.intro && simplemde.value();
                if (!isEmpty) {
                    console.log('不能留空');
                    return;
                }
                $.ajax({
                    url: 'http://blog.feroad.com/article/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        username: _this.username,
                        title: _this.title,
                        introduction: _this.intro,
                        content: simplemde.markdown(simplemde.value())
                    },
                    success: function(res) {
                        console.log(res.result.data);
                        // 清空输入
                    },
                    error: function() {
                        console.log('接口请求失败');
                    }
                });
            }
        },
        mounted: function() {
            var _this = this;
            if (_this.isLogin === "no") {
                router.replace({
                    path: '/login'
                });
            }

            // 插件引入方法
            simplemde = new SimpleMDE({
                element: this.$refs.adminText
            });
        }
    });
    return comp;
});
