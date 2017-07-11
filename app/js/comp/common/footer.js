define('comp/common/footer', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/common/footer');

    var data = {
        isActive: false
    };

    var comp = Vue.component('blog-footer', {
        template: tpl,
        data: function() {
            return data;
        },
        methods: {
            initFooterPostion: function() {
                // console.log('网页正文高度：' + document.body.scrollHeight);
                // console.log('footer+header高度:' + document.getElementById('blog').offsetHeight);
                var _blogHeight = document.getElementById('blog').offsetHeight;
                var _allHeight = document.documentElement.clientHeight;
                var _footerHeight = this.$el.offsetTop;
                // 入口页面只有页眉页脚不绝对定位页脚，为适应后插入组件的情况
                if (_blogHeight > 126 && _allHeight - _footerHeight > 53) {
                    // console.log('整体高度_allHeight：' + _allHeight + '/页脚距离顶部：' + _footerHeight);
                    // console.log('中间部分的组件加载较慢，导致footer距离页面顶部距离计算错误');
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        },
        mounted: function() {
            console.log('footer加载');
            // 初始化底部导航条位置
            this.initFooterPostion();
        }

    });
    module.exports = comp;
});
