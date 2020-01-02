let router = require('express').Router();
let mgdb = require('../../utils/mgdb');
let fs = require('fs');
let pathLib = require('path');
let bcrypt = require("bcryptjs");


router.post("/", (req, res, next) => {
    let { account, password, nickname } = req.body;
    if (!req.body.account || !req.body.password || !req.body.code) {
        // 判断账号密码和验证是否为空
        res.send({
            code: 400,
            msg: "账号或密码不能为空"
        })
        // console.log("账号密码没有值走了这里");
        logger.info("-------账号密码没有值走了这里----------");
        return;
    }
    logger.info("-------账号密码有值走了这里------");
    // 粉丝数
    let fans = 0;
    // 关注数
    let follow = 0;
    // 时间
    let time = Date.now();
    // 昵称
    nickname = nickname || "自动生成的昵称"
    let icon;

    if (req.files && req.files.length > 0) {
        fs.renameSync(
            req.files[0].path,
            req.files[0].path + pathLib.parse(req.files[0].originalname).ext
        )
        icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
    } else {
        icon = '/upload/user/default.jpg';
    }

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
                    if (result.length === 0) {
                        // 密码加密
                        let salt = bcrypt.genSaltSync(10);
                        let hash = bcrypt.hashSync(password, salt);
                        
                        // 新增数据
                        collection.insertOne({
                            nickname,
                            account,
                            fans,
                            follow,
                            time,
                            icon,
                            password: hash
                        }, (err, result) => {
                            if (!err) {
                                delete result.ops[0].username;
                                delete result.ops[0].password;
                                res.send({
                                    code: 200,
                                    msg: '注册成功',
                                    data: result.ops[0]
                                })
                            } else {
                                res.send({
                                    code: 400,
                                    msg: "新增失败"
                                })
                            }
                        })
                    } else {
                        // //删除上传后的头像
                        // if (icon.indexOf('noimage') === -1) {
                        //     fs.unlinkSync('./public' + icon)
                        // }
                        res.send({ code: 400, msg: '用户名已存在' });//返回的数据是个对象
                    }
                }
                client.close();
            })
        })
})




module.exports = router;