let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


router.post("/", (req, res, next) => {
    let {username,password} = req.body
    if(!username){
        res.send({
            code:400,
            msg:"用户名为空"
        })
        return
    }
    if(!password){
        res.send({
            code:400,
            msg:"密码为空"
        })
        return
    }
    mgdb.open({
        dbName:"test",
        collectionName:"User"
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
                    // 判断是否存在这个用户
                    if (result.length > 0) {
                       if(result[0].username == username && result[0].password == password){
                           res.send({
                               code:200,
                               msg:"登陆成功"
                           })
                       }
                    }else if(result.length === 0){
                        res.send({
                            code:400,
                            msg:"用户不存在"
                        })
                        return 
                    }
                    if(result[0].username === username && result[0].password != password){
                        res.send({
                            code:400,
                            msg:"密码错误"
                        })
                    }

                }
                client.close();
            })
        }
    )
})


module.exports = router;