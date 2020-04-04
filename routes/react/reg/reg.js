let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');
const { v4: uuidv4 } = require('uuid');

router.post("/", (req, res, next) => {
    let { username, password, name } = req.body
    if (!username) {
        res.send({
            code: 400,
            msg: "用户名为空"
        })
        return
    }
    if (!password) {
        res.send({
            code: 400,
            msg: "密码为空"
        })
        return
    }
    mgdb.open({
        dbName: "React",
        collectionName: "User"
    }).then(
        ({ collection, client }) => {
            // 查询数据库
            collection.find({ username }).toArray((err, result) => {
                if (err) {
                    res.send({
                        code: 400,
                        msg: "查询失败"
                    })
                } else {
                    if (result.length > 0) {
                        res.send({
                            code: 200,
                            msg: "用户已存在"
                        })
                    } else {
                        // 注册用户
                        // 生成uuid
                        collection.insert(
                            {
                                openid: uuidv4(),
                                username: username,
                                password: password,
                                name: name,
                                detail: {
                                    "icon": "https://img2.woyaogexing.com/2020/03/06/3f2933f0af5741e3aadb6fa0554adeb0!400x400.jpeg",
                                    "name": name,
                                    "wechatid": "请设置id"
                                }
                            }, (err, result) => {
                                if (err) {
                                    res.send({
                                        code: 400,
                                        msg: "注册失败"
                                    })
                                } else {
                                    res.send({
                                        code: 200,
                                        msg: "注册成功"
                                    })
                                }
                            })
                    }

                }
                client.close();
            })
        }
    )
})


module.exports = router;