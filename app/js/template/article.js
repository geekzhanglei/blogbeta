/**
 * @fileoverview 留言板模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/03
 */
define('template/article', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="container">',
            '<div class="row">',
                '<div class="col-md-12">',
                    '<div class="article post-article clearfix">',
                        '<div class="post-head clearfix">',
                            '<div class="post-title">',
                                '<h4>{{title}}</h4>',
                            '</div>',
                            '<div class="post-return">',
                            '<a href="#/article" class="post-return-a"><<返回文章列表</a>',
                            '</div>',
                            '<div class="post-meta">',
                                '<p class="subhead"><span>作者：{{username}}</span>&nbsp<span>最后编辑于 {{time}}</span></p>',
                            '</div>',
                        '</div>',
                        '<div class="post-abs" v-html="intro"></div>',
                        '<div class="post-cont" v-html="cont"></div>',
                        '<div class="post-footer clearfix">',
                            '<p>版权所有，转载注明出处</p>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
