const Router = require('koa-router');
const koaBody = require('koa-body')(); //{multipart: true}
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const client = require('../model/redis');

const user = require('../mongdbmodels/user');
const Article = require('../mongdbmodels/article');
const Category = require('../mongdbmodels/category');

const multer = require('koa-multer'); //加载koa-multer模块
const upload = multer({dest: '/public/uploads/'});

const router = new Router();

const checkToken = require('../util/checkToken');

/*
 * 根据id获取文章
 * 获取文章数量
 *
 *
 */

//checkToken
router.use('*', koaBody, checkToken)

router.post('/item', async(ctx, next) => {
    let {name, password, access_token} = ctx.request.body;
    console.log(ctx.request.body);
    console.log(client.get('token'));
    try {
        var result = jwt.verify(access_token, 'token');
        ctx.body = JSON.parse(`{"status": "200","message":"ok"}`);
    } catch (err) {
        var result = false;
        ctx.body = JSON.parse(`{"status": "400120","message":"token is error"}`);
    }
})

router.post('/savearticle', async(ctx, next) => { //存储文章
    let {
        alias,
        content,
        title,
        summary,
        labels,
        category
    } = ctx.request.body;
    await new Promise((resolve, reject) => {
        let iNow = Date.now();
        let article = new Article({
            alias,
            content,
            category,
            articleId : Math.random().toString(36).substr(2, 8) + iNow.toString().substr(9, 32),
            createTime: iNow,
            modifyTime : iNow,
            title,
            summary,
            labels: JSON.parse(labels)
        });
        resolve(article.save());
    }).then(res => {
        ctx.body = JSON.parse('{"status": "200", "message": "提交成功"}');
    }).catch(err => {
        console.log(err);
        ctx.body = JSON.parse('{"status": "400500", "message":"服务器未知错误"}');
    });
})

router.get('/article', async(ctx, next) => { //根据文章id查询文章内容
    let {id} = ctx.request.query;
    let reslut = await Article
        .findOne({articleId: id})
        .then(res => {
            return res === null
                ? false
                : res;
        });
    if (reslut) {
        ctx.body = JSON.parse(`{"status": "200","message":"ok","data":${JSON.stringify(reslut)}}`);
    } else {
        ctx.body = JSON.parse(`{"status": "400404","message":"文章id不存在"}`);
    }
})


router.get('/startarticle', async (ctx,next)=>{ // 倒序查询最近的10条文章用于放置首页
    let reslut = await Article.find({}).sort({ createTime : -1 }).limit(10).then(res=>{
        return res.map((e,i)=>{
            e.content = undefined
            return e;
        })
    });
    
    ctx.body = JSON.parse(`{"status": "200","message":"ok","data":${JSON.stringify(reslut)}}`);
})            



router.post('/savecategory', async(ctx, next) => { //添加分类
    let {cateName, alias, img, link} = ctx.request.body;
    await new Promise((resolve, reject) => {
        let category = new Category({cateName, alias, img, link});
        resolve(category.save());
    }).then(res => {
        ctx.body = JSON.parse('{"status": "200", "message": "ok"}');
    }).catch(err => {
        console.log(err);
        ctx.body = JSON.parse('{"status": "400500", "message":"服务器未知错误"}');
    });
});

router.post('/addUserInfo', upload.array('image'), async(ctx, next) => {
    const arrayList = ctx.req.files;
    var usrreq = [];
    const saveImage = e => {
        var fileFormat = e
            .originalname
            .split(".");
        var imgName = Date.now() + Math
            .random()
            .toString(36)
            .substr(2, 1) + '.' + fileFormat[fileFormat.length - 1];
        var filepath = path.join(__dirname, "../public/uploads/" + imgName);
        return new Promise((resolve, reject) => {
            fs.rename(e.path, filepath, () => {
                let ctxBody = {};
                ctxBody.fileName = imgName;
                ctxBody.mimetype = e.mimetype;
                ctxBody.size = e.size;
                resolve(ctxBody);
            });
        });
    };

    for (var i = 0; i < arrayList.length; i++) {
        let lesult = await saveImage(arrayList[i]);
        usrreq.push(lesult)
    }
    ctx.body = {
        "status": "200",
        "message": "ok",
        "data": usrreq
    }
});

router.get('/allcategory', async(ctx, next) => { //查看全部分类
    let reslut = await Category
        .find()
        .then(res => {
            console.log(res);
            return res === null
                ? false
                : res;
        });
    if (reslut) {
        ctx.body = JSON.parse(`{"status": "200","message":"ok","data":${JSON.stringify(reslut)}}`);
    } else {
        ctx.body = JSON.parse(`{"status": "400404","message":"文章id不存在"}`);
    }
})

router.get('/assortarticle', async(ctx, next) => { //查看分类下的所有文章 {返回文章标题和文章id}
    let {category} = ctx.request.query; // 分类值
    let reslut = await Article
        .find({category})
        .then(res => {
            console.log(res);
            return res.length
                ? res
                : false
        });
    if (reslut) {
        ctx.body = JSON.parse(`{"status": "200","message":"ok","data":${JSON.stringify(reslut)}}`);
    } else {
        ctx.body = JSON.parse(`{"status": "400404","message":"所属分类没有文章"}`);
    }
})

module.exports = router;
