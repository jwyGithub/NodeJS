let jwt = require('jsonwebtoken');


//创建token生成规则
let config_tokensecret = "jwytokensign1994";

//定义用户传过来的参数

module.exports = {
  sign: ({ username, id }) => {
    return jwt.sign({
      username,
      id,
    }, config_tokensecret, {
      expiresIn: 60 * 60 * 24 //过期时间  以秒计算
    })
  },
  verify: (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config_tokensecret, (err, decode) => {
        if (!err) {
          resolve(decode)
        } else {
          // console.log('jwt',err.message)
          reject(err.message)
        }
      })
    })
  }
}

