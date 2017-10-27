/**
 * @fileoverview 后台管理个人信息组件
 * @author geekzl<1103307205@qq.com>
 * @date 2017/10/24
 */

define('comp/admin/info', function(require, exports, module) {
    var Vue = require('vue');
    var tpl = require('template/admin/info');
    var $ = require('jquery');
    var router = require('mods/router');
    var atom = require('comp/util/atom');

    var data = {
        visitedNum: 1,
        showEditInfo: false,
        nickname: '管理员',
        inputName: '',
        showNameErr: false,
        showModifyPwOK: false,
        imgsrc: "../img/avatar.png"
    };

    var comp = Vue.component('blog-info', {
        template: tpl,
        data: function() {
            return data;
        },
        computed: {
            showErr: function() {
                if (this.showNameErr && this.inputName) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods: {
            switchBar: function(e) {
                var name = e.target.innerText;
                this.showEditInfo = false;
                switch (name) {
                    case "基础信息":
                        this.visitedNum = 1;
                        break;
                    case "修改密码":
                        this.visitedNum = 2
                        break;
                    default:
                        break;
                }
            },
            editInfo: function() {
                this.showNameErr = false;
                this.showEditInfo = !this.showEditInfo;
                this.inputName = "";
            },
            saveName: function() {
                if (this.inputName) {
                    // 请求接口
                    this.nickname = this.inputName;
                    this.showEditInfo = false;
                } else {
                    this.showNameErr = true;
                }
            },
            clickInput: function() {
                this.$refs.input.click();
            },
            uploadImg: function(e) {
                var file = e.target.files[0];
                this.imgsrc = window.URL.createObjectURL(file);
                // 以下base64编码，为请求接口做准备
                if (typeof FileReader == 'undifined') //判断浏览器是否支持filereader
                {
                    alert("<p>抱歉，浏览器不支持FileReader,不能上传图片");
                    return false;
                }
                if (!/image\/\w+/.test(file.type)) //判断获取的是否为图片文件
                {
                    alert("请确保文件为图像文件");
                    return false;
                }
                var reader = new FileReader();
                reader.readAsDataURL(file);
                console.log('base64图片编码' + reader.result)
            },
            savePswd: function() {
                this.showModifyPwOK = true;
            }
        },
        created: function() {}
    });
    return comp;
});
