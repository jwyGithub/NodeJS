let router = require('express').Router();
let express = require('express');

// app.use('/home', require('./customer/home'));
// app.use('/follow', require('./customer/follow'));
router.get('/', ()=>{

    console.log(111)
});
// app.use('/login', require('./customer/login'));
// router.use('/reg', require('./customer/reg'));
// router.use('/user', require('./customer/user'));
// router.use('/logot', require('./customer/logout'));
// router.use('/banner', require("./customer/banner"));
// router.use('/send-code', require('./customer/send-code'));

module.exports = router;