/**
 * @fileoverview 分页组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */
define('comp/common/page', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/common/page');

    var defaultData = {
        // 依次是当前页，总页数，显示页，总条数，点击事件
        page: 1,
        page_total: 0,
        pages: [],
        total: '',
        clickPageCb: function(targetPage) {}
    };

    var comp = Vue.extend({
        template: tpl,
        props: {
            datasource: {
                type: Object,
                default: function() {
                    return defaultData;
                }
            }
        },
        data: function() {
            return {};
        },
        methods: {
            // 点击页码翻页
            onClickPage: function(cb, targetPage) {
                if (cb) {
                    cb(targetPage);
                }
            }
        }
    });

    return comp;
});
