define('conf/msg', function(require, exports, module) {
    var Vue = require('vue');
    console.log(Vue);
    require('mods/msg');

    new Vue({
        el: '#msg'
    });
});
