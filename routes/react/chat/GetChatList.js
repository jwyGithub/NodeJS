let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');



router.get("/", (req, res, next) => {
    // console.log(req.body)

    mgdb.open({
        dbName: "React",
        collectionName: "ChatList"
    }).then(
        ({ collection, client }) => {
            // 查询数据库
            collection.find().toArray((err, result) => {
                if (err) {
                    res.send({
                        code: 400,
                        msg: "查询失败"
                    })
                } else {
                    res.send({
                        code: 200.,
                        data: result
                    })

                }
                client.close();
            })
        }
    )
})








module.exports = router;