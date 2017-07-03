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
                    '<div class="article">',
                        '<h4><a href="#" class="article-h">文章题目</a></h4>',
                        '<p>现在有一个很大的误区就是：办公室的白领们自以为自己的表现优于自己的父母，其实这不过是因为经济结构转型造成的误会而已。现在在公司的格子间里面哼哧哼哧做PPT的那些人，和当年踩着缝纫机的女工们，其实没有本质区别。</p>',
                        '<p class="time">2017-07-03</p>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
        // '<div class="container">',
        //     '<div class="row msg-wrap">',
        //         '<div class="msg-header">',
        //             '<h2>留言板 | Words</h2>',
        //         '</div>',
        //         '<div class="msg-cont">',
        //             '<div class="msg-input clearfix">',
        //                 '<textarea class="form-control" rows="5" autofocus maxlength="400" placeholder="有什么想说呢？"></textarea>',
        //                 '<button type="button" class="btn btn-default">评论一下</button>',
        //             '</div>',
        //             '<div class="msg-split"></div>',
        //             '<div class="msg-comment">',
        //                 '<div class="comment-header">',
        //                     '<h4>最新评论</h4>',
        //                 '</div>',
        //                 '<div class="cont-list">',
        //                     '<div class="comments" v-for="(item,index) in items">',
        //                         '<div class="comment-wrap">',
        //                             '<div class="clearfix">',
        //                                 '<span class="uid">{{item.nickname}}</span>',
        //                                 '<span class="curTime">{{item.time}}</span>',
        //                             '</div>',
        //                             '<p class="comment">{{item.cont}}</p>',
        //                             '<div class="action clearfix">',
        //                                 '<a href="javascript:;" class="delete-answer" v-on:click="deleteAnswer(index)">删除</a>',
        //                                 '<a href="javascript:;" class="answer" v-on:click="displayInput(index)">{{item.isAnswer}}</a>',
        //                                 '<a href="javascript:;" class="unfold-answer" v-show="item.answersNum == \'\'?false:true" v-on:click="displayAnswers(index)">{{item.isUnfoldAnswers}}({{item.answersNum}})</a>',
        //                             '</div>',
        //                         '</div>',
        //                         '<div class="write-answer" v-show="item.isShowInput">',
        //                             '<div class="msg-input clearfix">',
        //                                 '<textarea class="form-control" rows="3" maxlength="200"></textarea>',
        //                                 '<button type="button" class="btn btn-default">评论一下</button>',
        //                             '</div>',
        //                         '</div>',
        //                         '<div class="answers" v-show="item.isShowAnswers" v-for="(answer,index) in item.answers">',
        //                             '<div class="clearfix">',
        //                                 '<span class="uid">{{answer.nickname}}</span>',
        //                                 '<span class="curTime">{{answer.curTime}}</span>',
        //                             '</div>',
        //                             '<p class="comment">{{answer.cont}}</p>',
        //                             '<div class="action clearfix">',
        //                                 '<a href="javascript:;" class="answer">回复</a>',
        //                             '</div>',
        //                         '</div>',
        //                     '</div>',
        //                 '</div>',
        //             '</div>',
        //         '</div>',
        //         '<div class="blog-page">',
        //             '<paging v-bind:datasource="pagingData"></paging>',
        //         '</div>',
        //     '</div>',
        // '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
