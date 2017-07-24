/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/18
 */

define('comp/admin/admin', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/admin');
    var $ = require('jquery');
    var router = require('mods/router');
    var simplemde;

    var data = {
        isCollapse: true,
        title: '',
        username: '管理员',
        intro: ''
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
                var isEmpty = this.title && simplemde.value();
                if (!isEmpty) {
                    console.log('不能留空');
                    return;
                }
                // 解析简介字符串部分与内容部分
                var contStr = simplemde.markdown(simplemde.value());
                var temp_div = document.createElement('div');
                temp_div.innerHTML = contStr;
                this.intro = temp_div.getElementsByTagName('blockquote')[0].innerHTML;
                if (this.intro === '') {
                    this.intro = "暂无简介";
                }
                contStr = contStr.substring(_this.intro.length);

                $.ajax({
                    url: 'http://blog.feroad.com/article/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        username: _this.username,
                        title: _this.title,
                        introduction: _this.intro,
                        content: contStr
                    },
                    success: function(res) {
                        console.log(res.result.data);
                        // 清空输入
                        _this.title = '';
                        simplemde.value('');

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
                element: this.$refs.adminText,
                placeholder: '请先输入简介（用引用标签标识）',
                lineWrapping: true
            });
        }
    });
    return comp;
});
