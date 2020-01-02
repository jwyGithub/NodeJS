let router = require('express').Router();
let mgdb = require('../../utils/mgdb');
let bcrypt = require("bcryptjs");
let jwt = require("../../utils/jwt");

router.post("/", (req, res, next) => {
    let { account, password } = req.body;
    logger.info("-----------", req.body, "---------------")
    if (!req.body.account || !req.body.password) {
        // 判断账号密码和验证是否为空
        res.send({
            code: 400,
            msg: "账号或密码不能为空"
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
                            // res.send(result[0])

                            // 解密查询出来的密码
                            pwd = bcrypt.compareSync(password, result[0].password)
                            logger.info("-------解密后的密码结果", pwd, "------------")

                            if (pwd) {
                                // token
                                // 生成token
                                let token = jwt.sign(account,result[0]._id);
                                logger.info(`-------------${token}--------------`)
                                res.send({
                                    code: 200,
                                    msg: "登陆成功",
                                    token: token
                                })
                            } else {
                                res.send({
                                    code: 400,
                                    msg: "密码错误"
                                })
                            }
                        } else {
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