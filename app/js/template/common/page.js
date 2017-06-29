/**
 * @fileoverview 页面模板-分页模块
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */
define('template/common/page', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="pages">',
            '<span class="total">共<i>{{datasource.total}}</i>条结果，<i>{{datasource.page}}/{{datasource.page_total}}</i>页</span>',
            '<span v-if="datasource.page == 1" class="prevs">',
                '<a href="javascript:;" class="M_btn_disable">上一页</a>',
            '</span>',
            '<span v-else class="prevs">',
                '<a v-on:click="onClickPage(datasource.clickPageCb, parseInt(datasource.page) - 1)" v-bind:data-page="parseInt(datasource.page) - 1" href="javascript:;" class="turn_page">上一页</a>',
            '</span>',

            '<a v-on:click="onClickPage(datasource.clickPageCb, 1)" v-if="datasource.page >= 4 && datasource.page_total > 5" v-bind:data-page="1" href="javascript:;" class="turn_page">1</a>',
            '<span v-if="datasource.page >= 5 && datasource.page_total > 5" class="text-fill">...  </span>',
            '<template v-for="i in datasource.pages">',
                '<a v-on:click="onClickPage(datasource.clickPageCb, i)" v-if="datasource.page == i" href="javascript:;" class="current">{{i}}</a>',
                '<a v-on:click="onClickPage(datasource.clickPageCb, i)" v-else v-bind:data-page="i" href="javascript:;" class="turn_page">{{i}}</a>',
            '</template>',
            '<span v-if="datasource.page <= datasource.page_total - 4 && datasource.page_total > 5" class="text-fill">...  </span>',
            '<a v-on:click="onClickPage(datasource.clickPageCb, datasource.page_total)" v-if="datasource.page <= datasource.page_total -3 && datasource.page_total > 5" v-bind:data-page="datasource.page_total" href="javascript:;" class="turn_page">{{datasource.page_total}}</a>',

            '<span v-if="datasource.page == datasource.page_total" class="next">',
                '<a href="javascript:;" class="M_btn_disable">下一页</a>',
            '</span>',
            '<span v-else class="next">',
                '<a v-on:click="onClickPage(datasource.clickPageCb, parseInt(datasource.page) + 1)" href="javascript:;" class="turn_page" :data-page="parseInt(datasource.page) + 1">下一页</a>',
            '</span>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
