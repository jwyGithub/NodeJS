let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


router.get("/", (req, res, next) => {
    console.log(req.query)

    let { type, openid } = req.query

    let ziduan = req.query.openid ? req.query.openid : req.query.name

    let sec = { [type]: ziduan }

    mgdb.open({
        dbName: "React",
        collectionName: "User"
    }).then(
        ({ collection, client }) => {
            // 查询数据库
            collection.find(sec).toArray((err, result) => {
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