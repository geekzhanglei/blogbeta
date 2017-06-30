define('comp/util/page-handle', function(require, exports, module) {
    // pageData = {
    //     total:1, //总条数
    //     page_total:12,  //总页数
    //     page:1,   //当前页
    //     // 每一页点击发出请求
    //     clickPageCb: function(targetPage) {
    //         _this.reqApi(targetPage);
    //     }
    // }
    function handlePage(pageData) {
        var n = pageData.page_total,
            cur = pageData.page,
            i,
            a = [];
        if (n <= 5) {
            for (i = 1; i <= n; i++) {
                a.push(i);
            }
        } else {
            if (cur - 2 <= 0) {
                for (i = 1; i <= 5; i++) {
                    a.push(i);
                }
            } else if (cur + 2 >= n) {
                for (i = n - 4; i <= n; i++) {
                    a.push(i);
                }
            } else {
                for (i = cur - 2; i <= cur + 2; i++) {
                    a.push(i);
                }
            }
        }
        // pages当前显示了哪些页
        pageData.pages = a;
        return pageData;
    }
    return handlePage;
});
