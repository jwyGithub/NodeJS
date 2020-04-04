let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


// 搜索朋友
router.get("/", (req, res, next) => {

    let { name } = req.query
    

    if (!name) {
        res.send({
            code: 400,
            msg: "name不存在"
        })
    } else {
        mgdb.open({
            dbName: "React",
            collectionName: "User"
        }).then(
            ({ collection, client }) => {
                // 查询数据库
                collection.find({ name }).toArray((err, result) => {
                    if (err) {
                        res.send({
                            code: 400,
                            msg: "查询失败"
                        })
                    } else {
                        if (result.length === 0) {
                            res.send({
                                code: 400,
                                msg: "用户不存在"
                            })
                        } else {
                            res.send({
                                code: 200,
                                msg: result[0]
                            })
                        }
                    }
                    client.close();
                })
            }
        )

    }

})







module.exports = router;