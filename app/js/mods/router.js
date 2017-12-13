/**
 * @fileoverview 路由
 * @author 1103307205@qq.com
 * @date 2017/07/05
 */
define('mods/router', function(require, exports, module) {
    var Vue = require('vue');
    var VueRouter = require('vue-router');

    // 模块化工程中使用vue-router需要显式安装路由功能
    Vue.use(VueRouter);

    var router = new VueRouter({
        // history模式需要服务端配置来配合
        // mode: 'history',
        routes: [{
            path: '/login',
            name: 'login',
            components: {
                login: {
                    template: '<blog-login></blog-login>'
                }
            }
        }, {
            path: '/admin',
            name: 'admin',
            components: {
                admin: {
                    template: '<blog-admin></blog-admin>'
                }
            },
            children: [{
                path: '/admin/delete',
                name: 'delete',
                components: {
                    delete: {
                        template: '<blog-delete></blog-delete>'
                    }
                }
            }, {
                path: '/admin/release',
                name: 'release',
                components: {
                    release: {
                        template: '<blog-release></blog-release>'
                    }
                }
            }, {
                path: '/admin/comments',
                name: 'comments',
                components: {
                    comments: {
                        template: '<blog-comments></blog-comments>'
                    }
                }
            }, {
                path: '/admin/msg',
                name: 'adminmsg',
                components: {
                    msg: {
                        template: '<blog-msg></blog-msg>'
                    }
                }
            }, {
                path: '/admin/info',
                name: 'info',
                components: {
                    info: {
                        template: '<blog-info></blog-info>'
                    }
                }
            }, {
                path: '/admin/option',
                name: 'option',
                components: {
                    option: {
                        template: '<blog-option></blog-option>'
                    }
                }
            }]
        }, {
            path: '/article',
            name: 'article',
            components: {
                list: {
                    template: '<blog-articlelist></blog-articlelist>'
                }
            }
        }, {
            // 文章详情
            path: '/article/:id',
            name: 'articleid',
            components: {
                article: {
                    template: '<blog-article></blog-article>'
                }
            }
        }, {
            path: '/about',
            name: 'about',
            components: {
                about: {
                    template: '<blog-about></blog-about>'
                }
            }
        }, {
            path: '/msg',
            name: 'msg',
            components: {
                msg: {
                    template: '<blog-msg></blog-msg>'
                }
            }
        }]
    });
    // 路由钩子， 用来实时监听路由变化
    // router.beforeEach(function(to, from, next) {
    //     console.log('路由钩子监控：' + to.fullPath);
    //     next();
    // });
    module.exports = router;

});
