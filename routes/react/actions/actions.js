let router = require('express').Router();
let mgdb = require('../../../utils/mgdb');


router.get("/", (req, res, next) => {
    let lists = [
        {
            id: 1,
            action: {
                usericon: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
                nickname: "落幕",
                content: {
                    title: "这是标题",
                    imgs: [
                        { id: 1, url: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg" }
                    ]
                },
                commentSum: 1,
                assistSum: 1,
                comment: [
                    { id: 1, con: "频率的爱上爱上 " },
                    { id: 2, con: "频率的爱上爱上 " }
                ]
            }
        },
        {
            id: 2,
            action: {
                usericon: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
                nickname: "落幕",
                content: {
                    title: "这是标题",
                    imgs: [
                        { id: 1, url: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg" }
                    ]
                },
                commentSum: 1,
                assistSum: 1,
                comment: [
                    { id: 1, con: "频率的爱上爱上 " },
                    { id: 2, con: "频率的爱上爱上 " }
                ]
            }
        },
        {
            id: 3,
            action: {
                usericon: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg",
                nickname: "落幕",
                content: {
                    title: "这是标题",
                    imgs: [
                        { id: 1, url: "http://img3.imgtn.bdimg.com/it/u=3140403455,2984550794&fm=26&gp=0.jpg" }
                    ]
                },
                commentSum: 1,
                assistSum: 1,
                comment: [
                    { id: 1, con: "频率的爱上爱上 " },
                    { id: 2, con: "频率的爱上爱上 " }
                ]
            }
        }
    ]
    res.send({
        code: 200,
        lists: lists
    })
})


module.exports = router;