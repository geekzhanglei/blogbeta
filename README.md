# blogbeta
### 前后端合作博客beta（vue+jquery+bootstrap+php+mysql）
***
## v0.1.0 留言板基本功能
### 说明：无帐号留言查询、评论、删除
### 所需接口信息（json对象）：
 * 留言查询(留言条数num，留言id、留言内容cont、时间time、回复内容数组resArr（回复id，回复时间，回复内容）)
   注：回复在本条留言下边
   查询接口对象格式：
    items: [{
            uid: "1",
            nickname: "神话",
            time: "2017年3月5日 22:22",
            cont: "这是假数据--这是假数据--这是假数据--",
            answersNum: '2',
            answers: [{
                uid: "1-1",
                nickname: "神话-1",
                time: "2017年3月5日 22:26",
                cont: "这是假数据--这是假数据--这是假数据--"
            }, {
                uid: "1-2",
                nickname: "神话-2",
                time: "2017年3月5日 22:29",
                cont: "这是假数据--这是假数据--这是假数据--"
            }]
        },{...},...]
 * 留言提交（留言内容cont）
 * 留言删除（留言id）



