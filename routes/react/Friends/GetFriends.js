let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


// 获取当前用户的好友列表
router.get("/", (req, res, next) => {

    let { openid } = req.query

    if (!openid) {
        res.send({
            code: 400,
            msg: "openid不存在"
        })
    } else {
        mgdb.open({
            dbName: "React",
            collectionName: "FriendList"
        }).then(
            ({ collection, client }) => {
                // 查询数据库
                collection.find({ openid }).toArray((err, result) => {
                    if (err) {
                        res.send({
                            code: 400,
                            msg: "查询失败"
                        })
                    } else {
                        res.send({
                            code: 200,
                            list: result[0]
                        })
                    }
                    client.close();
                })
            }
        )













    }

})







module.exports = router;