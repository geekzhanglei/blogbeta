/**
 * @fileoverview 关于模板
 * @author geekzl<1103307205@qq.com>
 * @date 2017/07/17
 */
define('template/about', function(require, exports, module) {

    /* beautify ignore:start */
    /* eslint-disable */
    var tpl = [
        '<div class="container">',
            '<a class="aboutBgImg" href="javascript:;"><img src="img/aboutbg.gif"></img src=""></a>',
            '<h2 id="intro">项目概述</h2>',
            '<p>这是一个为学习前后端技术而搭建的测试博客</p>',
            '<p>当前技术栈：vue+jquery+bootstrap+php+mysql</p>',
            '<p>前端：geekzl <a href="https://github.com/geekzhanglei/blogbeta">前端源码<a/></p>',
            '<p>后端：大民哥</p>',
            '<p>联系方式:</p>',
            '<ul>',
                '<li>qq: <code>1103307205</code></li>',
                '<li>电子邮箱: <code>1103307205@qq.com</code></li>',
            '</ul>',
            '<strong>部分风格样式参考自互联网，侵删</strong>',
        '</div>',
    ].join('');
    /* beautify ignore:end */
    /* eslint-disable */

    module.exports = tpl;

});
