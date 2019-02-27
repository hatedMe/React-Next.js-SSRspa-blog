const config = require('../conf/config');
const { Schema } = require('../DBinit');

const User = require('../model/user');
const Article_md = require('../model/articlemd');
const Article_info = require('../model/article');

const Redis = require('../redisInit');
const Status = require('../utils/respones');

class Article {
    // 存储文章
    static async save (ctx , next) {
        //存储文章
        const { alias, content, title,summary,labels,category} = ctx.request.body;

        if( !title || !summary || !labels || !category || !content) {
            return ctx.body = Status.error( 400 ,'缺少相关字段');
        }

        const iNow = Date.now();    //临时解决时间相差8小时。 
        const id = Math.random().toString(36).substr(2, 8) + iNow.toString().substr(9, 32);
    
        await new Article_md({ id , content }).save();
        await new Article_info({
            alias,
            content,
            category,
            id ,
            createTime: iNow,
            modifyTime : iNow,
            title,
            summary,
            labels,
        }).save();

        return ctx.body = Status.success(null);
    }



    // 根据id查找文章内容
    static async findid (ctx , next) {
        const { id } = ctx.params;
        if( !id ) {
            return ctx.body = Status.error( 400 ,'缺少相关字段');
        }
        const result = await Article_info.findOne({ id });
        const results = await Article_md.findOne({ id });

        ctx.body = Status.success( Object.assign({} , results._doc, result._doc ,{ _id : null}))
    }


    static async find (ctx , next) {
        let { pageSize, pageNum } = ctx.request.query;
        if( pageNum == undefined ){
            pageNum = 10;
            pageSize = 1;
        }else{
            !pageNum ? pageNum = 10 : pageNum = Number(pageNum); //条数
            !pageSize ? pageSize = 1 : pageSize = Number(pageSize); // 页数
        }

        const skip = (pageSize - 1) * pageNum;
        const reslut = await Article_info.find({}).skip(skip).limit(pageNum).sort({ createTime : -1 });

        return ctx.body = Status.success({lists : reslut , totil : reslut.length });

    }

}


module.exports = Article