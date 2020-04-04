let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


// 搜索朋友
router.post("/", (req, res, next) => {

    let { friendopenid, loginopenid, friendinfo } = req.body
    console.log(`当前登录的用户是${loginopenid}`)
    console.log(`当前要添加的用户是${friendopenid}`)
    if (!friendopenid || !loginopenid) {
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
                collection.find({ openid: loginopenid }).toArray((err, result) => {
                    if (err) {
                        res.send({
                            code: 400,
                            msg: "查询失败"
                        })
                    } else {
                        if (result.length > 0) {
                            if (result[0].list.length === 0) {
                                result[0].list.push(friendinfo)
                            } else {
                                result[0].list.forEach((item) => {
                                    if (item.openid === friendopenid) {
                                        return
                                    } else {
                                        result[0].list.push(friendinfo)
                                    }
                                })
                            }
                            collection.updateOne({ openid: loginopenid }, { $set: { list: result[0].list } }), { upsert: false }, (err, res) => {
                                if (err) {
                                    res.send({
                                        code: 400,
                                        msg: "添加失败"
                                    })
                                } else {
                                    res.send({
                                        code: 200,
                                        msg: "已发送申请"
                                    })
                                }
                            }
                            res.send({
                                code: 200,
                                msg: "已发送申请"
                            })
                        }
                        client.close();
                    }
                })
            }
        )

    }

})







module.exports = router;