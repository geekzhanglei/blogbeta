/**
 * @fileoverview 后台管理页--留言管理
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/17
 */

define('comp/admin/msg', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/msg');
    var router = require('mods/router');
    var atom = require('comp/util/atom');
    var axios = require('axios');

    // handlePage计算分页数据传递给pagingData，
    // pagingData给模板template中的子组件数据源datasource
    var handlePage = require('comp/util/page-handle');
    var page_tpl = require('comp/common/page');
    Vue.component('paging', page_tpl);

    var data = {
        items: [],
        list: [],
        selectedPage: '1',
        pagesize: 5,
        flag: 1,
        // 分页数据
        showPages: true,
        pagingData: {
            total: 5,
            pages: [],
            page: 1,
            page_total: 5
        },
        bool: false
    };

    var comp = Vue.component('blog-msg', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            // 显示隐藏留言回复
            showMsg: function(item, index) {
                if (item.reply.length) {
                    item.showMesg = !item.showMesg;
                }
            },
            // 请求留言数据接口
            reqMsgData: function(e) {
                var _this = this;
                axios.get('http://blogapi.feroad.com/pageForAdmin', {
                    params: {
                        curpage: e,
                        perpage: _this.pagesize
                    },
                    responseType: 'json'
                }).then(function(res) {
                    console.log(res)
                    var flag = res.data.result.status;
                    if (flag) {
                        _this.list = res.data.result.data;
                        _this.list.forEach(function(item) {
                            _this.$set(item, "showMesg", false);
                        })
                        // 转换数据中所有unix时间戳
                        _this.transferTime(_this.list);
                        _this.items = _this.list;
                        // 分页初始化
                        _this.initPage(res.data.result);
                    } else {
                        _this.list = [];
                    }
                }).catch(function(e) {
                    console.log('接口请求失败，错误码：' + e)
                })
                // $.ajax({
                //     url: 'http://blogapi.feroad.com/pageForAdmin',
                //     type: 'GET',
                //     dataType: 'json',
                // data: {
                //         curpage: e,
                //         perpage: _this.pagesize
                //     },
                //     success: function(res) {
                //         // console.log(Axios)
                //         console.log(axios)

                //         var flag = res.result.status;
                //         if (flag) {
                //             _this.list = res.result.data;
                //             _this.list.forEach(function(item) {
                //                 _this.$set(item, "showMesg", false);
                //             })
                //             // 转换数据中所有unix时间戳
                //             _this.transferTime(_this.list);
                //             _this.items = _this.list;
                //             // 分页初始化
                //             _this.initPage(res.result);
                //         } else {
                //             _this.list = [];
                //         }
                //     },
                //     error: function(e) {
                //         console.log("接口请求失败，错误码：" + e.status);
                //     }
                // });
            },
            // 删除留言
            deleteAnswer: function(index, id) {
                if (!window.localStorage.token) {
                    alert('游客无权操作');
                    return;
                }
                // 页面先消失
                this.items.splice(index, 1);
                // 再请求删除留言接口
                $.ajax({
                    url: 'http://blogapi.feroad.com/delete/' + id,
                    type: 'GET',
                    data: {
                        token: window.localStorage.token
                    },
                    dataType: 'json',
                    success: function(res) {
                        console.log(res.result.data);
                    }
                });
            },
            initPage: function(data) {
                var _this = this;
                // 分页组件赋值
                this.pagingData.total = data.rows;
                var _temp = parseInt(this.pagingData.total) / this.pagesize;
                var page_total = Math.ceil(_temp);
                // 获取分页组件数据
                this.pagingData = handlePage({
                    page: 1,
                    total: data.rows,
                    page_total: page_total,
                    clickPageCb: function(targetPage) {
                        _this.reqMsgData(targetPage);
                    }
                });
            },
            changeStatus: function() {
                if (this.selectedPage == 1) {
                    this.pagesize = 5;
                    this.showPages = true;
                } else {
                    this.pagesize = 9999;
                    this.showPages = false;
                }
                this.reqMsgData(1);
            },
            changePageNum: function(e) {
                var _this = this;
                this.pagesize = e.target.value;
                if (!this.pagesize) {
                    return;
                }
                if (this.flag) {
                    console.log('输出')
                    this.flag = 0;
                    setTimeout(function() {
                        _this.flag = 1;
                        console.log('延迟半秒')
                    }, 500);
                    this.reqMsgData(1);
                }
            },
            transferTime: function(obj) {
                var _this = this;
                obj.forEach(function(e, i, arr) {
                    for (i in e) {
                        if (i == "createTime") {
                            e[i] = atom.transfer(e[i]);
                        }
                        if (i == "reply") {
                            _this.transferTime(e[i]);
                        }
                    }
                }, this);
            },
            // 排序
            sort: function(e) {
                console.log(e);
                console.log(e.target)
                if (!e.target.id) {
                    return;
                }
                this.bool = !this.bool;
                this.sortByKey(this.items, e.target.id, this.bool);
            },
            sortByKey: function(array, key, bool) {
                return array.sort(function(a, b) {
                    var x = a[key];
                    var y = b[key];
                    // NaN唯一不和自身严格相等
                    if (Number(x) === Number(x)) {
                        x = Number(x);
                        y = Number(y);
                    }
                    return bool ? x > y : x < y;
                });
            },
            search: function(e) {
                var searchBool, inValue = e.target.value,
                    _this = this;
                var tempObj = this.list;
                this.items = tempObj.filter(function(currentValue, index, arr) {
                    return _this.traversalObj(currentValue, inValue);
                });
            },
            traversalObj: function(curValue, inValue) {
                var i, j, k, tostr, _this = this;
                for (i in curValue) {
                    if (curValue.hasOwnProperty(i)) {
                        switch (i) {
                            case "reply":
                                for (j in curValue[i]) {
                                    for (k in curValue[i][j]) {
                                        switch (k) {
                                            case "replyType":
                                                break;
                                            default:
                                                tostr = curValue[i][j][k].toString();
                                                if (tostr.indexOf(inValue) != -1) {
                                                    console.log(tostr)
                                                    return true;
                                                }
                                                break;
                                        }
                                    }
                                }
                                break;
                            case "showMesg":
                                break;
                            default:
                                tostr = curValue[i].toString();
                                if (tostr.indexOf(inValue) != -1) {
                                    return true;
                                }
                                break;
                        }
                    }
                }

            },
            init: function() {
                this.reqMsgData(1);
            }
        },
        mounted: function() {
            this.init();
        }
    });
    return comp;
});
