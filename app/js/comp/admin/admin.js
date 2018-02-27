/**
 * @fileoverview 后台管理页
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/24
 */

define('comp/admin/admin', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/admin');
    var router = require('mods/router');
    var bus = require('mods/bus');

    bus.$on("info", function(name, img) {
        data.imgsrc = img;
        data.nickname = name;
    });
    var data = {
        isCollapse: true,
        nickname: '管理员',
        imgDefault: '../img/avatar.png',
        imgsrc: '',
        articleAdm: false
    };

    var comp = Vue.component('blog-admin', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            toggleAticleAdm: function() {
                this.articleAdm = !this.articleAdm;
            },
            // 收起展开侧边栏
            isSidebar: function() {
                if (this.isCollapse) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            },
            getInfo: function() {
                var _this = this,
                    _info = {
                        name: this.nickname,
                        img: this.imgsrc
                    };
                $.ajax({
                    url: 'http://blog.feroad.com/admin/getAdministerInfo',
                    dataType: 'json',
                    success: function(res) {
                        var data = res.result.data;
                        if (res.result.status == 1) {
                            _this.nickname = data.nickname;
                            data.head_img === '' ? _this.imgsrc = _this.imgDefault : _this.imgsrc = data.head_img;
                            _info.name = data.nickname;
                            _info.img = data.head_img;
                            bus.$emit('downloadInfo', _info);
                        }
                    },
                    error: function(res) {
                        console.log(res);
                    }

                })
            },
            loginout: function() {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                // 通知后台注销
                $.ajax({
                    url: 'http://blog.feroad.com/admin/loginout',
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        token: window.localStorage.token
                    },
                    success: function(res) {
                        console.log('请求成功')
                        if (res.stat) {
                            // 清除本地token
                            window.localStorage.removeItem('token');
                            router.replace({
                                path: '/login'
                            });
                        }
                    },
                    error: function() {
                        console.log('接口请求失败');
                    }
                });
            },
            init: function() {
                this.getInfo();
            }
        },
        mounted: function() {
            this.init();
            // 跳转到文章发布页
            if (router.currentRoute.path === "/admin") {
                router.replace({
                    path: '/admin/info'
                });
            }
        }
    });
    return comp;
});
