let router = require('express').Router();
let mgdb = require('../../utils/mgdb');
let bcrypt = require("bcryptjs");
let jwt = require("../../utils/jwt");

router.get("/", (req, res, next) => {
    let { account } = req.query;
    let { token } = req.headers;
    logger.info("-----------", req.query, "---------------")
    if (!req.query.account || !req.headers.token) {
        // 判断账号密码是否为空
        res.send({
            code: 400,
            msg: "账号或者token不能为空"
        })
        // 不为空走这里
    } else {
        // 连接数据库
        mgdb.open({
            dbName: 'test',
            collectionName: 'user'
        }).then(
            ({ collection, client }) => {
                // 查询数据库
                collection.find({ account }).toArray((err, result) => {
                    if (err) {
                        res.send({
                            code: 400,
                            msg: "查询失败"
                        })
                    } else {
                        // 判断是否存在这个用户
                        if (result.length > 0) {
                            logger.info("-----------", token, "---------------")
                            // 解密token
                            // jwt.verify(token).then(res=>console.log(res))
                            delete result[0].password;
                            res.send(result[0])
                        }else{
                            res.send({
                                code: 400,
                                msg: "用户不存在"
                            })
                        }
                    }
                    client.close();
                })
            })
    }
})


module.exports = router;