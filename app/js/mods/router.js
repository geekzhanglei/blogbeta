/**
 * @fileoverview 路由
 * @author 1103307205@qq.com
 * @date 2017/07/05
 */
define('mods/router', function(require, exports, module) {

    var VueRouter = require('vue-router');
    var router = new VueRouter({
        routes: [{
            path: '/list',
            components: {
                list: {
                    template: '<blog-articlelist></blog-articlelist>'
                }
            }
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
        }]
    });

    module.exports = router;

});
