/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */

define('comp/admin/release', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/release');
    var $ = require('jquery');
    var router = require('mods/router');
    var simplemde;

    var data = {
        title: '',
        username: '管理员',
        intro: ''
    };

    var comp = Vue.component('blog-release', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            saveArticle: function() {
                var _this = this;
                var isEmpty = this.title && simplemde.value();
                if (!isEmpty) {
                    console.log('不能留空');
                    return;
                }
                // 解析简介字符串部分与内容部分
                var contStr = simplemde.markdown(simplemde.value());
                // console.log('全部输入:' + contStr);
                var temp_div = document.createElement('div');
                temp_div.innerHTML = contStr;
                this.intro = temp_div.getElementsByTagName('blockquote')[0].innerHTML;
                if (this.intro === '') {
                    this.intro = "暂无简介";
                }
                var quoteNode = temp_div.getElementsByTagName('blockquote')[0];
                temp_div.removeChild(quoteNode);
                // console.log('输入内容部分:' + temp_div.innerHTML);
                contStr = temp_div.innerHTML;

                $.ajax({
                    url: 'http://blog.feroad.com/article/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        token: window.localStorage.token,
                        username: _this.username,
                        title: _this.title,
                        introduction: _this.intro,
                        content: contStr
                    },
                    success: function(res) {
                        if (res.result.status) {
                            // 清空输入
                            _this.title = '';
                            simplemde.value('');
                        } else {
                            if (!window.localStorage.token) {
                                alert('游客无权操作');
                                return;
                            } else {
                                router.replace({
                                    'path': '/login'
                                });
                            }
                        }
                    },
                    error: function() {
                        console.log('接口请求失败');
                    }
                });
            }
        },
        mounted: function() {
            var _this = this;
            // 插件引入方法
            simplemde = new SimpleMDE({
                element: this.$refs.adminText,
                placeholder: '请先输入简介（用引用标签标识）',
                lineWrapping: true,
                tabSize: 4,
                autosave: {
                    enabled: true,
                    uniqueId: "MyUniqueID",
                    delay: 1000,
                },
                tabsize: 4
            });
        }
    });
    return comp;
});
