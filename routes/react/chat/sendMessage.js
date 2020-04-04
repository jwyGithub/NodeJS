let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


// 发送对话
router.post("/", (req, res, next) => {
    let token = 1
    // let { token } = req.headers
    if (!token) {
        res.send({
            code: 400,
            msg: "token不存在"
        })
    } else {
   
        res.end()
        
        
   





    }

})







module.exports = router;