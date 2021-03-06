let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


router.get("/", (req, res, next) => {
    let { openid } = req.query

    mgdb.open({
        dbName: "React",
        collectionName: "UserInfo"
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
                        detail: result[0]
                    })

                }
                client.close();
            })
        }
    )

})


module.exports = router;