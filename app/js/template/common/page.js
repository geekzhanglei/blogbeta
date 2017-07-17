/**
 * @fileoverview 页面模板-分页模块
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 * 该组件逻辑依赖于handle-page.js
 */
define('template/common/page', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<nav aria-label="Page navigation">',
            '<ul class="pagination">',
                '<li v-bind:class="{disabled : datasource.page === 1}">',
                    '<a href="javascript:;" v-if="datasource.page > 1" v-on:click="onClickPage(datasource.clickPageCb, parseInt(datasource.page) - 1)" aria-label="Previous">',
                        '<span aria-hidden="true">上一页</span>',
                    '</a>',
                    '<a href="javascript:;" v-else aria-label="Previous">',
                        '<span aria-hidden="true">上一页</span>',
                    '</a>',
                '</li>',

                '<li v-if="datasource.page >= 4 && datasource.page_total > 5">',
                    '<a v-on:click="onClickPage(datasource.clickPageCb, 1)" href="javascript:;">{{i}}</a>',
                '</li>',
                '<li v-if="datasource.page >= 5 && datasource.page_total > 5">',
                    '<span>... </span>',
                '</li>',
                '<li v-for="i in datasource.pages">',
                    '<a v-on:click="onClickPage(datasource.clickPageCb, i)"  href="javascript:;" v-bind:class="{curPage:datasource.page == i}">{{i}}</a>',
                '</li>',
                '<li v-if="datasource.page <= datasource.page_total - 4 && datasource.page_total > 5">',
                    '<span>... </span>',
                '</li>',
                '<li v-if="datasource.page <= datasource.page_total -3 && datasource.page_total > 5">',
                    '<a v-on:click="onClickPage(datasource.clickPageCb, datasource.page_total)" href="javascript:;">{{i}}</a>',
                '</li>',

                '<li v-bind:class="{disabled : datasource.page === datasource.page_total}">',
                    '<a href="javascript:;" aria-label="Next" v-if="datasource.page < datasource.page_total" v-on:click="onClickPage(datasource.clickPageCb, parseInt(datasource.page) + 1)">',
                        '<span aria-hidden="true">下一页</span>',
                    '</a>',
                    '<a href="javascript:;" aria-label="Next" v-else>',
                        '<span aria-hidden="true">下一页</span>',
                    '</a>',
                '</li>',
            '</ul>',
        '</nav>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
