let createError = require('http-errors');
let express = require('express');
let path = require('path');
let multer = require("multer");
let logger = require('morgan');
global.logger = require('./config/log').logger;
httpLogger = require('./config/log').httpLogger;
var cors = require('cors');


/* 
@Parma 创建服务器
*/
let app = express();

/* 
@Parma 日志配置
*/
app.use(httpLogger);

/* 
@Parma 跨域配置
*/
app.use(cors({
	"origin": "*",
	"methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
}))

/*
@Parma 文件上传配置
@Parma /api/*: 
@Parma login：		/api/user/login
@Parma reg:	  		/api/user/reg
@Parma banner:	    /api/product/banner
*/
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		if (req.url.indexOf('user') !== -1 || req.url.indexOf('reg') !== -1) {
			cb(null, path.join(__dirname, 'public', 'upload', 'user'))
		} else if (req.url.indexOf('banner') !== -1) {
			cb(null, path.join(__dirname, 'public', 'upload', 'product', 'banner'))
		} else {
			cb(null, path.join(__dirname, 'public/upload/product'))
		}
	}
})

let multerObj = multer({ storage });
app.use(multerObj.any())


/*
@Parma ejs模板引擎设置
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

/*
@Parma body-parser的配置
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*
@Parma 资源托管
@Parma customer:客户端
@Parma mange:管理端
*/
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use('/mange', express.static(path.join(__dirname, 'public', 'mange')));
app.use(express.static(path.join(__dirname, 'public')));


/*
@Parma 路由配置
@Parma mange：管理端路由
@Parma api：客户端路由
@Parma proxy：代理端路由
@Parma io：推送端路由
*/
// app.use('/mange/*', require("./routes/mange"));
// app.use('/api/*', require('./routes/customer1'));
// app.use('/proxy/*', require('./routes/proxy'));
// app.use('/io/*', require('./routes/io'));

app.use('/api/home', require('./routes/customer/home'));
app.use('/api/internal', require('./routes/customer/internal'));
app.use('/api/game', require('./routes/customer/game'));
app.use('/api/login', require('./routes/customer/login'));
app.use('/api/reg', require('./routes/customer/reg'));
app.use('/api/logout', require('./routes/customer/logout'));
app.use('/api/banner', require('./routes/customer/banner'));
app.use('/api/send-code', require('./routes/customer/send-code'));
app.use('/api/info', require('./routes/customer/info'));
// 首页列表
app.use('/api/list/:type', require('./routes/customer/home/nav'));

// 导航分类
app.use('/api/item', require('./routes/customer/items/item'));

// 热门搜索关键字
app.use('/api/keywords', require('./routes/customer/search/search'));
app.use('/api/history', require('./routes/customer/search/history'));

// 商品详情
app.use('/api/goodsinfo', require('./routes/customer/goodsInfo/goodsInfo'));

// 购物车详情
app.use('/api/carinfo', require('./routes/customer/carInfo/carinfo'));

/*
@Parma 获取聊天列表
*/
app.use('/react/chat', require('./routes/react/chat/GetChatList'));
/*
@Parma 获取好友列表
*/
app.use('/react/friends', require('./routes/react/Friends/GetFriends'));
//发送对话
app.use('/react/send', require('./routes/react/chat/sendMessage'));

/*
@Parma 根据条件获取用户详情
*/
app.use('/react/getuserinfo', require('./routes/react/GetUserInfo/GetUserInfo'));

/*
@Parma 搜索好友
*/
app.use('/react/search', require('./routes/react/addfriend/addfriend'));

/*
@Parma 添加到通讯录
*/
app.use('/react/addbook', require('./routes/react/addbook/addbook'));





app.use('/react/actions', require('./routes/react/actions/actions'));
app.use('/react/login', require('./routes/react/login/login'));
app.use('/react/reg', require('./routes/react/reg/reg'));







/*
@Parma 处理404报错
*/
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	// res.render('error');
	if (req.url.includes('/api')) {
		// console.log('1');
		res.send({
			err: 1,
			msg: '不存在的接口名'
		})
	} else if (req.url.includes('/admin')) {
		// console.log(2);
		res.render('error');
	} else {
		// console.log(3);
		res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
	}
});

module.exports = app;
