let router = require('express').Router();
let mgdb = require('../../utils/mgdb');

// 列表
router.get("/", (req, res, next) => {

    let _id = req.query._id;
    logger.info(`---------id是${_id}------------`)
    // 判断id
    // 查列表
    if (!_id) {
        mgdb.find({
            collectionName: "Home",
            ...req.query
        }).then(
            result => res.send(result)
        ).catch(
            err => res.send(err)
        )
    } else {
        // 查详情
        mgdb.find({ collectionName: 'home', _id: _id }).then(
            result => res.send(result)
        ).catch(
            err => res.send(err)
        )
    }
})

// 详情
router.get('/:_id', (req, res, next) => {
    mgdb.find({ collectionName: 'home', _id: req.params._id }).then(
        result => res.send(result)
    ).catch(
        err => res.send(err)
    )
})



module.exports = router;