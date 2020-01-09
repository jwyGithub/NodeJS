let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');

// 详情
router.get("/", (req, res, next) => {
    logger.info(`---------商品id是${req.query.id}------------`)
    mgdb.open({
        dbName: 'test',
        collectionName: 'GoodsInfo'
    }).then(
        ({ collection, client }) => {
            collection.find({goods_id:req.query.id}).toArray((err, result) => {
                if (err) {
                    res.send({
                        code: 400,
                        msg: "查询失败"
                    })
                } else {
                    res.send(result[0])
                }
                client.close();
            })

        })

})




module.exports = router;