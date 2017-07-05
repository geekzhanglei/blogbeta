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
                var _allHeight = document.documentElement.clientHeight;
                var _footerHeight = this.$el.offsetTop;
                if (_allHeight - _footerHeight > 53) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        },
        mounted: function() {
            // 初始化底部导航条位置
            this.initFooterPostion();
        }

    });
    module.exports = comp;
});
