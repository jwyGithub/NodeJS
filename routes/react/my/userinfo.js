let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


router.get("/", (req, res, next) => {
    let msg = {
        usericon: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
        username: "落幕",
        account: "anhao5452"
    }
    res.send({
        code: 200,
        msg: msg
    })
})


module.exports = router;