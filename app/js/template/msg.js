/**
 * @fileoverview 留言板模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/06
 */
define('template/msg', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="container">',
            '<div class="row msg-wrap">',
                '<div class="msg-header">',
                    '<h2>留言板 | Words</h2>',
                '</div>',
                '<div class="msg-cont">',
                    '<div class="msg-input clearfix">',
                        '<textarea class="form-control" rows="5" autofocus maxlength="400" placeholder="有什么想说呢？"></textarea>',
                        '<button type="button" class="btn btn-default">评论一下</button>',
                    '</div>',
                    '<div class="msg-split"></div>',
                    '<div class="msg-comment">',
                        '<div class="comment-header">',
                            '<h4>最新评论</h4>',
                        '</div>',
                        '<div class="cont-list">',
                            '<div class="comments" v-for="(item,index) in list">',
                                '<div class="comment-wrap">',
                                    '<div class="clearfix">',
                                        '<span class="uid">{{item.username}}</span>',
                                        '<span class="curTime">{{item.updated_at}}</span>',
                                    '</div>',
                                    '<p class="comment">{{item.content}}</p>',
                                    '<div class="action clearfix">',
                                        '<a href="javascript:;" class="delete-answer" v-on:click="deleteAnswer(index)">删除</a>',
                                        '<a href="javascript:;" class="answer" v-on:click="displayInput(index)">{{item.isAnswer}}</a>',
                                        '<a href="javascript:;" class="unfold-answer" v-show="item.answersNum == \'\'?false:true" v-on:click="displayAnswers(index)">{{item.isUnfoldAnswers}}({{item.reply.length}})</a>',
                                    '</div>',
                                '</div>',
                                '<div class="write-answer" v-show="item.isShowInput">',
                                    '<div class="msg-input clearfix">',
                                        '<textarea class="form-control" rows="3" maxlength="200"></textarea>',
                                        '<button type="button" class="btn btn-default">评论一下</button>',
                                    '</div>',
                                '</div>',
                                '<div class="answers" v-show="item.isShowAnswers" v-for="(answer,index) in item.reply">',
                                    '<div class="clearfix">',
                                        '<span class="uid">{{answer.username}}</span>',
                                        '<span class="curTime">{{answer.created_at}}</span>',
                                    '</div>',
                                    '<p class="comment">{{answer.content}}</p>',
                                    '<div class="action clearfix">',
                                        '<a href="javascript:;" class="answer">回复</a>',
                                    '</div>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="blog-page">',
                    '<paging v-bind:datasource="pagingData"></paging>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
