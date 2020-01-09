let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');

// 列表
router.get("/", (req, res, next) => {
    logger.info(`---------要查询的name是${req.query.dataName}------------`)

    // 查列表
    mgdb.open({
        dbName: 'test',
        collectionName: 'HotSearch'
    }).then(
        ({ collection, client }) => {
            collection.find().toArray((err, result) => {
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


// 详情
router.get('/:_id', (req, res, next) => {
    mgdb.find({ collectionName: `Items-${req.query.dataName}`, _id: req.params._id }).then(
        result => res.send(result)
    ).catch(
        err => res.send(err)
    )
})



module.exports = router;