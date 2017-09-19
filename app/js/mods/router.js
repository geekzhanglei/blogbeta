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
            components: {
                login: {
                    template: '<blog-login></blog-login>'
                }
            }
        }, {
            path: '/admin',
            components: {
                admin: {
                    template: '<blog-admin></blog-admin>'
                }
            },
            children: [{
                path: '/admin/delete',
                components: {
                    delete: {
                        template: '<blog-delete></blog-delete>'
                    }
                }
            }, {
                path: '/admin/release',
                components: {
                    release: {
                        template: '<blog-release></blog-release>'
                    }
                }
            }]
        }, {
            path: '/article',
            components: {
                list: {
                    template: '<blog-articlelist></blog-articlelist>'
                }
            }
        }, {
            // 文章详情
            path: '/article/:id',
            components: {
                article: {
                    template: '<blog-article></blog-article>'
                }
            }
        }, {
            path: '/about',
            components: {
                about: {
                    template: '<blog-about></blog-about>'
                }
            }
        }, {
            path: '/msg',
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
