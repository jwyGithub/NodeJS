let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


// 查询数据
router.get("/", (req, res, next) => {
    mgdb.open({
        dbName: 'test',
        collectionName: 'CarInfo'
    }).then(
        ({ collection, client }) => {
            collection.find({ user: req.query.user }).toArray((err, result) => {
                if (err) {
                    res.send({
                        code: 400,
                        msg: "查询失败"
                    })
                } else {
                    if (result.length == 0) {
                        res.send({
                            code: 200,
                            msg: "数据为空"
                        })
                    } else {
                        res.send(result[0])
                    }
                }
                client.close();
            })

        })
})


// 新增数据
router.post("/", (req, res, next) => {
    let user;
    req.body.carinfo.forEach(item => {
        user = item.user
    });
    // 查列表
    mgdb.open({
        dbName: 'test',
        collectionName: 'CarInfo'
    }).then(
        ({ collection, client }) => {
            // 先查询是否存在同一个客户购买同一个商品的情况
            collection.find({ user: user }).toArray((err, result) => {
                if (err) {
                    res.send({
                        code: 400,
                        msg: "查询失败"
                    })
                } else {
                    // 如果客户存在了
                    if (result.length >= 1) {
                        logger.info(`--------有这个客户------------`)
                        collection.update({ "user": user }, { $set: { "carinfo": req.body.carinfo } }, { upsert: false }, (err, result) => {
                            if (err) {
                                res.send({
                                    code: 400,
                                    msg: "更新失败"
                                })
                            } else {
                                res.send({
                                    code: 200,
                                    msg: "更新成功"
                                })
                            }
                        })
                    } else {
                        logger.info(`---------查询不到------------`)
                        collection.insertOne({ "user": user, "carinfo": req.body.carinfo }, (err, result) => {
                            if (err) {
                                res.send({
                                    code: 400,
                                    msg: "插入失败"
                                })
                            } else {
                                res.send({
                                    code: 200,
                                    msg: "插入成功"
                                })
                            }
                        })
                    }

                }
                client.close();
            })





            //     collection.insertOne({
            //         "id": req.body.id,
            //         "user": req.body.user,
            //         "name": req.body.name,
            //         "img": req.body.img,
            //         "price": req.body.price,
            //         "buyCount": req.body.buyCount,
            //         "orderYearCount": req.body.orderYearCount,
            //         "startDate": req.body.startDate
            //     }, (err, result) => {
            //         if (err) {
            //             res.send({
            //                 code: 400,
            //                 msg: "新增失败"
            //             })
            //         } else {
            //             res.send({
            //                 code: 200,
            //                 msg: result.ops
            //             })
            //         }
            //         client.close();
            //     })

        })

})


// 详情
router.get('/:_id', (req, res, next) => {
    mgdb.find({ collectionName: `Items-${req.query.dataName}`, _id: req.params._id }).then(
        result => res.send(result)
    ).catch(
        err => res.send(err)
    )
})



module.exports = router;