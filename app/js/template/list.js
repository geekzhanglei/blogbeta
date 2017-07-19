/**
 * @fileoverview 留言板模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/03
 */
define('template/list', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div>',
            '<div class="container">',
                '<div class="row" v-for="item in items">',
                    '<div class="col-md-12">',
                        '<div class="articlelist">',
                            '<h4><router-link :to=\'"/article/"+item.id\' class="article-l">{{item.title}}</router-link></h4>',
                            '<p>{{item.introduction}}</p>',
                            '<p class="time">{{transferTime(item.createTime)}}</p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
            '<div class="blog-page">',
                '<paging v-bind:datasource="pagingData"></paging>',
            '</div>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
