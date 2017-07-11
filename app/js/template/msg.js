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
                        '<textarea v-model="inputMsg" class="form-control" rows="5" autofocus maxlength="400" placeholder="有什么想说呢？"></textarea>',
                        '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#inputNameModal" v-on:click="errTips=\'\'">评论一下</button>',
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
                                        '<span class="uid">{{item.userName}}</span>',
                                        '<span class="curTime">{{transferTime(item.createTime)}}</span>',
                                    '</div>',
                                    '<p class="comment">{{item.content}}</p>',
                                    '<div class="action clearfix">',
                                        '<a href="javascript:;" class="delete-answer" v-on:click="deleteAnswer(index,item.id)">删除</a>',
                                        '<a href="javascript:;" class="answer" v-on:click="displayInput(index)">{{item.isAnswer}}</a>',
                                        '<a href="javascript:;" class="unfold-answer" v-show="item.reply.length === 0 ?false:true" v-on:click="displayAnswers(index)">{{item.isUnfoldAnswers}}({{item.reply.length}})</a>',
                                    '</div>',
                                '</div>',
                                '<div class="write-answer" v-show="item.isShowInput">',
                                    '<div class="msg-input clearfix">',
                                        '<textarea class="form-control" rows="3" maxlength="200" v-model="replyCont"></textarea>',
                                        '<div class="replyWrap clearfix">',
                                            '<span>昵称：</span>',
                                            '<input type="text" v-model="replyName" class="form-control"  maxlength="10" v-bind:placeholder="phcont">',
                                            '<button type="button" class="btn btn-default" v-on:click="addReply(item.id,item)">回复一下</button>',
                                            '<span class="replyErrTip">{{item.replyErr}}</span>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                                '<div class="answers" v-show="item.isShowAnswers" v-for="(answer,index) in item.reply">',
                                    '<div class="clearfix">',
                                        '<span v-if="answer.replyType===\'1\'" class="uid">{{answer.replyUserName}}</span>',
                                        '<div v-else>',
                                            '<span class="uid">{{answer.replyUserName}}</span>',
                                            '<span class="uid reply">回复:</span>',
                                            '<span class="uid">{{answer.toReplyUserName}}</span>',
                                            '<span class="curTime">{{transferTime(answer.createTime)}}</span>',
                                        '</div>',
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
                // <!-- Modal -->
            '<div class="modal fade" id="inputNameModal" tabindex="-1"  role="dialog" aria-labelledby="myModalLabel">',
                '<div class="modal-dialog  modal-sm" role="document">',
                    '<div class="modal-content">',
                        '<div class="modal-header">',
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
                            '<h4 class="modal-title" id="myModalLabel">留个名号呗：</h4>',
                        '</div>',
                        '<div class="modal-body">',
                            '<input type="text" v-model="inputName" class="form-control"  maxlength="10" v-bind:placeholder="phcont">',
                        '</div>',
                        '<div class="modal-footer">',
                            '<span class="errorTips">{{errTips}}</span>',
                            '<button type="button" class="btn btn-primary" v-on:click="sendComment()" v-bind:data-dismiss="isActive">确认发表</button>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
        '</div>'
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
