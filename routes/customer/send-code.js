let router = require('express').Router();
let mgdb = require('../../utils/mgdb');



router.get("/", (req,res,next) => {
    res.send("这是send-code的处理函数")
})




module.exports = router;