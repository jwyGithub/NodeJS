let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


// 发送对话
router.post("/", (req, res, next) => {
    // console.log(req.body)

    let { token } = req.headers
    if (!token) {
        res.send({
            code: 400,
            msg: "token不存在"
        })
    } else {
        let io = require('../../../bin/www')
        io.emit('mess_type', { data: "1" })//推送
        io.emit('message_info', {
            list: [
                { text: "1" },
                { text: "2" },
                { text: "3" },
            ]
        })//推送

    }

})







module.exports = router;