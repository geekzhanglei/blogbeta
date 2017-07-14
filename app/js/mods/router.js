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
            path: '/article',
            components: {
                list: {
                    template: '<blog-articlelist></blog-articlelist>'
                }
            }
            // children是嵌套路由的写法，在template中使用router-view
            // children: [{
            //     path: '/wishlist/publish',
            //     components: {
            //         wishpost: {
            //             template: '<app-wishpost></app-wishpost>'
            //         }
            //     }
            // }, {
            //     path: '/wishlist/detail/:id',
            //     components: {
            //         wishdetail: {
            //             template: '<app-wishdetail></app-wishdetail>'
            //         }
            //     }
            // }]
        }, {
            // 写文章(不应该出现在这里，应该放后台)
            path: '/article/add',
            components: {
                article: {
                    template: '<blog-add></blog-add>'
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
