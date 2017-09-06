const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    //标题
    title: { type: String },
    //文章别名
    alias: { type: String },
    //摘要
    summary: { type: String },
    //来源
    source: { type: String },
    //内容
    content: { type: String },
    //分类Id
    category: { type: String , default: 'other' },
    //文章id
    articleId : { type :String  },
    //标签
    labels: { type: [] },
    //外链Url
    url: { type: String },
    //浏览次数
    viewCount: { type: Number, default: 0 },
    //是否草稿
    isDraft: { type: Boolean, default: false },
    //是否有效
    isActive: { type: Boolean },
    //创建时间
    createTime: { type: Date},
    //修改时间
    modifyTime: { type: Date}
});

let Article = mongoose.model('article', articleSchema);

module.exports = Article;